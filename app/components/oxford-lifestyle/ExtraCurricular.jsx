import React from "react";
import EAContent from "./EAContent";

const ExtraCurricular = () => {
  const contentData = [
    {
      image: "/Oxford Lifestyle/Excursion trips.jpg", 
      heading: "Excursion Trips ",
      text: "Students embark on enriching trips to iconic locations, including a flagship day in London to explore landmarks like Buckingham Palace, the Houses of Parliament, and Westminster Abbey. Oxford-based outings include visits to historic colleges, the Bodleian Library, and world-class museums such as the Ashmolean and Pitt Rivers. These excursions combine education, culture, and fun, immersing students in the history and vibrancy of the UK’s most celebrated sites.",
      link:"/application"
    },
    {
      image: "/Oxford Lifestyle/Punting.jpg",
      heading: "Punting",
      text: "A quintessential Oxford experience, punting on the River Cherwell offers students the chance to relax and bond with peers while gliding through serene landscapes. With its peaceful waters and picturesque views, this activity provides a perfect balance of leisure and connection to the natural beauty surrounding the university.",
      link:"/application"
    },
    {
      image: "/Oxford Lifestyle/Entertainment.jpeg",
      heading: "Entertainment",
      text: "From movie nights and musical performances to karaoke and student showcases, the program’s entertainment evenings foster a lively and inclusive community. The highlight is the certificate distribution ceremony, followed by a celebration featuring music and fun, creating lasting memories and friendships among participants.",
      link:"/application"
    },
    {
      image: "/Oxford Lifestyle/Indoor games.jpeg",
      heading: "Sports & Indoor Games",
      text: "Promoting a healthy and active lifestyle, the program includes a sports day featuring team games such as football, cricket, and frisbee in Oxford’s scenic University Parks. For those who prefer strategy, indoor games and board games are available in the common room, led by program deans. These activities encourage teamwork, camaraderie, and a well-rounded experience.",
      link:"/application"
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Heading Column */}
        <div className="md:w-1/3 w-full">
          <h1 className="text-mainYellow text-4xl md:text-[42px] uppercase font-enriqueta font-bold">
          Extracurricular  Activities
          </h1>
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 w-full">
          <p className="text-textColor text-base md:text-[16px] font-roboto leading-relaxed text-justify">
          The Oxford Summer Programme offers a wide range of activities that extend learning beyond the classroom, providing students with opportunities for cultural exploration, recreation, and personal development. These experiences are designed to complement the academic rigor of the program and ensure a balanced, memorable summer.
          </p>
        </div>
      </div>
      <hr className="border-t-1 max-w-7xl mx-auto px-4 border-mainYellow my-4" />
  
      <EAContent content={contentData} viewCourse={true}/>
    </div>
  );
  
  
};

export default ExtraCurricular;
