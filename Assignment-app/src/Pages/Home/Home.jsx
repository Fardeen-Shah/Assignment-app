import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HomeApp from '../HomeApp/HomeApp';
import Loader from '../../Components/Loader/Loader';
import { Link } from 'react-router';

const Home = () => {
    const HomeData = fetch("/HomeData.json").then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loader></Loader>}>
                <HomeApp HomeData={HomeData}></HomeApp>
            </Suspense>
            <Link to="/apps">
                <div className='flex justify-center mb-10 md:mb-15 lg:mb-20'>
                    <button className="items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300">
                        <span className="text-[10px] md:text-base">Show All</span>
                    </button>
                </div>
            </Link>
        </div>



    );
};

export default Home;