import React from "react";
import OxfordLifestyle from "./OxfordLifestyle";
import OxfordLearning from "./OxfordLearning";

const OxfordExperience = () => {
    return (
      <>
        {/* /* Keep other content in the container */ }
          <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="bg-mainBlue text-white p-6 rounded-[15px] CardShadow2 mb-8">
              <h1 className="text-3xl font-bold text-center font-enriqueta">
                THE OXFORD EXPERIENCE
              </h1>
            </div>
          
            <OxfordLifestyle />
          </div>
          
          {/* Move OxfordLearning outside that container */}
        <OxfordLearning />
      </>
    );
  };
  
  export default OxfordExperience;
  

