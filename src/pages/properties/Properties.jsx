import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Properties.module.css';
import Filters from './Filters';
import { Badge, Container, Grid, LoadingOverlay, Pagination } from '@mantine/core';
import { IconBath, IconBed, IconMapPin, IconRuler2 } from '@tabler/icons';
import useData from '../../hooks/useData';


const Properties = () => {



    const [searchParams] = useSearchParams();

    const loc = searchParams.get('loc');
    const bed = searchParams.get('bed');
    const bath = searchParams.get('bath');
    const type = searchParams.get('type');
    const upper = searchParams.get('upper');
    const lower = searchParams.get('lower');

    console.log(loc)

    const { posts, isLoading } = useData();
    const filter = loc!==null?posts.filter(item => loc?item.post_loc.includes(loc):item)
        .filter(item => bed ? parseInt(bed) === item.bed_rooms : item)
        .filter(item => bath ? parseInt(bath) === item.bath_rooms : item)
        .filter(item => type ? parseInt(type) === item.post_type : item)
        .filter(item => parseInt(lower) <= item.price <= parseInt(upper)):posts


    console.log(filter)

    const items = filter;
    const [activePage, setPage] = useState(1);
    const itemPerPage = 6;
    const pageVisited = (activePage - 1) * itemPerPage;






    return (
        <Container size='lg' className={styles.container}>
            <Grid columns={24} align='flex-start' justify='space-between'>
                <Grid.Col span={15}>
                    {
                        isLoading === false ?
                            items[0]?items.slice(pageVisited, pageVisited + itemPerPage).map((post) => (
                                <Grid key={post.post_id} align='center' className={styles.cardContainer} component={Link} to={`/property/${post.post_id}`}>
                                    <Grid.Col span={5}>
                                        <img
                                            className={styles.cardImg}
                                            src={post.img1}
                                            alt="" />
                                    </Grid.Col>
                                    <Grid.Col span={7}>
                                        <h2>BDT - {post.price.toLocaleString(undefined, { maximumFractionDigits: 2 })} Tk</h2>
                                        <div className={styles.infoContainer}>
                                            <IconMapPin size={24} />
                                            <span className={styles.info}>{post.post_loc}</span>
                                        </div>
                                        <Badge variant='filled' color='cyan' className={styles.badge}>{post.post_type === 0 ? 'Rent' : 'Sell'}</Badge>
                                        <Badge variant='filled' color='cyan' className={styles.badge}>{post.available === 0 ? 'Not Available' : 'Available'}</Badge>
                                        <div className={styles.allInfo}>
                                            <div className={styles.infoContainer}>
                                                <span className={styles.info}>{post.bed_rooms}</span>
                                                <IconBed size={24}></IconBed>
                                            </div>
                                            <div className={styles.infoContainer}>
                                                <span className={styles.info}>{post.bath_rooms}</span>
                                                <IconBath size={24} />
                                            </div>
                                            <div className={styles.infoContainer}>
                                                <IconRuler2 size={24} />
                                                <span className={styles.info}>{post.square_areas} Sq Ft</span>
                                            </div>
                                        </div>
                                    </Grid.Col>
                                </Grid>
                            ))
                            :
                            <Container size='lg' mt='13rem' style={{textAlign:'center'}}>
                                <h1>Sorry No Data</h1>
                            </Container>
                            :
                            <LoadingOverlay visible={isLoading} overlayBlur={2} />
                    }
                </Grid.Col>
                <Grid.Col span={8} className={styles.filterContainer}>
                    <Filters />
                </Grid.Col>
                <Pagination size="md" siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />            </Grid>
        </Container>
    );
};

export default Properties;