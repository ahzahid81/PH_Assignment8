import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import HomeApp from '../HomeApps/HomeApp';

const Apps = () => {

    const appsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredApps = searchTerm.trim() === '' ? appsData : appsData.filter(app => {
        const title = String(app.title).toLowerCase();
        const q = searchTerm.trim().toLowerCase();
        return title.includes(q);
    });

    return (
        <div>
            <div className='bg-base-200 py-20'>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>Our All Applications</h1>
                    <p className='text-center text-[#627382] pb-20'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between px-20'>
                    <h1 className=' font-bold text-2xl'>(<span>{filteredApps.length}</span>) Apps Found</h1>
                    <label className="input">
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
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="search" placeholder="Search Apps" />
                    </label>
                </div>
                <div>
                    {
                        filteredApps.length === 0 && <h1 className=' text-center font-bold text-5xl p-10'>No App Found</h1>
                    }
                    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                        {
                            filteredApps.map(data => <HomeApp key={data.id} data={data}></HomeApp>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;