import React from 'react';

const ProgramsCards = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white CardDeop rounded-[20px] p-6">
          <h3 className="text-3xl font-bold text-mainBlue font-enriqueta  py-8">Executive Leadership Program</h3>
          <p className="text-textColor leading-relaxed py-6 font-roboto text-justify">
          The Executive Leadership Program is designed for CEOs, directors, top executives, entrepreneurs, business unit heads, senior managers, and policymakers who seek to expand their knowledge and leadership capabilities. It is ideal for professionals from public, private, or non-governmental sectors aiming to enhance their skills and broaden their horizons.          </p>
          <h4 className="text-lg font-bold text-mainBlue font-enriqueta mb-2">How to Apply:</h4>
          <ul className="list-disc ml-5 text-mainBlue font-roboto leading-relaxed mb-4">
            <li>
              <strong>Individual Applicants:</strong> Complete the application form on our website or send an email to info@theoxfordinstitute.co.uk.
            </li>
            <li>
              <strong>Organisations:</strong> If you are arranging the program for your team, please email us directly to discuss group arrangements or reach out to our program leader.

            </li>
          </ul>
          <p className="text-textColor font-roboto mb-4">
          All applicants must submit a copy of their CV or LinkedIn profile, allowing us to tailor the program to their leadership development needs.          </p>
          <p className="text-textColor font-roboto">
            <strong>Program Lead:</strong> Mr. Nauman Saeed Anwar <br />
            (WhatsApp: +447958009572).
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white CardDeop rounded-[20px] p-6">
          <h3 className="text-3xl font-bold text-mainBlue font-enriqueta  py-8">Oxford-China Summer Program</h3>
          <p className="text-textColor leading-relaxed py-6 font-roboto text-justify">
          If you are an international student interested in our Oxford-China Summer Program, please send an email to info@theoxfordinstitute.co.uk. Our Head of International Collaborations, Mr. Ahmad Nawaz, or Head of Operations in China, Mr. Yujiao Zhang (contact details available upon request), will assist you with your application.
          </p>
          <h4 className="text-lg font-bold text-mainBlue font-enriqueta mb-2">Program Lead:</h4>
          <ul className="list-disc ml-5 text-textColor font-roboto leading-relaxed">
            <li>
              <strong>Head of International Collaborations:</strong> <br />Mr. Ahmad Nawaz
            </li>
            <li>
              <strong>Head of Operations in China:</strong><br /> Mr. Yujiao Zhang
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCards;
