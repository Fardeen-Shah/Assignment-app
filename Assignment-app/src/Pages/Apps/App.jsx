import React, { Suspense } from 'react';
import AllAppData from './AllAppData';
import Loader from '../../Components/Loader/Loader';

const App = () => {
    const AppData = fetch("/AppData.json").then(res => res.json())
    return (
        <div className="max-w-[1270px] mx-auto px-4 mt-8 md:mt-12 lg:mt-20">
            <h1 className="text-center text-purple-500 font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight">
                Our All Applications
            </h1>
            <p className="text-center text-[#627382] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-2 mb-5 md:mb-8 lg:mb-10">
                Explore All Apps on the Market developed by us. We code for Millions
            </p>
        <Suspense fallback={<Loader></Loader>}>
            <AllAppData AppData={AppData}></AllAppData>
        </Suspense>

        </div>

    );
};

export default App;