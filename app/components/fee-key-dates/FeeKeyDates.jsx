import React from 'react';
import Button from '../shared/Button';
import ButtonOutlined from '../shared/ButtonOutlined';

const FeeKeyDates = () => {
  return (
    <div className='bg-offWhite'>

    
    <div className=" py-8 mx-auto max-w-7xl px-4">
        <div className="container ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-[40px] CardShadow2 overflow-hidden">
          <div className="bg-mainBlue text-white CardShadow2 md:text-[42px] py-10 text-center font-enriqueta text-xl">
            2 Weeks
          </div>
          <div className="p-12">
            <p className="font-enriqueta text-3xl md:text-[42px] text-mainBlue py-4">£ 5,999</p>
            <h3 className="font-enriqueta text-xl md:text-[28px] text-mainBlue py-4">Oxford Summer Program</h3>
            <p className="text-textColor font-roboto mb-4">Dates: 20th July – 1st August 2025</p>
            <h4 className="text-mainBlue font-poppins font-semibold mb-2">FEATURES</h4>
            <ul className="list-disc pl-5 text-textColor font-roboto mb-6 space-y-4">
              <li>Tuition Fee</li>
              <li>Meals</li>
              <li>Transportation within UK</li>
              <li>Study material</li>
              <li>Accomodation</li>
            </ul>
            <Button href="/application">Apply Now</Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[40px] CardShadow2 overflow-hidden">
          <div className="bg-white text-mainBlue CardShadow2 md:text-[42px] py-10 text-center font-enriqueta text-xl">
            8 Days
          </div>
          <div className="bg-mainBlue w-full h-full">
          <div className="p-12  text-white">
            <p className="font-enriqueta text-3xl md:text-[42px] text-white py-4">£ 7,999</p>
            <h3 className="font-enriqueta text-xl md:text-[28px] text-white py-4">
              Oxford Executive Leadership Program
            </h3>
            <p className="text-white font-roboto mb-4">Dates: 5th – 12th July 2025</p>
            <h4 className="text-white font-poppins font-semibold mb-2">FEATURES</h4>
            <ul className="list-disc pl-5 text-white font-roboto mb-6 space-y-4">
              <li>Tuition Fee</li>
              <li>Meals</li>
              <li>Transportation within UK</li>
              <li>Study material</li>
              <li>Accomodation</li>
            </ul>
            <ButtonOutlined href="/application">Apply Now</ButtonOutlined>
          </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[40px] CardShadow2 overflow-hidden">
          <div className="bg-mainBlue text-white CardShadow2 md:text-[42px] py-10 text-center font-enriqueta text-xl">
            2 Weeks
          </div>
          <div className="p-12">
            <p className="font-enriqueta text-3xl md:text-[42px] text-mainBlue py-4">£ 2,999</p>
            <h3 className="font-enriqueta text-xl md:text-[28px] text-mainBlue py-4">
              Oxford China Summer Program
            </h3>
            <p className="text-textColor font-roboto mb-4">Dates: July/August 2025, Exact Dates TBC</p>
            <h4 className="text-mainBlue font-poppins font-semibold mb-2">FEATURES</h4>
            <ul className="list-disc pl-5 text-textColor font-roboto mb-6 space-y-4">
              <li>Tuition Fee</li>
              <li>Meals</li>
              <li>Transportation within UK</li>
              <li>Study material</li>
              <li>Accomodation</li>
            </ul>
            <Button href="/application">Apply Now</Button>
          </div>
        </div>
      </div>
      <div className="bg-mainBlue text-white p-6 rounded-[15px] CardShadow2 my-12">
            <h1 className="text-3xl font-bold text-center font-enriqueta">
            Application Deadline: 31st March 2025
            </h1>
          </div>
          </div>

          <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {/* Card 1: Fee Includes */}
        <div className="bg-white rounded-[20px] CardShadow2 CardDeop p-8">
          <h3 className="text-mainBlue font-enriqueta text-xl  font-bold mb-6">
            THE FEE INCLUDES THE FOLLOWING:
          </h3>
          <ul className="list-disc pl-6 text-textColor font-roboto leading-relaxed space-y-4">
            <li>
            Tuition Fee for the lectures, tutorials, study materials and other study sessions delivered during the Summer Program.            </li>
            <li>
            Debating (at the Oxford Union Debating Chamber), projects, Career counselling and other academic activities.            </li>
            <li>
            Sports, study excursions, day trips (to London/Blenheim Palace), entertainment (Movie nights, Live Concert etc.) and picnics in and around Oxford.            </li>
            <li>
            Accommodation in the form of a room is provided to every student for the duration of the programme.            </li>
            <li>
            Breakfast, lunch and dinner (including formal dinner at Oxford University’s magnificent Dining Halls) during the duration of the course            </li>
            <li>Transfers to and from the Airport.</li>
          </ul>
          <h4 className="text-mainBlue font-enriqueta text-lg  font-bold mt-8">NOTES:</h4>
          <p className="text-textColor text-justify font-roboto leading-relaxed mt-4">
            Non-residential options (with reduced fees) may also be available for local students or in exceptional circumstances for international students at our discretion. Please contact us at{' '}
            <a href="mailto:info@theoxfordinstitute.co.uk" className="text-mainBlue underline">
              info@theoxfordinstitute.co.uk
            </a>{' '}
            if you think you will not require accommodation. We do, however, recommend staying on campus throughout the course as this is essential to fully appreciate the Oxford Experience.
          </p>
        </div>

        {/* Card 2: Bank Details */}
        <div className="bg-white rounded-[20px] CardShadow2 CardDeop  p-8">
          <h3 className="text-mainBlue font-enriqueta text-xl font-bold mb-6">
            BANK DETAILS:
          </h3>
          <p className="text-textColor font-roboto leading-relaxed mb-4">
            The fee can be transferred to our Bank Account using the following details:
          </p>
          <ul className="list-none text-textColor font-roboto leading-relaxed space-y-2">
            <li>
              <strong>Bank Name:</strong> Barclays Bank
            </li>
            <li>
              <strong>Account Name:</strong> The Oxford Institute
            </li>
            <li>
              <strong>Sort Code:</strong> 2 0 0 8 6 4 
            </li>
            <li>
              <strong>Account Number:</strong>  0 0 3 9 9 8 3 3
            </li>
            <li>
              <strong>Swift Code:</strong> BUKBGB22
            </li>
            <li>
              <strong>IBAN:</strong> GB86 BUKB 2 0 0 8 6 4 0 0 3 9 9 8 3 3
            </li>
            <li>
            54 Cornmarket St, Oxford OX1 3HB, United Kingdom            </li>
          </ul>

          <h4 className="text-mainBlue font-enriqueta text-lg  font-bold mt-8">
            OTHER METHODS OF PAYMENT
          </h4>
          <ul className="list-disc pl-6 text-textColor font-roboto leading-relaxed space-y-4 mt-4">
            <li>Online Payment using our website</li>
            <li>Payment in cash to our Overseas Student Advisers</li>
          </ul>

          <h4 className="text-mainBlue font-enriqueta text-lg  font-bold mt-8">
            GROUP BOOKING
          </h4>
          <p className="text-textColor font-roboto leading-relaxed mt-4">
            Group discounts may be available for eight or more students applying together. Please contact our local representative or email us at{' '}
            <a href="mailto:info@theoxfordinstitute.co.uk" className="text-mainBlue underline">
              info@theoxfordinstitute.co.uk
            </a>{' '}
            for details.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeeKeyDates;
