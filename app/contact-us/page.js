import HeroSectionContact from "../components/contact-us/HeroSectionContact"
import ContactForm from "../components/contact-us/ContactForm"
import LocationComponent from "../components/contact-us/LocationComponent"
import ContactNavigation from "../components/contact-us/ContactNavigation"

const page = () => {
  return (
    <>
        <HeroSectionContact />
        <ContactNavigation />
        <section id="contact-form">
            <ContactForm />
        </section>
        <section id="location">
            <LocationComponent />
        </section>
    </>
  )
}

export default page
