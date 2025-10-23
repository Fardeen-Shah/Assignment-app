import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoreDB, getStoredApp } from '../../Utilities/Utilities';
import AppNotFound from '../AppNotFound/AppNotFound';

const AppDetails = () => {

    const { id } = useParams()
    const AppId = parseInt(id)
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const storedAppData = getStoredApp();
        if (storedAppData.includes(AppId)) {
            setInstalled(true);
        }
    }, [AppId]);

     const handleInstall = () => {
        addToStoreDB(AppId)
        setInstalled(true);
    }
    const AppData = useLoaderData()
    const singleApp = AppData.find(app => app.id === AppId)
    if (!singleApp) {
        return <AppNotFound></AppNotFound>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings, } = singleApp;

    return (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                {/* App Logo */}
                <img
                    src={image}
                    alt={title}
                    className="w-40 h-40 object-contain rounded-xl"
                />

                {/* App Info */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Developed by <span className="text-indigo-600 font-medium">{companyName}</span>
                    </p>

                    {/* Stats Section */}
                    <div className="flex flex-wrap items-center gap-8 mt-5">
                        <div className="flex flex-col items-center">
                            <FaDownload className="text-green-500 text-2xl" />
                            <p className="text-gray-500 text-sm">Downloads</p>
                            <h2 className="font-bold text-xl">{downloads}M</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaStar className="text-orange-400 text-2xl" />
                            <p className="text-gray-500 text-sm">Average Ratings</p>
                            <h2 className="font-bold text-xl">{ratingAvg}</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <MdRateReview className="text-purple-500 text-2xl" />
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                            <h2 className="font-bold text-xl">{reviews}K</h2>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button onClick={handleInstall} disabled={installed} className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                        {installed ? "Installed" : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>
            {/* Ratings Chart */}
            <div className="my-8">
                <h2 className="font-semibold text-lg mb-2">Ratings</h2>
                <div className="h-64 w-full">
                    <ResponsiveContainer>
                        <BarChart data={ratings} layout="vertical" margin={{ left: 40 }}>
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fontSize: 12 }}
                                width={80}
                            />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed">
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
