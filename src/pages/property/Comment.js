import { Button, Container, Divider, Group, Rating, Textarea } from '@mantine/core';
import styles from './Comment.module.css';
import React, { useState } from 'react';

const Comment = () => {

    const [value, setValue] = useState(2);


    return (
        <Container size='lg'>
            <Divider my='sm'></Divider>
            <div className={styles.ratingContainer}>
                <h2>Your Rating</h2>
                <Rating
                    size='lg'
                    defaultValue={2}
                    value={value}
                    onChange={setValue}
                    fractions={2} />
            </div>
            <div>
                <Textarea
                    size='xl'
                    label="Your Comment"
                    autosize
                    minRows={4}
                />
                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </div>
        </Container>
    );
};

export default Comment;