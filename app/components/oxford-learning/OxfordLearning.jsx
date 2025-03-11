import React from "react";

const OxfordLearning = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(7, 41, 78, 0.1), rgba(7, 41, 78, 0.8)),
              linear-gradient(360deg, rgba(0, 0, 0, 0) 63.35%, rgba(0, 0, 0, 0.2) 82.74%, rgba(0, 0, 0, 0.6) 100%),
              url('/Oxford Learning/Banner.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply, normal, normal",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-enriqueta mt-20 text-white leading-tight">
              OXFORD <span className="text-mainYellow">LEARNING</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-primary text-textColor text-justify leading-relaxed space-y-4 font-roboto">
          <p>
          We provide a personalized and holistic learning experience, celebrating each student’s uniqueness. Small, carefully selected groups allow us to nurture individual passions and foster critical thinking. Through tailored teaching methods, we empower students to communicate effectively, think independently, and embrace a lifelong love for learning. 
          </p>
        </div>

        {/* First Section */}
        <div className="py-10">
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            {/* Left Image Section */}
            <div className="relative">
              <img
                src="/Oxford Learning/Essay.jpg" 
                alt="Image Description"
                className="w-full md:w-[807px] h-[250px] md:h-[671px] rounded-[30px] object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="relative md:absolute top-16 md:top-24 right-6 md:right-32 flex flex-col gap-6">
              {/* Circular SVG (only for md and above) */}
              <img
                src="/homepage/circle.svg"
                alt="Decorative Circle"
                className="hidden md:block absolute -top-10 right-0 md:-top-24 md:right-[-80px] w-[100px] md:w-[212px] transform rotate-[-45deg]"
              />

              {/* First Card */}
              <div className="bg-[#F3F1EC] p-6 rounded-[20px] shadow-lg max-w-[400px] relative z-10">
                <h3 className="text-lg md:text-[28px] font-enriqueta font-bold text-mainBlue py-4">
                  Essay Counselling & Presentation Skills
                </h3>
                <p className="text-sm font-roboto text-justify text-textColor mt-2">
                Students develop academic writing and presentation skills through essay counseling and guided feedback. They craft research-based essays and deliver presentations, enhancing their critical thinking and communication abilities for future academic success.  
                </p>
              </div>

              {/* Second Card */}
              <div className="bg-[#F3F1EC] p-6 rounded-[20px] shadow-lg max-w-[400px] relative z-10">
                <h3 className="text-lg md:text-[28px] font-enriqueta font-bold text-mainBlue py-4">
                  Network, Culture & Diversity
                </h3>
                <p className="text-sm font-roboto text-justify text-textColor mt-2">
                Students engage with peers from diverse backgrounds, fostering cross-cultural learning and intellectual growth. The programme builds a strong global community and offers mentorship from leading Oxford scholars and lifelong connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Background Section */}
      <div className="bg-offWhite py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Right Image Section */}
            <div className="relative">
              <img
                src="/Oxford Learning/Lectures.jpg" 
                alt="Lecture Scene"
                className="w-full md:w-[807px] h-[250px] md:h-[671px] rounded-[30px] object-cover"
              />
            </div>

            {/* Left Content Section */}
            <div className="relative md:absolute top-16 md:top-24 left-6 md:left-32 flex flex-col gap-6">
              {/* Circular SVG (only for md and above) */}
              <img
                src="/homepage/circle.svg"
                alt="Decorative Circle"
                className="hidden md:block absolute -top-10 left-0 md:-top-24 md:left-[-80px] w-[100px] md:w-[212px] transform rotate-[-45deg]"
              />

              {/* First Card */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg max-w-[400px] relative z-10">
                <h3 className="text-lg md:text-[28px] font-enriqueta font-bold text-mainBlue py-4">
                  Tutorial-Style Learning
                </h3>
                <p className="text-sm font-roboto text-justify text-textColor mt-2">
                Our program adopts Oxford University's renowned tutorial system, pairing students in small groups with expert tutors. Tutorials focus on personalized learning, critical thinking, and active engagement with cutting-edge research, making them the most enriching part of the program.  
                </p>
              </div>

              {/* Second Card */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg max-w-[400px] relative z-10">
                <h3 className="text-lg md:text-[28px] font-enriqueta font-bold text-mainBlue py-4">
                  Keynote Lectures
                </h3>
                <p className="text-sm font-roboto text-justify text-textColor mt-2">
                Students attend lectures by Oxford academics, exploring the latest research and innovations in their chosen fields. These interactive sessions include discussions and Q&As, offering a deeper understanding of key academic topics. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxfordLearning;
