import { Badge, Button, Container, Grid } from '@mantine/core';
import { IconMapPin, IconTrash } from '@tabler/icons';
import styles from './booking.module.css';


const Booking = () => {


    return (
        <Container className={styles.container} size='lg' py='5rem'>
            <Grid gutter={40} align='center' justify='space-between' className={styles.listContainer}>
                <Grid.Col span={3}>
                    <img className={styles.img} src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg&_gl=1*130pgds*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2Njg5MjAyNC42LjAuMTY2Njg5MjAyNC4wLjAuMA..' alt="" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <h2>BDT - 276,875 Tk</h2>
                    <div className={styles.infoContainer}>
                        <IconMapPin size={24} />
                        <span className={styles.info}>Banani, Dhaka 1213</span>
                    </div>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Rent</Badge>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Available</Badge>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button leftIcon={<IconTrash />} color='red'>Remove</Button>
                </Grid.Col>
            </Grid>
            <Grid gutter={40} align='center' justify='space-between' className={styles.listContainer}>
                <Grid.Col span={3}>
                    <img className={styles.img} src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg&_gl=1*130pgds*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2Njg5MjAyNC42LjAuMTY2Njg5MjAyNC4wLjAuMA..' alt="" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <h2>BDT - 276,875 Tk</h2>
                    <div className={styles.infoContainer}>
                        <IconMapPin size={24} />
                        <span className={styles.info}>Banani, Dhaka 1213</span>
                    </div>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Rent</Badge>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Available</Badge>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button leftIcon={<IconTrash />} color='red'>Remove</Button>
                </Grid.Col>
            </Grid>
            <Grid gutter={40} align='center' justify='space-between' className={styles.listContainer}>
                <Grid.Col span={3}>
                    <img className={styles.img} src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg&_gl=1*130pgds*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2Njg5MjAyNC42LjAuMTY2Njg5MjAyNC4wLjAuMA..' alt="" />
                </Grid.Col>
                <Grid.Col span={6}>
                    <h2>BDT - 276,875 Tk</h2>
                    <div className={styles.infoContainer}>
                        <IconMapPin size={24} />
                        <span className={styles.info}>Banani, Dhaka 1213</span>
                    </div>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Rent</Badge>
                    <Badge variant='filled' color='cyan' className={styles.badge}>Available</Badge>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button leftIcon={<IconTrash />} color='red'>Remove</Button>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Booking;