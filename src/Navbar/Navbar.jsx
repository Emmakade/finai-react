import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="sticky top-0 bg-white w-full z-50">
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-6 md:px-20 py-6">

                {/* Logo */}
                <div>
                    <img src={logo} alt="logo" className="h-8 w-auto" />
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-10">
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#about">About</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#features">Features</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#blog">Blog</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#contact">Contact</a></li>
                </ul>

                {/* CTA Button - desktop */}
                <div className="hidden md:flex">
                    <button className="flex justify-center cursor-pointer items-center gap-4 w-[211px] h-[56px] p-2 rounded-[36px] bg-[#1E388A] text-white font-lexend text-base leading-6 font-medium">
                        Download app
                        <span className="w-[40px] h-[40px] p-4 rounded-[36px] bg-[#F8C630] flex items-center justify-center text-black">
                            <FaArrowRight size={16} />
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div
                    className="md:hidden text-3xl cursor-pointer border border-[#1E388A] rounded-full p-2"
                    onClick={handleToggle}
                >
                    {open ? <MdClose className="text-[#1E388A]" /> : <IoMenu className="text-[#1E388A]" />}
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`absolute top-20 left-0 w-full bg-[#f7f7f7] flex flex-col items-center space-y-6 py-10 transition-all duration-300 ease-in-out md:hidden ${open ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center space-y-6 py-8">
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#about">About</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#features">Features</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#blog">Blog</a></li>
                    <li><a className="font-lexend text-sm leading-6 font-medium text-[#181818]" href="#contact">Contact</a></li>

                    {/* CTA Button - mobile */}
                    <button className="flex justify-center cursor-pointer items-center gap-4 w-[211px] h-[56px] p-2 rounded-[36px] bg-[#1E388A] text-white font-lexend text-base leading-6 font-medium">
                        Download app
                        <span className="w-[40px] h-[40px] p-4 rounded-[36px] bg-[#F8C630] flex items-center justify-center text-black">
                            <FaArrowRight size={16} />
                        </span>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
