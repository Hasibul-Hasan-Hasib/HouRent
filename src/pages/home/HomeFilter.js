import React from 'react';
import styles from './HomeFilter.module.css';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, NumberInput, Select, TextInput } from '@mantine/core';
import useFilter from '../../hooks/useFilter';





const HomeFilter = () => {



    const { uloc, bedRooms, bathRooms, utype, ulower, uupper, setLoc, setBedRooms, setBathRooms, setType, setLower, setUpper } = useFilter();



    return (
        <Container size='lg' className={styles.filterContainer}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Find The Home You Want</h1>
            <Grid span={12} gutter={40} align='baseline' justify='space-around'>
                <Grid.Col span={4}>
                    <TextInput
                        placeholder=""
                        label="Location"
                        onChange={(event) => setLoc(event.currentTarget.value)}
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
                        onChange={setBedRooms}
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
                        onChange={setBathRooms}
                    />
                </Grid.Col>
            </Grid>
            <Grid gutter={40} align='center'>
                <Grid.Col span={4}>
                    <Select
                        label="Property Type"
                        placeholder="Pick one"
                        data={[
                            { value: '0', label: 'Rent' },
                            { value: '1', label: 'Sell' },
                        ]}
                        onChange={setType}
                    />
                </Grid.Col>
                <Grid.Col span={4} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NumberInput
                        defaultValue={ulower}
                        label='lower Price'
                        onChange={(val) => setLower(val)}
                        style={{ width: '48%' }}
                    />
                    <NumberInput
                        label='Upper Price'
                        defaultValue={uupper}
                        onChange={(val) => setUpper(val)}
                        style={{ width: '48%' }}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Button component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype ? utype : ''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`} color='cyan' style={{ width: '100%' }}>Find</Button>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HomeFilter;