import HeroSectionPrograms from "@/app/components/about/our-programs/HeroSectionPrograms"
import AboutPrograms from "@/app/components/about/our-programs/AboutPrograms"
import DownloadPrograms from "@/app/components/about/our-programs/DownloadPrograms"
import Subjects from "@/app/components/about/our-programs/Subjects"
import AgeGroups from "@/app/components/about/our-programs/AgeGroups"
import EducationSystems from "@/app/components/about/our-programs/EducationSystems"

const page = () => {
  return (
    <>
    <HeroSectionPrograms/>
    <AboutPrograms/>
    <DownloadPrograms/>
    <Subjects/>
    <AgeGroups/>
    <EducationSystems/>
    </>
  )
}

export default page
