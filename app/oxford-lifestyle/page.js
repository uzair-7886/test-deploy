import HeroSectionLifestyle from "../components/oxford-lifestyle/HeroSectionLifestyle"
import AboutLifestyle from "../components/oxford-lifestyle/AboutLifestyle"
import LifestyleCards from "../components/oxford-lifestyle/LifestyleCards"
import ExtraCurricular from "../components/oxford-lifestyle/ExtraCurricular"
import LifestyleNavigation from "./LifestyleNavigation"

const page = () => {
  return (
    <>
        <HeroSectionLifestyle />
        <LifestyleNavigation />
        <AboutLifestyle />
        <section id="facilities">

        <LifestyleCards/>
        </section>
        <section id="extracurricular">
        <ExtraCurricular/>
        </section>
    </>
  )
}

export default page
