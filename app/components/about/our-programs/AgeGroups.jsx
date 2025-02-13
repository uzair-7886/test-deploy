import React from "react";
import MainContent from "../../shared/MainContent";

const AgeGroups = () => {
  const contentData = [
    {
      image: "/Age Group/Juniors.jpg", 
      heading: "Juniors (12-15 Years old)",
      text: "Our Juniors Camp is designed for students who are 12 to 15 years old and are currently enrolled in their Middle School, High School or being homeschooled. Students enrolled in our Juniors batch come from diverse educational backgrounds. including MYP (Middle Years Programme), students preparing for their IGCSE, GCSE, O levels or national examination systems in their respective countries. ",
      link:"/subject"
    },
    {
      image: "/Age Group/Seniors.jpg",
      heading: "Seniors ( 16 - 19 Years old)",
      text: "Our Seniors camp is designed for students enrolled in IB (Diploma Programme), CP (Career-related Programme), O or A levels, IGCSE, GCSE or other local examination programs and are between the age range of 16-19 years old. The Oxford Institute offers students the flexibility to choose their subjects of interest from a range of options. All students choose a Major and a Minor subject from the list of Subjects ",
      link:"/subjects"
    },
    {
      image: "/Age Group/University Students.jpeg",
      heading: "University Students 19+",
      text: "The Oxford Summer Program welcomes students currently enrolled in undergraduate and postgraduate degrees in different universities around the world. The course provides university students with networking opportunities and a chance to interact with professionals in their areas of interest. Emphasis is also given to developing and fine tuning communication skills through a range of public speaking and debating workshops as well as interpersonal, leadership and team working skills.",
      link:"/subjects"
    },
    {
        image: "/Age Group/Executive.jpg",
        heading: "Executive Program 28+",
        text: "The Executive Summer Program offers you the opportunity to identify, explore, and overcome management challenges in an incessantly changing business environment. Our two-week executive programme focuses on the challenges facing the next generation of business leaders, and explores the most appropriate and practical solutions. It is an ideal opportunity to take a step back, consider the bigger picture, and begin to develop solutions that will be necessary for the decade to come.",
        link:"/subjects"
      },
    
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col  gap-8">
        {/* Heading Column */}
        <div className=" w-full">
          <h1 className="text-mainYellow text-4xl text-center md:text-[42px] font-enriqueta font-bold">
            Age Groups
          </h1>
        </div>
        {/* Text Column */}
        <div className=" w-full">
          <p className="text-textColor text-lg md:text-[18px] font-roboto leading-relaxed text-justify">
          The Oxford Institute’s Summer Programs offer a mix of academic excellence, skill development and a fun summer holiday. They provide students a chance to immerse themselves in a ‘Hogwarts’ styled ‘Oxford Experience’ with accommodation in the University premises, dining at historic college halls, attending courses delivered by Oxford scholars and exploring the student life in the city.
          </p>
        </div>
      </div>
  
      <MainContent content={contentData} viewCourse={true}/>
    </div>
  );
  
  
};

export default AgeGroups;
