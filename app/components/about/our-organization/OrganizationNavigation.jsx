'use client'

import React, { useState, useEffect } from 'react';

const OrganizationNavigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

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
      { id: 'why-oxford', label: 'Why Oxford' },
      { id: 'uni-oxford', label: 'University of Oxford' },
    { id: 'city-oxford', label: 'City of Oxford' },
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

export default OrganizationNavigation;