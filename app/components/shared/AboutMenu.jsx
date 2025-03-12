'use client';
import React, { useState } from "react";
import Link from "next/link";

const AboutMenu = ({ isMobile = false }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = {
    "Our Organisation": {
      title: "Our Organisation",
      fields: [
        { label: "Why Oxford?", href: "/about/our-organization#why-oxford" },
        { label: "The University of Oxford", href: "/about/our-organization#uni-oxford" },
        { label: "The City of Oxford", href: "/about/our-organization#city-oxford" },
      ],
    },
    "Our Philosophy": {
      title: "Our Philosophy",
      fields: [
        { label: "Teaching Philosophy", href: "/about/our-philosophy#teaching-philosophy" },
        { label: "Our Vision", href: "/about/our-philosophy#vision" },
        { label: "Our Mission", href: "/about/our-philosophy#mission" },
        { label: "Our Values", href: "/about/our-philosophy#values" },
      ],
    },
    "Our Team": {
      title: "Our Team",
      fields: [
        { label: "Deans", href: "/about/our-team#deans" },
        { label: "Academic Coordinators", href: "/about/our-team#academic-coordinator" },
        { label: "Administrators", href: "/about/our-team#administration" },
        { label: "Head of Operations", href: "/about/our-team#head-operations" },
        { label: "Tutors and Guest Lecturers", href: "/about/our-team#tutor-lecturers" },
        { label: "Country Coordinators", href: "/about/our-team#country-coordinators" },
      ],
    },
    "Our Students": {
      title: "Our Students",
      fields: [
        { label: "Testimonials", href: "/about/our-students#testimonials" },
        { label: "Ambassadors", href: "/about/our-students#ambassadors" },
        { label: "Alumni", href: "/about/our-students#alumni" },
      ],
    },
  };

  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-[30px] p-6 cursor-pointer CardShadow";

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
                // On desktop, update selected section on hover;
                // on mobile, use click.
                onMouseEnter={!isMobile ? () => setSelectedSection(key) : undefined}
                onClick={isMobile ? () => setSelectedSection(key) : undefined}
              >
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
                {sections[selectedSection].fields.map((field, index) => (
                  <Link
                    key={index}
                    href={field.href}
                    className="block cursor-pointer border-b border-mainYellow pb-4 hover:text-mainYellow transition-colors text-left w-full"
                  >
                    <div className="text-base text-textColor hover:text-mainYellow">{field.label}</div>
                  </Link>
                ))}
                <div className="flex items-center gap-2 text-mainYellow pt-4">
                  <div className="grid place-items-center w-8 h-8 rounded">
                    <img
                      src="/svgs/widgets.svg"
                      alt="Widget Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <Link href="#" className="font-medium">
                    Learn more
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-base">
                {/* Select a menu item to see details */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
