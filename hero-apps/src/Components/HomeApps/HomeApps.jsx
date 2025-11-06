import React from 'react';
import { Link, } from 'react-router';
import HomeApp from './HomeApp';

const HomeApps = ({ appsData }) => {
    return (
        <div className='bg-base-200 py-20'>
            <div>
                <h1 className=' text-center font-bold text-5xl pb-4'>Trending Apps</h1>
                <p className='text-center text-[#627382] pb-20'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                    {
                        appsData.slice(0,8).map(data => <HomeApp key={data.id} data={data}></HomeApp>)
                    }

                </div>
                <div className='flex justify-center'>
                    <Link to={'/Apps'}><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeApps;