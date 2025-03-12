"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ProgramMenu from "./ProgramMenu";
import OxfordExperienceMenu from "./OxfordExperienceMenu";
import AboutMenu from "./AboutMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile toggles for each top-level dropdown
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [oxfordLearningDropdownOpen, setOxfordLearningDropdownOpen] = useState(false);
  const [oxfordExperienceDropdownOpen, setOxfordExperienceDropdownOpen] = useState(false);
  const [oxfordLeadershipDropdownOpen, setOxfordLeadershipDropdownOpen] = useState(false);
  const [oxfordOutlookDropdownOpen, setOxfordOutlookDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const [showProgramMenu, setShowProgramMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<header className="text-white bg-mainBlue font-roboto border-b-white border-b-2">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5 lg:justify-between lg:h-[120px]">
  
        {/* Logo */}
        <div className="w-[60px] h-[60px] lg:w-[150px] lg:h-[150px] relative  lg:z-50 lg:top-10">
          <Link href="/">
            <Image
              src="/osi-logo.jpeg"
              alt="The Oxford Institute logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">


            {/* ABOUT US (Dropdown) */}

            <li
  className="relative group z-50"
  onMouseEnter={() => setShowAboutMenu(true)}
  onMouseLeave={() => setShowAboutMenu(false)}
>
  <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
    <span>ABOUT US</span>
    <img src="/Vector.png" alt="dropdown" />
  </div>
  {showAboutMenu && (
    <div className="absolute left-0 top-full pt-2 w-[700px] z-50">
      <AboutMenu />
    </div>
  )}
</li>

            {/* PROGRAMS (Dropdown) */}
            
            

            <li
              className="relative group z-50"
              onMouseEnter={() => setShowProgramMenu(true)}
              onMouseLeave={() => setShowProgramMenu(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
                <span>Programs</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
              {showProgramMenu && (
                <div className="absolute left-0 top-full pt-2 w-[700px] z-50">
                  <ProgramMenu />
                </div>
              )}
            </li>



            {/* OXFORD EXPERIENCE (Dropdown) */}
            {/* <li className="relative group z-50">
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
                <span>Oxford Experience</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white text-mainBlue text-sm 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 shadow-lg">
                <li>
                  <Link href="/oxford-learning" className="block px-4 py-2 hover:bg-gray-100">
                    Oxford Learning
                  </Link>
                </li>
                <li>
                  <Link href="/oxford-lifestyle" className="block px-4 py-2 hover:bg-gray-100">
                  Oxford Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="/oxford-leadership" className="block px-4 py-2 hover:bg-gray-100">
                  Oxford Leadership
                  </Link>
                </li>
              </ul>
            </li> */}

<li
  className="relative group z-50"
  onMouseEnter={() => setOxfordExperienceDropdownOpen(true)}
  onMouseLeave={() => setOxfordExperienceDropdownOpen(false)}
>
  <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
    <span>Oxford Experience</span>
    <img src="/Vector.png" alt="dropdown" />
  </div>
  {oxfordExperienceDropdownOpen && (
    <div className="absolute left-0 top-full pt-2 w-[700px] z-50">
      <OxfordExperienceMenu />
    </div>
  )}
</li>


            {/* ADMISSIONS (Dropdown) */}
            <li className="relative group z-50">
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
                <span>Admissions</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white text-mainBlue text-sm 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 shadow-lg">
                <li>
                  <Link href="/application" className="block px-4 py-2 hover:bg-gray-100">
                    Application Form
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="block px-4 py-2 hover:bg-gray-100">
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link href="/fee-key-dates" className="block px-4 py-2 hover:bg-gray-100">
                    Fee & Key Dates
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="block px-4 py-2 hover:bg-gray-100">
                    Visa & Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="block px-4 py-2 hover:bg-gray-100">
                    Travel Info & Immigration
                  </Link>
                </li>
              </ul>
            </li>

            {/* STUDENT RESOURCES (If no subitems, just link) */}
            <li className="relative group z-50">
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
                <span>Student Resources</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white text-mainBlue text-sm 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 shadow-lg">
              
                <li>
                  <Link href="/student-resources#health-safety" className="block px-4 py-2 hover:bg-gray-100">
                    Health & Safety
                  </Link>
                </li>
                <li>
                  <Link href="/student-resources#rules-regulations" className="block px-4 py-2 hover:bg-gray-100">
                    Rules & Regulations
                  </Link>
                </li>
                <li>
                  <Link href="/student-resources" className="block px-4 py-2 hover:bg-gray-100">
                    Key Documents
                  </Link>
                </li>
                <li>
                  <Link href="/student-resources#faqs" className="block px-4 py-2 hover:bg-gray-100">
                    FAQs
                  </Link>
                </li>
              </ul>
            </li>

            {/* GALLERY (If no subitems, just link) */}
            <li className="relative group z-50">
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition">
                <span>Gallery</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white text-mainBlue text-sm 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 shadow-lg">
                <li>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">
                    Photo
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/galllery" className="block px-4 py-2 hover:bg-gray-100">
                    Blogs
                  </Link>
                </li>
              </ul>
            </li>

            {/* CONTACT US */}
            <li>
              <Link
                href="/contact-us"
                className="border border-mainYellow rounded-[8px] px-6 py-2 hover:bg-mainYellow/10 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

{/* Mobile Navigation */}
<div
  className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-mainBlue transform ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
>
  <div className="p-4">
    <ul className="space-y-4">
      {/* ABOUT US */}
      <li>
        <button
          onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>About Us</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {aboutDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/about/our-organization" className="block hover:opacity-80" onClick={toggleMenu}>
                Our Organization
              </Link>
            </li>
            <li>
              <Link href="/about/our-philosophy" className="block hover:opacity-80" onClick={toggleMenu}>
                Our Philosophy
              </Link>
            </li>
            <li>
              <Link href="/about/our-team" className="block hover:opacity-80" onClick={toggleMenu}>
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/about/our-students" className="block hover:opacity-80" onClick={toggleMenu}>
                Our Students
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* PROGRAMS */}
      <li>
        <button
          onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>Programs</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${programsDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {programsDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/oxford-summer-program" className="block hover:opacity-80" onClick={toggleMenu}>
                Oxford Summer Program
              </Link>
            </li>
            <li>
              <Link href="/executive-leadership-program" className="block hover:opacity-80" onClick={toggleMenu}>
                Executive Leadership Program
              </Link>
            </li>
            <li>
              <Link href="/oxford-china-summer-program" className="block hover:opacity-80" onClick={toggleMenu}>
                Oxford China Summer Program
              </Link>
            </li>
            <li>
              <Link href="/customised-camp" className="block hover:opacity-80" onClick={toggleMenu}>
                Customised Camp
              </Link>
            </li>
            <li>
              <Link href="/subjects" className="block hover:opacity-80" onClick={toggleMenu}>
                Subjects
              </Link>
            </li>
            <li>
              <Link href="/about/our-programs#age-groups" className="block hover:opacity-80" onClick={toggleMenu}>
                Age Groups
              </Link>
            </li>
            <li>
              <Link href="/about/our-programs#education-systems" className="block hover:opacity-80" onClick={toggleMenu}>
                Education Systems
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* OXFORD EXPERIENCE */}
      <li>
        <button
          onClick={() => setOxfordExperienceDropdownOpen(!oxfordExperienceDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>Oxford Experience</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${oxfordExperienceDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {oxfordExperienceDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/oxford-learning" className="block hover:opacity-80" onClick={toggleMenu}>
                Oxford Learning
              </Link>
            </li>
            <li>
              <Link href="/oxford-lifestyle" className="block hover:opacity-80" onClick={toggleMenu}>
                Oxford Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/oxford-leadership" className="block hover:opacity-80" onClick={toggleMenu}>
                Oxford Leadership
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* ADMISSIONS */}
      <li>
        <button
          onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>Admissions</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${admissionsDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {admissionsDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/application" className="block hover:opacity-80" onClick={toggleMenu}>
                Application Form
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="block hover:opacity-80" onClick={toggleMenu}>
                Eligibility Criteria
              </Link>
            </li>
            <li>
              <Link href="/fee-key-dates" className="block hover:opacity-80" onClick={toggleMenu}>
                Fee & Key Dates
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="block hover:opacity-80" onClick={toggleMenu}>
                Visa & Documentation
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="block hover:opacity-80" onClick={toggleMenu}>
                Travel Info & Immigration
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* STUDENT RESOURCES */}
      <li>
        <button
          onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>Student Resources</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${resourcesDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {resourcesDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
           
            <li>
              <Link href="/student-resources/#health-safety" className="block hover:opacity-80" onClick={toggleMenu}>
                Health & Safety
              </Link>
            </li>
            <li>
              <Link href="/student-resources#rules-regulations" className="block hover:opacity-80" onClick={toggleMenu}>
                Rules & Regulations
              </Link>
            </li>
            <li>
              <Link href="/student-resources/" className="block hover:opacity-80" onClick={toggleMenu}>
                Key Documents
              </Link>
            </li>
            <li>
              <Link href="/student-resources#faqs" className="block hover:opacity-80" onClick={toggleMenu}>
                FAQs
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* GALLERY */}
      <li>
        <button
          onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
          className="flex items-center justify-between w-full text-left hover:opacity-80"
        >
          <span>Gallery</span>
          <img
            src="/Vector.png"
            alt="dropdown"
            className={`transform transition-transform ${galleryDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {galleryDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            <li>
              <Link href="/gallery" className="block hover:opacity-80" onClick={toggleMenu}>
                Photo
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block hover:opacity-80" onClick={toggleMenu}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block hover:opacity-80" onClick={toggleMenu}>
                Blogs
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* CONTACT US */}
      <li className="pt-4">
        <Link
          href="/contact-us"
          className="block border border-mainYellow rounded-[8px] px-6 py-2 text-center hover:bg-mainYellow/10 transition-colors"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</div>


      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
