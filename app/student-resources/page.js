import HeroSectionSR from "../components/student-resources/HeroSectionSR";
import StudentResourcesNavigation from "./StudentResourcesNavigation";
import SafetyContent from "../components/student-resources/SafetyContent";
import RulesRegulations from "../components/student-resources/RulesRegulations";
import FAQ from "../components/student-resources/FAQ";

const page = () => {
  return (
    <>
      <HeroSectionSR />
      <StudentResourcesNavigation />
      <div id="health-safety">
        <SafetyContent />
      </div>
      <div id="rules-regulations">
        <RulesRegulations />
      </div>
      <div id="faqs">
        <FAQ />
      </div>
    </>
  );
};

export default page;
