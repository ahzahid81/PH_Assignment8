import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import useLocalIds from '../../hooks/useLocalIds';

// {
//         "image": "https://logo.clearbit.com/booking.com",
//         "title": "Booking.com",
//         "companyName": "Booking Holdings Inc.",
//         "id": 19,
//         "description": "Booking.com offers accommodation booking services worldwide, providing hotels, apartments, and vacation rentals. The app includes price comparison, reviews, maps, and reservations all in one place.",
//         "size": 140,
//         "reviews": "650K",
//         "ratingAvg": 4.4,
//         "downloads": "100M+",
//         "ratings": [
//             { "name": "1 star", "count": 25000 },
//             { "name": "2 star", "count": 8000 },
//             { "name": "3 star", "count": 20000 },
//             { "name": "4 star", "count": 140000 },
//             { "name": "5 star", "count": 455000 }
//         ]
//     },
const InstallFeature = ({data}) => {
    const {removeId} = useLocalIds();
    return (
        <div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200 my-4">
                <div className="w-14 h-14 shrink-0">
                    <img src={data.image} alt="" />
                </div>

                <div className="flex-1">
                    <p className="font-medium text-sm line-clamp-1">{data.title}</p>

                    <div className="flex items-center gap-3 text-xs mt-1">
                        <span className="flex items-center gap-1 text-[#00D390]"><img className='w-2.5 h-2.5' src={download} alt="" />{data.downloads}</span>

                        <span className="flex items-center gap-1 text-[#FF8811]"> <img className='w-2.5 h-2.5' src={rating} alt="" />{data.ratingAvg}</span>

                        <span className="text-xs text-gray-500">{data.size} MB</span>
                    </div>
                </div>

                <button onClick={() => removeId(data.id)} className="btn btn-success text-white">Uninstall</button>
            </div>
        </div>
    );
};

export default InstallFeature;