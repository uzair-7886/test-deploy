import React from 'react';

const AboutAdmissions = () => {
  return (
    <div className="bg-white pb-4 pt-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center font-bold text-3xl md:text-4xl font-enriqueta text-mainYellow mb-6">
        Eligibility & Application Criteria
        </h2>

        {/* Description */}
        <p className="text-primary text-justify text-base leading-relaxed text-textColor py-4 font-roboto">
        The Oxford Institute Summer Programs are thoughtfully designed to cater to diverse age groups, with participants placed in separate cohorts to ensure they engage in lessons and activities suited to their age and learning level. Below are the eligibility criteria and program leaders for all our programs on offer for 2025:
        </p>
        <ul className="list-disc ml-5 text-primary text-justify leading-relaxed text-textColor py-4 font-roboto">
          <li>Oxford Summer Program</li>
          <li>Oxford Executive Leadership Program</li>
          <li>Oxford-China Summer Program</li>
        </ul>

      </div>
    </div>
  );
};

export default AboutAdmissions;
