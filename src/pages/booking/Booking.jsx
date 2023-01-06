import { Badge, Button, Container, Grid } from '@mantine/core';
import { IconMapPin, IconTrash } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import styles from './booking.module.css';
import useData from '../../hooks/useData';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const Booking = () => {

    const navigate = useNavigate();
    const { user } = useAuth();
    const { bookings, posts } = useData();

    const userBookings = bookings.filter(booking => booking.user_id === user.uid);
    const filterByReference = () => {
        let res = [];
        res = posts.filter(el => {
            return userBookings.find(element => {
                return element.post_id === el.post_id;
            });
        });
        return res;
    }

    const handleDelete = id => {
        try {
            axios.delete("http://localhost:3100/bookings",
                {
                    booking_id: id,
                })
                .then(res => {
                    if (res.data.insertId) {
                        console.log(res)
                        alert('deleted successfully')
                        navigate('/bookings')
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const bookedPosts = filterByReference();



    return (
        <Container className={styles.container} size='lg' py='5rem'>
            {
                bookedPosts.map((booking) => (
                    <Grid gutter={40} align='center' justify='space-between' className={styles.listContainer}>
                        <Grid.Col onClick={() => { navigate(`/property/${booking.post_id}`) }} span={3}>
                            <img className={styles.img} src={booking.img1} alt="" />
                        </Grid.Col>
                        <Grid.Col onClick={() => { navigate(`/property/${booking.post_id}`) }} span={6}>
                            <h2>BDT - {booking.price.toLocaleString(undefined, { maximumFractionDigits: 2 })} Tk</h2>
                            <div className={styles.infoContainer}>
                                <IconMapPin size={24} />
                                <span className={styles.info}>{booking.post_loc}</span>
                            </div>
                            <Badge variant='filled' color='cyan' className={styles.badge}>{booking.post_type === 0 ? 'Rent' : 'Sell'}</Badge>
                            <Badge variant='filled' color='cyan' className={styles.badge}>{booking.post_type === 0 ? 'Not Available' : 'Available'}</Badge>
                        </Grid.Col>
                        <Grid.Col span={2}>
                            <Button onClick={() => handleDelete(booking.booking_id)} leftIcon={<IconTrash />} color='red'>Remove</Button>
                        </Grid.Col>
                    </Grid>
                ))
            }
        </Container>
    );
};

export default Booking;