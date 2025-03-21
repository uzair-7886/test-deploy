import React from 'react'

const ProgramsDownload = () => {
  return (
    <div className='bg-offWhite'>

    
    <div className=" py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-mainYellow text-2xl sm:text-3xl md:text-[42px] uppercase font-enriqueta font-bold mb-8 text-center">
        OUR PROGRAMS
      </h2>
      
      <div className="container mx-auto">
        <div className="bg-mainBlue rounded-[20px] flex flex-col md:flex-row justify-between items-center p-8 CardShadow2">
          {/* Oxford Summer Program */}
          <div className=" mb-6 md:mb-0">
            <h3 className="text-white text-xl font-roboto font-medium mb-3">
              OXFORD SUMMMMER PROGRAM
            </h3>
            <a 
  href="/docs/Oxford Summer Program Information Pack.pdf" 
  download="Information_Pack.pdf"
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
  href="/docs/Oxford-Executive Information Pack.pdf" 
  download="Information_Pack.pdf"
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
  href="/docs/Information Pack Oxford China.pdf" 
  download="Information_Pack.pdf"
  className="text-mainYellow underline font-roboto"
>
  Download Information Pack
</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProgramsDownload