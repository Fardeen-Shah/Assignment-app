import React from "react";
import FooterImg from '../../assets/logo.png'
import {
    FaFacebookF,
    FaWhatsapp,
    FaTwitter,
    FaInstagram
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0d1b2a] text-white py-16 px-6 sm:px-10">
            {/* Container with max width */}
            <div className="max-w-[1270px] mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-12">
                {/* --- Left Section (About + Subscribe) --- */}
                <div className="flex-1 min-w-[280px] md:max-w-[500px]">
                    <div className="flex item-center gap-2">
                        <img className="h-12 w-12" src={FooterImg} alt="" />
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
                            MY APP
                        </h2>
                    </div>



                    <p className="text-gray-300 text-sm md:text-base mt-10 leading-relaxed">
                        MY APP is a multi-platform app store specialized in Android. Our
                        goal is to provide free and open access to a large catalog of apps
                        without restrictions, while providing a legal distribution platform
                        accessible from any browser, and also through its official native
                        app.
                    </p>
                </div>

                {/* --- Right Section (Links) --- */}
                <div className="flex flex-wrap gap-12 sm:gap-16 md:justify-end">
                    {/* PRODUCTS & SERVICES */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg uppercase">
                            Products and Services
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">About us</a></li>
                            <li><a href="#" className="hover:text-white transition">Publish your app</a></li>
                            <li><a href="#" className="hover:text-white transition">Advertising</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs & Support</a></li>
                            <li><a href="#" className="hover:text-white transition">We're hiring</a></li>
                            <li><a href="#" className="hover:text-white transition">Corporate blog</a></li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg uppercase">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Terms of Service for Users</a></li>
                            <li><a href="#" className="hover:text-white transition">Cookie Settings</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms of Service for Developers</a></li>
                            <li><a href="#" className="hover:text-white transition">DMCA</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- Bottom Section (Social + Copyright) --- */}
            <div className="max-w-[1270px] mx-auto mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
                {/* Social Icons */}
                <div className="flex gap-6 text-xl">
                    <a href="#" className="hover:text-[#9ad0b2] transition"><FaFacebookF /></a>
                    <a href="#" className="hover:text-[#9ad0b2] transition"><FaWhatsapp /></a>
                    <a href="#" className="hover:text-[#9ad0b2] transition"><FaTwitter /></a>
                    <a href="#" className="hover:text-[#9ad0b2] transition"><FaInstagram /></a>
                </div>

                {/* Copyright */}
                <h4 className="text-sm text-gray-400 text-center">
                    © 2025 App Zone. All rights reserved.
                </h4>
            </div>
        </footer>
    );
}


// no change