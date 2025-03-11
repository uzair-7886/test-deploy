import React from 'react'
import Image from 'next/image'

const OxfordLearning = () => {
  return (
    <div className='bg-offWhite font-poppins'>
      <section className="px-8 sm:px-6 md:px-8 py-10 space-y-8 max-w-7xl mx-auto">

        {/* Top row: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {/* Blue Oxford Learning tile with heading and description */}
          <div 
            className="relative w-full h-56 sm:h-64 md:h-80 md:col-span-3 rounded-[30px] overflow-hidden 
                       bg-mainBlue text-white p-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-xl md:text-[46px] leading-tight font-bold mb-2">
                Oxford Learning
              </h3>
              <p className="text-base md:text-lg text-justify">
                We are the only summer program that places Oxford University's unique "tutorial teaching system" at the heart of our teaching approach with the student-to-teacher ratio of 1:3
              </p>
            </div>
          </div>

          {/* Right tile remains unchanged */}
          <div 
            className="relative w-full h-56 sm:h-64 md:h-80 md:col-span-4 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group"
          >
            <Image
              src='/HomePage/tsl.png' 
              alt="Tutorial-Style Learning"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
            />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Tutorial-Style Learning
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom row: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Keynote Lectures */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
            <Image
              src='/HomePage/kl.jpg'  
              alt="Keynote Lectures"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Keynote Lectures
              </h3>
            </div>
          </div>

          {/* Essay Counselling & Presentation Skills */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
            <Image
              src='/HomePage/esp.png'  
              alt="Essay Counselling & Presentation Skills"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Essay Counselling & Presentation Skills
              </h3>
            </div>
          </div>

          {/* Network, Culture & Diversity */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
            <Image
              src='/HomePage/net.png'  
              alt="Network, Culture & Diversity"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Network, Culture & Diversity
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OxfordLearning
