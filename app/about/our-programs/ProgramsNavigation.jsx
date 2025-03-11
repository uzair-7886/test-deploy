'use client';

import React, { useState, useEffect } from 'react';

const ProgramsNavigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    // { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'age-groups', label: 'Age Groups' },
    { id: 'education-systems', label: 'Education Systems' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-mainBlue text-white">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-4 md:space-x-8 justify-start md:justify-center py-2 md:py-4 whitespace-nowrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs sm:text-sm font-roboto hover:text-mainYellow transition-colors duration-200 px-2 py-1 ${
                activeSection === item.id ? 'text-mainYellow' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProgramsNavigation;
