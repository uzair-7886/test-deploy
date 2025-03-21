"use client";
import React, { useState } from "react";
import Link from "next/link";

const OxfordExperienceMenu = ({ isMobile = false }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [openNestedDropdowns, setOpenNestedDropdowns] = useState({});

  const sections = {
    "Oxford Learning": {
      title: "Oxford Learning",
      href: "/oxford-learning",
      fields: [
        "Tutorial-Style Learning",
        "Keynote Lectures",
        "Essay Counselling & Presentation Skills",
        "Network, Culture & Diversity",
      ],
    },
    "Oxford Lifestyle": {
      title: "Oxford Lifestyle",
      href: "/oxford-lifestyle",
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
      href: "/oxford-leadership",
      fields: [
        "Debating at Oxford Union",
        "Career Guidance",
        "Admissions Counselling",
      ],
    },
  };

  // Hardcoded link mapping for each section and field
  const linksMapping = {
    "Oxford Learning": {
      "Tutorial-Style Learning": "/oxford-learning",
      "Keynote Lectures": "/oxford-learning",
      "Essay Counselling & Presentation Skills": "/oxford-learning",
      "Network, Culture & Diversity": "/oxford-learning",
    },
    "Oxford Lifestyle": {
      "Magical Oxford": "/oxford-lifestyle#facilities",
      "College Accommodation": "/oxford-lifestyle#facilities",
      "Dining Experience": "/oxford-lifestyle#facilities",
      "Teaching Facilities": "/oxford-lifestyle#facilities",
      "Extracurricular Activities": "/oxford-lifestyle#extracurricular",
      "Entertainment": "/oxford-lifestyle#extracurricular",
      "Sports and Indoor Games": "/oxford-lifestyle#extracurricular",
      "Punting": "/oxford-lifestyle#extracurricular",
      "Excursion Trips": "/oxford-lifestyle#extracurricular",
    },
    "Oxford Leadership": {
      "Debating at Oxford Union": "/oxford-leadership",
      "Career Guidance": "/oxford-leadership",
      "Admissions Counselling": "/oxford-leadership",
    },
  };

  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-[30px] p-6 cursor-pointer CardShadow";

  return (
    <div className="relative">
      {/* Top Triangle */}
      <div
        className="absolute -top-2 left-72 w-0 h-0 
          border-l-8 border-r-8 border-b-8 
          border-l-transparent border-r-transparent border-b-white"
      />
      
      <div className={baseClasses}>
        <div className={`flex ${isMobile ? "flex-col" : ""} gap-8`}>
          {/* LEFT COLUMN: Main sections */}
          <div className={`${isMobile ? "w-full" : "w-1/2"} space-y-4`}>
            {Object.entries(sections).map(([key, section]) => (
              <div
                key={key}
                className={`relative p-4 shadow-sm rounded-[10px] transition-colors duration-200 
                  ${
                    selectedSection === key
                      ? "bg-[#003180]/10"
                      : "hover:bg-[#003180]/10"
                  }`}
                onMouseEnter={
                  !isMobile ? () => setSelectedSection(key) : undefined
                }
                onClick={isMobile ? () => setSelectedSection(key) : undefined}
              >
                {/* Little right arrow if selected */}
                {selectedSection === key && (
                  <div
                    className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 
                      border-t-4 border-b-4 border-l-4 
                      border-t-transparent border-b-transparent border-l-[#003180] border-opacity-10"
                  />
                )}
                <Link href={section.href} className="flex items-center justify-between">
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
                </Link>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Subfields and nested children */}
          <div className={`${isMobile ? "w-full" : "w-1/2"}`}>
            {selectedSection ? (
              <div className="space-y-4">
                {sections[selectedSection].fields.map((field, index) => {
                  // If field is a simple string
                  if (typeof field === "string") {
                    return (
                      <Link
                        key={index}
                        href={linksMapping[selectedSection][field] || "#"}
                        className="
                          block w-full text-left cursor-pointer 
                          border-b border-mainYellow pb-4 
                          text-base text-textColor
                          transition-colors hover:text-mainYellow
                        "
                      >
                        {field}
                      </Link>
                    );
                  }

                  // If field has children (nested dropdown)
                  const isOpen = openNestedDropdowns[index] || false;
                  return (
                    <div
                      key={index}
                      className="relative border-b border-mainYellow pb-4"
                    >
                      <button
                        className="
                          block w-full text-left cursor-pointer 
                          transition-colors hover:text-mainYellow
                        "
                        onClick={() =>
                          setOpenNestedDropdowns((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                      >
                        <div className="flex items-center justify-between text-base text-textColor">
                          <span>{field.label}</span>
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
                            <Link
                              key={childIndex}
                              href={linksMapping[selectedSection][child] || "#"}
                              className="
                                block w-full text-base 
                                cursor-pointer pb-2
                                text-textColor
                                transition-colors hover:text-mainYellow
                              "
                            >
                              {child}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-gray-500 text-base">
                {/* (Optional) Prompt when no section selected */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxfordExperienceMenu;
