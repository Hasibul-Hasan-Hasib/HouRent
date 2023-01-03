import React from 'react';
import styles from './Banner.module.css';
import {Link} from 'react-router-dom';
import { Button, Container, Grid } from '@mantine/core';


const Banner = () => {



    return (
        <Container size='lg' className={styles.container}>
            <Grid align='center' gutter={80}>
                <Grid.Col span={7}>
                    <h1 className={styles.bannerTitle}>Find Your Property</h1>
                    <p className={styles.bannerPara}>Gain access to comprehensive and minute knowledge of the local
                        property market, allowing you to fully understand.</p>
                    <Button component={Link} to='/properties' color='cyan'>Find Home Now!</Button>
                </Grid.Col>
                <Grid.Col span={5}>
                    <img src={'/assets/images/Hotel Booking-pana.svg'} alt="" />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Banner;