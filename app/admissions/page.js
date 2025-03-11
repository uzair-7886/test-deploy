import HeroSectionAdmissions from "../components/admissions/HeroSectionAdmissions";
import AboutAdmissions from "../components/admissions/AboutAdmissions";
import ApplicationProcess from "../components/admissions/ApplicationProcess";
import TeamLeader from "../components/admissions/TeamLeader";
import ProgramsCards from "../components/admissions/ProgramsCards";
import VisaImmigration from "../components/admissions/VisaImmigration";
import AdmissionsNavigation from "./AdmissionsNavigation";

const page = () => {
  return (
    <>
      <HeroSectionAdmissions />
      <AdmissionsNavigation />
      <AboutAdmissions />
      <section id="application-process">
        <ApplicationProcess />
      </section>
      <section id="team-leader">
        <TeamLeader />
      </section>
      <section id="programs-cards">
        <ProgramsCards />
      </section>
      <section id="visa-immigration">
        <VisaImmigration />
      </section>
    </>
  );
};

export default page;
