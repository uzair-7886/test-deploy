import React from 'react';
import Image from 'next/image';
import ButtonOutlined from '../shared/ButtonOutlined';

const HeroSectionHome = () => {
  return (
    // Using fixed heights for different breakpoints instead of min-h-screen
    <div className="relative w-full h-[1000px] md:h-[700px] lg:h-[700px] bg-mainBlue border-b-2 border-mainYellow">
      {/* Background Image */}
      <Image
        src="/HomePage/hero.jpg"
        alt="Oxford Background"
        fill
        className="object-cover opacity-10"
        priority
      />
      
      {/* Content Container */}
      <div className="relative max-w-7xl container mx-auto px-4 py-8 md:py-20 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Content */}
        <div className="max-w-xl w-full lg:w-auto mb-8 lg:mb-0">
          <h1 className="text-white text-[50px] md:text-[50px] font-enriqueta mb-4 md:mb-6 text-center lg:text-left font-bold">
            OXFORD <span className="text-mainYellow">SUMMER</span><br />
            PROGRAM
          </h1>
          <p className="text-white text-sm md:text-[16px] font-roboto mb-6 md:mb-8 text-center lg:text-left">
            Join the Oxford Institute's Exclusive On-campus Summer Programs.<br className="hidden md:block" />
            Oxford Summer Program (Limited Seats Available)
          </p>
          
          {/* Program Details */}
          <div className="space-y-4 md:space-y-5 mb-6 md:mb-8 font-roboto text-white">
            <div className="flex items-start">
              <Image
                src="/homepage/calendar.svg"
                alt="Calendar Icon"
                width={20}
                height={20}
                className="mt-1 mr-2 w-4 md:w-5"
              />
              <div>
                <p className="text-base md:text-[18px] font-semibold leading-tight">
                  20th Jul - 1st Aug 2025
                </p>
                <p className="text-sm md:text-[16px]">
                  (Location: St Anne&apos;s College, University of Oxford)
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Image
                src="/homepage/calendar.svg"
                alt="Calendar Icon"
                width={20}
                height={20}
                className="mt-1 mr-2 w-4 md:w-5"
              />
              <div>
                <p className="text-sm md:text-[16px]">
                  Executive Leadership Program
                </p>
                <p className="text-base md:text-[18px] font-semibold leading-tight">
                  5th July - 12th July 2025
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Image
                src="/homepage/calendar.svg"
                alt="Calendar Icon"
                width={20}
                height={20}
                className="mt-1 mr-2 w-4 md:w-5"
              />
              <div>
                <p className="text-sm md:text-[16px]">
                  Oxford China Summer Program
                </p>
                <p className="text-base md:text-[18px] font-semibold leading-tight">
                  Jul - Aug 2025
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <ButtonOutlined href="/application">Apply Now</ButtonOutlined>
          </div>
        </div>
        
        {/* Right Video */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[519px] lg:w-[703px] rounded-[30px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/HomePage/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
