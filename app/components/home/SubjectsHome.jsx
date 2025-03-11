import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Single card for a subject
const SubjectCard = ({ title, description, image }) => {
  return (
    <div
      className="
        relative
        w-full sm:w-[300px]
        md:h-[580px]
        h-[500px]
        p-3
        flex
        flex-col
        items-start
        mx-auto
      "
    >
      {/* Image container: 294×240, 30px radius, shadow */}
      <div
        className="
          w-full
          h-[240px]
          md:max-w-[294px]
          rounded-[30px]
          overflow-hidden
          shadow-[10px_10px_30px_0px_#00000033]
          flex-shrink-0
          mx-auto
        "
      >
        <Image
          src={image}
          alt={title}
          width={294}
          height={240}
          className="object-cover w-full h-full imgshadow"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#0E2F5A] text-lg font-bold mt-3 mb-1">
        {title}
      </h3>

      {/* Description, scrollable if it overflows */}
      <div className="flex-1 overflow-auto pr-2">
        <p className="text-textColor text-justify text-sm font-roboto">
          {description}
        </p>
      </div>

      {/* Arrow SVG pinned bottom-right, larger size */}
      <Link href={'/subjects'}>
      <img
        src="/homepage/chev.svg"
        alt="Arrow"
        className="
          absolute
          bottom-3
          right-3
          w-10
          h-10
          cursor-pointer
        "
      />
      </Link>
    </div>
  )
}

// Example data array
const subjectsData = [
  {
    title: "STEM",
    description: `
      Oxford’s Summer Program provides students with the unique opportunity 
      to immerse themselves in science and technology, following in the 
      footsteps of innovators like Stephen Hawking and Dorothy Hodgkin. 
      With access to world-class resources and mentorship, participants 
      engage in hands-on learning that fosters creativity and exploration. 
      Our STEM-focused courses equip students.
    `,
    image: "/HomePage/stem.JPG",
  },
  {
    title: "HUMANITIES AND SOCIAL SCIENCES",
    description: `
      Oxford has been the torchbearer of scientific thinking and method 
      for centuries. Equipped with state of the art facilities for 
      scientific research and inquiry, Oxford remains a magnet for the 
      world’s top scientists and scholars. Students will take inspirations 
      from the likes of Stephen Hawking and Dorothy Hodgkins to explore 
      courses in physical sciences.
    `,
    image: "/HomePage/hss.png",
  },
  {
    title: "ARTS AND CREATIVITY",
    description: `
      Oxford has a proud tradition of study in art, music, literature, 
      philosophy, religion, history and other related subjects. It has 
      contributed immensely to our understanding of various aspects 
      of human society and culture. Students will follow in the footsteps 
      of the likes of J. R. Tolkien, T. S. Eliot, Christopher Hitchens, 
      Oscar Wilde, Emily Davison
    `,
    image:  "/HomePage/arts.png",
  },
  {
    title: "LEADERSHIP AND BUSINESS",
    description: `
      Oxford has been a global hub for the study of social sciences. In 
      particular, study subjects such as politics, economics, law, 
      psychology and others have led to significant advancements in these 
      fields. Some of the famous social scientists associated with Oxford 
      include Adam Smith, Thomas Hobbes and John Locke.
    `,
    image:  "/HomePage/lb.JPG",
  },
]

const SubjectsHome = () => {
  return (
    <div className="bg-offWhite py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading centered, using font-enriqueta */}
        <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-4xl font-enriqueta font-bold mb-8 text-center">
          SUBJECTS
        </h2>

        {/* Grid of subject cards: single column on mobile, four columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
          {subjectsData.map((subject, index) => (
            <SubjectCard
              key={index}
              title={subject.title}
              description={subject.description}
              image={subject.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubjectsHome
