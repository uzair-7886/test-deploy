import React from 'react';

const OurMission = () => {
  return (
    <div className="bg-offWhite flex flex-col md:flex-row items-stretch md:items-start overflow-hidden">
      {/* Image Section */}
      <div
        className="relative w-full  md:w-[747px] h-[300px] md:h-[695px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Our Philosphy/Mission.jpg')", // Ensure the path is correct
          borderRadius: "0px 30px 30px 0px",
        }}
      >
        {/* If the image doesn't load, you can place a fallback content */}
      </div>

      {/* Text Section */}
      <div className="p-6 md:p-12 flex-1">
        <h2 className="text-mainYellow text-center font-enriqueta text-3xl md:text-[42px] font-bold leading-tight mb-4">
          Our Mission
        </h2>
        <p className="text-textColor text-base md:text-[18px] leading-relaxed font-roboto">
          "Education is not the learning of facts, but the training of the mind to think."
          <br />– Albert Einstein
        </p>
        <p className="text-textColor text-base md:text-[18px] mt-6 leading-relaxed font-roboto text-justify">
        We are committed to delivering a transformative global knowledge exchange through our ‘Oxford Experience.’ By hosting local camps at Oxford University and regional camps worldwide, we provide enriching opportunities grounded in Oxford’s tradition of excellence. Our mission is to extend Oxford’s reach beyond its physical boundaries, showing that Oxford is defined not by its bricks and mortar, but by the people united by a passion for learning. Through our Summer Programmes and other initiatives, we create a global network of minds—young and old—driven by curiosity and discovery. For those unable to travel to Oxford, we bring Oxford to them. Our personalised tutorial system and holistic approach empower students to broaden their horizons, spark intellectual curiosity, and thrive in a world-class environment. Through partnerships with the Oxford Union, we offer public speaking training and admissions counselling, equipping students with skills that extend beyond academia. Our programmes bridge the knowledge gap, bringing Oxford’s scholarly excellence to students worldwide and inspiring the next generation of leaders.
        </p>

      </div>
    </div>
  );
};

export default OurMission;
