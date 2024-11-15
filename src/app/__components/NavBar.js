import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <header className="bg-red-600 text-white py-4 px-2">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-2">
        <h1 className="text-4xl font-bold italic flex items-center">
          <Image src={'/home_page_sliders/slider-bg.png'} alt='logo' height={100} width={100} className='h-[58px] w-auto drop-shadow-[0_0_2px_white]' />
          <span className='italic font-serif'>eBloodBank</span>
        </h1>

        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14 text-md text-gray-200 font-mono">
          <Link href={'/'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>Home</Link>
          <Link href={'/about'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>about</Link>
          <Link href={'/contact'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>contact</Link>
          <Link href={'/dashboard'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>dashboard</Link>
        </div>
      </div>
    </header>
    // <div className="sticky top-0 left-0 z-50 w-full font-semibold overflow-hidden flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-16 py-[3px] bg-red-600 text-white">
    //   <div className="text-[1.5rem] font-extrabold font-serif flex items-center justify-center">
    //     <Image src={'/home_page_sliders/slider-bg.png'} alt='logo' height={100} width={100} className='h-[58px] w-auto'/>
    //     <span className="uppercase">e-blood-bank</span>
    //   </div>
    //   <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14 text-md text-gray-300 font-mono">
    //     <Link href={'/'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>Home</Link>
    //     <Link href={'/about'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>about</Link>
    //     <Link href={'/contact'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>contact</Link>
    //     <Link href={'/dashboard'} className='relative active:text-yellow-300 hover:duration-500 after:content-[""] after:w-0 hover:after:w-full after:duration-700 after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0 after:rounded-lg'>dashboard</Link>
    //   </div>
    // </div>
  )
}
