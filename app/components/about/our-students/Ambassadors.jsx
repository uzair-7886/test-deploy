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
    name: "Alyazi Almuhairi",
    role: "Country of Origin: UAE",
    description: "Being at Oxford was truly a blessing and an amazing opportunity that I would highly recommend anyone that is able to participate in this program. I say this is where you can truly experience one-on-one conversations, contribution and learning from some of the most brilliant minds of the current world. Having the pleasure to participate in different activities together was a beautiful experience, making lifelong friends in the process of it all.",
    image: "/Our Students/alyazi.png"
  },
  {
    id: 2,
    name: "Stephanie Habis",
    role: "Country of Origin: Lebanese",
    description: "As a proud Lebanese, I am thrilled to bring the rich culture and spirit of Lebanon to the global stage as a Brand Ambassador. My experience at The Oxford Institute Summer Program has been a unique opportunity to connect with students from around the world, allowing me to share Lebanon's vibrant traditions, breathtaking landscapes, and warm hospitality. I want others to feel the creativity, resilience, and beauty that define my country. Being here has deepened my passion for cross-cultural exchange, and I look forward to building connections that celebrate Lebanon's unique story and legacy.",
    image: "/Our Students/Stephaine Habis.png"
  },
  {
    id: 3,
    name: "Sirine Dib",
    role: "Country of Origin: Morocco",
    description: "I'm Sirine Dib, a proud Moroccan, and studying at Oxford allowed me to connect with a diverse student body while sharing the vibrant traditions of Morocco, from our festivals to our cuisine. This experience wasn't just about cultural exchange; it was a chance to invite others to feel the warmth of Moroccan heritage. The highlight of my journey was building connections across backgrounds, developing leadership and communication skills, and creating a meaningful impact within the university. Being an ambassador deepened my pride and fostered friendships, and I encourage others to represent their culture and be a voice for their communities.",
    image: "/Our Students/Sirine Dibs.png"
  }
];

const Ambassadors = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(tutorsData.length / slidesPerView);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FFD700] mb-8 font-enriqueta">
          Ambassadors
        </h2>
        
        {/* Description Text */}
        <p className="text-textColor font-roboto text-justify mx-auto my-4">
         Each year, we select student ambassadors in various countries to help prospective students connect with Oxford Summer Program alumni and ask any questions they may have about the summer camp. This provides a great opportunity for students to gain firsthand knowledge about the program and clarify any doubts. To reach an ambassador, please email us at info@theoxfordinstitute.co.uk, mentioning the name of the ambassador you’d like to contact.</p>

        <hr className="border-b-2  border-mainYellow mb-16" />


        {/* Tutors Slider */}
        <div className="relative">
          <div className="flex transition-transform duration-300 gap-8">
            <div className="w-full grid grid-cols-1  gap-8">
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

export default Ambassadors;