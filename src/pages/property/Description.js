import { Grid } from '@mantine/core';
import React from 'react';
import styles from './Property.module.css'



const Description = () => {
    return (
        <div className={styles.descContainer}>
            <h2 style={{ margin: '0', borderBottom: '1px solid gray', paddingBottom: '0.5rem' }}>Description</h2>
            <Grid justify='space-around' columns={24}>
                <Grid.Col span={11}>
                    <div className={styles.infoContainer}>
                        <span>Property Size:</span>
                        <span>2215 Sq Ft</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Parking:</span>
                        <span>2</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Floor:</span>
                        <span>10th</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Unit:</span>
                        <span>B-10</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Unit Per Floor:</span>
                        <span>2</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Price:</span>
                        <span>BDT 276,875/-</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Lift:</span>
                        <span>02</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Year Built:</span>
                        <span>2012</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Garage:</span>
                        <span>0</span>
                    </div>
                </Grid.Col>
                <Grid.Col span={11}>
                    <div className={styles.infoContainer}>
                        <span>Property Purpose:</span>
                        <span>For Rent</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Total Unit:</span>
                        <span>32</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Bed Rooms:</span>
                        <span>3</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Bathrooms:</span>
                        <span>2</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Living Rooms:</span>
                        <span>2</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Kitchens:</span>
                        <span>1</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Insurance:</span>
                        <span>N/A</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Pools:</span>
                        <span>0</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Building Type:</span>
                        <span>Commercial</span>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default Description;