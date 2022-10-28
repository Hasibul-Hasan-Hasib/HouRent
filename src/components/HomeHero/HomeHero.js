import React from 'react';
import styles from './HomeHero.module.css'
import ReactPlayer from "react-player"
import { Button, Container, Grid } from '@mantine/core';



const HomeHero = () => {
    return (
        <Container size='lg'>
            <Grid className={styles.homeHero} gutter="xl" justify="space-between" align="center">
                <Grid.Col span={5}>
                    <h1 className={styles.title}>Our Customer Always Come First</h1>
                    <p>Utilizing his exceptional experience and knowledge
                        of the luxury waterfront markets, Roland serves an
                        extensive and elite worldwide client base. He enjoy
                        a reputation as a tenacious Broker.</p>
                    <Button>View Reviews</Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    <ReactPlayer
                    width='100%'
                    height='20rem'
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HomeHero;