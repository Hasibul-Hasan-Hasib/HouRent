import { React, useRef } from 'react';
import styles from './MapSlide.module.css';
import { Container, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';


const MapSlide = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    return (
        <Container size='lg' className={styles.container}>
            <h1 className={styles.title}>Find listing in your area</h1>
            <Carousel
                withIndicators
                height='26rem'
                slideSize="30%"
                slideGap="lg"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                loop
                align="start"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/chattagram.png')} alt="" />
                        <h3 className={styles.info}>Chittagong</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Dhaka.png')} alt="" />
                        <h3 className={styles.info}>Dhaka</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Bagura.png')} alt="" />
                        <h3 className={styles.info}>Bagura</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/cumilla.png')} alt="" />
                        <h3 className={styles.info}>Cumilla</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Dinajpur.png')} alt="" />
                        <h3 className={styles.info}>Dinajpur</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Khulna.png')} alt="" />
                        <h3 className={styles.info}>Khulna</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Kusthia.png')} alt="" />
                        <h3 className={styles.info}>Kusthia</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Rajshahi.png')} alt="" />
                        <h3 className={styles.info}>Rajshahi</h3>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={styles.mapContainer}>
                        <Image height={300} component={Link} to='/properties' className={styles.img} src={require('../../assets/map image/Syhlet.png')} alt="" />
                        <h3 className={styles.info}>Syhlet</h3>
                    </div>
                </Carousel.Slide>
            </Carousel>
        </Container>
    );
};

export default MapSlide;