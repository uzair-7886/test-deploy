import React from 'react'
import Image from 'next/image'
import Button from '../shared/Button'

const ProgramCard = ({ program }) => {
  const { imageSrc, title, ageGroup, description } = program

  return (
    <div
      className="
        w-[379px]
        h-auto
        rounded-[19px]
        bg-white
        CardShadow2
        p-4
        flex
        flex-col
        justify-between
      "
    >
      {/* Image Section */}
      <div className="mb-3">
        {/* A fixed-size container for the image */}
        <div className="relative w-[353px] h-[220px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-[18px] object-cover"
            // priority // optionally if you want
          />
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h3 className="text-[22px] font-roboto font-bold text-mainBlue mb-1">
          {title}
        </h3>
        <p className="text-mainYellow text-[16px] font-semibold mb-2">
          {ageGroup}
        </p>
        <p className="text-[16px] font-roboto text-textColor mb-4">
          {description}
        </p>

        {/* Button */}
        <Button href="/about/our-programs">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default ProgramCard
