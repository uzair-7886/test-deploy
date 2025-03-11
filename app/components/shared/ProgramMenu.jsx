'use client';

import React, { useState, useEffect } from "react";



const ProgramMenu = ({ isMobile = false }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [programFields, setProgramFields] = useState([]);
  const [facilityFields, setFacilityFields] = useState([]);
  const [activityFields, setActivityFields] = useState([]);
  const [selectedAge, setSelectedAge] = useState(null);

  const sections = {
    Programme: {
      title: "Subjects",
      description: "Explore our programs",
      fields: ["13-15", "16-18", "18+"], // Dynamically populated from Sanity
    },
    Facilities: {
      title: "Facilities",
      description: "Discover our facilities",
      fields: ["13-15", "16-18", "18+"],
    },
    Activities: {
      title: "Activities",
      description: "Check out our activities",
      fields: ["13-15", "16-18", "18+"], // Dynamically populated from Sanity
    },
    Ages: {
      title: "Ages",
      description: "Programs by age groups",
      fields: ["13-15", "16-18", "18+"],
    },
  };

  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-lg p-6 cursor-pointer";



  const handleAgeClick = (age) => {
    setSelectedAge(age);
    // Redirect to /programs with age as a query parameter
    window.location.href = `/programs?age=${encodeURIComponent(age)}`;
  };

  return (
    <div className={baseClasses}>
      <div className={`flex ${isMobile ? "flex-col" : ""} gap-8`}>
        {/* Left Menu */}
        <div className={`${isMobile ? "w-full" : "w-1/2"} space-y-4`}>
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              className={`p-4 shadow-sm rounded-tr-[20px] transition-colors duration-200 ${selectedSection === key
                  ? "bg-[#003180] bg-opacity-10"
                  : "hover:bg-[#003180] hover:bg-opacity-10"
                }`}
              onClick={() => setSelectedSection(key)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-medium">{section.title}</div>
                  <div className="text-orange">{section.description}</div>
                </div>
                <div className="grid place-items-center w-8 h-8 text-orange">
                  <img
                    src="/svgs/widgets.svg"
                    alt="Widget Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Menu */}
        <div className={`${isMobile ? "w-full" : "w-1/2"}`}>
          {selectedSection ? (
            <div className="space-y-4">
              {sections[selectedSection].fields.map((field, index) => (
                <button
                  key={index}
                  onClick={() =>
                    selectedSection === "Ages"
                      ? handleAgeClick(field) // Handle age selection
                      : (window.location.href =
                        selectedSection === "Activities"
                          ? `/activities#${encodeURIComponent(field)}`
                          : selectedSection === "Facilities"
                            ? `/facilities#${encodeURIComponent(field)}`
                            : `/programs?subject=${encodeURIComponent(field)}`)
                  }
                  className="block cursor-pointer border-b border-orange pb-4 hover:text-orange transition-colors text-left w-full"
                >
                  <div className="text-base">{field}</div>
                </button>
              ))}
              <div className="flex items-center gap-2 text-orange pt-4">
                <div className="grid place-items-center w-8 h-8 rounded">
                  <img
                    src="/svgs/widgets.svg"
                    alt="Widget Icon"
                    className="w-6 h-6"
                  />
                </div>
                <a
                  href={
                    selectedSection === "Activities"
                      ? "/activities"
                      : selectedSection === "Facilities"
                        ? "/facilities"
                        : "/programs"
                  }
                  className="font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-base">
              Select a menu item to see details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramMenu;
