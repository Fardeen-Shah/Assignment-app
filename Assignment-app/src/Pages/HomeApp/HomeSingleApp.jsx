import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoStarHalfSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const HomeSingleApp = ({ singleData }) => {
    const { id, title, image, downloads, ratingAvg } = singleData
    return (
        <Link to={`/apps/app-details/${id}`}>
           <div className="max-w-[370px] lg:min-w-[200px] max-h-[550px] lg:min-h-[330px] bg-white shadow-sm rounded-xl p-3 border-t-1 hover:relative hover:-top-2">
                           <img src={image} alt="" className=" h-[110px] md:h-[200px] lg:h-[270px] mx-auto rounded-xl  object-cover" />
                           <div className="mt-3">
                               <h2 className="text-[rgb(11,22,43)] font-medium text-[12px] md:text-[16px]">
                                   {title}
                               </h2>
                               <div className="flex items-center justify-between mt-4 md:mt-2">
                                   <div className="flex items-center gap-1 bg-gray-200 rounded-xl p-1 px-2">
                                       <FaDownload />
                                       <span className="text-green-500 text-sm font-medium">{downloads}</span>
                                   </div>
                                   <div className="flex items-center gap-1 bg-gray-200 px-2 py-[2px] rounded-md">
                                       <IoStarHalfSharp />
                                       <span className="text-[#0B162B] text-sm font-medium">{ratingAvg}</span>
                                   </div>
                               </div>
                           </div>
                       </div>
        </Link>
    );
};

export default HomeSingleApp;