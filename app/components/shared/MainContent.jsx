import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainContent = ({ content, viewCourse=false }) => {
  return (
    <div className="w-full flex flex-col space-y-8">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:justify-between ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } space-y-6 md:space-y-0 md:space-x-0`}
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
          <div className="max-w-lg md:max-w-[633px]">
            <h2 className="text-mainBlue text-2xl md:text-[42px] py-4 font-enriqueta font-bold mb-4">
              {item.heading}
            </h2>
            <p className="text-textColor md:text-[18px] pb-4 font-poppins leading-relaxed text-justify">
              {item.text}
            </p>
            {
              viewCourse && (
                <Link
      href={item.link}
      className={`
        border border-mainYellow
        rounded-[8px]
        text-textColor
        font-poppins 
        text-[16px] 
        font-medium 
        bg-transparent 
        px-4
        py-2
        inline-flex
        items-center 
        justify-center
        whitespace-nowrap
        
      `}
    >
      View Course
    </Link>
              )
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
