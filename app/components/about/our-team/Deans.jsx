import React from "react";
import Image from "next/image";

const deansData = [
  {
    name: "Tom Hendricks",
    role: "Dean-Residential Mentor",
    description:
      "Tom, a History graduate from Oxford, joined as an IT tutor after working in the tech sector. As Senior Adviser to the Oxford University Rifle Club, he offers coaching, mentoring, and expertise in safety and residential welfare.",
    image: "/Our Team/Tom Hendricks.jpeg",
  },
  {
    name: "Tabitha Spence",
    role: "Dean-Residential Mentor",
    description:
      "Tabitha, an M.A. graduate in Geography and Development from Arizona, is a Cambridge doctoral researcher in climate politics. She has extensive experience in teaching undergraduates and managing student welfare.",
    image: "/Our Team/Tabitha-Spence.jpg",
  },
  {
    name: "Jonathan Kifle",
    role: "Dean-Residential Mentor",
    description:
      "Jonathan, an Engineering graduate pursuing a master’s at Oxford, has been with the Oxford Institute since 2022. He specializes in Maths and Engineering tutoring and provides admissions support.",
    image: "/Our Team/Jonathan+Kifle.jpeg",
  },
  {
    name: "Lucy Aitchison",
    role: "Dean-Residential Mentor",
    description:
      "Lucy, an Oxford Law graduate pursuing a master’s in London, has been with the Oxford Institute for four years. She manages student welfare and designs courses in Law, debating, and soft skills.",
    image: "/Our Team/Lucy.jpg",
  },
];

const Deans = () => {
  return (
    <section className="bg-offWhite py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Heading Column */}
        <div className="md:w-1/3 w-full">
          <h1 className="text-mainYellow text-4xl md:text-[42px] font-enriqueta font-bold">
          Deans         </h1>
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 w-full">
          <p className="text-textColor text-lg md:text-[18px] font-roboto leading-relaxed text-justify">
          Each student is assigned to a male or female residential dean in groups of 10-15 students. Deans are responsible for pastoral care - living on-site, helping students with challenges, facilitating their participation in all activities academic and social, and easing their transition to independent living and learning. While the Programme values and encourages student independence, the Deans are also responsible for maintaining discipline when needed.</p>
        </div>
      </div>
      <hr className="border-t-2  border-mainYellow my-4" />

        {/* Deans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {deansData.map((dean, index) => (
            <div key={index} className="relative pt-16">
              <div className="absolute -top-4 md:-top-16 left-1/2 -translate-x-1/2 w-40 h-40 md:w-[206px] md:h-[206px] ">
                <Image
                  src={dean.image}
                  alt={dean.name}
                  fill
                  className="rounded-full object-cover CardShadow2"
                />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm text-center md:h-[400px]">
                <h3 className="text-xl font-poppins text-textColor mb-2 mt-16">
                  {dean.name}
                </h3>
                <p className="text-sm font-poppins text-textColor mb-4 ">
                  {dean.role}
                </p>
                <p className="text-textColor font-roboto text-justify text-sm leading-relaxed">
                  {dean.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deans;