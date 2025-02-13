import React from 'react';
import Image from 'next/image';

const HeadOperations = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
              <Image
                src= "/Tutors/nazish.png"
                alt="Nazish Gulzar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <h2 className="text-4xl md:text-[42px] font-enriqueta font-bold text-mainYellow mb-6">
              Head Of Operations And Campus Head
            </h2>
            
            <h3 className="text-2xl md:text-[22px] font-roboto font-bold text-mainBlue mb-4">
              Nazish Gulzar
            </h3>

            <p className="text-textColor font-roboto leading-relaxed">
            With nearly two decades of experience in the British education and technology sectors, Nazish brings exceptional expertise in program management, operations, and strategic development. Over the past decade at The Oxford Institute, she has excelled as Head of Operations, overseeing all facets of student affairs, operational logistics, and disciplinary protocols. During the program, Nazish serves as campus head, ensuring seamless operations and an outstanding experience for every student. A keen traveller and painter in her spare time, she has explored diverse parts of the world, including the Middle East, South and Latin America, and South and East Asia. Nazish studied Social Entrepreneurship at Oxford and holds a Master’s degree in Management and Information Systems from the University of Manchester.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadOperations;