import React from "react";
import MainContent from "../../shared/MainContent";

const UniOxford = () => {
  const contentData = [
    {
      image: "/Our Organization Page/People.jpg", 
      heading: "People",
      text: "Oxford attracts the finest talent worldwide, including top students and faculty members who are experts in their respective fields. This creates a dynamic, inspiring environment where students engage in mutual learning, fostering creativity, critical thinking, and pushing the boundaries of knowledge. Oxford is home to over 50 Nobel Prize winners, 26 British Prime Ministers, and countless global leaders and innovators.",
    },
    {
      image: "/Our Organization Page/Tutoiral.JPG",
      heading: "Tutorial System",
      text: "Oxford’s renowned tutorial system lies at the heart of its educational philosophy. Unlike traditional classroom teaching, students participate in intensive, personalised tutorials, usually with one to three students per tutor. This system allows for tailored, in-depth exploration of subjects, ensuring that each student’s learning experience is aligned with their interests and academic needs. It is this unique method that sets Oxford apart, providing an education that is as challenging as it is enriching.",
    },
    {
      image: "/Our Organization Page/Collegiate systems.jpeg",
      heading: "Collegiate System",
      text: "Oxford operates under a collegiate structure, comprising 39 autonomous colleges that offer both academic and social support. Each college serves as a community where students can connect across disciplines, collaborate on research, and form lasting friendships. The collegiate system fosters an inclusive, close-knit environment, making Oxford a place where intellectual and personal growth go hand in hand.",
    },
    {
      image: "/Our Organization Page/union.png",
      heading: "Oxford Union",
      text: "Students at Oxford benefit from unrivalled academic resources, including world-class libraries, cutting-edge laboratories, and sports and arts facilities. These resources provide students with the tools necessary for both academic achievement and personal development, ensuring they have everything they need to thrive both in and outside the classroom.",
    },{
      image: "/Our Organization Page/diversity.JPG",
      heading: "Diversity ",
      text: "Oxford is home to a highly diverse student body, with students representing over 130 countries. This multicultural environment offers a global perspective, enriching students’ educational experiences and preparing them for leadership in an interconnected world. The diverse student body is central to creating an open, collaborative space for innovative thinking and cross-cultural learning.",
    },{
      image: "/Our Organization Page/Landmarks.jpg",
      heading: "Architecture & Landmarks",
      text: "Oxford is home to an unmatched collection of architectural wonders, many of which date back to the Anglo-Saxon period. Notable landmarks include the Carfax Tower, Radcliffe Camera, Church of St. Mary the Virgin, Christ Church College, New College, and Magdalene College. These buildings are a testament to the city’s rich academic and historical heritage.",
    }
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24 ">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Heading Column */}
        <div className="md:w-1/3 w-full">
          <h1 className="text-mainYellow text-4xl md:text-[42px] font-enriqueta font-bold">
            The University Of Oxford
          </h1>
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 w-full">
          <p className="text-textColor text-lg md:text-[18px] font-roboto leading-relaxed text-justify">
            Oxford, one of the oldest and most prestigious universities in the
            world, has been a leader in higher education since 1096 AD. Renowned
            globally for its academic excellence, rich traditions, and vibrant
            student life, Oxford continues to attract the brightest minds from
            across the globe. Its reputation for innovation and scholarship has
            been built over centuries, making it a centre of knowledge, research,
            and personal development. Oxford’s success is rooted in several key
            features that distinguish it from other institutions:
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-mainYellow my-4" />
  
      <MainContent content={contentData} />
    </div>
  );
  
  
};

export default UniOxford;
