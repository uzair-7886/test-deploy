import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button';

const ApplicationProcess = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-12 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/3">
          <h2 className="text-mainYellow text-3xl md:text-[42px] font-bold font-enriqueta leading-tight mb-4">
          Oxford Summer Program

          </h2>
          
          <p className="text-textColor text-justify text-base md:text-[18px]  leading-relaxed mb-6 font-roboto md:py-4">
          Students enrolled in school, college, or university, as well as homeschooled students, are eligible to apply for our Oxford Summer Camp. We attract highly motivated individuals who aspire to secure positions at top universities worldwide. The program is ideal for those who thrive on challenges, are eager to explore new subjects, and enjoy exchanging ideas with world-class researchers and academics. While there are no strict English language requirements, we recommend choosing English as one of the modules if proficiency needs improvement.
          </p>

          
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-mainBlue text-3xl md:text-[42px] font-bold font-enriqueta leading-tight mb-4">
        Application Process:
          </h2>
          {[
            {
              title: 'Application Submission',
              description:
                'Complete the application form and provide a copy of your most recent transcript, result card, or a reference letter from your school or college',
                link:"/"
            },
            {
              title: 'Review',
              description:
                'Our admission team reviews applications within 14 working days. If further discussion is needed, we will arrange an interview to discuss your application.',
                link:"/"
            },
            {
              title: 'Offer Letter',
              description:
                'Once the review process is complete, successful applicants receive a provisional offer letter. You have 14 days to confirm your seat by paying the initial deposit or full fee.',
                link:"/"
            },
            {
              title: 'Admission Confirmation and Visa Letter ',
              description:
                'For international students requiring a visa to enter the UK, we recommend completing the admission process as early as possible. Upon payment of the full fee, we issue a visa letter, enabling you to arrange your entry into the UK.',
                link:"/"
            },
            
          ].map((item, index) => (
            <div key={index} className="border-b-[1px] border-mainYellow pb-4">
              <h3 className="text-mainBlue text-lg md:text-[28px]  font-enriqueta">{item.title}</h3>
              <p className="text-textColor text-sm leading-relaxed font-roboto py-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
