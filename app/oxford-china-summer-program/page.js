import HeroSectionOCP from "./HeroSectionOCP"
import Button from "../components/shared/Button"

const page = () => {
  return (
    <>
      <HeroSectionOCP />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-10 text-mainYellow leading-tight py-4">
          OXFORD-CHINA SUMMER CAMP
        </h1>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
          The Oxford Institute’s unique two-week summer program in Chengdu, China, merges Oxford’s academic excellence with China’s rich cultural heritage, offering students a transformative blend of rigorous learning and cultural immersion. Led by tutors from the University of Oxford and organized in collaboration with esteemed Chinese colleagues, the Oxford-China Summer Camp bridges knowledge and cultural boundaries between two global centers of tradition and discovery. Students engage in a one-week academic program focused on developing communication, debating, and critical thinking skills, followed by a week of cultural exploration, including visits to the iconic panda reserves, sampling Sichuan cuisine, and more. This immersive experience provides young students from around the world with a modern, integrated approach to learning and personal growth.
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
          Program Highlights
        </h2>
        <ul className="list-disc pl-5 font-roboto text-textColor justify-center text-justify">
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">World-Class Education:</span> Learn directly from Oxford University tutors, recognized for fostering critical thinking, intellectual curiosity, and communication skills.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Dynamic Location:</span> Study in Chengdu, the renowned home of pandas, offering rich cultural immersion in one of China’s most historically vibrant cities.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Interactive Curriculum:</span> Engage in workshops and activities focused on debating, public speaking, and critical thinking, all within the context of Chinese culture.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Cultural Immersion:</span> Explore China’s heritage with hands-on experiences in calligraphy, painting, martial arts, and Sichuan cuisine.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Language Learning:</span> Gain a global edge by learning both English and Mandarin Chinese in an engaging and supportive environment.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Unforgettable Experiences:</span> Celebrate Chinese festivals, enjoy traditional facial painting, and visit iconic Chengdu landmarks, including the Panda Valley.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">International Friendships:</span> Connect with students from around the world, fostering lifelong friendships and cross-cultural understanding.
          </li>
          <li className="py-2">
            <span className="font-enriqueta font-bold text-mainBlue">Personal Growth:</span> Build confidence, adaptability, and leadership skills by stepping out of your comfort zone and embracing new experiences.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-enriqueta mt-5 text-mainBlue leading-tight py-4">
          Unique Oxford Camp Model
        </h2>
        <p className="font-roboto text-textColor justify-center py-4 text-justify">
          Our Chengdu camp combines Oxford’s academic rigor with the enriching leisure of Chinese culture. Focusing on critical thinking and creativity, we prepare students to thrive in the post-AI era, where real-world problem-solving and interpersonal skills are more essential than ever.
        </p>
        <div className="flex justify-center items-center py-4">
          <Button href="/application">
            Apply Now
          </Button>
        </div>
      </div>
    </>
  )
}

export default page
