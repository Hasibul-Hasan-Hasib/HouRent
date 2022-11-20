import React, { useState } from 'react';
import styles from './HomeFilter.module.css';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, RangeSlider, Select, TextInput } from '@mantine/core';





const HomeFilter = () => {


    return (
        <Container size='lg' className={styles.filterContainer}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Find The Home You Want</h1>
            <Grid span={12} gutter={40} align='center' justify='space-around'>
                <Grid.Col span={4}>
                    <TextInput
                        placeholder=""
                        label="Location"
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Select
                        label="Bed Room"
                        placeholder="Pick one"
                        data={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Select
                        label="Bathroom"
                        placeholder="Pick one"
                        data={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                        ]}
                    />
                </Grid.Col>
            </Grid>
            <Grid gutter={40} align='center'>
                <Grid.Col span={4}>
                    <Select
                        label="Property Type"
                        placeholder="Pick one"
                        data={[
                            { value: 'Buy', label: 'Buy' },
                            { value: 'Rent', label: 'Rent' },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                <RangeSlider defaultValue={[20, 80]}
                        color='cyan'
                        marks={[
                            { value: 20, label: '20k' },
                            { value: 50, label: '50k' },
                            { value: 80, label: '80k' },
                        ]}
                        label={(value) => `${value}K`}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Button component={Link} to='/properties' color='cyan' style={{ width: '100%' }}>Find</Button>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HomeFilter;