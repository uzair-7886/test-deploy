import React from "react";

const VisaImmigration = () => {
  

  return (
    <div className="bg-white py-12 max-w-7xl mx-auto px-6 md:px-4 lg:px-4">
      <div className=" flex flex-col md:flex-row gap-8">
        {/* Heading Column */}
        <div className="md:w-1/3 w-full">
          <h1 className="text-mainYellow text-4xl md:text-[42px] font-enriqueta font-bold">
          Visa & Immigration         </h1>
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 w-full">
          <p className="text-textColor text-lg md:text-[18px] font-roboto leading-relaxed text-justify">Participants attending the Oxford Institute Summer Program may require a visa to enter the United Kingdom. Visitors are permitted to study for up to six months, which allows attendance at the Oxford Summer Program. We recommend that all international students check the UK Government’s visa requirements well in advance to determine if they need a Standard Visitor Visa or an electronic travel authorization (ETA). Depending on nationality, some students may enter without a visa but will require an ETA. Upon acceptance, the Oxford Institute will provide an official letter of enrollment to support your visa application. Students must also present financial and accommodation evidence (if they plan to stay in the UK beyond the program duration). We advise applying for your visa early, as processing times can vary.         </p>
        </div>
      </div>
      <div className="w-full space-y-6">
          {[
            {
              title: 'Using ePassport Gates',
              description:
                'Citizens of Australia, Canada, Japan, New Zealand, Singapore, South Korea, the United States, EEA countries, and Switzerland can use ePassport gates to enter the UK if their passports have a biometric chip. Although this may bypass direct interaction with Border Force officers and no passport stamp will be issued, it’s still recommended to carry your enrollment letter, financial documents, and a record of travel dates.',
                link:"/"
            },
            {
              title: 'EEA and Swiss ID Cards',
              description:
                'EEA and Swiss nationals can currently use national ID cards to enter the UK, but these cannot be processed at ePassport gates. From 1 October 2021, a visa is required for entry using a national ID card.',
                link:"/"
            },
            {
              title: 'Further Information',
              description:
                'For more details on visitor requirements, please consult the UK Home Office’s guidelines or visit UKCISA and Gov.uk. For further assistance, feel free to contact our admissions team.',
                link:"/"
            }
            
          ].map((item, index) => (
            <div key={index} className="border-b-[1px] border-mainYellow pb-4">
              <h3 className="text-mainBlue text-lg md:text-[28px] font-bold font-enriqueta">{item.title}</h3>
              <p className="text-textColor text-justify leading-relaxed font-roboto py-2">{item.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
  
  
};

export default VisaImmigration;
