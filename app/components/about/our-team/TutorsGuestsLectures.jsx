'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkSize();

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isMobile;
}

const tutorsData = [
  {
    id: 1,
    name: "Carlo Palazzi",
    role: "Tutor — Lecturer",
    description: "Passionate about simplifying complex challenges, Carlo Palazzi specializes in energy systems research, data science, and strategic insights. Currently pursuing a DPhil at the University of Oxford, he focuses on hydrogen-vector energy systems, contributing to the decarbonization of shipping through the Oxford Green Ammonia Technology (OXGATE) initiative",
    image: "/Tutors/Carlo Palazzi.jpeg"
  },
  {
    id: 2,
    name: "Inti Mantripp",
    role: "Tutor — Lecturer",
    description: "Inti has a degree in Physics and Philosophy from King’s College London, a Masters Degree in Statistics from the University of Edinburgh, and Mathematical Modelling and Scientific Computing from the University of Oxford. At the Oxford Institute, Inti delivers lectures and courses in Finance and Critical Thinking.",
    image: "/Tutors/Inti Mantripp.jpeg"
  },
  {
    id: 3,
    name: "Ashlee Stetser",
    role: "Tutor — Lecturer",
    description: "Ashlee holds a Master of Science in Diplomatic Studies from Oxford and is a U.S.-trained and licensed attorney specializing in international law. She currently lectures at the University of Cambridge, Boston University, and Vermont Law School, bringing a focus on practical problem-solving to her teaching.",
    image: "/Tutors/Ashlee Stetser.jpeg"
  },
  {
    id: 4,
    name: "Dr. Aaron Anthony Pillai",
    role: "Lecturer",
    description: "Dr. Aaron Anthony Pillai is a junior doctor specializing in internal medicine at Lewisham and Greenwich NHS Trust. He holds a medical degree from King’s College London and a diploma from the London School of Hygiene and Tropical Medicine. He has worked alongside Médecins Sans Frontières (MSF) on international aid missions and is the founder of Doctors Without Barriers, an initiative dedicated to overcoming obstacles in global healthcare.",
    image: "/Tutors/Dr. Aaron Anthony Pillai.jpeg"
  },
  {
    id: 5,
    name: "Dr. Bronwyn Tarr",
    role: "PhD in Experimental Psychology",
    description: "Ms. Tarr Bronwyn was a Rhodes Scholar at the University of Oxford. She is a postdoctoral research associate in the Department of Experimental Psychology. Her research combines her passion for dance and music with her curiosity about human nature and the evolution of social behaviors.",
    image: "/Tutors/Dr. Bronwyn Tarr.jpg"
  },
  {
    id: 6,
    name: "Mr. Gavin Fleming",
    role: "Degree of Arts in Philosophy and Theology",
    description: "Gavin studied at Keble College and holds a degree of Arts in Philosophy and Theology. Gavin was awarded a Grace Scholarship, as well as was elected by the Governing Body and Faculty to the Wills Philpott Shawcross Divinity Scholarship. He was president of the Theology Society at Oxford.",
    image: "/Tutors/Gavin.jpg"
  },
  {
    id: 7,
    name: "Dr. Anke Hoeffler",
    role: "Research fellow at the Department of Economics, the University of Oxford",
    description: "She delivered a lecture on ‘Globalisation, Development and Inequality’ at Oxford Institute’s summer program. Her research areas include Economic growth and the economies of conflict.",
    image: "/Tutors/Dr. Anke Hoeffler.jpg"
  },
  {
    id: 8,
    name: "Prof. Matthew McCartney",
    role: "Director of South Asian Studies at the University of Oxford",
    description: "He holds a PhD from SOAS, University of London, an MPhil from Keble College, Oxford, and a BA in Economics from Kings College, Cambridge.",
    image: "/Tutors/Prof. Matthew McCartney.jpg"
  },
  {
    id: 9,
    name: "Dr. Philip Beeley",
    role: "Research fellow at the Faculty of History, the University of Oxford",
    description: "He has extensively published on the history of science and epistolary cultures in early modern Europe. He delivered a lecture on the ‘History of Scientific Thought’ at Oxford Institute’s summer program.",
    image: "/Tutors/Dr. Philip Beeley.jpeg"
  },
  {
    id: 10,
    name: "Dr. Kate Sullivan",
    role: "University lecturer in Modern Indian Studies at the University of Oxford",
    description: "She delivered a lecture on ‘Climate Change’ at Oxford Institute’s summer program.",
    image: "/Tutors/Dr. Kate Sullivan.jpeg"
  },
  {
    id: 11,
    name: "Dr. Allison Daley",
    role: "Research fellow at St Edmund Hall, University of Oxford",
    description: "Her research focuses on Animal Diversity and the origin of species.",
    image: "/Tutors/Dr. Allison Daley.jpg"
  },
  {
    id: 12,
    name: "Dr. Megan Robb",
    role: "PhD in Oriental Studies at Oxford University",
    description: "She holds a PhD in Modern South Asian Studies. She is proficient in Urdu and Hindi (along with her first language English) and has extensively studied literature in these languages. Megan taught English Literature and English Language at the Oxford Institute’s summer program.",
    image: "/Tutors/Dr. Megan Robb.jpeg"
  },
  {
    id: 13,
    name: "Dr. Hannah Maslen",
    role: "Research fellow at Oxford Martin School at Oxford University",
    description: "She holds a PhD in Law and has published in the realms of legal theory and the philosophy of punishment. She delivered a lecture on ‘Modernity and Technological Progress’ at the Oxford Institute’s summer program.",
    image: "/Tutors/Dr. Hannah Maslen.jpg"
  },
  {
    id: 14,
    name: "Dr. Helen De Cruz",
    role: "Research fellow at the Faculty of Philosophy at Oxford University",
    description: "Her areas of expertise include the philosophy of cognitive science, philosophy of religion, and naturalistic approaches to epistemology. Her research aims to answer, “Is it reasonable (for humans) to hold religious beliefs?”",
    image: "/Tutors/Dr. Helen De Cruz.jpeg"
  },
  {
    id: 15,
    name: "Edwards Ackins",
    role: "Masters in US History degree from Oxford University",
    description: "He is studying towards a Ph.D. He is researching Richard Nixon's “Southern Strategy” in the presidential elections of 1968 and beyond.",
    image: "/Tutors/Edwards Ackins.jpeg"
  },
  {
    id: 16,
    name: "Maria Pereve Dentseva",
    role: "BA in Music from Oxford University",
    description: "She taught Music and French at the Oxford Institute. Her interests include French and German modernism and contemporary electronic and digitized music—areas she hopes to pursue at the postgraduate level",
    image: "/Tutors/Maria Pereve Dentseva.jpeg"
  },
  {
    id: 17,
    name: "Julia Mallett",
    role: "BSc Natural Sciences, Department of Education, Oxford University",
    description: "She holds a BSc in Natural Sciences and has completed two placements at secondary schools teaching O and A Level students. She taught Chemistry at Oxford Institute’s summer program.",
    image: "/Tutors/Julia Mallett.png"
  },
  {
    id: 18,
    name: "Monica Enescu",
    role: "PhD candidate at the Department of Engineering Science at Oxford University",
    description: "Her research focuses on non-rigid registrations of time-series data. Monica taught Information Technology and Engineering during the Oxford Summer Programme.",
    image: "/Tutors/Monica Enescu.jpeg"
  },
  {
    id: 19,
    name: "Hannah Penny",
    role: "BA (Hons) degree in English Literature from the University of Cambridge",
    description: "She has led English Literature workshops under the Outreach Programme at St. John’s College, Cambridge, and taught English Language and English Literature during Oxford Institute’s Summer Programme.",
    image: "/Tutors/Hannah Penny.png"
  },
  {
    id: 20,
    name: "Dr. Junsong Lin",
    role: "PhD in Particle Physics at the University of Oxford",
    description: "His research interest is in dark matter direct detection, which is one of the most challenging problems in modern physics. Junsong taught Physics at Oxford Institute’s summer program.",
    image: "/Tutors/Junsong Lin.jpg"
  },
  {
    id: 21,
    name: "Dr. Rinchan Mirza",
    role: "Administration Lead",
    description: "He leads the administration team and is in charge of the smooth running of the Programme. Rinchan has vast experience in teaching and research at Oxford University and has also worked in a major consulting firm.",
    image: "/Tutors/Dr. Rinchan Mirza.jpg"
  },
  {
    id: 22,
    name: "Dr. Maurizio Tinnirello",
    role: "PhD in Politics and International Relations",
    description: "He has tutored students at Cambridge, Columbia, and Oxford Universities. He has over four years of teaching experience and has taught politics and international relations at the Oxford Institute.",
    image: "/Tutors/Dr. Maurizio Tinnirello.jpg"
  }
];


