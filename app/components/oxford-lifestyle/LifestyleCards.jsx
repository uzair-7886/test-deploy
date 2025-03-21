import React from "react";
import Image from "next/image";

const programData = [
  {
    id: 1,
    title: "Magical Oxford",
    description:
      'Oxford, known as the "City of Dreaming Spires," offers a perfect blend of history, inspiration, and discovery. From its iconic architecture and cobbled streets to its literary heritage, the city embodies academic and cultural excellence. Students explore museums, libraries, and gardens, walk along the River Thames, and experience the settings that inspired authors like Tolkien and C.S. Lewis. The city itself becomes a second classroom, enriching students’ academic and personal growth.',
    image: '/Oxford Lifestyle/Magical Oxford.jpg',
    downloadLink: "#",
  },
  {
    id: 2,
    title: "College Accommodation",
    description:
      "Students stay in historic college rooms used by Oxford undergraduates, located in the heart of the city. With views of picturesque quads and green spaces, these accommodations offer modern amenities, including Wi-Fi and common areas, while fostering a close-knit community. Living among the legacy of world-renowned alumni provides inspiration and a sense of belonging in one of Oxford’s most historic settings.",
    image: '/Oxford Lifestyle/Accommodation.jpg',
    downloadLink: "#",
  },
  {
    id: 3,
    title: "Dining Experience",
    description:
      "Dining at Oxford is a blend of tradition and elegance. Students enjoy meals in grand college halls, including formal dinners featuring diverse cuisines prepared by university chefs. Inspired by the iconic dining hall of Christ Church, these experiences combine culinary excellence with an atmosphere steeped in history and prestige. Daily meals and formal events ensure a memorable and enriching dining experience.",
    image: '/Oxford Lifestyle/Dining.jpg',
    downloadLink: "#",
  },
  {
    id: 4,
    title: 'Teaching Facilities',
    description:
      "Students learn in the same lecture rooms and libraries as Oxford undergraduates, equipped with modern teaching aids and serene study spaces. Tutorials, seminars, and lectures take place in state-of-the-art facilities that encourage critical thinking, discussion, and research. The 24/7 access to a well-stocked library enhances the academic experience, allowing students to delve deeper into their subjects in a world-class learning environment.",
    image: '/Oxford Lifestyle/Teaching Facility.jpg',
    downloadLink: "#",
  },
];

const LifestyleCards = () => {
  return (
    <div className="w-full bg-offWhite">
    <div className="max-w-7xl mx-auto px-4 p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
      {programData.map((program) => (
        <div
          key={program.id}
          className="bg-white CardShadow2 rounded-[20px] overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full h-[251px] relative">
            <Image
              src={program.image}
              alt={program.title}
              layout="fill"
              className="object-cover"
            //   style={{ width: "595px", height: "251px" }}
            />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-mainBlue font-enriqueta mb-2">
              {program.title}
            </h3>
            <p className="text-sm text-textColor font-roboto text-justify mb-4">{program.description}</p>

          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default LifestyleCards;
