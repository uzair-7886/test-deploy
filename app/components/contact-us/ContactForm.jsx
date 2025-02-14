'use client'
import React from 'react';
import { useState } from 'react';
import { client } from '@/sanity/lib/client';

const ContactForm = () => {

  const [submitting,setSubmitting]=useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = {
      _type: 'contactForm',
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      inquiryTopic: form.inquiryTopic.value,
      userType: form.userType.value,
      message: form.message.value,
      acceptsCommunications: form.acceptsCommunications.checked,
      submittedAt: new Date().toISOString(),
    };
  
    try {
      await client.create(data);
      // Handle success (e.g., show a confirmation message or reset the form)
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
    setSubmitting(false);
  };
  
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        {/* <form onSubmit={onSubmit} > */}
        <div className="w-full md:w-2/3 p-6">
          <h1 className="text-mainYellow text-3xl md:text-[42px] font-enriqueta font-bold mb-4">Get in touch</h1>
          <p className="text-textColor font-roboto mb-6">
            Fill the form below and we’ll get back to you as soon as we can.
          </p>
          <form onSubmit={onSubmit} className="space-y-6">
  {/* Name Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-mainBlue font-enriqueta font-medium mb-2">
        First Name
      </label>
      <input
        name="firstName"
        type="text"
        placeholder="Full Name"
        className="w-full border border-mainBlue rounded-lg p-2 text-textColor font-roboto"
        required
      />
    </div>
    <div>
      <label className="block text-mainBlue font-enriqueta font-medium mb-2">
        Last Name
      </label>
      <input
        name="lastName"
        type="text"
        placeholder="Full Name"
        className="w-full border border-mainBlue rounded-lg p-2 text-textColor font-roboto"
        required
      />
    </div>
  </div>

  {/* Email Input */}
  <div>
    <label className="block text-mainBlue font-enriqueta font-medium mb-2">
      Email
    </label>
    <input
      name="email"
      type="email"
      placeholder="email@example.com"
      className="w-full border border-mainBlue text-textColor font-roboto rounded-lg p-2"
      required
    />
  </div>

  {/* Dropdown Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-mainBlue font-enriqueta font-medium mb-2">
        What would you like to ask about?
      </label>
      <select
        name="inquiryTopic"
        className="w-full border border-mainBlue text-textColor font-roboto rounded-lg p-2"
        required
      >
        <option value="general">General Inquiry</option>
        <option value="admissions">Admissions</option>
        <option value="courses">Courses</option>
        <option value="support">Support</option>

        {/* Add more options as needed */}
      </select>
    </div>
    <div>
      <label className="block text-mainBlue font-enriqueta font-medium mb-2">
        Are you...?
      </label>
      <select
        name="userType"
        className="w-full border border-mainBlue text-textColor font-roboto rounded-lg p-2"
        required
      >
        <option value="student">Student</option>
        <option value="parent">Parent</option>
        <option value="teacher">Teacher</option>
        <option value="alumni">Alumni</option>
        <option value="other">Other</option>
        {/* Add more options as needed */}
      </select>
    </div>
  </div>

  {/* Message Input */}
  <div>
    <label className="block text-mainBlue font-enriqueta font-medium mb-2">
      Message
    </label>
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      className="w-full border border-mainBlue text-textColor font-roboto rounded-lg p-2"
      required
    ></textarea>
  </div>

  {/* Checkbox (single checkbox for accepting communications) */}
  <div className="space-y-2">
  <p className="text-textColor font-roboto">
    I (or my legal guardian) accept to receive email communications from Oxford Institute.*
  </p>
  <div className="flex items-center gap-2">
    <input
      id="acceptsCommunicationsYes"
      name="acceptsCommunications"
      type="radio"
      value="yes"
      className="appearance-none h-5 w-5 border border-gray-300 rounded-none checked:bg-mainYellow checked:border-mainYellow focus:outline-none"
      required
    />
    <label htmlFor="acceptsCommunicationsYes" className="text-textColor font-roboto">
      Yes. See <a href="#" className="text-mainYellow underline">Privacy Policy</a>
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      id="acceptsCommunicationsNo"
      name="acceptsCommunications"
      type="radio"
      value="no"
      className="appearance-none h-5 w-5 border border-gray-300 rounded-none checked:bg-mainYellow checked:border-mainYellow focus:outline-none"
      required
    />
    <label htmlFor="acceptsCommunicationsNo" className="text-textColor font-roboto">
      No
    </label>
  </div>
</div>



  {/* Submit Button */}
  <button
    type="submit"
    className="w-full md:w-auto bg-mainBlue font-poppins text-white font-medium py-2 px-6 rounded-lg disabled:opacity-50"
    disabled={submitting}
  >
    {/* Send Request */}
    {submitting ? "Sending..." : "Send Request"}
  </button>
</form>

        </div>
        {/* </form> */}

        {/* Contact Details Section */}
        <div className="w-full md:w-1/3 bg-offWhite rounded-[20px] CardShadow p-6 self-start">
          <h2 className="text-textColor font-enriqueta md:text-[22px]  text-2xl font-bold mb-4">Want to reach us directly?</h2>
          <div className=" mb-4">
            <p className='text-textColor font-enriqueta md:text-[22px] font-bold pb-2' >By phone</p>
            <p className='text-textColor font-roboto'>+44 1865 600840 </p>
            <p className='text-textColor font-roboto'>(9:00 AM - 5:00 PM BST - Monday - Friday)</p>
          </div>
          <div className=" mb-4">
            <p className='text-textColor font-enriqueta md:text-[22px] font-bold pb-2' >By WhatsApp</p>
            <p className='text-textColor font-roboto'>+44 7916702699 (Lucy Atchison)</p>
            <p className='text-textColor font-roboto'>+44 7498656109 (Nazish Gulzar)</p>
          </div>
          <div className=" mb-4">
            <p className='text-textColor font-enriqueta md:text-[22px] font-bold pb-2' >By email</p>
            <p className='text-textColor font-roboto'>info@theoxfordinstitute.co.uk</p>
          </div>
          <div className="mb-4">
  <p className="text-textColor font-enriqueta md:text-[22px] font-bold mb-2">
    Connect with us
  </p>
  <div className="flex items-center gap-4">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/Contact Us/Instagram.svg"
        alt="Instagram"
        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
      />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/Contact Us/Facebook.svg"
        alt="Facebook"
        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
      />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/Contact Us/Linked.svg"
        alt="YouTube"
        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
      />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/Contact Us/Youtube.svg"
        alt="YouTube"
        className="w-8 h-8 hover:scale-110 transition-transform duration-200"
      />
    </a>
  </div>
</div>

          <div className=" mb-4">
            <p className='text-textColor font-enriqueta md:text-[22px] font-bold pb-2' >Book a meeting</p>
            <p className='text-textColor font-roboto'>with our Programme Consultant for 1:1 support on your course choice.</p>
          </div>
          <button
            type="button"
            className="font-poppins bg-mainBlue text-white font-medium py-2 px-4 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
