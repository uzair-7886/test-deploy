'use client'
import React, { useState } from "react";
import HeroSectionGallery from "../components/gallery/HeroSectionGallery";
import GalleryViewer from "../components/gallery/GalleryViewer";
import VideoGallery from "../components/gallery/VideoGallery";
import Blogs from "../components/gallery/Blogs";

const Page = () => {
  // Define the sections with a name and the component to display.
  const sections = [
    { name: "Photo Gallery", component: <GalleryViewer /> },
    { name: "Video Gallery", component: <VideoGallery /> },
    { name: "Blogs", component: <Blogs /> },
  ];

  // Set the first section as active by default.
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <>
      <HeroSectionGallery />
      {/* Navigation Bar with provided styling */}
      <nav className="sections-nav border-b border-white justify-center flex overflow-x-auto scrollbar-hide relative bg-mainBlue">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => setActiveSection(section)}
            className={`font-roboto sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors text-white flex-shrink-0 ${
              activeSection.name === section.name ? "underline" : ""
            }`}
          >
            {section.name.toUpperCase()}
          </button>
        ))}
      </nav>
      {/* Render the active section's component */}
      {activeSection.component}
    </>
  );
};

export default Page;
