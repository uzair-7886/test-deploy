'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkSize();

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isMobile;
}

// const tutorsData = [
//   {
//     id: 1,
//     name: "Alyazi Almuhairi",
//     role: "Country of Origin: UAE",
//     description: "Being at Oxford was truly a blessing and an amazing opportunity that I would highly recommend anyone that is able to participate in this program. I say this is where you can truly experience one-on-one conversations, contribution and learning from some of the most brilliant minds of the current world. Having the pleasure to participate in different activities together was a beautiful experience, making lifelong friends in the process of it all.",
//     image: "/Our Students/alyazi.png"
//   },
//   {
//     id: 2,
//     name: "Stephanie Habis",
//     role: "Country of Origin: Lebanon",
//     description: "As a proud Lebanese, I am thrilled to bring the rich culture and spirit of Lebanon to the global stage as a Brand Ambassador. My experience at The Oxford Institute Summer Program has been a unique opportunity to connect with students from around the world, allowing me to share Lebanon's vibrant traditions, breathtaking landscapes, and warm hospitality. I want others to feel the creativity, resilience, and beauty that define my country. Being here has deepened my passion for cross-cultural exchange, and I look forward to building connections that celebrate Lebanon's unique story and legacy.",
//     image: "/Our Students/Stephaine Habis.png"
//   },
//   {
//     id: 3,
//     name: "Sirine Dib",
//     role: "Country of Origin: Morocco",
//     description: "I'm Sirine Dib, a proud Moroccan, and studying at Oxford allowed me to connect with a diverse student body while sharing the vibrant traditions of Morocco, from our festivals to our cuisine. This experience wasn't just about cultural exchange; it was a chance to invite others to feel the warmth of Moroccan heritage. The highlight of my journey was building connections across backgrounds, developing leadership and communication skills, and creating a meaningful impact within the university. Being an ambassador deepened my pride and fostered friendships, and I encourage others to represent their culture and be a voice for their communities.",
//     image: "/Our Students/Sirine Dibs.png"
//   }
// ];
const tutorsData = [
  {
    id: 1,
    name: "Alyazi Almuhairi",
    role: "Country of Origin: UAE",
    description: "Being at Oxford was truly a blessing and an amazing opportunity that I would highly recommend anyone that is able to participate in this program. I say this is where you can truly experience one-on-one conversations, contribution and learning from some of the most brilliant minds of the current world. Having the pleasure to participate in different activities together was a beautiful experience, making lifelong friends in the process of it all.",
    image: "/Our Students/alyazi.png"
  },
  {
    id: 2,
    name: "Stephanie Habis",
    role: "Country of Origin: Lebanon",
    description: "As a proud Lebanese, I am thrilled to bring the rich culture and spirit of Lebanon to the global stage as a Brand Ambassador. My experience at The Oxford Institute Summer Program has been a unique opportunity to connect with students from around the world, allowing me to share Lebanon's vibrant traditions, breathtaking landscapes, and warm hospitality. I want others to feel the creativity, resilience, and beauty that define my country. Being here has deepened my passion for cross-cultural exchange, and I look forward to building connections that celebrate Lebanon's unique story and legacy.",
    image: "/Our Students/Stephaine Habis.png"
  },
  {
    id: 3,
    name: "Sirine Dib",
    role: "Country of Origin: Morocco",
    description: "I'm Sirine Dib, a proud Moroccan, and studying at Oxford allowed me to connect with a diverse student body while sharing the vibrant traditions of Morocco, from our festivals to our cuisine. This experience wasn't just about cultural exchange; it was a chance to invite others to feel the warmth of Moroccan heritage. The highlight of my journey was building connections across backgrounds, developing leadership and communication skills, and creating a meaningful impact within the university. Being an ambassador deepened my pride and fostered friendships, and I encourage others to represent their culture and be a voice for their communities.",
    image: "/Our Students/Sirine Dibs.png"
  },
  {
    id: 4,
    name: "Fayaaz Marzuq Khan",
    role: "Country of Origin: Bangladesh",
    description: "It was a learning and a magical experience. I want to tell every international student that this is a summer camp where you will get a taste of Oxford University and Imperial College’s study system through tutorials and sessions. Overall, this was an amazing experience. If I get another chance, I would like to come back to this summer camp next year.",
    image: "/Our Students/Fayaaz.png"
  },
  {
    id: 5,
    name: "Manan Chitalia",
    role: "Country of Origin: India",
    description: "Having attended classes in a personalized tutorial style, it was highly beneficial and a great way of enhancing the learning experience. Throughout the trip, I interacted with many people from all over the world. Made friends from different countries such as Bangladesh, Monaco, and Pakistan. This trip also made me more independent and responsible. Now that school has started, I look back at the pictures from the trip and wish that I could relive the whole experience again. I cannot thank The Oxford Institute enough for giving me this opportunity.",
    image: "/Our Students/Manan.png"
  },
  {
    id: 6,
    name: "Guo Elaine",
    role: "Country of Origin: Hong Kong",
    description: "This summer program was truly memorable and significant, and it was fascinating to meet and spend two weeks with people from all over the world who have different cultural backgrounds and mindsets. Most importantly, we were allowed to attend tutorials as well as lectures given by prestigious scholars, including environmentalists. The English naturalist Chris Baines has given us a very impressive insight into the problem of climate change, based on his work experience of the preservation of the River Thames. It was a privilege to live and study at Oxford University.",
    image: "/Our Students/Guo Ellan.png"
  },
  {
    id: 7,
    name: "Dilan Kurhan",
    role: "Country of Origin: Turkey",
    description: "The discipline that comes to you so naturally, much thanks to the genuine, creative, and encouraging way the tutors communicate with you, is a contagious demeanor that helps you become more mature both in character and in the work you commit yourself to throughout the program. The caring, considerate, and understanding staff members always make sure your accommodation is of great quality, and they are treated with equal footing by the faculty, which is a chance to explore a humane and very respectful environment.",
    image: "/Our Students/Dilan.png"
  },
  {
    id: 8,
    name: "Raaib Ajmal",
    role: "Country of Origin: Pakistan",
    description: "This course was an opportunity of a lifetime, one that I would suggest to all who can avail of it. The teaching system that I was greeted by in Oxford was unlike any other form of tutelage I had previously been exposed to. Our tutors were accomplished professionals in the field they were teaching us about. Taking into account all our strengths, weaknesses, opinions, and interests, the tutors made sure that all the tutorials had elements that suited every student attending them. I became independent, rational, and mature during the program. The memories we make are not ones that we will forget. And finally, I would like to say thank you to our deans for letting Oxford be a home away from home for me.",
    image: "/Our Students/Raaib.png"
  },
  {
    id: 9,
    name: "Aniela Cheon",
    role: "Country of Origin: USA",
    description: "My experience here at Oxford has been amazing. I met so many new people. It’s been great.",
    image: "/Our Students/Aniela.png"
  },
  {
    id: 10,
    name: "Linh Tran",
    role: "Country of Origin: Vietnam",
    description: "The Bodleian Library, Covered Market, Oxford Union, and live trial cases were all highlights of the camp, and those are only a few to begin with. The tutors were eager to help us in small groups of around 4 students, actively engaged in discussions. The dynamics between Oxford and London give you the best out of two fairly different places and keep a balance between studying and the freedom to explore.",
    image: "/Our Students/Lin Tran.png"
  }
];

