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
    name: "Inti Mantripp",
    role: "Tutor - Lecturer",
    description: "Inti has a degree in Physics and Philosophy from King's College London, and Masters Degrees in Statistics from the University of Edinburgh and Mathematical Modelling and Scientific Computing from the University of Oxford. At the Oxford Institute, Inti delivers lectures and courses in Finance and Critical Thinking.",
    image: "/homepage/oxford-fg.jpg"
  },
  {
    id: 2,
    name: "Ashlee Stetter",
    role: "Tutor - Lecturer",
    description: "Ashlee holds a Master of Science in Diplomatic Studies from Oxford and is a U.S-trained and licensed attorney specialising in international law. She currently lectures at the University of Cambridge, Boston University, and Vermont Law School, bringing a focus on practical problem-solving to her teaching.",
    image: "/homepage/oxford-fg.jpg"
  },
  {
    id: 3,
    name: "John Smith",
    role: "Tutor - Lecturer",
    description: "John holds a doctorate in Mathematics from Oxford University and specializes in advanced calculus and statistics. He brings over 10 years of teaching experience to our summer programs.",
    image: "/homepage/oxford-fg.jpg"
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Tutor - Lecturer",
    description: "Emma is a Rhodes Scholar with a PhD in Literature from Oxford. She specializes in Victorian literature and creative writing, bringing both academic rigor and creative inspiration to her classes.",
    image: "/homepage/oxford-fg.jpg"
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