import HeroSectionTeam from "@/app/components/about/our-team/HeroSectionTeam"
import Deans from "@/app/components/about/our-team/Deans"
import AboutTeam from "@/app/components/about/our-team/AboutTeam"
import AcademicCoordinator from "@/app/components/about/our-team/AcademicCoordinator"
import HeadOperations from "@/app/components/about/our-team/HeadOperations"
import Administration from "@/app/components/about/our-team/Administration"
import TeamNavigation from "@/app/components/about/our-team/TeamNavigation"
import CountryCoordinator from "@/app/components/about/our-team/CountryCoordinator"
import TutorsGuestsLectures from "@/app/components/about/our-team/TutorsGuestsLectures"

const Page = () => {
  return (
    <>
      <HeroSectionTeam />
      <TeamNavigation />
      <AboutTeam />
      <section id="deans">
        <Deans />
      </section>
      <section id="academic-coordinator">
        <AcademicCoordinator />
      </section>
      <section id="administration">
        <Administration />
      </section>
      <section id="head-operations">
        <HeadOperations />
      </section>
      <section id="tutor-lecturers">
        <TutorsGuestsLectures />
      </section>
      <section id="country-coordinators">
        <CountryCoordinator />
      </section>
    </>
  );
};

export default Page;