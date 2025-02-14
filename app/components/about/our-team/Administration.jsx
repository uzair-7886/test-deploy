import React from 'react';
import Image from 'next/image';

const coordinatorData = {
  featured: {
    name: "Lucy Atichon",
    role: "Program Coordiator",
    description: "Lucy studied Law at Oxford and is pursuing a master’s in Corporate and Commercial Law in London. With four years at The Oxford Institute, she ensures smooth program operations and leads the administration team. ",
    image: "/Our Team/Lucy.jpg"
  },
};

const deansData = [
    {
      name: "Mr Ahmad Nawaz BEM",
      role: "Head of International Collaborations",
      description:
        " Ahmad, an Oxford graduate in Philosophy and Theology, holds a British Empire Medal and an Honorary Doctorate. He fosters global partnerships and oversees international collaborations for the Oxford Institute.  ",
      image: "/Tutors/ahmed.png",
    },
    {
      name: "Nauman Saeed Anwar",
      role: "Head of Executive Leadership Program ",
      description:
        "Nauman leads the Executive Leadership Program, empowering global executives with strategic insights. His expertise spans three continents, combining technical, business, and policy knowledge from Harvard.",
        image: "/Tutors/saeed.png",
      },
    {
      name: "Dr. Andrew Turesky",
      role: "Head of Student Affairs and Welfare",
      description:
        "A graduate of Columbia and Oxford, Andrew brings 25 years of experience in student counseling and career guidance, leading student welfare at The Oxford Institute.",
        image: "/Tutors/andrew.png",
      },

  ];

const Administration = () => {
  return (
    <section className="bg-offWhite py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-[42px] font-bold font-enriqueta text-center text-mainYellow mb-6">
            Administration
          </h2>
          <p className="text-textColor font-roboto  mx-auto leading-relaxed mb-16">
          Our administration team, composed of Oxford-affiliated professionals, ensures the smooth running of the program while delivering an exceptional experience for all participants
          </p>

          {/* Featured Coordinator */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
                  <Image
                    src={coordinatorData.featured.image}
                    alt={coordinatorData.featured.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-enriqueta text-mainBlue md:text-[42px] mb-4">
                  {coordinatorData.featured.name} - <span className="text-mainYellow">{coordinatorData.featured.role}</span>
                </h3>
                <p className="text-textColor font-roboto leading-relaxed">
                  {coordinatorData.featured.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                    {deansData.map((dean, index) => (
                      <div key={index} className="relative pt-16">
                        <div className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 w-40 h-40 md:w-[173px] md:h-[173px] ">
                          <Image
                            src={dean.image}
                            alt={dean.name}
                            fill
                            className="rounded-full object-cover CardShadow2"
                          />
                        </div>
                        <div className="  p-8  text-center ">
                          <h3 className="text-xl font-enriqueta text-mainBlue mb-2 mt-16">
                            {dean.name}
                          </h3>
                          <p className="text-sm font-poppins text-mainBlue mb-4 ">
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
      </div>
    </section>
  );
};

export default Administration;