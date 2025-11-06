import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const HomeApp = ({ data }) => {
    const { id, image, title, downloads, ratingAvg } = data;
    return (
        <div>
            <Link to={`/Apps/${id}`}>
                <div className="card bg-base-100 shadow-lg cursor-pointer hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
                    <figure>
                        <img className='h-full w-full object-cover rounded-2xl' src={image} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-between">
                            <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#F1F5E8]"> <img className='w-4 h-4' src={download} alt="" /> {downloads}</button>
                            <button className="flex gap-2 px-2.5 py-1.5 rounded bg-[#FFF0E1]"> <img className='w-4 h-4' src={rating} alt="" /> {ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeApp;