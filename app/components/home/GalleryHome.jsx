import React from 'react'
import Link from 'next/link'

const galleryData = [
  {
    title: "STUDENTS BLOGS",
    image:  "/HomePage/sb.png",
    href:"/gallery?section=blogs"
  },
  {
    title: "VIDEO GALLERY",
    image:  "/HomePage/vg.jpg",
    href:"/gallery?section=videos"
  },
  {
    title: "PHOTO GALLERY",
    image: "/HomePage/pg.jpg",
    href:"/gallery?section=photo"
  },
]

const GalleryHome = () => {
  return (
    <div className="bg-offWhite py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="
          text-mainYellow 
          text-2xl sm:text-3xl md:text-[42px] 
          font-enriqueta 
          uppercase
          font-bold 
          mb-8 
          text-center
        ">
          GALLERY
        </h2>

        {/* Cards (3 columns on md+, 1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          {galleryData.map(({ title, image,href }, idx) => (
            <div
              key={idx}
              className="
                relative
                w-full
                max-w-[401px]
                aspect-[401/501] /* Maintains the 401×501 aspect ratio on small screens */
                md:w-[401px]
                md:h-[501px]
                rounded-[50px]
                overflow-hidden
                CardShadow2
              "
            >
              {/* Image (placeholder) */}
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />

              {/* Dark gradient overlay at top for text */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/60
                to-transparent
              " />

              {/* Title text at top left */}
              <h3 className="
                absolute
                top-12
                left-6
                text-white
                text-lg
                font-bold
                max-w-[70%]
                font-roboto
              ">
                {title}
              </h3>

              {/* White circular arrow at bottom left */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <Link href={href}>
                <img
                  src="/homepage/toprightchev.svg"
                  alt="arrow"
                  className="w-8 h-8"
                />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryHome
