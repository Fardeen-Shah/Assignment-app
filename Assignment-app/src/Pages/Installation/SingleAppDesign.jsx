import React from 'react';
import { removeFromStoreDB } from '../../Utilities/Utilities';
import { FaDownload } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const SingleAppDesign = ({ app, setAppList, appList }) => {
   const handleDelete = (id) => {

        const remain = appList.filter(app=> app.id !== id) 
        setAppList(remain)

        removeFromStoreDB(app.id);
    }
    return (
        <div className="max-w-[1270px] mx-auto w-full p-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-sm rounded-lg p-4 border border-gray-100 hover:shadow-md transition">
                {/* Left section */}
                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                    {/* App Image */}
                    <img
                        className="w-16 h-16 rounded-md flex-shrink-0 object-cover"
                        src={app.image}
                        alt={app.title}
                    />
                    {/* App Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">{app.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                            <div className="flex items-center space-x-1 text-green-500">
                                <FaDownload />
                                <span>{app.downloads}M</span>
                            </div>
                            <div className="flex items-center space-x-1 text-orange-400">
                                <IoStar />
                                <span>{app.ratingAvg}</span>
                            </div>
                            <span>{app.size} MB</span>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <button onClick={() => handleDelete(app.id)} className="bg-green-400 hover:bg-green-500 text-white px-4 py-1.5 rounded-md font-medium w-full sm:w-auto">
                    Uninstall
                </button>
            </div>
        </div>

    );
};

export default SingleAppDesign;