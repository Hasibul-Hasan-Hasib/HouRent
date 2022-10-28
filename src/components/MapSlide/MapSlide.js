import { React, useRef } from 'react';
import styles from './MapSlide.module.css';
import img from '../../assets/images/daka.jpg';
import { Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';


const MapSlide = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    return (
        <section className={styles.backGround}>
            <Container size='lg' className={styles.container}>
                <h1 className={styles.title}>Find listing in your area</h1>
                <Carousel
                    withIndicators
                    height='30rem'
                    slideSize="33.333333%"
                    slideGap="md"
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
                            <div>
                                <img className={styles.img} src={img} alt="" />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3>Chittagong</h3>
                                <span className={styles.listing}>Listing: <span className={styles.number}>1</span></span>
                                <span className={styles.prices}>Price: <span className={styles.number}>৳120,000.45-৳820,000.00</span></span>
                            </div>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div className={styles.mapContainer}>
                            <div>
                                <img className={styles.img} src={img} alt="" />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3>Chittagong</h3>
                                <span className={styles.listing}>Listing: <span className={styles.number}>1</span></span>
                                <span className={styles.prices}>Price: <span className={styles.number}>৳120,000.45-৳820,000.00</span></span>
                            </div>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div className={styles.mapContainer}>
                            <div>
                                <img className={styles.img} src={img} alt="" />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3>Chittagong</h3>
                                <span className={styles.listing}>Listing: <span className={styles.number}>1</span></span>
                                <span className={styles.prices}>Price: <span className={styles.number}>৳120,000.45-৳820,000.00</span></span>
                            </div>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div className={styles.mapContainer}>
                            <div>
                                <img className={styles.img} src={img} alt="" />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3>Chittagong</h3>
                                <span className={styles.listing}>Listing: <span className={styles.number}>1</span></span>
                                <span className={styles.prices}>Price: <span className={styles.number}>৳120,000.45-৳820,000.00</span></span>
                            </div>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default MapSlide;