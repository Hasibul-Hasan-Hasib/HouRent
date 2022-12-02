import { ActionIcon, Grid, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import React from 'react';
import styles from './Property.module.css'



const Description = ({ data }) => {
    return (
        <div className={styles.descContainer}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 style={{ marginLeft: '0.5rem' }}>Description</h2>
                <Tooltip label="Remove Saved" color="cyan" withArrow>
                    <ActionIcon color='red'><IconHeart></IconHeart></ActionIcon>
                </Tooltip>
            </div>
            <Grid justify='space-around' style={{ marginBottom: '0.5rem' }} columns={24}>
                <Grid.Col span={11}>
                    <div className={styles.infoContainer}>
                        <span>Property Size:</span>
                        <span>{data.square_areas} Sq Ft</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Parking:</span>
                        <span>{data.parking}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Total Floor:</span>
                        <span>{data.total_floor}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Price:</span>
                        <span>BDT {data.price ? data.price.toLocaleString(undefined, { maximumFractionDigits: 2 }) : ''} Tk</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Year Built:</span>
                        <span>{data.construction_year}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Garage:</span>
                        <span>{data.garages}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>State:</span>
                        <span>{data.available === 0 ? 'Not Available' : 'Available'}</span>
                    </div>
                </Grid.Col>
                <Grid.Col span={11}>
                    <div className={styles.infoContainer}>
                        <span>Property Purpose:</span>
                        <span>{data.post_type === 0 ? 'Rent' : 'Sell'}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Bed Rooms:</span>
                        <span>{data.bed_rooms}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Bathrooms:</span>
                        <span>{data.bath_rooms}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Living Rooms:</span>
                        <span>{data.living_rooms}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Kitchens:</span>
                        <span>{data.kitchens}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Insurance:</span>
                        <span>{data.Insurance === 0 ? 'No' : 'Yes'}</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span>Pools:</span>
                        <span>{data.pools}</span>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default Description;