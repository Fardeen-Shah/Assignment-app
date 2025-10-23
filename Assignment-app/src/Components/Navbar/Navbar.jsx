import React from 'react';
import ButtonImg from '../../assets/Vector.png'
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { FaAppStore } from 'react-icons/fa';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
    const Links =
        <div className='flex flex-col lg:flex-row gap-6'>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "border-1 border-purple-600 p-2 rounded-xl" : "border-0"}
            ><span className='flex items-center gap-1'>
                <span><IoHome></IoHome></span>
                <span>Home</span>
            </span></NavLink>
            <NavLink
                to="/apps"
                className={({ isActive }) => isActive ? "border-1 border-purple-600 p-2 rounded-xl" : "border-0"}
            ><span className='flex items-center gap-1'>
                <span><FaAppStore></FaAppStore></span>
                <span>Apps</span>
            </span></NavLink>
            <NavLink
                to="/installation"
                className={({ isActive }) => isActive ? "border-1 border-purple-600 p-2 rounded-xl" : "border-0"}
            ><span className='flex items-center gap-1'>
                <span><MdInstallDesktop></MdInstallDesktop></span>
                <span>Installation</span>
            </span></NavLink>
        </div>
    return (
        <div className="navbar bg-white shadow-sm px-4">
            {/* Left Section */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {Links}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Logo" className="w-7 md:w-10" />
                        <span className="text-[15px] md:text-xl font-bold hidden md:block">MY APP</span>
                    </div>
                </Link>
            </div>

            {/* Center Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">{Links}</ul>
            </div>

            {/* Right Section (Button) */}
            <div className="navbar-end">
                <Link to="https://github.com/Fardeen-Shah">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300">
                        <img src={ButtonImg} alt="Contribute" className="w-4 h-4 md:w-6 md:h-6" />
                        <span className="text-[10px] md:text-base">Contribute</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

// all done