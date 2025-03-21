import React from 'react';

const HeroSectionLeadership = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(7, 41, 78, 0.1), rgba(7, 41, 78, 0.8)),
            linear-gradient(360deg, rgba(0, 0, 0, 0) 63.35%, rgba(0, 0, 0, 0.6) 82.74%, rgba(0, 0, 0, 0.6) 100%),
            url('/Oxford Leadership/banner.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply, normal, normal'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-20 text-white leading-tight font-bold">
            OXFORD <span className="text-mainYellow">LEADERSHIP</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLeadership;