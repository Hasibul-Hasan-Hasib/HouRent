import { React, useRef } from 'react';
import styles from './Property.module.css';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Container, Grid, Textarea, TextInput } from '@mantine/core';
import { IconAt, IconMapPin } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';
import Description from './Description';

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
                        height='30rem'
                        withIndicators
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        loop
                    >
                        <Carousel.Slide>
                            <img width='100%' src='https://i.pinimg.com/originals/4f/b4/f6/4fb4f68e9f4f6a83b6c534515c29f951.jpg' alt="" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img width='100%' src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')} alt="" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img width='100%' src={require('../../assets/images/pexels-jessica-bryant-1370704.jpg')} alt="" />
                        </Carousel.Slide>
                    </Carousel>
                    <Description />
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