import HeroSectionOrganization from "@/app/components/about/our-organization/HeroSectionOrganization"
import About from "@/app/components/about/our-organization/About"
import WhyOxford from "@/app/components/about/our-organization/WhyOxford"
import UniOxford from "@/app/components/about/our-organization/UniOxford"
import CityOxford from "@/app/components/about/our-organization/CityOxford"
// import HeroSectionShared from "@/app/components/shared/HeroSectionShared"

const page = () => {
    return (
      <>
        <HeroSectionOrganization />
        {/* <HeroSectionShared textWhite="OUR" textYellow="ORGANIZATION" imagePath="/Our Organization Page/hero.png"/> */}
        <About />
        <WhyOxford />
        <UniOxford />
        <CityOxford />
      </>
    )
  }
  
  export default page