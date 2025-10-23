import React, { use, useState } from 'react';
import SingleAppData from './SingleAppData';
import Loader from '../../Components/Loader/Loader';

const AllAppData = ({ AppData }) => {
    const AllData = use(AppData)
    // console.log(AllData)
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const handelSearch = (event) => {
        setSearchTerm(event.target.value)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    // Searching Data
    const filterData = AllData.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase()) || app.companyName.toLowerCase().includes(searchTerm.toLowerCase()))

    return (

        <div>
            {
                <div className='flex items-center justify-between mb-4'>
                    <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center">
                        ({filterData.length}) All Apps
                    </p>
                    <div>
                        <label className="input w-[200px] md:w-[300px] lg:w-[350px]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                required
                                placeholder="Search"
                                className='outline-none w-full'
                                value={searchTerm}
                                onChange={handelSearch}
                            />
                        </label>
                    </div>
                </div>
            }
            {
                loading ? (<Loader></Loader>) : filterData.length === 0 ?
                    (
                        <div className='text-center text-gray-500 text-lg py-10'>
                            ❌ No apps found matching “{searchTerm}”
                        </div>
                    )
                    :
                    (
                        < div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10'>
                            {
                                filterData.map(singleAppData => <SingleAppData singleAppData={singleAppData}></SingleAppData>)
                            }
                        </div>
                    )
            }

        </div >
    );
};

export default AllAppData;
