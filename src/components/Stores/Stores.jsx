import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { TbBrandApple } from "react-icons/tb";

const Stores = () => {
    return (
        <section className='bg-gray-100 w-full h-auto p-8 md:p-[80px] gap-8 flex flex-col items-center mx-auto'>
            <h2 className='font-lexend font-semibold text-3xl sm:text-[48px] leading-[56px] tracking-[-0.02em] text-[#181818] text-center'>
                Ready to Transform Your Trading?
            </h2>
            <p className='font-lexend font-normal text-lg sm:text-[20px] text-[#707070] leading-[28px] text-center'>
                Join thousands of traders who are already using FinAI to make smarter <br /> trading decisions.
            </p>

            {/* Buttons */}
            <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center'>
                <button className='w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-[36px] bg-[#1E388A] text-white font-lexend font-medium text-base leading-6'>
                    <FcGoogle /> Get from Playstore
                </button>

                <button className='w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-3 rounded-[36px] bg-[#181818] text-white font-lexend font-medium text-base leading-6'>
                    <TbBrandApple /> Get from Appstore
                </button>
            </div>
        </section>
    );
}

export default Stores;
