'use client';
import React, { useState } from "react";

const OxfordExperienceMenu = ({ isMobile = false }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [openNestedDropdowns, setOpenNestedDropdowns] = useState({});

  const sections = {
    "Oxford Learning": {
      title: "Oxford Learning",
      description:
        "Tutorial-Style Learning, Keynote Lectures, Essay Counselling & Presentation Skills",
      fields: [
        "Tutorial-Style Learning",
        "Keynote Lectures",
        "Essay Counselling & Presentation Skills",
        "Network, Culture & Diversity"
      ],
    },
    "Oxford Lifestyle": {
      title: "Oxford Lifestyle",
      description:
        "Discover Magical Oxford, College Accommodation, Dining Experience, Teaching Facilities & more",
      fields: [
        "Magical Oxford",
        "College Accommodation",
        "Dining Experience",
        "Teaching Facilities",
        {
          label: "Extracurricular Activities",
          children: [
            "Entertainment",
            "Sports and Indoor Games",
            "Punting",
            "Excursion Trips",
          ],
        },
      ],
    },
    "Oxford Leadership": {
      title: "Oxford Leadership",
      description:
        "Debating at Oxford Union, Career Guidance, Admissions Counselling",
      fields: [
        "Debating at Oxford Union",
        "Career Guidance",
        "Admissions Counselling",
      ],
    },
  };

  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-[15px] p-6 cursor-pointer CardShadow";

  return (
    <div className="relative">
      {/* Top Triangle */}
      <div
        className="absolute -top-2 left-10 w-0 h-0 
          border-l-8 border-r-8 border-b-8 
          border-l-transparent border-r-transparent border-b-white"
      />
      <div className={baseClasses}>
        <div className={`flex ${isMobile ? "flex-col" : ""} gap-8`}>
          {/* Left Menu: Headings */}
          <div className={`${isMobile ? "w-full" : "w-1/2"} space-y-4`}>
            {Object.entries(sections).map(([key, section]) => (
              <div
                key={key}
                className={`relative p-4 shadow-sm rounded-[10px] transition-colors duration-200 ${
                  selectedSection === key
                    ? "bg-[#003180] bg-opacity-10"
                    : "hover:bg-[#003180] hover:bg-opacity-10"
                }`}
                onClick={() => setSelectedSection(key)}
              >
                {/* Right Arrow on selected item */}
                {selectedSection === key && (
                  <div
                    className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 
                      border-t-4 border-b-4 border-l-4 
                      border-t-transparent border-b-transparent border-l-[#003180] border-opacity-10"
                  />
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-medium text-textColor">
                      {section.title}
                    </div>
                  </div>
                  <div className="grid place-items-center w-8 h-8 text-mainYellow">
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

          {/* Right Menu: Subheadings */}
          <div className={`${isMobile ? "w-full" : "w-1/2"}`}>
            {selectedSection ? (
              <div className="space-y-4">
                {sections[selectedSection].fields.map((field, index) => {
                  if (typeof field === "string") {
                    return (
                      <button
                        key={index}
                        className="block cursor-pointer border-b border-mainYellow pb-4 hover:text-mainYellow transition-colors text-left w-full"
                        onClick={() => console.log(field)}
                      >
                        <div className="text-base text-textColor">{field}</div>
                      </button>
                    );
                  }

                  // Field is an object with children (dropdown)
                  const isOpen = openNestedDropdowns[index] || false;
                  return (
                    <div key={index} className="relative border-b border-mainYellow pb-4">
                      <button
                        className="block w-full text-left cursor-pointer hover:text-mainYellow transition-colors"
                        onClick={() =>
                          setOpenNestedDropdowns((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base text-textColor">
                            {field.label}
                          </span>
                          <img
                            src="/svgs/chev-down.svg"
                            alt="Arrow Down"
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="mt-2 pl-4">
                          {field.children.map((child, childIndex) => (
                            <button
                              key={childIndex}
                              className="block w-full text-left cursor-pointer border-b border-mainYellow pb-2 last:border-0 text-mainYellow transition-colors"
                              onClick={() => console.log(child)}
                            >
                              {child}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="flex items-center gap-2 text-mainYellow pt-4">
                  <div className="grid place-items-center w-8 h-8 rounded">
                    <img
                      src="/svgs/widgets.svg"
                      alt="Widget Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <a href="#" className="font-medium">
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
    </div>
  );
};

export default OxfordExperienceMenu;
