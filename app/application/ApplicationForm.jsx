'use client'
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { countries } from "countries-list";
// Import your configured Sanity client (adjust the path as necessary)
import { client } from "@/sanity/lib/client";

const countryOptions = Object.entries(countries).map(([code, country]) => ({
  value: code,
  label: country.name,
}));

const ApplicationForm = () => {
  // Track the current step and the created application's document ID
  const [step, setStep] = useState(1);
  const [applicationId, setApplicationId] = useState(null);
  const [saving,setSaving] = useState(false);

  const methods = useForm({
    defaultValues: {
      account: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      step1: {
        program: "",
        ageGroup: "",
        subject1: "",
        subject2: "",
      },
      step2: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        passportCountry: "",
      },
      step3: {
        institution: "",
        candidateReason: "",
        additionalInfo: "",
        visaRequired: "",
        hearAbout: "",
      },
    },
  });

  const { handleSubmit, register } = methods;

  // This function creates a new application on step 1 and patches it in later steps.
  const onSubmit = async (data) => {
    setSaving(true);  
    if (step === 1) {
      // Step 1: Create a new application with the account details.
      try {
        const doc = {
          _type: 'application',
          account: data.account,
          status: 'account_created',
          submittedAt: new Date().toISOString(),
        };
        const created = await client.create(doc);
        setApplicationId(created._id);
        setStep(step + 1);
      } catch (error) {
        console.error("Error creating application:", error);
      }
    } else if (step === 2) {
      // Step 2: Patch the document with registration (step1) data.
      try {
        await client.patch(applicationId)
          .set({ 
            step1: data.step1, 
            status: 'program_selected',
            submittedAt: new Date().toISOString(), // update status to indicate registration complete
          })
          .commit();
        setStep(step + 1);
      } catch (error) {
        console.error("Error updating application (step 2):", error);
      }
    } else if (step === 3) {
      // Step 3: Patch the document with application (step2) data.
      try {
        await client.patch(applicationId)
          .set({ 
            step2: data.step2, 
            status: 'personal_info_submitted', 
            submittedAt: new Date().toISOString(),
          })
          .commit();
        setStep(step + 1);
      } catch (error) {
        console.error("Error updating application (step 3):", error);
      }
    } else if (step === 4) {
      // Step 4: Patch the document with further info (step3) data and mark as completed.
      try {
        await client.patch(applicationId)
          .set({ 
            step3: data.step3,
            status: 'completed',
            submittedAt: new Date().toISOString(),
          })
          .commit();
        console.log("Final application submitted successfully!");
        // Optionally, reset the form or navigate to a confirmation page.
      } catch (error) {
        console.error("Error finalizing application (step 4):", error);
      }
    }
    setSaving(false);
  };

  // --- UI Components Below (unchanged except for onSubmit updates) ---

  const ProgressBars = ({ currentStep }) => {
    const getBarStyle = (barIndex) => {
      if (barIndex === 0) {
        return currentStep >= 1
          ? "bg-mainYellow flex-grow"
          : "bg-[#12243E] bg-opacity-10 flex-grow";
      }
      if (barIndex === 1) {
        if (currentStep < 2) return "bg-[#12243E] bg-opacity-10 flex-grow";
        if (currentStep === 2) return "bg-mainYellow w-full";
        return "bg-mainYellow flex-grow";
      }
      if (barIndex === 2) {
        return currentStep >= 3
          ? "bg-mainYellow flex-grow"
          : "bg-[#12243E] bg-opacity-10 flex-grow";
      }
      if (barIndex === 3) {
        return currentStep >= 4
          ? "bg-mainYellow flex-grow"
          : "bg-[#12243E] bg-opacity-10 flex-grow";
      }
    };

    return (
      <div className="w-auto mx-auto flex gap-5 justify-center mt-10">
        {[0, 1, 2,3].map((barIndex) => (
          <div
            key={barIndex}
            className="h-[5px] flex bg-[#12243E] bg-opacity-10 overflow-hidden"
            style={{ minWidth: "90px" }}
          >
            <div
              className={`h-full transition-all duration-300 ${getBarStyle(barIndex)}`}
            />
          </div>
        ))}
      </div>
    );
  };

  const StepIndicator = () => (
    <div className="w-2/5 bg-mainBlue p-8 flex flex-col rounded-[30px]">
      <div className="flex justify-center items-center">
        <img
          src="/logo-header.png"
          alt="OCL Logo"
          className="w-24 h-24"
        />
      </div>
      
      <div className="flex flex-col space-y-8 font-semibold relative">
        <div className="absolute left-5 top-10 w-0.5 h-[calc(100%-40px)] bg-grey"></div>
        <div
          className="absolute left-5 top-10 w-0.5 bg-mainYellow transition-all duration-300"
          style={{
            height: `${Math.max(0, Math.min(step - 1, 2)) * 25}%`,
          }}
        ></div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-[10px] border-2 ${
              step >= 1 ? "border-mainYellow" : "border-grey"
            } flex items-center justify-center  text-white bg-mainBlue relative z-10`}
          >
            1
          </div>
          <span className="ml-4 text-white font-enriqueta">Registration Form</span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-[10px] border-2 ${
              step >= 3 ? "border-mainYellow" : "border-grey"
            } flex items-center justify-center  text-white bg-mainBlue relative z-10`}
          >
            2
          </div>
          <span className="ml-4 text-white font-enriqueta">Active Programs</span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-[10px] border-2 ${
              step >= 4 ? "border-mainYellow" : "border-grey"
            } flex items-center justify-center  text-white bg-mainBlue relative z-10`}
          >
            3
          </div>
          <span className="ml-4 text-white font-enriqueta">Application Form</span>
        </div>
      </div>
    </div>
  );

  const AccountCreationStep = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-mainBlue md:text-[22px] font-enriqueta mb-2 text-center">
        The Oxford Institute
      </h1>
      <h2 className="text-xl text-mainYellow md:text-[22px] font-enriqueta font-semibold mb-8 text-center">
        REGISTRATION FORM
      </h2>
      <div className="space-y-6 max-w-xl w-full text-textColor font-poppins">
        <div>
          <label className="block mb-2">First Name:</label>
          <input
            {...register("account.firstName")}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            type="text"
            placeholder="Enter your first name..."
            required
          />
        </div>
        <div>
          <label className="block mb-2">Last Name:</label>
          <input
            {...register("account.lastName")}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            type="text"
            placeholder="Enter your last name..."
            required
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            {...register("account.email")}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            type="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password:</label>
          <input
            {...register("account.password")}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            type="password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={saving}
            className="bg-mainBlue disabled:bg-slate-600 text-white px-6 py-3 rounded-[8px] disabled:opacity-50"
          >
            {/* Register Now */}
            {saving ? "Saving..." : "Register Now"}

          </button>
        </div>
        <ProgressBars currentStep={step} />
      </div>
    </form>
  );

  const RegistrationStep = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-mainBlue md:text-[22px] font-enriqueta mb-2 text-center">
        The Oxford Institute
      </h1>
      <h2 className="text-xl text-mainYellow md:text-[22px] font-enriqueta font-semibold mb-8 text-center">
        ACTIVE PROGRAMS
      </h2>
      <div className="space-y-6 max-w-xl w-full text-textColor font-poppins">
        <div className="relative">
          <label className="block mb-2">Program Selection:</label>
          <div className="relative">
            <select
              {...register("step1.program")}
              className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none text-sm"
              style={{ lineHeight: "1.5rem", height: "3.5rem" }}
              required
            >
              <option value="Oxford Summer Program">
                Oxford Summer Program - 20th Jul - 1st Aug 2025 - £5,999.00
              </option>
              <option value="Oxford Summer Program">
              Oxford Executive Leadership Program - 5th Jul - 5th Jul 2025 - £5,999.00
              </option>
              <option value="Oxford Summer Program">
                Oxford Chine Program - July/August 2025, Exact Dates TBC - £5,999.00
              </option>
            </select>
            <img
              src="/chev-down.svg"
              alt="Dropdown arrow"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "12px", height: "12px" }}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block mb-2">Age Group:</label>
          <div className="relative">
            <select
              {...register("step1.ageGroup")}
              className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none text-sm"
              style={{ lineHeight: "1.5rem", height: "3.5rem" }}
              required
            >
              <option value="12-15">Juniors (12-15 years old)</option>
              <option value="16-18">Seniors (16-19 years old)</option>
              <option value="19-25">University Students (19-25 years old)</option>
              <option value="26+">Executives (28+ years old)</option>
            </select>
            <img
              src="/chev-down.svg"
              alt="Dropdown arrow"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "12px", height: "12px" }}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block mb-2">Subject 1:</label>
          <div className="relative">
            <select
              {...register("step1.subject1")}
              className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none text-sm"
              style={{ lineHeight: "1.5rem", height: "3.5rem" }}
              required
            >
              <option value="STEM">STEM</option>
              <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
              <option value="Arts and Creativity">Arts and Creativity</option>
              <option value="Leadership and Business">Leadership and Business</option>
            </select>

            <img
              src="/chev-down.svg"
              alt="Dropdown arrow"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "12px", height: "12px" }}
  
            />
          </div>
        </div>
        <div className="relative">
          <label className="block mb-2">Subject 2:</label>
          <div className="relative">
            <select
              {...register("step1.subject2")}
              className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none text-sm"
              style={{ lineHeight: "1.5rem", height: "3.5rem" }}
              required
            >
                            <option value="STEM">STEM</option>
              <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
              <option value="Arts and Creativity">Arts and Creativity</option>
              <option value="Leadership and Business">Leadership and Business</option>
            </select>
            <img
              src="/chev-down.svg"
              alt="Dropdown arrow"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "12px", height: "12px" }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button
          type="submit"
          disabled={saving}
          className="bg-mainBlue disabled:bg-slate-600 text-white px-6 py-3 rounded-[8px] disabled:opacity-50"
        >
          {/* Next */}
          {saving ? "Saving..." : "Next"}
        </button>
        </div>
        
        <ProgressBars currentStep={step} />
      </div>
    </form>
  );
  
  const ApplicationStep = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-mainBlue md:text-[22px] font-enriqueta mb-2 text-center">
        The Oxford Institute
      </h1>
      <h2 className="text-xl text-mainYellow md:text-[22px] font-enriqueta font-semibold mb-8 text-center">
        APPLICATION FORM
      </h2>
      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full text-textColor font-poppins">
        <div>
          <label className="block mb-2">First Name*:</label>
          <input
            {...register("step2.firstName")}
            placeholder="Enter first name..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Last Name*:</label>
          <input
            {...register("step2.lastName")}
            placeholder="Enter last name..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Date of Birth*:</label>
          <input
            {...register("step2.dateOfBirth")}
            placeholder="Select your date of birth..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="date"
            required
          />
        </div>
        <div className="relative">
          <label className="block mb-2">Gender*:</label>
          <select
            {...register("step2.gender")}
            className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none"
            style={{ lineHeight: "1.75rem", height: "3.5rem" }}
            required
          >
            <option value="">Select your gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <img
            src="/chev-down.svg"
            alt="Dropdown arrow"
            className="absolute right-4 top-1/2 pointer-events-none"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
        <div>
          <label className="block mb-2">Email*:</label>
          <input
            {...register("step2.email")}
            placeholder="info@xyz.com"
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="email"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Phone*:</label>
          <input
            {...register("step2.phone")}
            placeholder="+91 - 98596 58000"
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="tel"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Home Address*:</label>
          <input
            {...register("step2.address")}
            placeholder="Enter your address..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="text"
            required
          />
        </div>
        <div className="relative">
          <label className="block mb-2">Country*:</label>
          <select
            {...register("step2.country")}
            className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none"
            style={{ lineHeight: "1.75rem", height: "3.5rem" }}
            required
          >
            <option value="">Select your country...</option>
            {countryOptions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <img
            src="/chev-down.svg"
            alt="Dropdown arrow"
            className="absolute right-4 top-1/2 pointer-events-none"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
        <div>
          <label className="block mb-2">Country (as per Passport):</label>
          <input
            {...register("step2.passportCountry")}
            placeholder="Enter your country..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="text"
          />
        </div>
      </div>
      <div className="py-3 flex justify-center items-center">
        <button
          type="submit"
          disabled={saving}
          className="bg-mainBlue disabled:bg-slate-600 text-white px-6 py-3 rounded-[8px] disabled:opacity-50"
        >
          {/* Next */}
          {saving ? "Saving..." : "Next"}
        </button>
      </div>
      <ProgressBars currentStep={step} />
    </form>
  );
  
  const FurtherInfoStep = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-mainBlue md:text-[22px] font-enriqueta mb-2 text-center">
        The Oxford Institute
      </h1>
      <h2 className="text-xl text-mainYellow md:text-[22px] font-enriqueta font-semibold mb-8 text-center">
        APPLICATION FORM
      </h2>
      <div className="space-y-6 max-w-4xl w-full text-textColor font-poppins">
        <div>
          <label className="block mb-2">Your Institution*:</label>
          <input
            {...register("step3.institution")}
            placeholder="Enter your Institution name..."
            className="w-full p-4 bg-[#EEEEEE] rounded-lg"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block mb-2">
            Why are you a suitable candidate for admission to the Summer Program? (max: 500 words)*:
          </label>
          <textarea
            {...register("step3.candidateReason")}
            placeholder="..."
            maxLength={500}
            className="w-full p-4 bg-[#EEEEEE] rounded-lg h-[120px]"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Any Other Information? (max: 500 words):</label>
          <textarea
            {...register("step3.additionalInfo")}
            placeholder="..."
            maxLength={500}
            className="w-full p-4 bg-[#EEEEEE] rounded-lg h-[120px]"
          />
        </div>
        <div>
          <label className="block mb-2">Visa required?*:</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                {...register("step3.visaRequired")}
                type="radio"
                value="Yes"
                className="h-5 w-5 border border-[#CCCCCC] rounded-md focus:ring-mainBlue"
                required
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("step3.visaRequired")}
                type="radio"
                value="No"
                className="h-5 w-5 border border-[#CCCCCC] rounded-md focus:ring-mainBlue"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2">How did you hear about our program?*:</label>
          <div className="relative">
            <select
              {...register("step3.hearAbout")}
              className="w-full p-4 bg-[#EEEEEE] rounded-lg appearance-none"
              required
            >
              <option value="">Select an option...</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Social Media">Social Media</option>
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </select>
            <img
              src="/chev-down.svg"
              alt="Dropdown arrow"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "16px", height: "16px" }}
            />
          </div>
        </div>
      </div>
      <div className="py-6 flex justify-center items-center">
        <button
          type="submit"
          disabled={saving}
          className="bg-mainBlue disabled:bg-slate-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-darkBlue disabled:opacity-50"
        >
          {/* Submit Application */}
          {saving ? "Saving..." : "Submit Application"}
        </button>
      </div>
      <ProgressBars currentStep={step} />
    </form>
  );
  
  const steps = [
    <AccountCreationStep key="step1" />,
    <RegistrationStep key="step2" />,
    <ApplicationStep key="step3" />,
    <FurtherInfoStep key="step4" />,
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center  p-5">
      <div className="flex rounded-[30px] w-4/5 DropImg">
        <StepIndicator />
        <div className="w-full">
          <FormProvider {...methods}>{steps[step - 1]}</FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
