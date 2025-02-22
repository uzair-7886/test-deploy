import React from 'react';
import Image from 'next/image';

const OurValues = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-mainYellow text-3xl md:text-[42px] font-bold font-enriqueta leading-tight mb-4">
            Our Values
          </h2>
          <p className="text-textColor text-base md:text-[18px]  leading-relaxed mb-6 font-roboto text-justify">
            "The function of education is to teach one to think intensively and to think
            critically. Intelligence plus character—that is the goal of true education." —
            Through an authentic Oxford experience, we foster a diverse community, lifelong
            connections, and a passion for discovery.
          </p>

          {/* Image */}
          <div className="relative w-full md:w-[100%] h-[300px] md:h-[1325px] rounded-[30px] overflow-hidden  ">
            <Image
              src='/Our Philosphy/values.png'
              alt="Oxford Values"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {[
            {
              title: 'Excellence',
              description:
                'We uphold the highest educational standards, collaborating with distinguished Oxford scholars and global experts to challenge, inspire, and equip students for success.',
            },
            {
              title: 'Personalisation',
              description:
                'We prioritise each student’s unique learning style and academic needs through small group tutorials and tailored instruction, ensuring meaningful growth.',
            },
            {
              title: 'Holistic Development',
              description:
                'We balance rigorous academics with activities like public speaking, debates, sports, and cultural events, encouraging students to enjoy their journey while achieving success.',
            },
            {
              title: 'Authenticity',
              description:
                'Our programs offer a genuine Oxford experience, where students live, study, and dine like Oxford undergraduates, deepening their connection to the university’s heritage.',
            },
            {
              title: 'Curiosity',
              description:
                'We nurture an inquisitive mindset, encouraging students to ask bold questions and pursue a lifelong passion for discovery.',
            },
            {
              title: 'Mentorship',
              description:
                'Our educators provide personalised guidance, helping students navigate their academic journeys with confidence and purpose.',
            },
            {
              title: 'Cultural Enrichment',
              description:
                'We immerse students in diverse cultural experiences, broadening their understanding of global traditions, arts, and histories.',
            },
            {
              title: 'Empathy',
              description:
                'We cultivate empathy, encouraging students to appreciate diverse perspectives and develop compassion in both academic and personal contexts.',
            },
            {
              title: 'Confidence',
              description:
                'Through tailored learning and skill-building, we help students express their ideas, pursue their passions, and lead with confidence.',
            },
            {
                title: 'Exploration',
                description:
                  'We encourage students to explore their academic interests freely, fostering a flexible and open environment for discovery.',
              },
              {
                title: 'Legacy',
                description:
                  'We honour Oxford’s rich legacy while creating our own, blending tradition with innovation to inspire future generations.',
              },
              {
                title: 'Interdisciplinary Learning',
                description:
                  'We promote an interdisciplinary approach, empowering students to connect diverse fields of study and solve complex real-world challenges.',
              },
              {
                title: 'Critical Thinking',
                description:
                  'We inspire analytical thinking, encouraging students to question assumptions, consider different perspectives, and develop informed solutions.',
              },
              {
                title: 'Out-of-the-Box Thinking',
                description:
                  'We celebrate creativity, inspiring students to take risks, challenge norms, and embrace imaginative solutions that push boundaries.',
              },
          ].map((item, index) => (
            <div key={index} className="border-b-[1px] border-mainYellow pb-4">
              <h3 className="text-mainBlue text-lg font-bold font-enriqueta">{item.title}</h3>
              <p className="text-textColor text-sm leading-relaxed font-roboto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
