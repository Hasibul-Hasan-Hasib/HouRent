import React from 'react';
import Banner from '../../components/Banner/Banner';
import Email from '../../components/Email/Email';
import Featured from '../../components/Featured/Featured';
import HomeHero from '../../components/HomeHero/HomeHero';
import MapSlide from '../../components/MapSlide/MapSlide';
import Services from '../../components/Services/Services';
import Team from '../../components/Team/Team';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Featured />
            <MapSlide />
            <HomeHero />
            <Team />
            <Email />
        </>
    );
};

export default Home;