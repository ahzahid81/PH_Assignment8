import React from 'react';
import error from '../../assets/App-Error.png'

const ErrorAppPage = () => {
    return (
        <div>
            <div className='bg-base-200 pb-20'>
                <div className='w-11/12 pt-20 mx-auto pb-5'>
                    <img className='mx-auto' src={error} alt="" />
                </div>
                <div>
                    <h1 className=' text-center font-bold text-5xl pb-4'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-center text-[#627382] pb-5'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
                <div className='flex justify-center'>
                    <a href='/Apps' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Go back</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorAppPage;