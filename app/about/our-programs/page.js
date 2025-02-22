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
  <div id="age-groups">
    <AgeGroups/>
  </div>
  <div id="education-systems">
    <EducationSystems/>
  </div>
</>

  )
}

export default page
