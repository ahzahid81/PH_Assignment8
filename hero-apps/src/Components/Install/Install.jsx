import React from 'react';
import simple from '../../assets/demo-app (6).webp';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { FaSortDown } from 'react-icons/fa';

const Install = () => {
    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto py-20'>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>Your Installed Apps</h1>
                    <p className='text-center text-[#627382] pb-20'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between'>
                    <h1 className=' font-bold text-2xl'><span>132</span> Apps Found</h1>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size<FaSortDown></FaSortDown></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 my-4">
                    <div className="w-14 h-14 shrink-0">
                        <img src={simple} alt="" />
                    </div>

                    <div className="flex-1">
                            <p className="font-medium text-sm line-clamp-1">
                                Forest: Focus for Productivity
                            </p>

                        <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="flex items-center gap-1 text-[#00D390]"><img className='w-2.5 h-2.5' src={download} alt="" /> 7M</span>

                            <span className="flex items-center gap-1 text-[#FF8811]"> <img className='w-2.5 h-2.5' src={rating} alt="" /> 4.9</span>

                            <span className="text-xs text-gray-500">258 MB</span>
                        </div>
                    </div>

                    <button className="btn btn-success text-white">Uninstall</button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 my-4">
                    <div className="w-14 h-14 shrink-0">
                        <img src={simple} alt="" />
                    </div>

                    <div className="flex-1">
                            <p className="font-medium text-sm line-clamp-1">
                                Forest: Focus for Productivity
                            </p>

                        <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="flex items-center gap-1 text-[#00D390]"><img className='w-2.5 h-2.5' src={download} alt="" /> 7M</span>

                            <span className="flex items-center gap-1 text-[#FF8811]"> <img className='w-2.5 h-2.5' src={rating} alt="" /> 4.9</span>

                            <span className="text-xs text-gray-500">258 MB</span>
                        </div>
                    </div>

                    <button className="btn btn-success text-white">Uninstall</button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 my-4">
                    <div className="w-14 h-14 shrink-0">
                        <img src={simple} alt="" />
                    </div>

                    <div className="flex-1">
                            <p className="font-medium text-sm line-clamp-1">
                                Forest: Focus for Productivity
                            </p>

                        <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="flex items-center gap-1 text-[#00D390]"><img className='w-2.5 h-2.5' src={download} alt="" /> 7M</span>

                            <span className="flex items-center gap-1 text-[#FF8811]"> <img className='w-2.5 h-2.5' src={rating} alt="" /> 4.9</span>

                            <span className="text-xs text-gray-500">258 MB</span>
                        </div>
                    </div>

                    <button className="btn btn-success text-white">Uninstall</button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 my-4">
                    <div className="w-14 h-14 shrink-0">
                        <img src={simple} alt="" />
                    </div>

                    <div className="flex-1">
                            <p className="font-medium text-sm line-clamp-1">
                                Forest: Focus for Productivity
                            </p>

                        <div className="flex items-center gap-3 text-xs mt-1">
                            <span className="flex items-center gap-1 text-[#00D390]"><img className='w-2.5 h-2.5' src={download} alt="" /> 7M</span>

                            <span className="flex items-center gap-1 text-[#FF8811]"> <img className='w-2.5 h-2.5' src={rating} alt="" /> 4.9</span>

                            <span className="text-xs text-gray-500">258 MB</span>
                        </div>
                    </div>

                    <button className="btn btn-success text-white">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default Install;