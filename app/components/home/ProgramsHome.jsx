// ProgramsHome.jsx
import React from 'react'
import ProgramCard from './ProgramCard'

const ProgramsHome = () => {
  const programsData = [
    {
      id: 1,
      imageSrc: '/homepage/oxford-fg.jpg',
      title: 'Camp For Juniors',
      ageGroup: 'AGES 12-15',
      description:
        'Our Juniors are enrolled in MYP or preparing for their IGCSE, GCSE, O levels or other local examination systems...',
    },
    {
      id: 2,
      imageSrc: '/homepage/oxford-fg.jpg',
      title: 'Camp For Seniors',
      ageGroup: 'AGES 16-19',
      description:
        'Our Seniors are enrolled in IB, CP, O or A levels, IGCSE, GCSE or other local examination systems...',
    },
    {
      id: 3,
      imageSrc: '/homepage/oxford-fg.jpg',
      title: 'University Students',
      ageGroup: 'AGES 19-25',
      description:
        'Students enrolled in undergrad or postgraduate degrees in different universities around the world...',
    },
    {
      id: 4,
      imageSrc: '/homepage/oxford-fg.jpg',
      title: 'Executive Program',
      ageGroup: 'AGES 28+',
      description:
        'Suitable for entrepreneurs, business persons, representatives of public & private sector organizations...',
    },
  ]

  return (
    <section className="py-12 bg-offWhite">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-mainYellow text-[42px] mb-8 font-enriqueta">
          Our Programs
        </h2>

        {/* ** Horizontal scroll on mobile, grid/wrap on larger screens ** */}
        <div className="overflow-x-auto">
          {/* 
            flex-nowrap on small screens => horizontal scrolling
            md:flex-wrap on medium+ => wraps into multiple rows
          */}
          <div className="overflow-x-auto scrollbar-hide py-10">
  <div className="flex flex-nowrap gap-4">
    {programsData.map((item) => (
      <ProgramCard key={item.id} program={item} />
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default ProgramsHome
