import React, { useState } from 'react';
import styles from './Banner.module.css';
import { Button, Container, Select, Slider, TextInput } from '@mantine/core';


const Banner = () => {

    const [value, setValue] = useState(50);
    const [endValue, setEndValue] = useState(50);

    console.log(endValue);

    return (
        <section className={styles.bannerBack}>
            <Container size='lg' className={styles.bannerContainer}>
                <div className={styles.bannerInfo}>
                    <h1 className={styles.bannerTitle}>Find Your Property</h1>
                    <p className={styles.bannerPara}>Gain access to comprehensive and minute knowledge of the local
                        property market, allowing you to fully understand.</p>
                    <Button>Join Us Now !</Button>
                </div>
                <div className={styles.filterContainer}>
                    <div className={styles.filterComponent}>
                        <TextInput
                            placeholder="Your name"
                            label="Full name"
                            withAsterisk
                        />
                    </div>
                    <div className={styles.doubleInput}>
                        <Select
                            label="Bathrooms"
                            placeholder="Pick one"
                            data={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4', label: '4' },
                            ]}
                        />
                        <Select
                            label="Bedroom"
                            placeholder="Pick one"
                            data={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4', label: '4' },
                            ]}
                        />
                    </div>
                    <div className={styles.doubleInput}>
                        <Select
                            label="Property Scope"
                            placeholder="Pick one"
                            data={[
                                { value: 'Rent', label: 'Rent' },
                                { value: 'Sale', label: 'Sale' },
                            ]}
                        />
                        <Select
                            label="Property Type"
                            placeholder="Pick one"
                            data={[
                                { value: 'Apartment', label: 'Apartment' },
                                { value: 'Duplex', label: 'Duplex' },
                                { value: 'Penthouse', label: 'Penthouse' },
                                { value: 'Villa', label: 'Villa' },
                            ]}
                        />
                    </div>
                    <div className={styles.filterComponent}>
                        <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
                    </div>
                    <div className={styles.filterComponent}>
                        <Button>Find</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;