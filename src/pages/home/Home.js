import React from 'react';
import Banner from '../../components/Banner/Banner';
import Featured from '../../components/Featured/Featured';
import HomeHero from '../../components/HomeHero/HomeHero';
import MapSlide from '../../components/MapSlide/MapSlide';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Featured />
            <MapSlide />
            <HomeHero/>
        </>
    );
};

export default Home;