import { Container, Grid } from '@mantine/core';
import styles from './Featured.module.css'
import React from 'react';
import image from '../../assets/images/daka.jpg'

const Featured = () => {
    return (
        <Container size='lg' className={styles.container}>
            <h1 className={styles.title}>
                Wide range of property to suit all budgets & tastes
            </h1>
            <Grid gutter={60}>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}>
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
                <Grid.Col md={6} lg={4} sm={6} className={styles.singleCard}> 
                    <div >
                        <img className={styles.img} src={image} alt="" />
                    </div>
                    <div className={styles.align}>
                        <span>Chittagong</span>
                        <span>for Rent</span>
                    </div>
                    <div className={styles.align}>
                        <span>2 bathrooms</span>
                        <span>৳2400 per day</span>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Featured;