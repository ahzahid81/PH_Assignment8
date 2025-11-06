import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import useLocalIds from '../../hooks/useLocalIds';
import { useLoaderData } from 'react-router';
import InstallFeature from './InstallFeature';

const Install = () => {
    const appsData = useLoaderData();
    const {ids} = useLocalIds();
    const installedApps = appsData.filter(app => ids.includes(Number(app.id)));
    console.log('installedApps:', installedApps);
    

    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto py-20'>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>Your Installed Apps</h1>
                    <p className='text-center text-[#27292c] pb-20'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between'>
                    <h1 className=' font-bold text-2xl'><span>{ids.length}</span> Apps Found</h1>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size<FaSortDown></FaSortDown></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>
                </div>
                {installedApps.map(data => <InstallFeature data = {data} key = {data.id}></InstallFeature>)}
            </div>
        </div>
    );
};

export default Install;