import React from 'react';
import simple from '../../assets/demo-app (6).webp';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const Apps = () => {
    return (
        <div>
            <div className='bg-base-200 py-20'>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>Our All Applications</h1>
                    <p className='text-center text-[#627382] pb-20'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between px-20'>
                    <h1 className=' font-bold text-2xl'>(<span>132</span>) Apps Found</h1>
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
                        <input type="search" placeholder="Search Apps" />
                    </label>
                </div>
                <div>
                    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                            <figure>
                                <img className='h-full w-full object-cover rounded-2xl' src={simple} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Daily Planner: To Do List Task</h2>
                                <div className="card-actions justify-between">
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> 9M</button>
                                    <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> 5</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;