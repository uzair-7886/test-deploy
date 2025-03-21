import React from 'react';
import Image from 'next/image';

const TeachingPhilosophy = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center px-6 ">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-mainYellow text-3xl md:text-[42px] font-bold font-enriqueta leading-tight uppercase mb-4">
            Our Teaching Philosophy
          </h2>
          <p className="text-textColor text-base md:text-[16px] leading-relaxed font-roboto mb-6 text-justify">
            "Educating the mind without educating the heart is no education at all." — Brad
            Henry. At the Oxford Summer Camp, we inspire curiosity, imagination, and
            self-confidence, fostering holistic learning that goes beyond the classroom. Our
            approach encourages critical thinking, broadens perspectives, and empowers students
            to take charge of their intellectual journeys. We incorporate Oxford University’s
            renowned tutorial system, placing students in small groups of 1 to 3 for intensive,
            personalized sessions with leading scholars. Special lectures by esteemed Oxford
            professors expose students to advanced topics like Optogenetics and Moral Philosophy,
            enriching their academic experience. Our program also focuses on leadership,
            communication, and research skills. Students conduct independent research, write
            essays, and deliver presentations, while debating modules led by Oxford Union experts
            refine public speaking. Admissions counselling and career workshops further equip
            students for future success.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[562px] h-[300px] md:h-[423px] mt-8 md:mt-0 md:ml-12">
          <Image
            src="/Our Philosphy/Teaching Philosphy.jpg"
            alt="Teaching Philosophy"
            layout="fill"
            objectFit="cover"
            className="rounded-[30px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TeachingPhilosophy;
