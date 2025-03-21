"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
}

// Alumni data
const alumniData = [
  {
    id: 1,
    name: "Loana Opera",
    country: "Romania",
    batch: "2016",
    university: "University of Oxford",
    image: "/alumni/loana.png",
  },
  {
    id: 2,
    name: "Tina Sang",
    country: "USA",
    batch: "2018",
    university: "University of Oxford",
    image: "/alumni/tina.png",
  },
  {
    id: 3,
    name: "Alvin Gustavi",
    country: "Stockholm, Sweden",
    batch: "2014",
    university: "Lund University",
    image: "/alumni/alvin.png",
  },
  {
    id: 4,
    name: "Hassan Shah",
    country: "UAE",
    batch: "2014",
    university: "Aston University",
    image: "/alumni/hassan.png",
  },
  {
    id: 5,
    name: "Anusha Abbas",
    country: "UK",
    batch: "2014",
    university: "The University of Bristol",
    image: "/alumni/anusha.png",
  },
];

const Alumni = () => {
  const isMediumUp = useMediaQuery("(min-width: 768px)");
  const cardsPerSlide = isMediumUp ? 4 : 2;

  // Current index: leftmost card in view
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum index so we don't slide beyond last card
  const maxIndex = alumniData.length - cardsPerSlide;

  // Move to previous card
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Move to next card
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Jump to a specific "page" via dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full px-4 pb-16 pt-8 bg-white font-roboto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-mainYellow text-3xl uppercase md:text-[42px] sm:text-4xl font-bold text-center mb-8 font-enriqueta">
          Alumni
        </h2>
        <p className="text-textColor text-base text-center mb-16">
          Every year the Oxford Institute summer camp attracts talented students
          from various different parts of the world...
        </p>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Slider track with gap */}
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              width: `${(alumniData.length * 100) / cardsPerSlide}%`,
              transform: `translateX(-${(currentIndex * 100) / cardsPerSlide}%)`,
            }}
          >
            {alumniData.map((alumnus) => (
              <div
                key={alumnus.id}
                className="flex-shrink-0"
                style={{ width: `${100 / alumniData.length}%` }}
              >
                {/* Card */}
                <div
                  className="
                    w-[250px]
                    relative
                    bg-mainBlue
                    text-white
                    shadow-lg
                    rounded-[12px]
                    mt-4
                    mb-8
                    overflow-visible
                  "
                >
                  <div className="w-full h-64 relative">
                    <div className="w-[170px] h-[170px] absolute left-1/2 transform -translate-x-1/2 top-2">
                      <Image
                        src={alumnus.image}
                        alt={alumnus.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                  {/* White background text box */}
                  <div className="absolute -bottom-8 rounded-tr-[15px] border-mainYellow border bg-white p-4 w-[85%] h-[130px]">
                    <h3 className="text-lg font-bold text-mainBlue">
                      {alumnus.name}
                    </h3>
                    <p className="text-sm text-[#4C4C4D]">
                      Country of Origin: {alumnus.country}
                    </p>
                    <p className="text-sm text-[#4C4C4D]">
                      Batch {alumnus.batch}
                    </p>
                    <p className="text-sm text-[#4C4C4D]">
                      Studies at {alumnus.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation (arrows + dots) */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 text-gray-600 hover:text-mainYellow transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-mainYellow" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-2 text-gray-600 hover:text-mainYellow transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
