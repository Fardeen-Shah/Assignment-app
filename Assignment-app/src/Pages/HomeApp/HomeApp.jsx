import React, { use } from 'react';
import HomeSingleApp from './HomeSingleApp';

const HomeApp = ({ HomeData }) => {
    const AllData = use(HomeData)
    console.log(AllData)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10'>
            {
                AllData.map(singleData => <HomeSingleApp key={singleData.id} singleData={singleData}></HomeSingleApp>)
            }
        </div>

    );
};

export default HomeApp;