"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// --- Import your existing dropdown components ---
import ProgramMenu from "./ProgramMenu";
import OxfordExperienceMenu from "./OxfordExperienceMenu";
import AboutMenu from "./AboutMenu";
import AdmissionsMenu from "./AdmissionsMenu";
import StudentResourcesMenu from "./StudentResourcesMenu";
import GalleryMenu from "./GalleryMenu";

// --- Import your button component ---
import ButtonOutlined from "./ButtonOutlined";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile accordion toggles
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [oxfordExperienceDropdownOpen, setOxfordExperienceDropdownOpen] =
    useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  // Desktop hover states (only one open at a time)
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showProgramMenu, setShowProgramMenu] = useState(false);
  const [showOxfordMenu, setShowOxfordMenu] = useState(false);
  const [showAdmissionsMenu, setShowAdmissionsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showGalleryMenu, setShowGalleryMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper to close all desktop dropdowns at once
  const closeAllDesktopMenus = () => {
    setShowAboutMenu(false);
    setShowProgramMenu(false);
    setShowOxfordMenu(false);
    setShowAdmissionsMenu(false);
    setShowResourcesMenu(false);
    setShowGalleryMenu(false);
  };

  return (
    <header className="text-white bg-mainBlue font-roboto border-b-white border-b-2">
      {/* Top Row (Logo + Nav Toggle + Desktop Nav) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5 lg:justify-between lg:h-[90px]">
        {/* Logo */}
        <div className="w-[60px] h-[60px] lg:w-[150px] lg:h-[150px] relative lg:z-50 lg:top-14">
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
        <nav className="relative hidden lg:block w-full">
          <ul className="flex items-center space-x-6 justify-end">
            {/* HOME */}
            <li>
              <Link href="/" className="hover:opacity-80 transition">
                HOME
              </Link>
            </li>

            {/* ABOUT US */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowAboutMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>ABOUT US</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* PROGRAMS */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowProgramMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>PROGRAMS</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* OXFORD EXPERIENCE */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowOxfordMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>OXFORD EXPERIENCE</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* ADMISSIONS (Single-level dropdown with separate component) */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowAdmissionsMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>ADMISSIONS</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* STUDENT RESOURCES (Single-level dropdown with separate component) */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowResourcesMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>STUDENT RESOURCES</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* GALLERY (Single-level dropdown with separate component) */}
            <li
              onMouseEnter={() => {
                closeAllDesktopMenus();
                setShowGalleryMenu(true);
              }}
              className="cursor-pointer hover:opacity-80 transition z-50"
            >
              <div className="flex items-center space-x-1">
                <span>GALLERY</span>
                <img src="/Vector.png" alt="dropdown" />
              </div>
            </li>

            {/* APPLY NOW */}
            <li>
              <ButtonOutlined href="/application" className="text-mainYellow">
                Apply Now
              </ButtonOutlined>
            </li>
          </ul>

          {/* 
            ----------------------------------------------------------------------------
            MENUS RENDERED OUTSIDE THE <ul> 
            (We position them absolutely and use onMouseLeave to close)
            ----------------------------------------------------------------------------
          */}

          {/* ABOUT MENU */}
          {showAboutMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowAboutMenu(false)}
            >
              <AboutMenu />
            </div>
          )}

          {/* PROGRAMS MENU */}
          {showProgramMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowProgramMenu(false)}
            >
              <ProgramMenu />
            </div>
          )}

          {/* OXFORD EXPERIENCE MENU */}
          {showOxfordMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowOxfordMenu(false)}
            >
              <OxfordExperienceMenu />
            </div>
          )}

          {/* ADMISSIONS MENU */}
          {showAdmissionsMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowAdmissionsMenu(false)}
            >
              <AdmissionsMenu />
            </div>
          )}

          {/* STUDENT RESOURCES MENU */}
          {showResourcesMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowResourcesMenu(false)}
            >
              <StudentResourcesMenu />
            </div>
          )}

          {/* GALLERY MENU */}
          {showGalleryMenu && (
            <div
              className="absolute pl-24 left-0 right-0 top-full pt-2 z-50"
              onMouseLeave={() => setShowGalleryMenu(false)}
            >
              <GalleryMenu />
            </div>
          )}
        </nav>
      </div>

      {/* -------------------------------------------------
          MOBILE Navigation (drawer)
          -------------------------------------------------*/}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-mainBlue transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="p-4">
          <ul className="space-y-4">
            {/* ABOUT US (Mobile accordion) */}
            <li>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>About Us</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/about/our-organization"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Our Organization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/our-philosophy"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Our Philosophy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/our-team"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/our-students"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Our Students
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* PROGRAMS (Mobile accordion) */}
            <li>
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>Programs</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    programsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {programsDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/oxford-summer-program"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Oxford Summer Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/executive-leadership-program"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Executive Leadership Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oxford-china-summer-program"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Oxford China Summer Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customised-camp"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Customised Camp
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/subjects"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Subjects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/our-programs#age-groups"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Age Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/our-programs#education-systems"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Education Systems
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* OXFORD EXPERIENCE (Mobile accordion) */}
            <li>
              <button
                onClick={() =>
                  setOxfordExperienceDropdownOpen(!oxfordExperienceDropdownOpen)
                }
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>Oxford Experience</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    oxfordExperienceDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {oxfordExperienceDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/oxford-learning"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Oxford Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oxford-lifestyle"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Oxford Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oxford-leadership"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Oxford Leadership
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ADMISSIONS (Mobile accordion) */}
            <li>
              <button
                onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>Admissions</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    admissionsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {admissionsDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/application"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Application Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admissions"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Eligibility Criteria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fee-key-dates"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Fee & Key Dates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admissions"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Visa & Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admissions"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Travel Info & Immigration
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* STUDENT RESOURCES (Mobile accordion) */}
            <li>
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>Student Resources</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    resourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {resourcesDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/student-resources/#health-safety"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Health & Safety
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student-resources#rules-regulations"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Rules & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student-resources/"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Key Documents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student-resources#faqs"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* GALLERY (Mobile accordion) */}
            <li>
              <button
                onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:opacity-80"
              >
                <span>Gallery</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    galleryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {galleryDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/gallery"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Photo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block hover:opacity-80"
                      onClick={toggleMenu}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* APPLY NOW */}
            <li className="pt-4">
              <Link
                href="/application"
                className="block border border-mainYellow rounded-[8px] px-6 py-2 text-center hover:bg-mainYellow/10 transition-colors"
                onClick={toggleMenu}
              >
                Apply Now
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
