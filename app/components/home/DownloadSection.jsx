import React from 'react'

const DownloadSection = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Use flex-col for mobile, row for md+ screens, with consistent gap */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2  py-8 font-roboto">

        {/* Download Course Outlines */}
        <div className="bg-mainBlue w-full md:w-[420px] h-20 rounded-[20px] flex items-center justify-center px-6 CardShadow2">
          <img
            src="/homepage/Group 79.svg"
            alt="Download Course Outlines"
            className="mr-3 h-10 w-10 object-contain"
          />
          <span className="text-white font-medium text-center whitespace-nowrap">
            Download Course Outlines
          </span>
        </div>

        {/* Download Student Handbook */}
        <div className="bg-mainBlue w-full md:w-[420px] h-20 rounded-[20px] flex items-center justify-center px-6 CardShadow2">
          <img
            src="/homepage/Group 80.svg"
            alt="Download Student Handbook"
            className="mr-3 h-10 w-10 object-contain"
          />
          <span className="text-white font-medium text-center whitespace-nowrap">
            Download Student Handbook
          </span>
        </div>

        {/* Apply Now */}
        <div className="bg-mainBlue w-full md:w-[420px] h-20 rounded-[20px] flex items-center justify-center px-6 CardShadow2">
          <img
            src="/homepage/Group 81.svg"
            alt="Apply Now"
            className="mr-3 h-10 w-10 object-contain"
          />
          <span className="text-white font-medium text-center whitespace-nowrap">
            Apply Now
          </span>
        </div>
      </div>
    </div>
  )
}

export default DownloadSection
