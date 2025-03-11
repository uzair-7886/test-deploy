import HeroSectionOrganization from "@/app/components/about/our-organization/HeroSectionOrganization"
import About from "@/app/components/about/our-organization/About"
import WhyOxford from "@/app/components/about/our-organization/WhyOxford"
import UniOxford from "@/app/components/about/our-organization/UniOxford"
import CityOxford from "@/app/components/about/our-organization/CityOxford"
import OrganizationNavigation from "@/app/components/about/our-organization/OrganizationNavigation"
// import HeroSectionShared from "@/app/components/shared/HeroSectionShared"

const page = () => {
    return (
      <>
      {/* <section id="hero-section-organization"> */}
        <HeroSectionOrganization />
      {/* </section> */}
      {/* <section id="organization-navigation"> */}
        <OrganizationNavigation />
      {/* </section> */}
      {/* <section id="hero-section-shared">
        <HeroSectionShared textWhite="OUR" textYellow="ORGANIZATION" imagePath="/Our Organization Page/hero.png"/>
      </section> */}
      {/* <section id="about"> */}
        <About />
      {/* </section> */}
      <section id="why-oxford">
        <WhyOxford />
      </section>
      <section id="uni-oxford">
        <UniOxford />
      </section>
      <section id="city-oxford">
        <CityOxford />
      </section>
      </>
    )
  }
  
  export default page