import React from 'react';
import styles from './Blog.module.css';
import { Container, Grid } from '@mantine/core'

const Blog = () => {


    return (
        <Container size='lg'>
            <Grid gutter={0}
                align='center'
                className={styles.blogContainer}>
                <Grid.Col lg={5} sm={6} xs={12}>
                    <img width="100%" height="100%" src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg&_gl=1*43lkuf*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2NzA4MDgzOS44LjEuMTY2NzA4MDg0NC4wLjAuMA.." alt="" />
                </Grid.Col>
                <Grid.Col lg={7} sm={6} xs={12} className={styles.infoContainer}>
                    <h1 style={{ marginTop: '0' }}>HorsePower Trip</h1>
                    <span style={{display:'block'}}>25th Oct, 2022</span>
                        <p>
                            Trying to catch up with every new social network? Do you find yourself juggling with copy and images to make sure to share at least a certain number?
                        </p>
                </Grid.Col>
            </Grid>
            <Grid gutter={0}
                align='center'
                className={styles.blogContainer}>
                <Grid.Col lg={7} sm={6} xs={12} className={styles.infoContainer}>
                    <h1 style={{ marginTop: '0' }}>HorsePower Trip</h1>
                    <span>25th Oct, 2022</span>
                    <p>
                        Trying to catch up with every new social network? Do you find yourself juggling with copy and images to make sure to share at least a certain number?
                    </p>
                </Grid.Col>
                <Grid.Col lg={5} sm={6} xs={12}>
                    <img width="100%" height="100%" src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg&_gl=1*43lkuf*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2NzA4MDgzOS44LjEuMTY2NzA4MDg0NC4wLjAuMA.." alt="" />
                </Grid.Col>
            </Grid>
            <Grid gutter={0}
                align='center'
                className={styles.blogContainer}>
                <Grid.Col lg={5} sm={6} xs={12}>
                    <img width="100%" height="100%" src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg&_gl=1*43lkuf*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2NzA4MDgzOS44LjEuMTY2NzA4MDg0NC4wLjAuMA.." alt="" />
                </Grid.Col>
                <Grid.Col lg={7} sm={6} xs={12} className={styles.infoContainer}>
                    <h1 style={{ marginTop: '0', marginBottom: '1rem' }}>HorsePower Trip</h1>
                    <span>25th Oct, 2022</span>
                    <p>
                        Trying to catch up with every new social network? Do you find yourself juggling with copy and images to make sure to share at least a certain number?
                    </p>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Blog;