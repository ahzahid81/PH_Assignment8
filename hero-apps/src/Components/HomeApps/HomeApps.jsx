import React from 'react';
import simple from '../../assets/demo-app (6).webp';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const HomeApps = () => {
    return (
        <div className='bg-base-200 py-20'>
            <div>
                <h1 className=' text-center font-bold text-5xl pb-4'>Trending Apps</h1>
                <p className='text-center text-[#627382] pb-20'>Explore All Trending Apps on the Market developed by us</p>
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
            <div className='flex justify-center'>
                <Link to={'/Apps'}><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button></Link>
            </div>
        </div>
    );
};

export default HomeApps;