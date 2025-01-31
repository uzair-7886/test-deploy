'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <header className="text-white  bg-mainBlue font-roboto border-b-white border-b-2">
      <div className="flex items-center justify-between px-4 lg:px-8 py-1 lg:justify-around">
        {/* Logo */}
        <div className="w-[60px] h-[60px] lg:w-[98px] lg:h-[98px] relative">
          <Link href="/">
            <Image
              src="/logo-header.png"
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
            <li className="relative group z-50">
              <Link
                href="/about/our-organization"
                className="flex items-center space-x-1 hover:opacity-80 transition"
              >
                <span>About Us</span>
                <img src="/Vector.png" alt="dropdown" />
              </Link>

              {/* Desktop Dropdown */}
              <ul className="absolute left-0 mt-2 w-40 bg-white text-mainBlue text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                <li>
                  <Link href="/about/our-organization" className="block px-4 py-2 hover:bg-gray-100">
                    Our Organization
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-philosophy" className="block px-4 py-2 hover:bg-gray-100">
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-team" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-students" className="block px-4 py-2 hover:bg-gray-100">
                    Our Students
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-programs" className="block px-4 py-2 hover:bg-gray-100">
                    Our Programs
                  </Link>

                </li>
              </ul>
            </li>

            <li>
              <Link href="/programs" className="hover:opacity-80 transition hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/oxford-experience" className="hover:opacity-80 transition hover:underline">
                Oxford Experience
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:opacity-80 transition hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/student-resources" className="hover:opacity-80 transition hover:underline">
                Student Resources
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:opacity-80 transition hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
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
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center justify-between w-full text-left"
              >
                <span>About Us</span>
                <img
                  src="/Vector.png"
                  alt="dropdown"
                  className={`transform transition-transform ${
                    isAboutDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {/* Mobile About Dropdown */}
              <ul
                className={`mt-2 ml-4 space-y-2 ${
                  isAboutDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/about/our-organization" className="block hover:opacity-80">
                    Our Organization
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-philosophy" className="block hover:opacity-80">
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-team" className="block hover:opacity-80">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-students" className="block hover:opacity-80">
                    Our Students
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-programs" className="block hover:opacity-80">
                    Our Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/programs" className="block hover:opacity-80">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/oxford-experience" className="block hover:opacity-80">
                Oxford Experience
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="block hover:opacity-80">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/student-resources" className="block hover:opacity-80">
                Student Resources
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block hover:opacity-80">
                Gallery
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/contact"
                className="block border border-mainYellow rounded-[8px] px-6 py-2 text-center hover:bg-mainYellow/10 transition-colors"
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