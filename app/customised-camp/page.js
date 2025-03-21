import HeroSectionCC from "./HeroSectionCC"
import Button from "../components/shared/Button"

const page = () => {
  return (
    <>
      <HeroSectionCC />
      <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta  text-mainYellow leading-tight py-4 uppercase font-bold">
          CUSTOMIZED CAMPS & TRAINING PROGRAMS
        </h1>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
          The Oxford Institute also organizes customized camps and training programs for groups ranging from school students to senior professionals. These programs can be tailored to fit specific requirements, including the number of days, venues, subjects, and specialized academics or experts involved.
        </p>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
          A customized camp requires a minimum of 25 guaranteed participants to ensure feasibility. We have successfully conducted bespoke programs, including Vice Chancellor training fully funded by the British Council and IAT.
        </p>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
          Please email us at <a href="mailto:info@theoxfordinstitute.co.uk" className="text-mainBlue font-bold">info@theoxfordinstitute.co.uk</a> or call <a href="tel:+441865600840" className="text-mainBlue font-bold">+44 (0) 1865 600 840</a> to discuss your needs. Our expert staff will collaborate with you to design a bespoke camp for your group.
        </p>
        <div className="flex justify-center items-center py-4">
          <Button href="/contact-us">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  )
}

export default page
