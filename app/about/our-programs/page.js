import HeroSectionPrograms from "@/app/components/about/our-programs/HeroSectionPrograms";
import AboutPrograms from "@/app/components/about/our-programs/AboutPrograms";
import DownloadPrograms from "@/app/components/about/our-programs/DownloadPrograms";
import Subjects from "@/app/components/about/our-programs/Subjects";
import AgeGroups from "@/app/components/about/our-programs/AgeGroups";
import EducationSystems from "@/app/components/about/our-programs/EducationSystems";

import ProgramsNavigation from "./ProgramsNavigation";

const page = () => {
  return (
    <>
      <HeroSectionPrograms />
      <ProgramsNavigation />
      <section id="about">
        <AboutPrograms />
      </section>
      <section id="programs">
        <DownloadPrograms />
      </section>
      <section id="subjects">
        <Subjects />
      </section>
      <section id="age-groups">
        <AgeGroups />
      </section>
      <section id="education-systems">
        <EducationSystems />
      </section>
    </>
  );
};

export default page;