const Ambassadors = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(tutorsData.length / slidesPerView);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FFD700] mb-8 font-enriqueta">
          Ambassadors
        </h2>
        
        {/* Description Text */}
        <p className="text-textColor font-roboto text-justify mx-auto my-4">
         Each year, we select student ambassadors in various countries to help prospective students connect with Oxford Summer Program alumni and ask any questions they may have about the summer camp. This provides a great opportunity for students to gain firsthand knowledge about the program and clarify any doubts. To reach an ambassador, please email us at info@theoxfordinstitute.co.uk, mentioning the name of the ambassador you’d like to contact.</p>

        <hr className="border-b-2  border-mainYellow mb-16" />


        {/* Tutors Slider */}
        <div className="relative">
          <div className="flex transition-transform duration-300 gap-8">
            <div className="w-full grid grid-cols-1  gap-8">
              {tutorsData.slice(activeSlide * slidesPerView, (activeSlide * slidesPerView) + slidesPerView).map((tutor) => (
                <div key={tutor.id} className="flex items-start gap-8">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      fill
                      className="object-cover rounded-full CardDeop"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-mainBlue font-enriqueta mb-2">
                      {tutor.name}
                    </h3>
                    <p className="text-lg text-mainBlue font-poppins mb-4">{tutor.role}</p>
                    <p className="text-textColor font-roboto text-justify leading-relaxed">
                      {tutor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-[#FFD700]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex gap-4 ml-8">
              <button
                onClick={handlePrev}
                className="p-2 text-gray-600 hover:text-[#FFD700] transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 text-gray-600 hover:text-[#FFD700] transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;