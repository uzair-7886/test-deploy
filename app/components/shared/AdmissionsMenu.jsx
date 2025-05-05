"use client";
import React from "react";
import Link from "next/link";

const AdmissionsMenu = ({ isMobile = false }) => {
  const baseClasses = isMobile
    ? "w-full bg-white"
    : "bg-white rounded-[30px] p-6 cursor-pointer CardShadow";

  const menuItems = [
    { label: "Application Form", href: "/application" },
    { label: "Eligibility Criteria", href: "/admissions#application-process" },
    { label: "Fee & Key Dates", href: "/fee-key-dates" },
    { label: "Visa & Documentation", href: "/admissions#visa-immigration" },
    { label: "Travel Info & Immigration", href: "/admissions#visa-immigration" },
  ];

  return (
    <div className="relative z-auto">
      {/* Top Triangle */}
      <div
        className="absolute -top-2 left-[540px] w-0 h-0 
          border-l-8 border-r-8 border-b-8 
          border-l-transparent border-r-transparent border-b-white"
      />

      <div className={baseClasses}>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative p-4 shadow-sm rounded-[10px]
                         transition-colors duration-200 hover:bg-[#003180]/10"
            >
              <Link href={item.href} className="flex items-center justify-between">
                <span className="text-textColor text-lg font-medium">
                  {item.label}
                </span>
                {/* The widget icon on the right */}
                <div className="grid place-items-center w-8 h-8 text-mainYellow">
                  <img
                    src="/svgs/widgets.svg"
                    alt="Widget Icon"
                    className="w-6 h-6"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionsMenu;