const TutorsGuestsLectures = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(tutorsData.length / slidesPerView);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-offWhite py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FFD700] mb-8 font-enriqueta">
          Tutors & Guest Lecturers
        </h2>
        
        {/* Description Text */}
        <p className="text-textColor font-roboto text-justify mx-auto my-4">
        All our tutors are former or current Lecturers or researchers at the University of Oxford. Our tutors have experience teaching undergraduate students of Oxford University. This means that the participants of the summer programme will receive the best quality learning. We are proud to involve highly qualified and passionate people at our summer programs for the past 10 years. They motivate students to explore and enhance their academic abilities and creative talents. Participants aspiring to a world-class experience and education can be sure to receive great mentorship while in Oxford. The tutors who have taught various courses at our summer programme are listed below, however this is not an exhaustive list and includes only a few of the tutors who have taught at the Oxford Institute.</p>

        <hr className="border-b-2  border-mainYellow mb-16" />


        {/* Tutors Slider */}
        <div className="relative">
          <div className="flex transition-transform duration-300 gap-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutorsData.slice(activeSlide * slidesPerView, (activeSlide * slidesPerView) + slidesPerView).map((tutor) => (
                <div key={tutor.id} className="flex items-start gap-8">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      fill
                      className="object-cover rounded-full CardDeop"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-mainBlue font-enriqueta mb-2">
                      {tutor.name}
                    </h3>
                    <p className="text-lg text-mainBlue font-poppins mb-4">{tutor.role}</p>
                    <p className="text-textColor font-roboto text-justify leading-relaxed">
                      {tutor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-[#FFD700]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex gap-4 ml-8">
              <button
                onClick={handlePrev}
                className="p-2 text-gray-600 hover:text-[#FFD700] transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 text-gray-600 hover:text-[#FFD700] transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsGuestsLectures;