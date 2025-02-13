import React from 'react';
import Image from 'next/image';

const coordinatorData = {
  featured: {
    name: "Julia Strawinska",
    role: "Tutor",
    description: "Julia Strawinska - Julia holds a degree in English Language and Literature from the University of Oxford, and an undergraduate certificate in Photography from Manchester Metropolitan University. In addition to her role as academic coordinator, Julia has taught fine art, photography and English at the Oxford Institute for three years.",
    image: "/Tutors/julia.png"
  },
  others: [
    {
      name: "Maria Rioumine",
      description: "Maria read Philosophy, Politics and Economics at Christ Church College, Oxford University. She was elected President of the Oxford Union, the world renowned debating society and oversaw the organisation of all university-wide debates, socials and speaker events",
      image: "/Tutors/maria.png"
    },
    {
      name: "Dr. Anna Svenson",
      description: "Anna holds a PhD in History of Science, Technology and Environment. With a background in English Literature (BA, University of Oxford, 2008), her current research areas engage with the challenges and possibilities of interdisciplinary research, the history of botany, and early modern collecting cultures.",
      image: "/Tutors/anna.png"
    },
    {
      name: "Harry Lee",
      description: "Harry has graduated from Oriel College, University of Oxford in Molecular and Cellular Biology, he was also visiting scholar at Princeton University (USA) for one year. Harry came to Oxford from Korea and has been helping overseas applicants with their Oxbridge applications since his first year at Oxford.",
      image: "/Tutors/harry.png"
    },
    {
      name: "Dr. Megan Robb",
      description: "Megan holds a PhD in Oriental Studies from the University of Oxford. She has completed an MPhil degree in Modern South Asian Studies and a Bachelor’s degree from University of Indiana, USA. Megan remained the General Secretary of the Oxford University Model United Nations and has excellent public speaking skills.",
      image: "/Tutors/megan.png"
    }
  ]
};

const AcademicCoordinator = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-[42px] font-bold font-enriqueta text-center text-mainYellow mb-6">
            Academic Coordinator
          </h2>
          <p className="text-textColor font-roboto  mx-auto leading-relaxed mb-16">
            Our Academic Coordinators are leading researchers and academics in their field. They define the overall academic direction and standard of the Programme. Besides monitoring the quality of tutorials, academic coordinators plan keynote lectures, workshops, academic counseling sessions, and evaluate student progress and feedback.
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
                <p className="text-textColor leading-relaxed">
                  {coordinatorData.featured.description}
                </p>
              </div>
            </div>
          </div>

          {/* Other Coordinators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinatorData.others.map((coordinator, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={coordinator.image}
                    alt={coordinator.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-enriqueta text-mainBlue mb-2">
                    {coordinator.name}
                  </h3>
                  <p className="text-textColor font-roboto text-justify text-sm leading-relaxed">
                    {coordinator.description}
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

export default AcademicCoordinator;