import React from 'react'
import Image from 'next/image'

const TeamLeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3">
                      <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
                        <Image
                          src={"/Our Team/Lucy.jpg"}
                          alt={"Lucy"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-enriqueta text-mainYellow md:text-[42px] mb-4 font-bold"> 
                      Team Leader
                      </h3>
                      <h3 className="text-2xl font-roboto font-bold text-mainBlue md:text-[22px] mb-4">
                      Ms. Lucy Aithison 
                      </h3>
                      <p className="text-textColor leading-relaxed font-roboto">
                      Admissions are primarily based on the quality of the application and the references or transcripts provided.
                      </p>
                      <p className="text-textColor leading-relaxed font-roboto font-bold py-6">
                      (WhatsApp: +447916702699)
                      </p>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default TeamLeader
