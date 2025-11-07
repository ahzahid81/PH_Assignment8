import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import HomeApp from '../HomeApps/HomeApp';
import logo from '../../assets/logo.png';

const Apps = () => {
    const appsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredApps, setFilteredApps] = useState(appsData);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setLoading(true);

        setTimeout(() => {
            const filtered = value.trim() === ''
                ? appsData
                : appsData.filter(app => app.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredApps(filtered);
            setLoading(false);
        }, 500); // small delay to show loader
    };

    return (
        <div className='bg-base-200 py-20'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-5xl pb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between px-20 items-center mb-4'>
                <h1 className='font-bold text-2xl'>({filteredApps.length}) Apps Found</h1>
                <div className='flex flex-col w-1/3 relative'>
                    <input
                        value={searchTerm}
                        onChange={handleSearch}
                        type="search"
                        placeholder="Search Apps"
                        className="input input-bordered w-full"
                    />

                </div>
            </div>
            {loading && (
                <div className=" flex items-center justify-center w-full h-96">
                    <img
                        src={logo}
                        alt="Loading"
                        className="w-20 h-20"
                        style={{
                            animation: 'spinScale 1s linear infinite',
                        }}
                    />
                    <style>
                        {`
                                    @keyframes spinScale {
                                      0%, 100% { transform: rotate(0deg) scale(1); }
                                      50% { transform: rotate(180deg) scale(1.5); }
                                    }
                                  `}
                    </style>
                </div>
            )}

            {filteredApps.length === 0 && <h1 className='text-center font-bold text-3xl p-10'>No App Found</h1>}

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                {filteredApps.map(data => <HomeApp key={data.id} data={data} />)}
            </div>
        </div>
    );
};

export default Apps;
