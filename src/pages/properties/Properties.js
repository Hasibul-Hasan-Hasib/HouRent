import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Properties.module.css';
import Filters from './Filters';
import { Container, Grid, Pagination } from '@mantine/core';
import { IconRuler2 } from '@tabler/icons';

const Properties = () => {
    return (
        <Container size='lg' className={styles.container}>
            <Grid columns={24} align='flex-start' justify='space-between'>
                <Grid.Col span={15}>
                    <Grid align='center' className={styles.cardContainer} component={Link} to='/property'>
                        <Grid.Col span={5}>
                            <img
                                style={{ width: '100%' }}
                                src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')}
                                alt="" />
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <h3>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h3>
                            <span>Banani, Dhaka 1213</span>
                            <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                <IconRuler2 size={24} />
                                <span>2215 Sq Ft</span>
                            </div>
                            <h2>BDT 276,875</h2>
                        </Grid.Col>
                    </Grid>
                    <Grid align='center' className={styles.cardContainer} component={Link} to='/property'>
                        <Grid.Col span={5}>
                            <img
                                style={{ width: '100%' }}
                                src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')}
                                alt="" />
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <h3>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h3>
                            <span>Banani, Dhaka 1213</span>
                            <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                <IconRuler2 size={24} />
                                <span>2215 Sq Ft</span>
                            </div>
                            <h2>BDT 276,875</h2>
                        </Grid.Col>
                    </Grid>
                    <Grid align='center' className={styles.cardContainer} component={Link} to='/property'>
                        <Grid.Col span={5}>
                            <img
                                style={{ width: '100%' }}
                                src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')}
                                alt="" />
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <h3>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h3>
                            <span>Banani, Dhaka 1213</span>
                            <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                <IconRuler2 size={24} />
                                <span>2215 Sq Ft</span>
                            </div>
                            <h2>BDT 276,875</h2>
                        </Grid.Col>
                    </Grid>
                    <Grid align='center' className={styles.cardContainer} component={Link} to='/property'>
                        <Grid.Col span={5}>
                            <img
                                style={{ width: '100%' }}
                                src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')}
                                alt="" />
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <h3>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h3>
                            <span>Banani, Dhaka 1213</span>
                            <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                <IconRuler2 size={24} />
                                <span>2215 Sq Ft</span>
                            </div>
                            <h2>BDT 276,875</h2>
                        </Grid.Col>
                    </Grid>
                    <Grid align='center' className={styles.cardContainer} component={Link} to='/property'>
                        <Grid.Col span={5}>
                            <img
                                style={{ width: '100%' }}
                                src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')}
                                alt="" />
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <h3>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h3>
                            <span>Banani, Dhaka 1213</span>
                            <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                <IconRuler2 size={24} />
                                <span>2215 Sq Ft</span>
                            </div>
                            <h2>BDT 276,875</h2>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={8} className={styles.filterContainer}>
                    <Filters />
                </Grid.Col>
                <Pagination color='cyan' total={20} siblings={3} boundaries={3} initialPage={1} />
            </Grid>
        </Container>
    );
};

export default Properties;