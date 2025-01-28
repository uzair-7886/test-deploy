import React from 'react'
import Link from 'next/link'

const ButtonOutlined = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="
        border border-mainYellow
        w-[147px]
        h-[41px]
        rounded-[8px]
        text-white 
        font-poppins 
        text-[16px] 
        font-medium 
        bg-transparent 
        flex 
        items-center 
        justify-center
        px-6
        py-2
      "
    >
      {children}
    </Link>
  )
}

export default ButtonOutlined