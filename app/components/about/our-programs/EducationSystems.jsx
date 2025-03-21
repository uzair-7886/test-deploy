import React from "react";
import MainContent from "../../shared/MainContent";

const EducationSystems = () => {
  const contentData = [
    {
      image: "/Age Group/IB Students.jpg",
      heading: "IB Students",
      text: "The Oxford Summer Program supports MYP, DP, and CP students (12–19 years) with focused IB preparation. Oxbridge tutors deliver small, interactive classes tailored to individual needs, enhancing critical thinking and academic success. Students choose major and minor modules, bridging IB studies with university-level concepts. The program builds essential skills for excelling in IB exams and higher education.",
      link:"/subjects"
    },
    {
      image: "/Age Group/OA levels.jpg",
      heading: "O/A Levels",
      text: "Our two-week camps offer O/A Level students courses in 32 subjects to meet modern educational demands. Rigorous preparation fosters academic excellence, personal growth, and adaptability. Tutors encourage critical thinking and global engagement, helping students achieve top exam results and prepare for university.",
      link:"/subjects"
    },
    {
      image: "/Age Group/GCSE.jpg",
      heading: "GSCE/IGSCE",
      text: "This program helps GCSE/IGCSE students excel in exams through small-group tutorials targeting specific subjects and skills. Tutors provide exam strategies and personalized roadmaps for academic and career goals. Participants gain confidence, critical skills, and preparation for future challenges.",
      link:"/subjects"
    },
    {
      image: "/Age Group/Local Examination.jpg",
        heading: "Local Examination System",
        text: "We welcome students from diverse local systems, offering flexible tutorials to meet individual needs. The program bridges current studies with advanced concepts, preparing students for global academic standards. Participants gain expert guidance for transitioning to top universities worldwide.",
        link:"/subjects"
      },
    
  ];

  return (
    <div className="bg-offWhite pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col  gap-8">
        {/* Heading Column */}
        <div className=" w-full">
          <h1 className="text-mainYellow text-4xl text-center md:text-[42px] font-enriqueta font-bold uppercase">
          Education Systems 
          </h1>
        </div>
        {/* Text Column */}
        <div className=" w-full">
          <p className="text-textColor text-lg md:text-[16px] font-roboto leading-relaxed text-justify py-2">
          The Oxford Summer Program welcomes students from all over the world. Our participants are enrolled in various local and international examination systems such as IB (Diploma Programme), CP (Career-related Programme), O or A levels, IGCSE, GCSE, as well as local education systems followed in different parts of the world. All courses are taught in tutorials - the unique Oxford teaching method of intensive daily sessions between 1-3 students per tutor. 
          </p>
        </div>
      </div>
  
      <MainContent content={contentData} viewCourse={true}/>
    </div>
  );
  
  
};

export default EducationSystems;
