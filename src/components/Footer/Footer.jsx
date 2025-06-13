import React from 'react';
import logo from '../../assets/logo.png';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#040918] pt-20 pb-10 px-6 md:px-20 text-white">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
                {/* Grid for footer content */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Logo & About */}
                    <div className="flex flex-col gap-4">
                        <img src={logo} alt="FinAI logo" className="w-[120px]" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            AI-powered trading platform <br />
                            that simplifies investing with <br />
                            real-time insights and smart <br />
                            portfolio management.
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xl text-white">
                            <BsTwitterX className="hover:text-gray-400 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-white mb-2">Company</h4>
                        <a href="#about" className="text-sm text-gray-400 hover:text-white">About</a>
                        <a href="#blog" className="text-sm text-gray-400 hover:text-white">Blog</a>
                        <a href="#faqs" className="text-sm text-gray-400 hover:text-white">FAQs</a>
                        <a href="#support" className="text-sm text-gray-400 hover:text-white">Support</a>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-white mb-2">Resources</h4>
                        <a href="#andriod" className="text-sm text-gray-400 hover:text-white">Android reviews</a>
                        <a href="#ios" className="text-sm text-gray-400 hover:text-white">iOS reviews</a>
                        <a href="#jobs" className="text-sm text-gray-400 hover:text-white">Jobs</a>
                        <a href="#testimonials" className="text-sm text-gray-400 hover:text-white">Testimonials</a>
                    </div>

                    {/* Investor */}
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-white mb-2">Investor</h4>
                        <a href="#works" className="text-sm text-gray-400 hover:text-white">How it works</a>
                        <a href="#impact" className="text-sm text-gray-400 hover:text-white">Impact investing guide</a>
                        <a href="#due" className="text-sm text-gray-400 hover:text-white">Due diligence tools</a>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white">Get the latest news and updates</h4>
                        <p className="text-sm text-gray-400">Don't miss out on any of our pre-launch activities</p>
                        <div className="flex items-center border border-white rounded-full px-3 py-2 mt-1 bg-transparent">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent text-sm text-white outline-none flex-grow placeholder:text-gray-400"
                            />
                            <FaArrowRight className="text-white ml-2" size={16} />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 w-full" />

                {/* Bottom copyright */}
                <div className="text-center text-sm text-gray-500">
                    &copy; 2025 | FinAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
