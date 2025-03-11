import React from 'react';
import Image from 'next/image';

const OxfordLifestyle = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="text-center space-y-4">
        {/* Responsive heading sizes */}
        <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-4xl font-enriqueta">
          Oxford Lifestyle
        </h2>
        <p className="text-gray-600 mx-auto max-w-xl font-roboto">
          We offer our students the opportunity to fully immerse themselves in Oxford's
          unique student life, living, dining, and studying at its historic colleges.
        </p>
      </div>
      
      {/* Top row - 3 equal cards (stacks to 1 column on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
          <Image
            src='/HomePage/ca.jpg'
            alt="College Accommodation"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg sm:text-xl font-bold font-poppins">
              College Accommodation
            </h3>
          </div>
        </div>

        <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
          <Image
            src='/HomePage/ea.jpg'
            alt="Extracurricular Activities"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg sm:text-xl font-bold">
              Extracurricular Activities
            </h3>
          </div>
        </div>

        <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
          <Image
            src='/HomePage/de.jpg'
            alt="Dining Experience"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg sm:text-xl font-bold">
              Dining Experience
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom row - 2 cards with different widths (stacks to 1 column on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        <div className="relative w-full h-56 sm:h-64 md:h-80 md:col-span-3 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
          <Image
            src='/HomePage/tf.jpg'
            alt="Teaching Facilities"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg sm:text-xl font-bold">
              Teaching Facilities
            </h3>
          </div>
        </div>

        <div className="relative w-full h-56 sm:h-64 md:h-80 md:col-span-4 rounded-[30px] overflow-hidden shadow-[4px_10px_30px_0px_#0000000F] group">
          <Image
            src='/HomePage/mo.png'
            alt="Magical Oxford"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 imgshadow"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg sm:text-xl font-bold">
              Magical Oxford
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxfordLifestyle;
