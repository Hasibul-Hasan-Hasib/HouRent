import React from 'react';
import styles from './MapSlide.module.css';
import img from '../../assets/images/daka.jpg';
import { Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const MapSlide = () => {
    return (
        <section className={styles.backGround}>
            <Container size='lg' className={styles.container}>
                <Carousel
                    withIndicators
                    height='20rem'
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    align="start"
                >
                    <Carousel.Slide>
                        <img width='100%' src={img} alt="" />
                        <h4>Chittagong</h4>
                        <span>Listing: <span>1</span></span>
                        <span>Price: ৳120,000.45-৳820,000.00</span>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img width='100%' src={img} alt="" />
                        <h4>Chittagong</h4>
                        <span>Listing: <span>1</span></span>
                        <span>Price: ৳120,000.45-৳820,000.00</span>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img width='100%' src={img} alt="" />
                        <h4>Chittagong</h4>
                        <span>Listing: <span>1</span></span>
                        <span>Price: ৳120,000.45-৳820,000.00</span>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img width='100%' src={img} alt="" />
                        <h4>Chittagong</h4>
                        <span>Listing: <span>1</span></span>
                        <span>Price: ৳120,000.45-৳820,000.00</span>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img width='100%' src={img} alt="" />
                        <h4>Chittagong</h4>
                        <span>Listing: <span>1</span></span>
                        <span>Price: ৳120,000.45-৳820,000.00</span>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default MapSlide;