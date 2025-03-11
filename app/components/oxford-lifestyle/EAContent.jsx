import React from "react";
import Image from "next/image";
import Link from "next/link";

const EAContent = ({ content, viewCourse = false }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col space-y-12">
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Left Content Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-start space-y-12">
          {content.map((item, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-mainBlue text-2xl md:text-[28px] font-enriqueta font-bold">
                {item.heading}
              </h2>
              <p className="text-textColor md:text-[16px] font-poppins leading-relaxed text-justify">
                {item.text}
              </p>
              {viewCourse && (
                <Link
                  href={item.link}
                  className="border border-mainYellow rounded-[8px] text-textColor font-poppins text-[16px] font-medium bg-transparent px-4 py-2 inline-flex items-center justify-center whitespace-nowrap"
                >
                  Apply Now
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-2/5 flex flex-col CardShadow2 rounded-br-[30px] rounded-bl-[30px]">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.heading}
                layout="fill"
                objectFit="cover"
                className={`${
                  index === 0 ? "rounded-t-[30px]" : ""
                } ${index === content.length - 1 ? "rounded-b-[30px]" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EAContent;
