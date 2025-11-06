import React from 'react';
import Hero from '../Hero/Hero';
import Status from '../Status/Status';
import HomeApps from '../HomeApps/HomeApps';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Status></Status>
            <HomeApps></HomeApps>
        </div>
    );
};

export default Home;