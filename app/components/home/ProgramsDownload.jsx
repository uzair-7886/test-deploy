import React from 'react'

const ProgramsDownload = () => {
  return (
    <div className="bg-offWhite py-16 px-4">
        <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-4xl font-enriqueta font-bold mb-8 text-center">
        Our Programs
      </h2>
      
      <div className="container mx-auto">
        <div className="bg-mainBlue rounded-[20px] flex flex-col md:flex-row justify-between items-center p-8 shadow-lg">
          {/* Oxford Summer Program */}
          <div className=" mb-6 md:mb-0">
            <h3 className="text-white text-xl font-roboto font-medium mb-3">
              OXFORD SUMMMMER PROGRAM
            </h3>
            <a 
              href="#" 
              className="text-mainYellow underline font-roboto"
            >
              Download Information Pack
            </a>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-px h-20 bg-white"></div>

          {/* Executive Leadership Program */}
          <div className=" mb-6 md:mb-0">
            <h3 className="text-white text-xl font-roboto font-medium mb-3">
              EXECUTIVE LEADERSHIP PROGRAM
            </h3>
            <a 
              href="#" 
              className="text-mainYellow underline font-roboto"
            >
              Download Information Pack
            </a>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-px h-20 bg-white"></div>

          {/* Oxford China Summer Program */}
          <div className="">
            <h3 className="text-white text-xl font-roboto font-medium mb-3">
              OXFORD CHINA SUMMMMER PROGRAM
            </h3>
            <a 
              href="#" 
              className="text-mainYellow underline font-roboto"
            >
              Download Information Pack
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramsDownload