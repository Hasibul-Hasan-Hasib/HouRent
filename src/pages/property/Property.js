import { React, useRef } from 'react';
import styles from './Property.module.css';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Container, Grid, LoadingOverlay, Textarea, TextInput } from '@mantine/core';
import { IconAt, IconMapPin } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';
import Description from './Description';
import Comment from './Comment';
import Suggestion from './Suggestion';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';


const Property = () => {


    const { id } = useParams();
    const { posts, isLoading } = useData();
    const post = posts.find(post => post.post_id === parseInt(id));
    const autoplay = useRef(Autoplay({ delay: 4000 }));




    return (
        <Container size='lg' className={styles.container}>
            {
                isLoading === false ?
                    <>
                        <Grid justify='space-between' align='flex-start' mt='3rem' columns={24}>

                            {/* Info Section */}

                            <Grid.Col span={15}>
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
                                        <img width='100%' style={{ borderRadius: '15px' }} src={post ? post.img1 : ''} alt="" />
                                    </Carousel.Slide>
                                    <Carousel.Slide>
                                        <img width='100%' style={{ borderRadius: '15px' }} src={post ? post.img2 : ''} alt="" />
                                    </Carousel.Slide>
                                    <Carousel.Slide>
                                        <img width='100%' style={{ borderRadius: '15px' }} src={post ? post.img3 : ''} alt="" />
                                    </Carousel.Slide>
                                </Carousel>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div className={styles.mapIcon}>
                                        <IconMapPin size={24} />
                                        <span style={{ marginLeft: '0.5rem' }}>{post ? post.post_loc : 'loading'}</span>
                                    </div>
                                    <div>
                                        <Badge variant='filled' color="cyan">{post ? post.post_type === 0 ? 'Rent' : 'Sell' : 'loading'}</Badge>
                                        <Badge variant='filled' color="cyan" style={{ marginLeft: '0.5rem' }}>{post ? post.post_type === 0 ? 'Not Available' : 'Available' : 'loading'}</Badge>
                                    </div>
                                </div>
                            </Grid.Col>

                            {/* booking section */}

                            <Grid.Col span={8} className={styles.bookingSectionContainer}>
                                <h2 style={{ margin: '1rem 0' }}>BDT - {post ? post.price.toLocaleString(undefined, { maximumFractionDigits: 2 }) : ''} Tk</h2>
                                <TextInput
                                    className={styles.inputElements}
                                    placeholder="Your name"
                                    withAsterisk
                                />
                                <TextInput placeholder="Your email" icon={<IconAt size={14} />} />
                                <TextInput
                                    className={styles.inputElements}
                                    placeholder="Phone"
                                    withAsterisk
                                />
                                <Textarea
                                    className={styles.inputElements}
                                    placeholder="Any Comments"
                                    autosize
                                    minRows={3}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
                                    <Button color='cyan' style={{ width: '48%' }}>Book Now</Button>
                                    {/* <Button color='cyan' style={{width:'48%'}}>Massage</Button> */}
                                </div>
                            </Grid.Col>
                        </Grid>
                        <Description key={post ? post.post_id : ''} data={post ? post : []} />
                        <Comment />
                        <Suggestion posts={posts.slice(3, 6)} />
                    </>
                    :
                    <LoadingOverlay visible={isLoading} overlayBlur={2} />
            }
        </Container>
    );
};

export default Property;