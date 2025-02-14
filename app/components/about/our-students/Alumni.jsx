"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";


function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Set the initial state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listener callback
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

// Helper function to chunk array
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Alumni = () => {
  // 2) Use your custom hook to see if screen is >= 768px
  const isMediumUp = useMediaQuery("(min-width: 768px)");

  // Decide how many cards per slide
  const cardsPerSlide = isMediumUp ? 4 : 2;

  // 3) Chunk alumniData according to screen size
  const slides = chunkArray(alumniData, cardsPerSlide);

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to previous slide (wrap around if desired)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Move to next slide (wrap around if desired)
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Jump to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full px-4 py-16 bg-white font-roboto">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-mainYellow text-3xl sm:text-4xl font-bold text-center mb-8 font-enriqueta">
          Alumni
        </h2>
        <p className="text-gray-600 text-center mb-16">
          Every year the Oxford Institute summer camp attracts talented students
          from various different parts of the world. Many of our former students
          made it to Oxbridge and some of the top Ivy League Universities and
          have great success stories to share – academically and beyond.
        </p>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slideGroup, idx) => (
              // Each "slide" holds up to 2 or 4 items
              <div
                key={idx}
                className="w-full flex-shrink-0 flex justify-center gap-6"
              >
                {slideGroup.map((alumnus) => (
                  <div
                    key={alumnus.id}
                    className="w-[250px] relative bg-mainBlue text-white shadow-lg overflow-hidden rounded-[12px] mt-4 mb-8"
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
                    {/* White background text div */}
                    <div className="absolute -bottom-4 rounded-tr-[15px] border-mainYellow border-[1px] bg-white p-4 w-[85%] ">
                      <h3 className="text-lg font-bold text-mainBlue">
                        {alumnus.name}
                      </h3>
                      <p className="text-sm text-[#4C4C4D]">
                        Country of Origin: {alumnus.country}
                      </p>
                      <p className="text-sm text-[#4C4C4D]">Batch {alumnus.batch}</p>
                      <p className="text-sm text-[#4C4C4D]">
                        Studies at {alumnus.university}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2
                       p-2 text-gray-600 hover:text-mainYellow transition-colors"
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

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2
                       p-2 text-gray-600 hover:text-mainYellow transition-colors"
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

        {/* Dots: one per slide */}
        <div className="flex justify-center mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-mainYellow" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
