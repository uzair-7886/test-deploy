import React from 'react'
import Image from 'next/image'

const HeroSectionOrganization = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image using Next.js Image */}
      <Image
        src="/Our Organization Page/hero.png"
        alt="Hero Image"
        fill
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
          linear-gradient(360deg, rgba(0, 0, 0, 0) 63.35%, rgba(0, 0, 0, 0.89) 82.74%, rgba(0, 0, 0, 0.89) 100%)`,
          backgroundBlendMode: 'multiply, normal'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-20 text-white leading-tight font-bold uppercase">
            OUR <span className="text-mainYellow">ORGANIZATION</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionOrganization
