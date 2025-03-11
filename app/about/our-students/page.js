import HeroSectionStudents from "@/app/components/about/our-students/HeroSectionStudents"
import AboutStudents from "@/app/components/about/our-students/AboutStudents"
import Testimonials from "@/app/components/shared/Testimonials"
import Ambassadors from "@/app/components/about/our-students/Ambassadors"
import Alumni from "@/app/components/about/our-students/Alumni"
import StudentsNavigation from "@/app/components/about/our-students/StudentsNavigation"

const page = () => {
  return (
    <>
      <HeroSectionStudents />
      <StudentsNavigation />
      <AboutStudents />
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="ambassadors">
        <Ambassadors />
      </section>
      <section id="alumni">
        <Alumni />
      </section>
      {/* <Testimonials />
      <Ambassadors />
      <Alumni/> */}
    </>
  )
}

export default page
