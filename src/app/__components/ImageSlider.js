import React from 'react';
import { SlidingImagesUrls } from './SlidingImagesUrls';

export default function ImageSlider() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center gap-6 text-white font-bold font-mono">
        <button className="absolute z-10 top-[50%] left-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" >&lt;</button>
        {
            SlidingImagesUrls?.map((imageUrl, index) => <img src={imageUrl} alt="" className={`w-[100%] h-full bg-red-500 object-cover ${0 !== index ? "hidden" : "animate-fade"}`} key={index} />)
        }
        <button className="absolute z-10 top-[50%] right-[8vw] hover:text-red-600 drop-shadow-[0_0_5px_red] hover:drop-shadow-[0_0_5px_yellow] text-4xl" >&gt;</button>
    </div>
  )
}
