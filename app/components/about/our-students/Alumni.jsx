"use client";
import React from "react";
import Image from "next/image";

const alumniData = [
  {
    id: 1,
    name: "Loana Opera",
    country: "Romania",
    batch: "2016",
    university: "University of Oxford",
    image: "/homepage/oxford-fg.jpg",
  },
  {
    id: 2,
    name: "Tina Sang",
    country: "USA",
    batch: "2018",
    university: "University of Oxford",
    image: "/homepage/oxford-fg.jpg",
  },
  {
    id: 3,
    name: "Alvin Gustavi",
    country: "Stockholm, Sweden",
    batch: "2014",
    university: "Lund University",
    image: "/homepage/oxford-fg.jpg",
  },
  {
    id: 4,
    name: "Hassan Shah",
    country: "UAE",
    batch: "2014",
    university: "Aston University",
    image: "/homepage/oxford-fg.jpg",
  },
  {
    id: 5,
    name: "Anusha Abbas",
    country: "UK",
    batch: "2014",
    university: "The University of Bristol",
    image: "/homepage/oxford-fg.jpg",
  },
];
const Alumni = () => {
    return (
      <section className="w-full px-4 py-16 bg-white font-roboto">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <h2 className="text-mainYellow text-3xl sm:text-4xl font-bold text-center mb-8 font-enriqueta">
            Alumni
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Every year the Oxford Institute summer camp attracts talented students
            from various different parts of the world. Many of our former
            students made it to Oxbridge and some of the top Ivy League
            Universities and have great success stories to share – academically
            and beyond.
          </p>
  
          {/* Alumni Cards */}
          <div className="flex flex-wrap justify-center gap-8">
          {alumniData.map((alumnus) => (
              <div
              key={alumnus.id}
              className="w-full sm:w-[280px] md:w-[256px] relative bg-mainBlue text-white shadow-lg overflow-hidden rounded-[12px]"
            >
              <div className="w-full h-64 relative">
                <div className="w-[193px] h-[193px] absolute  left-1/2 transform -translate-x-1/2 ">
                  <Image
                    src={alumnus.image}
                    alt={alumnus.name}
                    layout="fill"
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              {/* White background text div */}
              <div className="absolute -bottom-4  rounded-tr-[12px] border-mainYellow border-[1px] bg-white p-4 w-[85%]">
                <h3 className="text-lg font-bold text-mainBlue">{alumnus.name}</h3>
                <p className="text-sm text-[#4C4C4D]">Country of Origin: {alumnus.country}</p>
                <p className="text-sm text-[#4C4C4D]">Batch {alumnus.batch}</p>
                <p className="text-sm text-[#4C4C4D]">Studies at {alumnus.university}</p>
              </div>
            </div>
            
            ))}
          </div>
  
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            <button className="p-2 text-gray-600 hover:text-mainYellow transition-colors">
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
            <div className="flex gap-2 mx-4">
              {alumniData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? "bg-mainYellow" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button className="p-2 text-gray-600 hover:text-mainYellow transition-colors">
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
