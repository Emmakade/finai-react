import React from 'react';
import hero from '../assets/hero.png';
import { FcGoogle } from "react-icons/fc";
import { TbBrandApple } from "react-icons/tb";

const Hero = () => {
    return (
        <section className='w-full min-h-[688px] flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-32 py-10 bg-[#F9FAFB]'>

            {/* Content */}
            <div className='flex flex-col items-start text-center lg:text-left w-full lg:max-w-[655px] gap-6'>
                <h1 className='font-lexend font-semibold text-[28px] sm:text-[36px] lg:text-[60px] leading-tight lg:leading-[72px] tracking-[-0.04em] text-black'>
                    Trade Smarter, <span className='text-[#1E388A]'>Not Harder</span> with FinAI
                </h1>

                <p className='font-lexend font-normal text-base sm:text-lg lg:text-[20px] leading-[28px] text-[#707070]'>
                    It is a long established fact that a reader will be distracted by <br className='hidden lg:block' /> the readable content of a page when looking at its layout.
                </p>

                {/* Buttons */}
                <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center lg:justify-start'>
                    <button className='w-full sm:w-auto px-4 py-3 flex items-center justify-center gap-2 rounded-[36px] bg-[#1E388A] text-white font-lexend font-medium text-base leading-6'>
                        <FcGoogle /> Get from Playstore
                    </button>

                    <button className='w-full sm:w-auto px-4 py-3 flex items-center justify-center gap-3 rounded-[36px] bg-[#181818] text-white font-lexend font-medium text-base leading-6'>
                        <TbBrandApple /> Get from Appstore
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className='w-full max-w-[434px] flex justify-center lg:justify-end'>
                <img src={hero} alt="phone image" className='w-full h-auto' />
            </div>
        </section>
    );
}

export default Hero;
