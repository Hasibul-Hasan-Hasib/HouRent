import React from 'react';
import styles from './HomeFilter.module.css';
import { Button, Container, Grid, Select, Slider, TextInput } from '@mantine/core';





const HomeFilter = () => {

    // const [value, setValue] = useState(50);
    // const [endValue, setEndValue] = useState(50);


    return (
        <Container size='lg' className={styles.filterContainer}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Find The Home You Want</h1>
            <Grid span={12} gutter={40} align='center' justify='space-around'>
                <Grid.Col span={4}>
                    <TextInput
                        placeholder="Your name"
                        label="Full name"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Select
                        label="Your favorite framework/library"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Select
                        label="Your favorite framework/library"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                </Grid.Col>
            </Grid>
            <Grid gutter={40} align='center'>
                <Grid.Col span={4}>
                    <Select
                        label="Your favorite framework/library"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Slider
                        color='cyan'
                        labelAlwaysOn
                        // label={value}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Button color='cyan' style={{ width: '100%' }}>Find</Button>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HomeFilter;