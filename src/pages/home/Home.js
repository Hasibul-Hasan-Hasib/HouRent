import React from 'react';
import Banner from '../../components/Banner/Banner';
import Featured from '../../components/Featured/Featured';
import MapSlide from '../../components/MapSlide/MapSlide';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Featured />
            <MapSlide />
        </>
    );
};

export default Home;