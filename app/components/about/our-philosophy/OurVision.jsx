
const OurVision = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-[42px] font-bold font-enriqueta text-mainYellow mb-6">
          Our Vision
        </h2>

        {/* Description */}
        <p className="text-primary text-justify leading-relaxed py-4 font-roboto ">
        "A good teacher can inspire hope, ignite the imagination, and instil a love of learning." — Aristotle. At The Oxford Institute, we envision a world where education transcends boundaries, inspiring students from diverse backgrounds to engage in a global exchange of knowledge. We believe education should not only empower individuals to excel academically but also ignite curiosity, foster creativity, and nurture a lifelong passion for learning.
        </p>

        {/* Image */}
        <div className="w-full">
          <img
            src='/Our Philosphy/Vision.png'
            alt="Oxford Image"
            className="w-full md:h-[470px] h-auto object-cover rounded-[30px] my-4 imgshadow"
          />
        </div>

        {/* Additional Description */}
        <p className="text-primary text-justify leading-relaxed py-4 font-roboto">
          
Through our local and regional camps, we offer immersive learning experiences rooted in Oxford’s core values of excellence, intellectual exploration, and collaboration. Our goal is to inspire bold innovators, cultivate compassionate leaders, and equip students with the skills and knowledge needed to address the world’s most pressing challenges. By providing a platform for students to engage with new ideas and perspectives, we aim to create a community of lifelong learners dedicated to making a positive impact on the world.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
