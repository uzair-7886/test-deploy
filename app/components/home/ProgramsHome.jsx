import React from 'react'
import ProgramCard from './ProgramCard'
import Marquee from 'react-fast-marquee'

const ProgramsHome = () => {
  const programsData = [
    {
      id: 1,
      imageSrc: '/HomePage/cj.JPG',
      title: 'Camp For Juniors',
      ageGroup: 'AGES 12-15',
      description:
        'Our Juniors are enrolled in MYP or preparing for their IGCSE, GCSE, O levels or other local examination systems...',
    },
    {
      id: 2,
      imageSrc: '/HomePage/cs.jpg',
      title: 'Camp For Seniors',
      ageGroup: 'AGES 16-19',
      description:
        'Our Seniors are enrolled in IB, CP, O or A levels, IGCSE, GCSE or other local examination systems...',
    },
    {
      id: 3,
      imageSrc: '/HomePage/us.jpg',
      title: 'University Students',
      ageGroup: 'AGES 19-25',
      description:
        'Students enrolled in undergrad or postgraduate degrees in different universities around the world...',
    },
    {
      id: 4,
      imageSrc: '/HomePage/ex.jpg',
      title: 'Executive Program',
      ageGroup: 'AGES 28+',
      description:
        'Suitable for entrepreneurs, business persons, representatives of public & private sector organizations...',
    },
  ]

  return (
    <section className="py-12 bg-offWhite">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-center uppercase text-mainYellow text-[42px] font-enriqueta font-bold pb-4">
          Our Programs
        </h2>
        {/* Marquee container */}
        <Marquee pauseOnHover gradient={false} speed={50}>
          <div className="flex flex-nowrap gap-8 py-4">
            {programsData.map((item, index) => (
              <div
                key={item.id}
                className={`${index === 0 ? "ml-4" : ""} ${index === programsData.length - 1 ? "mr-4" : ""}`}
              >
                <ProgramCard program={item} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default ProgramsHome
