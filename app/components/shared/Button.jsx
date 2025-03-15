import React from 'react'
import Link from 'next/link'

const Button = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="
        bg-mainBlue
        text-white
        font-poppins
        text-[16px]
        px-6
        py-2
        rounded-[8px]
        inline-flex
        items-center 
        justify-center
        whitespace-nowrap
      "
    >
      {children}
    </Link>
  )
}

export default Button
