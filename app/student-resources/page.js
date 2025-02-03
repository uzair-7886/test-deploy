import HeroSectionSR from "../components/student-resources/HeroSectionSR"
import SafetyContent from "../components/student-resources/SafetyContent"
import RulesRegulations from "../components/student-resources/RulesRegulations"
import FAQ from "../components/student-resources/FAQ"

const page = () => {
  return (
    <>
      <HeroSectionSR />
      <SafetyContent />
      <RulesRegulations />
        <FAQ />
    </>
  )
}

export default page
