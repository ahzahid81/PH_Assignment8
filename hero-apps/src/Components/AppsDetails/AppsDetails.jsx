import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import ErrorAppPage from '../ErrorPage/ErrorAppPage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import useLocalIds from '../../hooks/useLocalIds';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AppsDetails = () => {

    const appsData = useLoaderData();
    const param = useParams();
    const finalData = appsData.find(data => data.id == param.id);

    if (!finalData) {
        return <ErrorAppPage></ErrorAppPage>
    }

    const { addId, hasId } = useLocalIds();

    const handleButton = () => {
        addId(finalData.id)
        toast.success(`${finalData.title} is successfully installed`)
    }

    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto'>
                <div className='flex flex-col md:flex-row lg:flex-row gap-10 pt-20 pb-20'>
                    <div>
                        <img className=' w-96 h-full' src={finalData.image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-4xl pb-2'>{finalData.title}</h1>
                        <p className='text-[#627382] pb-2'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{finalData.companyName}</span></p>
                        <div className="w-4xl divider pb-2"></div>
                        <div className="flex items-center gap-5 text-xs mt-1 pb-8">
                            <span className="w-40">
                                <img className='w-10 h-10 pb-2' src={download} alt="" />
                                <p className='text-xl pb-2 text-[#001931]'>Downloads</p>
                                <span className='font-extrabold text-5xl'>{finalData.downloads}</span>
                            </span>
                            <span className="w-40">
                                <img className='w-10 h-10 pb-2' src={rating} alt="" />
                                <p className='text-xl pb-2 text-[#001931]'>Average Ratings</p>
                                <span className='font-extrabold text-5xl'>{finalData.ratingAvg}</span>
                            </span>
                            <span className="w-40">
                                <img className='w-10 h-10 pb-2' src={review} alt="" />
                                <p className='text-xl pb-2 text-[#001931]'>Total Reviews</p>
                                <span className='font-extrabold text-5xl'>{finalData.reviews}</span>
                            </span>
                        </div>
                        {
                            hasId(finalData.id) ? <button className='btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white'>Installed</button> :<button onClick={handleButton} className='btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white'>Install Now (<span>{finalData.size}</span>MB )</button>
                        }
                    </div>
                </div>
                <div className="w-full divider pb-10"></div>
                <div>
                    <h1 className='font-bold text-4xl pb-10'>Ratings</h1>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart
                            data={finalData.ratings}
                            layout="vertical" // 🔄 Horizontal bars (reversed axes)
                            margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            {/* Y-axis: category (star names) */}
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fontSize: 14, fill: '#333' }}
                                width={80}
                            />

                            {/* X-axis: numeric values */}
                            <XAxis
                                type="number"
                                tick={{ fontSize: 12, fill: '#555' }}
                            />

                            <Tooltip
                                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                formatter={(value) => [value.toLocaleString(), 'Ratings Count']}
                            />

                            {/* 🎨 Bar color */}
                            <Bar
                                dataKey="count"
                                barSize={28}
                                fill="#FF8811"
                                radius={[0, 6, 6, 0]} // Optional rounded right corners
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full divider pb-10"></div>
                <div>
                    <h1 className='font-bold text-4xl pb-5'>Description</h1>
                    <p className='pb-20'>{finalData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;