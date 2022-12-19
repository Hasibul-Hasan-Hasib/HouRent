import React from 'react';
import { Button, Container, NumberInput, Select, SimpleGrid, TextInput } from '@mantine/core';


const AddPost = () => {
    return (
        <Container size='lg' my='5rem'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Add New Post</h1>
                <Button>Go Back</Button>
            </div>
            <Container size='lg'>
                <SimpleGrid
                    cols={3}
                    spacing="xl"
                    breakpoints={[
                        { maxWidth: 980, cols: 3, spacing: 'md' },
                        { maxWidth: 755, cols: 2, spacing: 'sm' },
                        { maxWidth: 600, cols: 1, spacing: 'sm' },
                    ]}
                >
                    <TextInput
                        placeholder="Post Type"
                        label="Type"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Give Property Location"
                        label="Location"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Price"
                        label="Your Property Price"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Give Image Link 1"
                        label="Image 1"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Give Image Link 2"
                        label="Image 2"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Give Image Link 3"
                        label="Image 3"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Construction Year"
                        label="Year"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Square Area"
                        label="Size (Ft)"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Number Of Living Rooms"
                        label="Living Rooms"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Number Of Bed Rooms"
                        label="Bed Rooms"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Number Of Bath Rooms"
                        label="Bath Rooms"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Kitchens"
                        label="Kitchens"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Parking Area"
                        label="Parking"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Number of Garages"
                        label="Garage"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Total Floors"
                        label="Total Floor"
                        withAsterisk
                    />
                    <NumberInput
                        placeholder="Number of Pools"
                        label="Pools"
                        withAsterisk
                    />
                    <Select
                        placeholder="Insurance"
                        label="Insurance"
                        data={[
                            { value: 0, label: 'No' },
                            { value: 1, label: 'Yes' },
                        ]}
                        withAsterisk
                    />
                    <Button color='cyan' mt='auto'>Submit</Button>
                </SimpleGrid>
            </Container>
        </Container>
    );
};

export default AddPost;