import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-10  pt-10'>
            <div><h1 className=' text-center text-5xl font-bold text-white px-20 py-10'>Trusted by Millions, Built for You</h1></div>
            <div className="text-white flex flex-col lg:flex-row md:flex-col justify-center gap-6 pb-20">
                <div className="place-items-center">
                    <div className="stat-title text-white">Total Downloads</div>
                    <div className="font-extrabold text-6xl px-20 py-4">29.6M</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>

                <div className="place-items-center">
                    <div className="stat-title text-white ">Total Reviews</div>
                    <div className="font-extrabold text-6xl px-20 py-4">906K</div>
                    <div className="stat-desc text-white">46% more than last month</div>
                </div>

                <div className="place-items-center">
                    <div className="stat-title text-white">Active Apps</div>
                    <div className="font-extrabold text-6xl px-20 py-4">132+</div>
                    <div className="stat-desc text-white">31 more will Launch</div>
                </div>
            </div>
        </div>
    );
};

export default Status;