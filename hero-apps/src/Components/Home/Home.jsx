import React from 'react';
import Hero from '../Hero/Hero';
import Status from '../Status/Status';
import HomeApps from '../HomeApps/HomeApps';
import { useLoaderData } from 'react-router';


const Home = () => {
    const appsData = useLoaderData();
    const {id} = appsData;



    return (
        <div>
            <Hero></Hero>
            <Status></Status>
            <HomeApps key={id} appsData={appsData}></HomeApps>
        </div>
    );
};

export default Home;