import HeroSectionOSP from "./HeroSectionOSP"
import Button from "../components/shared/Button"

const page = () => {
  return (
    <>
      <HeroSectionOSP />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-10 text-mainYellow leading-tight py-4">
        OXFORD SUMMER PROGRAM
        </h1>
        <p className="font-roboto text-textColor justify-center py-4 text-justify ">
        The Oxford Institute’s prestigious Oxford Summer Program 2025 is a two-week residential camp held at St Anne’s College, University of Oxford, from 20th July to 1st August. This program offers students aged 15–19+ an unparalleled opportunity to explore the latest developments and debates in two subjects of their choice. Guided by esteemed academics, tutors, lecturers, and deans from Oxford University, participants experience world-class teaching, innovative learning methods, and an authentic immersion in life at one of the world’s premier institutions.
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
        Program Overview
        </h2>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
        We are dedicated to providing a highly personalized experience through our flagship Oxford Summer Program. With over a decade of experience, this program has been honed and perfected to deliver the finest educational practices. Small cohort sizes ensure each student receives focused attention, while Oxford’s renowned tutorial method allows the curriculum to be tailored to reflect individual interests—sparking intellectual curiosity and fostering critical thinking.
        </p>
        <ul className="list-disc pl-5 font-roboto text-textColor justify-center text-justify">
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Oxford Tutorial Method:</span> Daily one-on-one or small-group sessions designed around students’ interests, encouraging exploration beyond traditional academic boundaries.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Debate Coaching at the Oxford Union:</span> Public speaking and debate training at the historic Oxford Union, enhancing communication and leadership skills.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Admissions Counselling:</span> Expert guidance on applications to leading universities, including Oxford, Cambridge, and Ivy League institutions, equipping students for future academic success.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Cultural and Academic Enrichment:</span> Immersive visits to Oxford colleges, local museums, and historic sites, complemented by an exciting day trip to London.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Exclusive Access to Oxford Facilities:</span> Students have full access to St Anne’s College accommodations, dining halls, tutorial and seminar rooms, lecture halls and sports facilities, providing an authentic Oxford experience.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Holistic Development:</span> A balanced program of academics, cultural exploration, sports, and recreational activities, including punting on the River Cherwell.
          </li>
        </ul>
        <div className="flex justify-center items-center py-4">
        <Button
          href="/application">
          Apply Now
        </Button>
        </div>
      </div>
    </>
  )
}

export default page
