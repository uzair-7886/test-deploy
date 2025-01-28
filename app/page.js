import HeroSectionHome from "./components/home/HeroSectionHome";
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
      <ProgramsHome />
      <OxfordExperience />
      <OxfordLeadership />
       <SubjectsHome />
      <GalleryHome />
      <Testimonials />
      <DownloadSection />
      <ProgramsDownload /> 
  </>
  );
}
