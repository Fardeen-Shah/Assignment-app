import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utilities/Utilities';
import { SlArrowDown } from 'react-icons/sl';
import SingleAppDesign from './SingleAppDesign';

const Installation = () => {
    const [appList, setAppList] = useState([])
    const data = useLoaderData()
    const [sort, setSort] = useState("")



    useEffect(() => {
        const storedAppData = getStoredApp()
        const convertedAppData = storedAppData.map(id => parseInt(id))
        const myAppList = data.filter(app => convertedAppData.includes(app.id))
        setAppList(myAppList)
    }, [data])

    const handleSort = (type) => {
        setSort(type);
        const sorted = [...appList];

        if (type === "Low to High") {
            sorted.sort((a, b) => a.downloads - b.downloads);
        }
        else if (type === "High to Low") {
            sorted.sort((a, b) => b.downloads - a.downloads);
        }

        setAppList(sorted);
    };

    return (
        <div>
            <h1 className="text-center text-purple-600 font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight mt-10 md:mt-15 lg:mt-20">
                Your Installed Apps
            </h1>
            <p className="text-center text-[#627382] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-2 mb-5 md:mb-8 lg:mb-10">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center'>({appList.length}) App Found</p>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by {sort ? sort : ""}  <SlArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Low to High")}>Low to High</a></li>
                        <li><a onClick={() => handleSort("High to Low")}>High to Low</a></li>
                    </ul>
                </div>
            </div>
            {
                appList.map(app => <SingleAppDesign key={app.id} app={app} appList={appList} setAppList={setAppList}></SingleAppDesign>)
            }
        </div>
    );
};

export default Installation;