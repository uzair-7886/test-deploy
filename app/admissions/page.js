import HeroSectionAdmissions from "../components/admissions/HeroSectionAdmissions"
import AboutAdmissions from "../components/admissions/AboutAdmissions"
import ApplicationProcess from "../components/admissions/ApplicationProcess"
import TeamLeader from "../components/admissions/TeamLeader"
import ProgramsCards from "../components/admissions/ProgramsCards"
import VisaImmigration from "../components/admissions/VisaImmigration"

const page = () => {
  return (
    <>
    <HeroSectionAdmissions />
    <AboutAdmissions />
    <ApplicationProcess />
    <TeamLeader/>
    <ProgramsCards/>
    <VisaImmigration/>
    </>
  )
}

export default page
