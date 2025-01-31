import HeroSectionStudents from "@/app/components/about/our-students/HeroSectionStudents"
import AboutStudents from "@/app/components/about/our-students/AboutStudents"
import Testimonials from "@/app/components/shared/Testimonials"
import Ambassadors from "@/app/components/about/our-students/Ambassadors"
import Alumni from "@/app/components/about/our-students/Alumni"

const page = () => {
  return (
    <>
      <HeroSectionStudents />
      <AboutStudents />
      <Testimonials />
      <Ambassadors />
      <Alumni/>
    </>
  )
}

export default page
