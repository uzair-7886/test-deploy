import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SafetyContent = () => {
  const contentData = [
    {
      title: "Travel & Logistics",
      description: "Travelling within the United Kingdom including transfers from the airport, in and around Oxford and the excursion trips are included in the fees for all courses offered by The Oxford Institute. The summer program includes a number of excursions in and around Oxford, Big Ben, Hyde Park, London Eye, Trafalgar Square, Oxford Street, museums, shopping centres and other places of interest. The students are therefore only required to arrange for their air travel to and from the United Kingdom. We recommend that you arrive at and depart from London Heathrow airport. In exceptional cases, London Gatwick, Luton and City airports and Birmingham International Airport may also be used.",
      image: "/Student Resource/Travel.jpg",
      showApplyButton: true
    },
    {
      title: "Health & Safety",
      description: "The health and safety of all our students is of paramount importance for us. A number of arrangements are in place to ensure this including but not limited to the following:",
      image: "/Student Resource/health and safety.jpg",
      showApplyButton: true,
      additionalContent: [
        {
          subtitle: "24 Hours Supervision:",
          text: "All our students are supervised around the clock and accompanied by our deans, lecturers and tutors. The students are divided into smaller groups during the outdoor activities (such as educational excursions) and are accompanied by trained and specialist staff members."
        },
        {
          subtitle: "Deans Availability:",
          text: "Our deans remain available at student accommodations at all times."
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col space-y-8 px-4 py-8">
      {contentData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center 
            // Removed md:justify-around and added gap control
            ${index % 2 === 0 ? "md:flex-row-reverse" : ""} 
            space-y-6 md:space-y-8 
            `}
        >
          <div className="relative w-full h-[200px] sm:w-[400px] sm:h-[250px] md:w-[486px] md:h-[324px] rounded-[30px] overflow-hidden CardShadow2">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
          <div className="max-w-2xl md:px-8">
            <h2 className="text-mainBlue text-2xl md:text-[28px] py-4 font-enriqueta font-bold">
              {item.title}
            </h2>
            <p className="text-textColor md:text-[16px] pb-4 font-poppins leading-relaxed text-justify">
              {item.description}
            </p>
            {item.additionalContent && (
              <div className="space-y-4">
                {item.additionalContent.map((content, idx) => (
                  <div key={idx}>
                    <h3 className="text-mainBlue text-lg font-enriqueta font-semibold">
                      {content.subtitle}
                    </h3>
                    <p className="text-textColor md:text-[16px] pb-4 font-poppins leading-relaxed text-justify">
                      {content.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {item.showApplyButton && (
              <Link href={'/application'}>
              <button

                className={`
                  border border-mainYellow
                  rounded-[8px]
                  text-textColor
                  font-poppins 
                  text-[16px] 
                  font-medium 
                  bg-transparent 
                  px-4
                  py-2
                  inline-flex
                  items-center 
                  justify-center
                  whitespace-nowrap
                `}
              >
                Apply Now
              </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SafetyContent;