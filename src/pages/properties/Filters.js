import React, { useState } from 'react';
import styles from './Properties.module.css'
import { Button, Grid, RangeSlider, Select, TextInput } from '@mantine/core';




const Filters = () => {

    const [rangeValue, setRangeValue] = useState([20, 80]);
    console.log(rangeValue)

    return (
        <>
            <h2>Find Your Home</h2>
            <TextInput
                className={styles.filterItems}
                placeholder=""
                label="Location"
            />
            <Grid>
                <Grid.Col span={6}>
                    <Select
                        className={styles.filterItems}
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
                <Grid.Col span={6}>
                    <Select
                        className={styles.filterItems}
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
            <Select
                className={styles.filterItems}
                label="Property Type"
                placeholder="Pick one"
                data={[
                    { value: 'Buy', label: 'Buy' },
                    { value: 'Rent', label: 'Rent' },
                ]}
            />
            <RangeSlider defaultValue={[20, 80]}
                className={styles.filterItems}
                color='cyan'
                marks={[
                    { value: 20, label: '20k' },
                    { value: 50, label: '50k' },
                    { value: 80, label: '80k' },
                ]}
                label={(value) => `${value}K`}
                value={rangeValue} onChange={setRangeValue}
            />
            <Button color='cyan' className={styles.filterItems} style={{ width: '100%' }}>Find</Button>
        </>
    );
};

export default Filters;