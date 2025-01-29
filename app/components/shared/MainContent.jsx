import React from "react";
import Image from "next/image";

const MainContent = ({ content }) => {
  return (
    <div className="w-full flex flex-col space-y-8">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:justify-around ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } space-y-6 md:space-y-0 md:space-x-6`}
        >
          {/* Image Section */}
          <div
            className="relative w-full h-[200px] sm:w-[400px] sm:h-[250px] md:w-[562px] md:h-[312px] rounded-[30px] overflow-hidden CardShadow2"
          >
            <Image
              src={item.image}
              alt={item.heading}
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
          {/* Text Section */}
          <div className="max-w-lg">
            <h2 className="text-mainBlue text-2xl md:text-[42px] py-4 font-enriqueta font-bold mb-4">
              {item.heading}
            </h2>
            <p className="text-textColor md:text-[18px] font-poppins leading-relaxed text-justify">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
