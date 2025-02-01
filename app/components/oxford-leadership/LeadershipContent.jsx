import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Content = ({ content, viewCourse=false }) => {
    return (
      <div className="w-full flex flex-col space-y-8 px-4 py-8">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center 
            // Removed md:justify-around and added gap control
            ${index % 2 === 0 ? "md:flex-row-reverse" : ""} 
            space-y-6 md:space-y-8 
            `}
          >
            <div
              className="relative w-full h-[200px] sm:w-[400px] sm:h-[250px] md:w-[486px] md:h-[324px] rounded-[30px] overflow-hidden CardShadow2"
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-mainBlue text-2xl md:text-[28px] py-4 font-enriqueta font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-textColor md:text-[16px] pb-4 font-poppins leading-relaxed text-justify">
                {item.description}
              </p>
              {viewCourse && (
                <Link
                  href={item.link}
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
                  View Course
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    );
};

const LeadershipContent = () => {

    const programData = [
        {
          id: 1,
          title: "Debating at the Oxford Union",
          description:
            'The art of debate is central to the Oxford experience, and students are guided by champion debaters from the world-renowned Oxford Union. They learn to construct persuasive arguments, articulate ideas clearly, and respond to challenges with confidence. The program culminates in a final debate competition held in the historic Debating Chamber, a venue that has hosted some of history’s greatest thinkers and leaders. This immersive experience enhances students’ critical thinking, public speaking, and ability to lead in any setting.  ',
          image: '/Oxford Leadership/Debating at Oxford Union.jpg',
          link: "#",
        },
        {
          id: 2,
          title: "Career Guidance",
          description:
            "Recognizing the importance of career development, the program offers students exposure to diverse career paths, including academia, business, law, arts, and government. Through one-on-one discussions with tutors and deans, participants refine their aspirations, explore opportunities, and gain insights into the global job market. Our guidance helps students build a clear vision for their future, equipping them with the knowledge and confidence to pursue their ambitions.",
          image: '/Oxford Leadership/career guidance.jpg',
          link: "#",
        },
        {
          id: 3,
          title: "Admission Counselling",
          description:
            "Navigating university applications can be daunting, and our expert admissions counselors are here to support students every step of the way. From crafting compelling personal statements to preparing for interviews at Oxbridge and Ivy League universities, we provide tailored advice to help students stand out. Whether applying to institutions in the UK, USA, or beyond, we ensure participants are well-prepared to achieve their academic goals.",
          image: '/Oxford Leadership/Admission counselling.jpg',
          link: "#",
        },
      ];

  return (
        <Content content={programData} viewCourse={true}/>
  )
}

export default LeadershipContent
