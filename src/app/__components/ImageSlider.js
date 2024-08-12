"use client"
import React from 'react';
import { SlidingImagesUrls } from './SlidingImagesUrls';

export default function ImageSlider() {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    React.useEffect(() => {
        const time = setTimeout(() => {
            setActiveImageIndex((activeImageIndex + 1) % SlidingImagesUrls.length)
        }, 5000);

        return () => {
            clearTimeout(time);
        }
    } , [activeImageIndex])

    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center gap-6 text-white font-bold font-mono bg-green600 overflow-hidden">
            <button className="absolute z-10 top-[50%] left-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" onClick={() => setActiveImageIndex(prev => (prev + SlidingImagesUrls.length - 1) % SlidingImagesUrls.length)}>&lt;</button>
            {
                SlidingImagesUrls?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-[100%] h-full hover:object-contain [background:url(/home_page_sliders/slider-bg.png)] bg-100_100 shadow-[0_5px_15px_black_inset] ${activeImageIndex !== index ? "hidden" : "animate-fade"}`} key={index} />)
            }
            <button className="absolute z-10 top-[50%] right-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" onClick={() => setActiveImageIndex(prev => (prev + 1) % SlidingImagesUrls.length)}>&gt;</button>
        </div>
    )
}
