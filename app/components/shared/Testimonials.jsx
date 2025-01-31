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
    name: "Anna Oliynyk",
    country: "Russia",
    image: "/homepage/oxford-fg.jpg",
    text: "In my opinion, the Oxford Summer Program offers students a unique experience with a balance between academic and social activities. I thoroughly enjoyed my stay at Oxford."
  },
  {
    id: 2,
    name: "Aniela Cheon",
    country: "USA",
    image: "/homepage/oxford-fg.jpg",
    text: "My experience here at Oxford has been really amazing. I have met so many new people. It has been really great."
  },
  {
    id: 3,
    name: "Tim",
    country: "Kenya",
    image: "/homepage/oxford-fg.jpg",
    text: "My time in Oxford was remarkable, particularly the engaging debates with my peers. I thoroughly enjoyed them."
  }
];

const Testimonials = () => {
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
          <Image
            src="/homepage/comma.svg"
            alt="Decorative comma"
            width={80}
            height={80}
            className="block"
          />
          <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-4xl font-enriqueta font-bold text-center">
            Testimonials
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
                          : "border-gray-200 bg-white opacity-70 CardDeopInactive"
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

export default Testimonials;
