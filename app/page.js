import HeroSectionHome from "./components/home/HeroSectionHome";
import HomeNavigation from "./components/home/HomeNavigation";
import ProgramsHome from "./components/home/ProgramsHome";
import OxfordExperience from "./components/home/OxfordExperience";
import OxfordLeadership from "./components/home/OxfordLeadership";
import SubjectsHome from "./components/home/SubjectsHome";
import GalleryHome from "./components/home/GalleryHome";
import Testimonials from "./components/shared/Testimonials";
import DownloadSection from "./components/home/DownloadSection";
import ProgramsDownload from "./components/home/ProgramsDownload";

export default function Home() {
  return (
    <>
      <HeroSectionHome />
      <HomeNavigation />
      <section id="programs-home">
        <ProgramsHome />
      </section>
      <section id="oxford-experience">
        <OxfordExperience />
      </section>
      <section id="oxford-leadership">
        <OxfordLeadership />
      </section>
      <section id="subjects-home">
        <SubjectsHome />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery-home">
        <GalleryHome />
      </section>
      <section id="download-section">
        <DownloadSection />
      </section>
      <section id="programs-download">
        <ProgramsDownload />
      </section>
    </>
  );
}
