import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="container bg-white CardShadow2 rounded-[20px] py-10 mx-auto max-w-5xl px-6">
        <p className="text-textColor leading-relaxed text-justify font-roboto mb-8">
        When registering for the program and whilst communicating with The Oxford Institute (or the Oxbridge Education Network Ltd, used interchangeably), upon completion of booking confirmation i.e. payment of deposit or full amount as set out in Paragraph 3, the Oxford Institute student participants and their parents/legal guardians agree to be bound by the following terms and conditions [‘the Contract’]. The participants and their parents/legal guardians must ensure they completely understand the Contract and if required, seek advice in order to ensure they do understand ‘the Contract’ in advance of the Contract taking effect subject to Paragraph 3.2.        </p>

        {/* Section 1: Changes to the Contract */}
        <div className="mb-10">
          <h2 className="text-mainBlue text-xl md:text-2xl font-bold font-enriqueta mb-4">
            1. Changes to the Contract
          </h2>
          <p className="text-textColor leading-relaxed text-justify font-roboto">
          Except where it is explicitly permitted in the Contract, no changes to the Contract shall be considered in any way valid or binding unless it is agreed in writing between a Director of Oxbridge Education Network Limited, the participants and the parent/legal guardian.          </p>
        </div>

        {/* Section 2: Particulars */}
        <div className="mb-10">
          <h2 className="text-mainBlue text-xl md:text-2xl font-bold font-enriqueta mb-4">
            2. Particulars
          </h2>
          <ul className="pl-6 text-textColor leading-relaxed space-y-4 font-roboto">
            <li>
              <strong>2.1</strong> Oxbridge Education Network Limited will utilise the venues and facilities in Oxford and/or London with Oxford & Oxford Brookes University staff and students, as well as the student participants, guest attendees and organisers of the Oxford Institute Programme and other summer schools and universities.
            </li>
            <li>
              <strong>2.2</strong> The Student shall provide Oxbridge Education Network Limited with all the information required as set out in the ‘The Oxford Institute Programme – booking confirmation’ process no later than 45 days prior to when the Oxford Institute Programme commences.
            </li>
          </ul>
        </div>

        {/* Section 3: Booking Confirmation Payment */}
        <div className="mb-10">
          <h2 className="text-mainBlue text-xl md:text-2xl font-bold font-enriqueta mb-4">
            3. Booking Confirmation Payment
          </h2>
          <ul className="pl-6 text-textColor leading-relaxed space-y-4 font-roboto">
            <li>
              <strong>3.1</strong> To confirm their booking, student participants are required to pay at least a 50% deposit or an amount mutually agreed with The Oxford Institute and this deposit is non-refundable.

            </li>
            <li>
              <strong>3.2</strong> the Contract is conditional upon receipt of the booking confirmation payment as outlined in the previous Paragraph (3.1). Once the booking confirmation payment has been received, the Contract comes into effect and, in so doing, the student participant and parent/legal guardian confirm their acceptance of this contract.
            </li>
          </ul>
        </div>

        {/* Section 4: Payment of Balance */}
        <div className="mb-10">
          <h2 className="text-mainBlue text-xl md:text-2xl font-bold font-enriqueta mb-4">
            4. Payment of Balance
          </h2>
          <ul className="pl-6 text-textColor leading-relaxed space-y-4 font-roboto">
            <li>
              <strong>4.1</strong> The balance of the Oxford Institute Programme fee shall be paid in full by the participants to Oxbridge Education Network Limited at least 100 days before the Oxford Institute programme commences.

            </li>
            <li>
              <strong>4.2</strong> If any portion of the balance payment is still unpaid within the required timeframe, Oxbridge Education Network Limited reserves the right to rescind any participant’s place and reminds student participants and parents/legal guardians that the 50% deposit is non-refundable.
            </li>
            <li>
              <strong>4.3</strong> All payments shall be made by the participant in British Pounds Sterling irrespective of exchange rate fluctuation and without deduction of any kind to Oxbridge Education Network Limited.

            </li>
          </ul>
        </div>

        {/* Section 5: Refund Policy and Visa Applications */}
        <div className="mb-10">
          <h2 className="text-mainBlue text-xl md:text-2xl font-bold font-enriqueta mb-4">
            5. Refund Policy and Visa Applications
          </h2>
          <ul className="pl-6 text-textColor leading-relaxed space-y-4 font-roboto">
            <li>
              <strong>5.1</strong> There is a no refund policy. Any refunds granted are down to the discretion of Oxbridge Education Network Limited. In case of   cancellation or termination of a course occurring before the start date for any reason by the student, a percentage of fee (decided by the Oxbridge Education Network Limited at its sole discretion) may be refunded.

            </li>
            <li>
              <strong>5.2</strong> In the case of a cancellation or termination of a course occurring on or after the start date for any reason by the Student, the course fees in full may be payable. Any refund remains at the absolute discretion of Oxbridge Education Network Limited considering that a number of expenses incurred on making arrangements for the students are non-refundable. In the case of a cancellation or termination of a course occurring before, on or after the start date for any reason (except on disciplinary grounds) by Oxbridge Education Network Limited, the total course fees will be refunded by Oxbridge Education Network Limited. Oxbridge Education Network Limited reserves the right to deduct any non-refundable expenses incurred on the Student in case of dismissal on disciplinary grounds.
            </li>
            <li>
              <strong>5.3</strong> It is the Students’ responsibility to organise their visa and/or any other permission(s) required to attend the course. If a student participant’s visa application is believed by Oxbridge Education Network Limited to be genuinely rejected and only upon receiving the original rejection letter a certain percentage of the course fees may be refunded at the absolute discretion of Oxbridge Education Network Limited while retaining non-refundable expenses incurred on making arrangements for various facilities and activities of the programme.
            </li>
            <li>
              <strong>5.4</strong> The Student is strongly advised by Oxbridge Education Network Limited to take out insurance to indemnify them against the consequences of needing to cancel at any time. The Student is specifically referred to Paragraph 17 herein for additional terms relating to Insurance.
            </li>
            <li>
              <strong>5.5</strong> It is not possible to postpone courses to another date or carry fees already paid to another date. For the avoidance of doubt, this Paragraph 5.5 shall remain applicable whatever the reason given for requesting a postponement or carrying forward of course fees paid including (but without prejudice to the generality of the foregoing) illness arising before or during the course.
            </li>
            <li>
              <strong>5.6</strong> If the student becomes ill or is incapacitated due to accident or otherwise before the start of the course and is unable to attend the course or any part of the course thereof no refund will be made as stated in Paragraphs 5.1 and 5.2. For this reason, the Student is strongly advised to take out insurance (see Paragraphs 5.4 and 17 herein) against the possibility of needing to cancel the course or any part of it at any time.
            </li>
            <li>
              <strong>5.7</strong> In the event of the Student becoming ill or incapacitated due to accident or otherwise, during the course, no refund of any fees will be made. For this reason, the Student is strongly advised to take out insurance (see Paragraphs 5.4 and 17 herein) to protect against the possibility of needing to withdraw from the course prematurely.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
