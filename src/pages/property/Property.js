import { React, useRef } from 'react';
import styles from './Property.module.css';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Container, Grid, Textarea, TextInput } from '@mantine/core';
import { IconAt, IconMapPin } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';

const Property = () => {

    const autoplay = useRef(Autoplay({ delay: 4000 }));

    return (
        <Container size='lg' className={styles.container}>
            <Grid justify='space-between' align='flex-start' columns={24}>
                <Grid.Col span={15}>
                    <h2>Well Fitted Commercial Space Is Here Available For Rental Purpose Covering 2215 Sq Ft In Banani</h2>
                    <Badge color="cyan">Rent</Badge>
                    <Badge color="cyan" style={{marginLeft:'0.5rem'}}>Residential</Badge>
                    <div className={styles.mapIcon}>
                        <IconMapPin size={24} />
                        <span style={{ marginLeft: '0.5rem' }}>Banani, Dhaka 1213</span>
                    </div>
                    <Carousel
                        mx="auto"
                        height='45vh'
                        withIndicators
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        loop
                    >
                        <Carousel.Slide>
                            <img width='100%' src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')} alt="" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img width='100%' src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')} alt="" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img width='100%' src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')} alt="" />
                        </Carousel.Slide>
                    </Carousel>
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
                </Grid.Col>
                <Grid.Col span={8} className={styles.bookingSectionContainer}>
                    <h2 style={{margin:'1rem 0'}}>Book Now!</h2>
                    <TextInput
                    className={styles.inputElements}
                        placeholder="Your name"
                        withAsterisk
                    />
                    <TextInput placeholder="Your email" icon={<IconAt size={14} />} />
                    <Textarea
                    className={styles.inputElements}
                        placeholder="Any Comments"
                        autosize
                        minRows={2}
                        maxRows={4}
                    />
                    <div style={{display:'flex',justifyContent:'space-between',margin:'1rem 0'}}>
                        <Button color='cyan' style={{width:'48%'}}>Call</Button>
                        <Button color='cyan' style={{width:'48%'}}>Massage</Button>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Property;