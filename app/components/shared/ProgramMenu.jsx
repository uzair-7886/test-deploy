"use client";
import React, { useState } from "react";
import Link from "next/link";

// A recursive component to render lists with support for nested dropdowns
const NestedList = ({ items }) => {
  const [openStates, setOpenStates] = useState({});

  const toggle = (index) => {
    setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <ul className="pl-4 list-none">
      {items.map((item, index) => {
        // If it's a simple string, wrap with a placeholder Link.
        if (typeof item === "string") {
          return (
            <li
              key={index}
              className="text-base text-textColor py-1 cursor-pointer hover:text-mainYellow transition-colors"
            >
              <Link href="/placeholder">{item}</Link>
            </li>
          );
        }
        // If it's an object with a link and no children, render it as a link.
        if (item.link && !item.children) {
          return (
            <li
              key={index}
              className="text-lg py-1 cursor-pointer text-mainYellow transition-colors"
            >
              <Link href={item.link}>{item.label}</Link>
            </li>
          );
        }

        // If item has children, render nested items recursively.
        const isOpen = openStates[index] || false;
        return (
          <li key={index} className="text-base text-textColor py-1">
            <div
              className="flex items-center justify-between cursor-pointer hover:text-mainYellow transition-colors"
              onClick={() => toggle(index)}
            >
              <span>{item.label}</span>
              <img
                src="/svgs/chev-down.svg"
                alt="Arrow Down"
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isOpen && <NestedList items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
};

const ProgramsMenu = ({ isMobile = false }) => {
  // State to highlight the left item (for styling purposes)
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [openDetailGroups, setOpenDetailGroups] = useState({});

  // Left side programs as objects with label + link
  const programs = [
    { label: "Overview", link: "/about/our-programs" },
    { label: "Oxford Summer Program", link: "/oxford-summer-program" },
    { label: "Executive Leadership Program", link: "/executive-leadership-program" },
    { label: "Oxford China Summer Program", link: "/oxford-china-summer-program" },
    { label: "Customised Camp", link: "/customised-camp" },
  ];

  // Right side detail groups with nested items
  const detailGroups = [
    {
      label: "Subjects",
      children: [
        { label: "STEM", link: "/subjects" },
        { label: "Humanities and Social Sciences", link: "/subjects" },
        { label: "Arts and Creativity", link: "/subjects" },
        { label: "Leadership and Business", link: "/subjects" },
      ],
    },
    {
      label: "Age Groups",
      children: [
        { label: "Juniors 12-15 Years Old", link: "/about/our-programs#age-groups" },
        { label: "Seniors 16-19 Years Old", link: "/about/our-programs#age-groups" },
        { label: "University Students 19+", link: "/about/our-programs#age-groups" },
        { label: "Executive Program 28+", link: "/about/our-programs#age-groups" },
      ],
    },
    {
      label: "Education Systems",
      children: [
        { label: "IB", link: "/about/our-programs#education-systems" },
        { label: "O/A Levels", link: "/about/our-programs#education-systems" },
        { label: "GCSE/IGSCE", link: "/about/our-programs#education-systems" },
        { label: "Local Examination System", link: "/about/our-programs#education-systems" },
      ],
    },
  ];

  // Apply the same “CardShadow” and top-triangle style as your other menus
  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-[30px] p-6 cursor-pointer CardShadow";

  return (
    <div className="relative z-auto">
      {/* Top Triangle Indicator (desktop style) */}
      <div
        className="absolute -top-2 left-52 w-0 h-0 
          border-l-8 border-r-8 border-b-8 
          border-l-transparent border-r-transparent border-b-white"
      />
      <div className={baseClasses}>
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-8`}>
          {/* Left Side: Program Options */}
          <div className={`${isMobile ? "w-full" : "w-1/2"} space-y-4`}>
            {programs.map((program, index) => (
              <Link key={index} href={program.link}>
                <div
                  className={`relative p-4 shadow-sm rounded-[10px] transition-colors duration-200 ${
                    selectedProgram === program.label
                      ? "bg-[#003180] bg-opacity-10"
                      : "hover:bg-[#003180] hover:bg-opacity-10"
                  }`}
                  onClick={() => setSelectedProgram(program.label)}
                >
                  {selectedProgram === program.label && (
                    <div
                      className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 
                        border-t-4 border-b-4 border-l-4 
                        border-t-transparent border-b-transparent border-l-[#003180] border-opacity-10"
                    />
                  )}
                  {/* 
                    ADD WIDGET ICON ON THE RIGHT, 
                    just like your OxfordExperienceMenu
                  */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-textColor">
                      {program.label}
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
              </Link>
            ))}
          </div>

          {/* Vertical Separator (desktop only) */}
          {!isMobile && (
            <div className="w-px bg-mainYellow" style={{ height: "auto" }}></div>
          )}

          {/* Right Side: Always visible detail groups with nested dropdowns */}
          <div className={`${isMobile ? "w-full" : "w-1/2"}`}>
            <div className="space-y-4">
              {detailGroups.map((group, index) => {
                const isOpen = openDetailGroups[index] || false;
                return (
                  <div key={index} className="relative border-b border-mainYellow pb-4">
                    <button
                      className="block w-full text-left cursor-pointer hover:text-mainYellow transition-colors"
                      onClick={() =>
                        setOpenDetailGroups((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl text-textColor">
                          {group.label}
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
                      <div className="mt-2">
                        <NestedList items={group.children} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsMenu;
