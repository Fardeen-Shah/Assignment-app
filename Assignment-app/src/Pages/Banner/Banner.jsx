import React from 'react';
import BannerImg from '../../assets/hero.png'
import PlayStoreImg from '../../assets/Play-store.png'
import AppStoreImg from '../../assets/App-store.png'
import { Link } from 'react-router';
import { IoIosTrendingUp, IoMdStar } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <div className="bg-white text-center py-16 sm:py-20 px-4">
                <h1 className="mx-auto w-full sm:w-[400px] text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    We Build <span className="text-purple-600">Productive</span> Apps
                </h1>

                <p className="text-gray-500 max-w-md sm:max-w-xl mx-auto mt-4 text-sm sm:text-base md:text-lg">
                    At <span className="font-semibold">MY APP</span>, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>


                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                    <Link to="https://play.google.com/store/games">
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 px-6 py-2 border border-gray-300 rounded-lg text-sm sm:text-base font-medium w-full sm:w-auto">
                            <img src={PlayStoreImg} alt="Play Store" className="w-5 sm:w-6" />Google Play
                        </button>
                    </Link>
                    <Link to="https://www.apple.com/app-store/">
                        <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 px-6 py-2 border border-gray-300 rounded-lg text-sm sm:text-base font-medium w-full sm:w-auto">
                            <img src={AppStoreImg} alt="App Store" className="w-5 sm:w-6" />App Store
                        </button>
                    </Link>
                </div>


                <div className="relative flex justify-center mt-6">
                    <img
                        src={BannerImg}
                        alt="App Preview"
                        className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] xl:w-[550px] relative top-20 drop-shadow-2xl rounded-2xl"
                    />
                </div>

                <div className="mt-20 bg-gradient-to-t from-purple-700 to-purple-500 text-white py-14 sm:py-16 rounded-t-3xl xl:rounded-t-[0px]">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-10">
                        <div className='flex items-center gap-2'>
                            <div>
                                <p className="opacity-90 text-xs sm:text-sm">Total Downloads</p>
                                <h3 className="text-3xl sm:text-4xl font-bold pt-2 sm:pt-4">29.6M</h3>
                                <p className="text-xs sm:text-lg mt-1 opacity-70">21% More Than Last Month</p>
                            </div>
                            <div>
                                <FaDownload className='text-4xl' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <p className="opacity-90 text-xs sm:text-sm">Total Reviews</p>
                                <h3 className="text-3xl sm:text-4xl font-bold pt-2 sm:pt-4">906K</h3>
                                <p className="text-xs sm:text-lg mt-1 opacity-70">46% More Than Last Month</p>
                            </div>
                            <div>
                                <IoMdStar className='text-4xl' />

                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <p className="opacity-90 text-xs sm:text-sm">Active Apps</p>
                                <h3 className="text-3xl sm:text-4xl font-bold pt-2 sm:pt-4">132+</h3>
                                <p className="text-xs sm:text-lg mt-1 opacity-70">31 More Will Launch</p>
                            </div>
                            <div>
                                <IoLogoGooglePlaystore className='text-4xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center px-4 md:px-8 lg:px-16 mt-8 md:mt-12 lg:mt-16 mb-5 md:mb-8 lg:mb-10">
                <h1 className="font-bold flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                    <span className='flex items-center gap-5'>
                        <span className='text-purple-600'>Trending Apps</span>
                        <span><IoIosTrendingUp></IoIosTrendingUp></span>
                    </span>
                </h1>
                <p className="text-purple-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                    Explore all trending apps on the market developed by us.
                </p>
            </div>
        </div>
    );
};

export default Banner;