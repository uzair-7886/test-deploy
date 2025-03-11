import React from 'react';

const WhyOxford = () => {
  return (
    <div className="bg-offWhite py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold font-enriqueta text-mainYellow mb-6">
          Why Oxford
        </h2>

        {/* Description */}
        <p className="text-primary text-justify leading-relaxed py-4 font-roboto">
          For over nine centuries, the University of Oxford has stood as a beacon of knowledge, 
          learning, and scholarly excellence. Known for its academic rigour and intellectual distinction, 
          Oxford has drawn the brightest minds from across the globe, shaping them into extraordinary leaders. 
          Throughout modern history, over 50 Nobel Prize winners, 26 British Prime Ministers, and 50 heads 
          of state from around the world have been nurtured at Oxford.
        </p>

        {/* Image */}
        <div className="w-full">
          <img
            src='/Our Organization Page/whyoxford.png'
            alt="Oxford Image"
            className="w-full h-[370px] object-cover rounded-[30px] my-4 imgshadow"
          />
        </div>

        {/* Additional Description */}
        <p className="text-primary text-justify leading-relaxed py-4 font-roboto">
          The town of Oxford and the university share a unique, symbiotic relationship that fosters an 
          exceptional social and academic environment. This blend of tradition and innovation creates 
          an inspiring setting for promising young individuals who aspire to achieve greatness. Oxford is 
          not just about its iconic architecture; it is a dynamic community united by a shared passion for 
          knowledge. For those fortunate enough to walk its historic streets and reside within its walls, 
          their time at Oxford is often considered one of the most enriching and transformative experiences 
          of their lives.
        </p>
      </div>
    </div>
  );
};

export default WhyOxford;
