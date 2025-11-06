import React from 'react';
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className="hero py-10">
                <div className="hero-content text-center">
                    <div className=" max-w-[1440px]">
                        <h1 className=" text-7xl font-bold">We Build<br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                        <p className="py-6 text-[#627382] text-[20px]">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <Link to={'https://play.google.com/store/games'}><button className="btn m-1 font-bold text-2xl"><IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play</button></Link>
                        <Link to={'https://www.apple.com/app-store/'}><button className="btn m-1 font-bold text-2xl"><IoLogoAppleAppstore></IoLogoAppleAppstore> App Store</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <HeroImage></HeroImage>
            </div>
        </div>
    );
};

export default Hero;