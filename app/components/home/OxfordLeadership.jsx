import React from 'react'
import Link from 'next/link'

const OxfordLeadership = () => {
  return (
    <div className="bg-white py-32">
      {/* 1) Center the entire section in a responsive container */}
      <div
        className="
          max-w-7xl mx-auto
          px-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          md:gap-24
          gap-6
        "
      >
        {/* 2) Left side: image collage in a responsive aspect-ratio container */}
        <div 
          className="
            relative
            w-full
            max-w-[620px]
            aspect-[620/540]  /* Maintain 620×540 ratio on small screens */
            md:w-[620px]
            md:h-[540px]
            md:aspect-auto
            shrink-0
          "
        >
          {/* ===== Circle SVG =====
              Using percentages for 'top', 'left', 'width', 'height' 
              so it scales with the container. */}
          <img
            src="/homepage/circle.svg"
            alt="Decorative circular text"
            className="absolute z-50"
            style={{
              top: '-14.8%',    // -80 / 540 ≈ -14.8%
              left: '33.1%',    // 205 / 620 ≈ 33.1%
              width: '35.5%',   // 220 / 620 ≈ 35.5%
              height: '40.7%',  // 220 / 540 ≈ 40.7%
            }}
          />

          {/* ============== TOP-LEFT IMAGE ============== */}
          <div
            className="
              absolute
              z-10
              rounded-[30px]
              overflow-hidden
              imgshadow
            "
            style={{
              top: '0%',         // 0 / 540
              left: '0%',        // 0 / 620
              width: '44.6%',    // 277 / 620 ≈ 44.6%
              height: '51.9%',   // 280 / 540 ≈ 51.9%
            }}
          >
            <img
              src="/HomePage/ps.png"
              alt="Public Speaking & Debating"
              className="object-cover w-full h-full"
            />
            {/* Text overlay */}
            <div
              className="
                absolute
                bottom-0 left-0 right-0
                p-3
                bg-gradient-to-t
                from-black/70
                to-transparent
              "
            >
              <p className="text-white font-bold text-base sm:text-lg">
                Public Speaking & Debating
              </p>
            </div>
          </div>

          {/* ============== BOTTOM-LEFT IMAGE ============== */}
          <div
            className="
              absolute
              z-10
              rounded-[30px]
              overflow-hidden
              imgshadow            "
            style={{
              top: '57.4%',      // 310 / 540 ≈ 57.4%
              left: '0%',        // 0 / 620
              width: '44.6%',    // 277 / 620 ≈ 44.6%
              height: '33.3%',   // 180 / 540 ≈ 33.3%
            }}
          >
            <img
              src="/HomePage/ac.png"
              alt="Admission Counselling"
              className="object-cover w-full h-full"
            />
            <div
              className="
                absolute
                bottom-0 left-0 right-0
                p-3
                bg-gradient-to-t
                from-black/70
                to-transparent
              "
            >
              <p className="text-white font-bold text-base sm:text-lg">
                Admission Counselling
              </p>
            </div>
          </div>

          {/* ============== RIGHT (TALL) IMAGE ============== */}
          <div
            className="
              absolute
              z-10
              rounded-[30px]
              overflow-hidden
              imgshadow
              
            "
            style={{
              top: '14.8%',      // 80 / 540 ≈ 14.8%
              left: '49.2%',     // 305 / 620 ≈ 49.2%
              width: '45.2%',    // 280 / 620 ≈ 45.2%
              height: '92.6%',   // 500 / 540 ≈ 92.6%
            }}
          >
            <img
              src="/HomePage/cg.png"
              alt="Career Guidance"
              className="object-cover w-full h-full"
            />
            <div
              className="
                absolute
                bottom-0 left-0 right-0
                p-3
                bg-gradient-to-t
                from-black/70
                to-transparent
              "
            >
              <p className="text-white font-bold text-base sm:text-lg">
                Career Guidance
              </p>
            </div>
          </div>
        </div>

        {/* 3) Right side: heading, paragraph, button */}
        <div className="flex-1 space-y-4 pt-4 md:pt-0">
          <h2 className="text-mainYellow text-3xl sm:text-4xl font-enriqueta">
            Oxford Leadership
          </h2>
          <p className="text-[#4B5D68] max-w-md font-roboto">
            At the Oxford Summer Program, we develop our students' leadership
            skills, helping them grow into confident, independent, and engaged
            young adults.
          </p>
          <Link
            href="/"
            className="
              border border-mainYellow
              w-[147px]
              h-[41px]
              rounded-[8px]
              font-poppins 
              text-[16px]
              text-textColor
              font-medium 
              bg-transparent 
              flex 
              items-center 
              justify-center
              px-6
              py-2
            "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OxfordLeadership
