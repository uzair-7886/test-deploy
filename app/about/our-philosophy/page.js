import HeroSectionPhilosophy from "@/app/components/about/our-philosophy/HeroSectionPhilosophy"
import AboutPhilosophy from "@/app/components/about/our-philosophy/AboutPhilosophy"
import OurVision from "@/app/components/about/our-philosophy/OurVision"
import OurMission from "@/app/components/about/our-philosophy/OurMission"
import TeachingPhilosophy from "@/app/components/about/our-philosophy/TeachingPhilosophy"
import OurValues from "@/app/components/about/our-philosophy/OurValues"
import PhilosophyNavigation from "@/app/components/about/our-philosophy/PhilosophyNavigation"


const page = () => {
  return (
    <>
      <HeroSectionPhilosophy />
      <PhilosophyNavigation />
      <AboutPhilosophy/>
      <section id="teaching-philosophy">
        <TeachingPhilosophy />
      </section>
      <section id="vision">
        <OurVision /> 
      </section>
      <section id="mission">
        <OurMission />
      </section>
      <section id="values">
        <OurValues />
      </section>
    </>
  )
}

export default page
