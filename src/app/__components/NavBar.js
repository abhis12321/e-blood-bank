import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-16 py-[14px] bg-red-950 text-white z-[100] fixed top-0 left-0 w-full">
      <div className="text-[1.5rem] font-extrabold font-serif">e-blood-bank</div>
      <div className="hidden sm:flex items-center justify-center gap-10 lg:gap-14 text-md text-gray-300 font-mono">
        <Link href={'/'} className='relative active:text-yellow-300 hover:scale-125 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>Home</Link>
        <Link href={'/'} className='relative active:text-yellow-300 hover:scale-125 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>about</Link>
        <Link href={'/'} className='relative active:text-yellow-300 hover:scale-125 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>contact</Link>
        <Link href={'/user_profile'} className='relative active:text-yellow-300 hover:scale-125 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>profile</Link>
      </div>
    </div>
  )
}