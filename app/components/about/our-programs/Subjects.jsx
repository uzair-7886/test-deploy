import React from 'react';
import Image from 'next/image';
import Button from '../../shared/Button';

const Subjects = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/3">
          <h2 className="text-mainYellow text-3xl md:text-[42px] font-bold font-enriqueta leading-tight mb-4 uppercase">
            Subjects
          </h2>
          {/* Image */}
          <div className="relative w-full md:w-[100%] h-[300px] md:h-[521px] rounded-[30px] overflow-hidden  ">
            <Image
              src='/Our Philosphy/values.png'
              alt="Oxford Values"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-textColor text-justify text-base md:text-[16px]  leading-relaxed mb-6 font-roboto md:py-4">
          At the Oxford Summer Program, students can choose from a wide range of subjects, organised into four main categories. Each student selects two subjects: one as their major and the other as their minor. This allows them to dive deeper into their areas of interest while gaining a broader understanding of different subjects.
          </p>

          
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-6">
          {[
            {
              title: 'STEM',
              description:
                'Oxford’s Summer Program provides students with the unique opportunity to immerse themselves in the fields of science and technology, following in the footsteps of innovators like Stephen Hawking and Dorothy Hodgkin. With access to world-class resources and mentorship, participants engage in hands-on learning that fosters creativity and exploration. Our STEM-focused courses equip students to contribute to future advancements, whether in mathematics, physics, medicine, engineering, or artificial intelligence, building on Oxford’s legacy of scientific excellence.',
                link:"/subjects"
            },
            {
              title: 'Humanities and Social Sciences',
              description:
                'Oxford has a long-standing tradition of leadership in the humanities and social sciences. Through the work of thinkers such as Adam Smith, Thomas Hobbes, and John Locke, the university has shaped critical ideas that influence global society today. In our Summer Program, students dive into subjects like economics, law, politics, and psychology, guided by Oxford’s academic rigour. They’ll explore foundational theories and contemporary challenges, gaining the tools to engage with the complexities of the world and contribute to meaningful change.',
                link:"/subjects"
            },
            {
              title: 'Arts and Creativity',
              description:
                'Oxford’s Summer Program offers students the chance to explore their creative passions, inspired by the university’s rich cultural history. Students will engage with the legacies of literary icons like T.S. Eliot and J.R.R. Tolkien, exploring literature, creative writing, music, and the fine arts. The program nurtures creativity and encourages students to contribute to the global arts landscape, providing an environment where they can express themselves and deepen their understanding of cultural and artistic traditions.',
                link:"/subjects"
            },
            {
              title: 'Leadership and Business ',
              description:
                'Oxford has a rich tradition of developing visionary leaders and entrepreneurs. From global political figures like Winston Churchill and Margaret Thatcher to business innovators, Oxford nurtures talents who go on to shape the world. At the heart of this is the Oxford Union, where students engage in world-class public speaking and debates, refining skills in persuasion, critical thinking, and leadership. In our Leadership and Business courses, students will explore the principles of effective leadership, entrepreneurship, and strategy, guided by Oxford’s legacy of excellence and the expertise of the Oxford Union debaters.',
                link:"/subjects"
            },
            
          ].map((item, index) => (
            <div key={index} className="border-b-[1px] border-mainYellow pb-4">
              <h3 className="text-mainBlue text-lg md:text-[22px] pt-4 font-bold font-enriqueta">{item.title}</h3>
              <p className="text-textColor text-justify text-base leading-relaxed font-roboto py-2">{item.description}</p>
              <Button href={item.link}>View Course</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
