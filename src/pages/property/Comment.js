import { Avatar, Button, Container, createStyles, Divider, Group, Paper, Rating, Text, Textarea, TypographyStylesProvider } from '@mantine/core';
import styles from './Comment.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useData from '../../hooks/useData';


const Comment = ({ post }) => {

    const { reset } = useForm();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { bookings, posts, reviews } = useData();

    // const userBookings = bookings.filter(booking => booking.user_id === user.uid);
    const userReview = reviews.filter(e => e.post_id === post.post_id)


    const useStyles = createStyles((theme) => ({
        body: {
            paddingLeft: 54,
            paddingTop: theme.spacing.sm,
        },
    }));

    const { classes } = useStyles();



    const onSubmit = () => {
        try {
            axios.post("http://localhost:3100/reviews",
                {
                    user_id: user.uid,
                    review_com: comment,
                    rating: rating,
                    postId: post.post_id,
                })
                .then(res => {
                    if (res.data.insertId) {
                        console.log(res)
                        alert('Comment added')
                        navigate(0)
                    }
                })
        } catch (error) {
            alert('Can not Comment')
        }
    };


    return (
        <Container size='lg'>
            {
                userReview.map(review =>
                    <Paper radius={10} style={{ margin: '3rem 1rem' }}>
                        <Group>
                            <Avatar src={user.photoURL} alt={user.displayName} radius="xl" />
                            <Text size="lg">{user.displayName}</Text>
                            <Rating readOnly value={review.review_rating}></Rating>
                        </Group>
                        <Text size='md' className={classes.body}>
                            {review.review_com}
                        </Text>
                    </Paper>
                )
            }
            <Divider my='sm'></Divider>
            <div className={styles.ratingContainer}>
                <h2>Your Rating</h2>
                <Rating
                    size='lg'
                    value={rating}
                    onChange={setRating}
                    fractions={2} />
            </div>
            <div>
                <Textarea
                    size='xl'
                    label="Your Comment"
                    autosize
                    minRows={4}
                    onChange={(event) => setComment(event.currentTarget.value)}
                />
                <Group position="right" mt="md">
                    <Button onClick={onSubmit}>Submit</Button>
                </Group>
            </div>
        </Container>
    );
};

export default Comment;