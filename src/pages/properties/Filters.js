import React from 'react';
import styles from './Properties.module.css'
import { Button, Grid, NumberInput, Select, TextInput } from '@mantine/core';
import useFilter from '../../hooks/useFilter';
import { Link, useSearchParams } from 'react-router-dom';




const Filters = () => {

    const [searchParams] = useSearchParams();

    const loc = searchParams.get('loc');
    const bed = searchParams.get('bed')
    const bath = searchParams.get('bath')
    const type = searchParams.get('type')
    const upper = searchParams.get('upper')
    const lower = searchParams.get('lower')

    const { uloc, bedRooms, bathRooms, utype, ulower, uupper, setLoc, setBedRooms, setBathRooms, setType, setLower, setUpper } = useFilter();


    return (
        <>
            <h2>Find Your Home</h2>
            <TextInput
                defaultValue={loc}
                className={styles.filterItems}
                placeholder=""
                onChange={(event) => setLoc(event.currentTarget.value)}
                label="Location"
            />
            <Grid>
                <Grid.Col span={6}>
                    <Select
                        defaultValue={bed}
                        className={styles.filterItems}
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
                <Grid.Col span={6}>
                    <Select
                        className={styles.filterItems}
                        defaultValue={bath}
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
            <Grid>
                <Grid.Col span={6}>
                    <NumberInput
                        defaultValue={lower}
                        label='lower Price'
                        onChange={(val) => setLower(val)}
                    />

                </Grid.Col>
                <Grid.Col span={6}>
                    <NumberInput
                        label='Upper Price'
                        defaultValue={upper}
                        onChange={(val) => setUpper(val)}
                    />
                </Grid.Col>
            </Grid>
            <Select
                className={styles.filterItems}
                label="Property Type"
                placeholder="Pick one"
                defaultValue={parseInt(type)}
                onChange={setType}
                data={[
                    { value: '0', label: 'Rent' },
                    { value: '1', label: 'Sell' },
                ]}
            />

            <Button
                component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype ? utype : ''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}
                color='cyan' className={styles.filterItems} style={{ width: '100%' }}>Find</Button>
        </>
    );
};

export default Filters;