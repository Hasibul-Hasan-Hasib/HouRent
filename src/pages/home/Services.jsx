import React from 'react';
import styles from './Services.module.css';
import { Link } from 'react-router-dom';
import { IconHomeSearch, IconHomeDollar, IconHomePlus, IconHelp } from '@tabler/icons';
import { Container} from '@mantine/core';
import useFilter from '../../hooks/useFilter';
const Services = () => {


    const { uloc, bedRooms, bathRooms, ulower, uupper} = useFilter();


    return (
        <Container size='md' className={styles.container}>
            <Container className={styles.service} component={Link} to='/add-post'>
                <IconHomeSearch size={36} className={styles.icon} />
                <h3>Sell Your House</h3>
            </Container>
            <Container className={styles.service} component={Link}  to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=1&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                <IconHomeDollar size={36} className={styles.icon} />
                <h3>Buy a Home</h3>
            </Container>
            <Container className={styles.service} component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=0&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                <IconHomePlus size={36} className={styles.icon} />
                <h3>Rent a House</h3>
            </Container>
            <Container className={styles.service} component={Link} to='/contact'>
                <IconHelp size={36} className={styles.icon} />
                <h3>Need Help?</h3>
            </Container>
        </Container>
    );
};

export default Services;