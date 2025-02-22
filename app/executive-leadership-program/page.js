import React from 'react'
import HeroSectionELP from './HeroSectionELP'
import Button from "../components/shared/Button"

export default function page() {
  return (
    <>
      <HeroSectionELP />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-10 text-mainYellow leading-tight py-4">
          EXECUTIVE LEADERSHIP PROGRAM
        </h1>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
        The Executive Leadership Program invites leaders from across the globe to connect, learn, and engage with peers facing similar global challenges. This immersive one-week program, held from 5th – 12th July 2025, is crafted to address the pressing issues of today and equip leaders with the practical, forward-thinking skills needed for a sustainable future.
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
          An Opportunity to Step Back and Gain Perspective
        </h2>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
        In a world of constant change, this program offers leaders a unique opportunity to step back, consider the broader picture, and develop strategies for long-term success. Designed as a journey of transformation, the program goes beyond immediate concerns, fostering the foresight and skills necessary to meet future challenges with confidence and resilience.
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
          A Dynamic Learning Experience
        </h2>
        <ul className="list-disc pl-5 font-roboto text-textColor justify-center text-justify">
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Interactive Learning:</span> Engage in an enriching mix of case studies, lectures, and workshops led by world-class educators and industry leaders, offering hands-on skills and insights that drive real impact.

          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Oxford Union Debating Experience:</span> Participate in debates at the historic Oxford Union, where leadership has been nurtured for centuries, producing 28 British Prime Ministers, 57 heads of state, and 58 Nobel laureates.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Networking Opportunities:</span>  Build connections with top professionals across the UK’s thriving tech, government, and business sectors, expanding your global network and deepening your cross-sector insights.

          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Cultural Immersion:</span> Discover the tranquillity of Oxford’s English countryside with traditional punting on the River Cherwell and explore the city’s rich academic and historical heritage through immersive guided tours.

          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Global Expertise:</span>  Learn from leading scholars and accomplished entrepreneurs from the University of Oxford, gaining valuable insights from experts with extensive real-world experience.

          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
          Who Should Attend
        </h2>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
        This program is ideal for CEOs, directors, senior business leaders, young entrepreneurs and managers, executive committee members, heads of business units, senior operational leaders, and policymakers in business development.
        </p>
        <div className="flex justify-center items-center py-4">
          <Button href="/application">
            Apply Now
          </Button>
        </div>
      </div>
    </>
  )
}
