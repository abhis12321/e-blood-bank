"use client"
import React from 'react';
import { SlidingImagesUrls } from './ImageSliderUrls';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageSlider() {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setActiveImageIndex((activeImageIndex + 1) % SlidingImagesUrls.length)
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    } , [activeImageIndex])

    return (
        <div className="relative w-full h-[calc(100vh-70px)] flex items-center justify-center gap-6 text-gray-400 font-bold font-mono overflow-hidden">
            <button className="absolute z-10 top-[50%] left-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" onClick={() => setActiveImageIndex(prev => (prev + SlidingImagesUrls.length - 1) % SlidingImagesUrls.length)}>&lt;</button>
            {/* <Image src={SlidingImagesUrls[activeImageIndex]} alt="" className={`w-[100%] h-full object-cover md:object-fill shadow-[0_5px_15px_black_inset] [background:url(/home_page_sliders/slider0.png)] bg-cover animate-fade`} width={1000} height={8000}/> */}
            {
                SlidingImagesUrls?.map((imageUrl, index) => <Image src={imageUrl} alt="" className={`w-[100%] h-full object-cover md:object-fill shadow-[0_5px_15px_black_inset] bg-white ${activeImageIndex !== index ? "hidden" : "animate-fade"}`} key={index} width={1000} height={8000}/>)
            }
            <button className="absolute z-10 top-[50%] right-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" onClick={() => setActiveImageIndex(prev => (prev + 1) % SlidingImagesUrls.length)}>&gt;</button>

            <div className="absolute max-w-[98%] text-red-600 flex flex-col items-center p-4 rounded-md backdrop-opacity-10 backdrop-invert bg-white/20 *:drop-shadow-[3px_3px_1px_orange]">
                <h1 className="text-[3rem] font-extrabold font-serif">Let's save lives</h1>
                <h2 className="text-3xl">A fraction of your blood can save someone&apos;s life</h2>
                <Link href={'/user_profile'} className='my-2 text-white bg-red-700 py-1 px-4 rounded-lg hover:bg-red-600 hover:underline'>donate &gt;</Link>
            </div>
        </div>
    )
}
