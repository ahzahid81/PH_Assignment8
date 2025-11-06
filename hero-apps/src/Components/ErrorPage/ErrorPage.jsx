import React from 'react';
import error from '../../assets/error-404.png'


const ErrorPage = () => {
    return (
        <div>
            <div className='bg-base-200 pb-20'>
                <div className='w-11/12 pt-20 mx-auto pb-5'>
                    <img className='mx-auto' src={error} alt="" />
                </div>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>Oops, page not found!</h1>
                    <p className='text-center text-[#627382] pb-5'>The page you are looking for is not available.</p>
                </div>
                <div className='flex justify-center'>
                    <a href='/' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Go back</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;