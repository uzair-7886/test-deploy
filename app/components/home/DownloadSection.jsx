import React from 'react'
import Link from 'next/link'

const DownloadSection = () => {
  return (
    // Main container with max-w-7xl and px-4
    <div className="max-w-7xl mx-auto px-4">
      {/* Flex container without extra horizontal padding */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8 font-roboto">
      
        {/* Download Course Outlines Card */}
        <a href="/docs/Course Outline.pdf" download="Course_Outlines.pdf">
          <div className="bg-mainBlue w-full md:w-[400px] h-20 rounded-[20px] flex items-center justify-center px-4 CardShadow2 cursor-pointer">
            <img
              src="/homepage/Group 79.svg"
              alt="Download Course Outlines"
              className="mr-3 h-10 w-10 object-contain"
            />
            <span className="text-white font-medium text-center whitespace-nowrap">
              Download Course Outlines
            </span>
          </div>
        </a>

        {/* Download Student Handbook Card */}
        <a href="/docs/Student Handbook 2024.pdf" download="Student_Handbook.pdf">
          <div className="bg-mainBlue w-full md:w-[400px] h-20 rounded-[20px] flex items-center justify-center px-4 CardShadow2 cursor-pointer">
            <img
              src="/homepage/Group 80.svg"
              alt="Download Student Handbook"
              className="mr-3 h-10 w-10 object-contain"
            />
            <span className="text-white font-medium text-center whitespace-nowrap">
              Download Student Handbook
            </span>
          </div>
        </a>

        {/* Apply Now Card */}
        <Link href="/application">
          <div className="bg-mainBlue w-full md:w-[400px] h-20 rounded-[20px] flex items-center justify-center px-4 CardShadow2 cursor-pointer">
            <img
              src="/homepage/Group 81.svg"
              alt="Apply Now"
              className="mr-3 h-10 w-10 object-contain"
            />
            <span className="text-white font-medium text-center whitespace-nowrap">
              Apply Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DownloadSection;
