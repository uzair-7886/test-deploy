'use client'
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import HeroSectionGallery from "../components/gallery/HeroSectionGallery";
import GalleryViewer from "../components/gallery/GalleryViewer";
import VideoGallery from "../components/gallery/VideoGallery";
import Blogs from "../components/gallery/Blogs";

function GalleryContent() {
  // Read the query parameter from the URL.
  const searchParams = useSearchParams();
  const sectionQuery = searchParams.get('section');

  // Define sections with a key for matching the query parameter.
  const sections = [
    { name: "Photo Gallery", key: "photo", component: <GalleryViewer /> },
    { name: "Video Gallery", key: "videos", component: <VideoGallery /> },
    { name: "Blogs", key: "blogs", component: <Blogs /> }
  ];

  // Set default active section.
  const defaultSection = sections[0];
  const [activeSection, setActiveSection] = useState(defaultSection);

  // Update active section based on the query parameter.
  useEffect(() => {
    if (sectionQuery) {
      const matchedSection = sections.find(
        (section) => section.key === sectionQuery.toLowerCase()
      );
      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    }
  }, [sectionQuery]);

  return (
    <>
      <HeroSectionGallery />
      {/* Navigation Bar */}
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
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}
