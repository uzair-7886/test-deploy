import React from 'react';

const HeroSectionPhilosophy = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(7, 41, 78, 0.1), rgba(7, 41, 78, 0.8)),
            linear-gradient(360deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.6) 100%),
            url('/Our Philosphy/Banner.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply, normal, normal'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-60  text-white leading-tight">
            OUR <span className="text-mainYellow">PHILOSOPHY</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionPhilosophy;
