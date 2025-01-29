import HeroSectionPhilosophy from "@/app/components/about/our-philosophy/HeroSectionPhilosophy"
import AboutPhilosophy from "@/app/components/about/our-philosophy/AboutPhilosophy"
import OurVision from "@/app/components/about/our-philosophy/OurVision"
import OurMission from "@/app/components/about/our-philosophy/OurMission"
import TeachingPhilosophy from "@/app/components/about/our-philosophy/TeachingPhilosophy"
import OurValues from "@/app/components/about/our-philosophy/OurValues"


const page = () => {
  return (
    <>
      <HeroSectionPhilosophy />
      <AboutPhilosophy/>
      <TeachingPhilosophy/>
      <OurVision/>
      <OurMission/>
      <OurValues/>
    </>
  )
}

export default page
