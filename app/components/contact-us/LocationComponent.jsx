import React from 'react';

const LocationComponent = () => {
  return (
    <div className="w-full bg-offWhite py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h1 className="text-mainYellow text-3xl md:text-[42px] font-enriqueta font-bold text-center mb-12">
          Our Location
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Address Section */}
          <div className="w-full md:w-2/5 bg-white rounded-[20px] CardShadow2 p-6 relative overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10">
              <h2 className="text-mainBlue text-2xl font-enriqueta font-bold mb-4">Address</h2>
              <p className="text-textColor font-roboto leading-relaxed mb-6">
                The Oxford Institute, 103-105, The Covered Market, Oxford, OX1 8DY United Kingdom
              </p>
              <h2 className="text-mainBlue text-2xl font-enriqueta font-bold mb-4">Hours of Operation</h2>
              <p className="text-textColor font-roboto leading-relaxed">
                Our office lines are open from:
                <br />
                9am - 5pm
                <br />
                Mon - Fri
              </p>
            </div>
            {/* Background Image */}
            <div className="absolute bottom-0 right-0 w-full h-auto pointer-events-none flex justify-end">
              <img
                src="/Contact Us/bg.png"
                alt="Background Illustration"
                className="w-48 md:w-36 object-contain"
              />
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-3/5 rounded-[20px] overflow-hidden CardShadow2">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8881371565054!2d-1.2553798841853653!3d51.75327177967138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6b7a219aaab%3A0x4db2b89853d1e17e!2sThe%20Covered%20Market!5e0!3m2!1sen!2suk!4v1680476409947!5m2!1sen!2suk"
              width="100%"
              height="312"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
