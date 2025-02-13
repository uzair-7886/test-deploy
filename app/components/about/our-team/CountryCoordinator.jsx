"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// 1) A small hook to detect if we’re on a “mobile” viewport
function useIsMobile(breakpoint = 640) {
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

// 2) Helper: active card = 600px (desktop) or 320px (mobile); inactive is smaller
function getWidths(activeIndex, dataLength, isMobile) {
  const inactiveWidth = isMobile ? 260 : 400;
  const activeWidth = isMobile ? 320 : 600;
  const widths = new Array(dataLength).fill(inactiveWidth);
  widths[activeIndex] = activeWidth;
  return widths;
}

// 3) Sample data
const testimonialData = [
  {
    id: 1,
    name: "Natalie Stetser",
    country: "USA",
    image: "/Coordinators/Natalie.png",
    text: "Natalie is a graduate of Rutgers University. She spent three summers leading educational and volunteer trips with high school students abroad to Ecuador, Peru, and Costa Rica. She has taught Spanish and English for over 10 years, ranging from the elementary to university level."
  },
  {
    id: 2,
    name: "Yujiao Zhang",
    country: "China",
    image: "/Coordinators/Yujiao.png",
    text: "Yujiao holds a Masters degree in Management and Information Systems from the University of Manchester and now works as a management consultant for Global Fortune 500 clients. He brings over 15 years of experience in teaching, training, and talent performance both within China and internationally in India, Germany, and England. Yujiao has been working with the Oxford Institute for over 7 years now."
  },
  {
    id: 3,
    name: "Marina Zhang",
    country: "China",
    image: "/Coordinators/Marina Zhang.jpeg",
    text: "Marina completed her Masters in Information Systems and Management from the University of Warwick and has over 15 years of experience in the education sector in China and South Africa. Marina has been working with the Oxford Institute for over 7 years now."
  },
  {
    id: 4,
    name: "Zahida Afzal",
    country: "Middle East",
    image: "/Coordinators/Zahida.png",
    text: "Zahida Afzal is the Director of Britannia Academia and has extensive corporate experience working in the Middle East. Her passion for education led her to initiate her organization – Britannia Academia – which is committed to educational excellence and empowerment in the Middle East Region. Zahida is a true believer that education should encompass more than just vocational training; it should also instill values, critical thinking skills, empathy, and a sense of purpose. We share the same goal of empowering young people not only to excel in their careers but also to lead fulfilling and meaningful lives, contributing positively to society and finding personal fulfillment beyond financial success."
  },
  {
    id: 5,
    name: "Masoud Shaghaghi",
    country: "Iran",
    image: "/Coordinators/Masoud.png",
    text: "Masoud is the operational manager of Goldis Language Institute, the biggest language learning center in northwest Iran. He completed his PhD in applied linguistics at Erfurt University in Germany and has previously taught at summer schools in Oxford."
  },
  {
    id: 6,
    name: "Esther Wanjau",
    country: "Kenya",
    image: "/Coordinators/Esther Wanjau.jpeg",
    text: "Esther has maintained sustained engagement with the education sector at the Government of Kenya. She holds a Masters Degree in Management Information Systems from the University of Manchester."
  },
  {
    id: 7,
    name: "Aygul Abiz",
    country: "Turkey",
    image: "", 
    text: "Aygül is a native British TESOL teacher currently living in Izmir, Turkey. She is the proud owner of Little Britain School of English and has over 8 years of experience teaching English as a second language, as well as educational consulting and career coaching."
  },
  {
    id: 8,
    name: "Mona Masoud",
    country: "Bangladesh",
    image: "/Coordinators/Mona.png",
    text: "Ms. Masud is a Canadian Bangladeshi residing in Bangladesh. She completed her International Baccalaureate at Kungsholmens’ Gymnasium in Stockholm, then earned her Bachelor of Commerce degree in Marketing and Management at Concordia University, Montreal. Ms. Mona also completed certifications from Harvard Business School online in leadership and obtained certifications from ICS India in academic counseling. She has vast professional experience guiding student youth through her governance and leadership roles in the education industry."
  },
  {
    id: 9,
    name: "Fareeha Ashraf",
    country: "UAE",
    image: "/Coordinators/Fareeha.png",
    text: "Fareeha holds a degree in Business Administration. She has extensive work experience managing Human Resources and conducting corporate training in the Middle East. She is the Regional Coordinator of the Oxford Summer Camp."
  },
  {
    id: 10,
    name: "Ahmet Ataner",
    country: "Cyprus",
    image: "/Coordinators/Ahmet Ataner.jpeg",
    text: "Following his Masters in Business Administration, Ahmet has worked as a Lecturer and General Secretary of the European University of Lefke in Cyprus. He has also served as Chief Executive Officer of the Cyprus Development Bank, as well as the SOS Children’s Village Kinderdorf International. He is currently running a consultancy firm specializing in international education, careers, and investment and has represented the Oxford Institute in his region for 5 years now."
  },
  {
    id: 11,
    name: "Siraj Al Marafa",
    country: "Iraq",
    image: "/Coordinators/Siraj.jpg",
    text: "Siraj Al Marafa, an esteemed Iraqi entity, empowers businesses and individuals through comprehensive training in accounting, finance, IT, Business Administration, and English, as well as expert consulting in financial management and feasibility studies. Our initiatives include the Masaha and Siraj Business Incubator, dedicated to fostering entrepreneurial success, the Enjaz program, which enhances personal and professional development, and the Mustadam Center, which is committed to sustainable environmental management. At Siraj Al Marafa, we are passionate about driving growth and sustainability in Iraq’s business landscape, supporting our clients every step of the way to achieve their goals."
  }
];


const CountryCoordinator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // 4) Determine if we’re on mobile
  const isMobile = useIsMobile();

  // 5) Carousel control
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  // 6) Calculate widths & offset
  const widths = getWidths(activeIndex, testimonialData.length, isMobile);
  const offset = widths.slice(0, activeIndex).reduce((sum, w) => sum + w, 0);
  const totalWidth = widths.reduce((sum, w) => sum + w, 0);

  return (
    <div className="w-full px-4 py-16 bg-white font-roboto">
      <div className="relative max-w-6xl mx-auto">
        {/* Title + Comma centered and responsive */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
         
          <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-4xl font-enriqueta font-bold text-center">
          Country Coordinator
          </h2>
        </div>

        {/* Carousel Container (overflow hidden) */}
        <div className="relative overflow-hidden">
          {/* Inner Track: total width, flex row, shift left by offset */}
          <div
            className="flex transition-transform duration-300"
            style={{
              width: `${totalWidth}px`,
              transform: `translateX(-${offset}px)`,
            }}
          >
            {testimonialData.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 h-auto py-4 transition-all duration-300 mr-4 last:mr-0"
                  style={{ width: `${widths[index]}px` }}
                >
                  <div
                    className={`rounded-[20px] p-6 shadow-lg border transition-colors h-full
                      ${
                        isActive
                          ? "border-mainYellow bg-white opacity-100 CardDeop"
                          : "border-mainBlue bg-white opacity-70 CardDeopInactive"
                      }`}
                  >
                    {/* Header: Avatar, Name, Country */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-mainBlue">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{testimonial.country}</p>
                      </div>
                    </div>
                    {/* Body: Text */}
                    <p className="text-mainBlue leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 text-mainBlue hover:text-mainYellow transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-mainBlue hover:text-mainYellow transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors
                ${index === activeIndex 
                  ? "bg-mainYellow" 
                  : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCoordinator;
