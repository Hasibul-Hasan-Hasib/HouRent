import React from 'react';
import Banner from './Banner';
import Email from '../../shared/Email/Email';
import Featured from './Featured';
import HomeFilter from './HomeFilter';
import HomeHero from './HomeHero';
import MapSlide from './MapSlide';
import Services from './Services';
import Team from '../../shared/Team/Team';

const Home = () => {
    return (
        <>
            <Banner />
            <HomeFilter/>
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