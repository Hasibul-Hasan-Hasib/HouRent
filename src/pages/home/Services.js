import React from 'react';
import styles from './Services.module.css';
import { IconHomeSearch, IconHomeDollar, IconHomePlus, IconHelp } from '@tabler/icons';
import { Container } from '@mantine/core';

const Services = () => {
    return (
        <Container size='md' className={styles.container}>
            <div className={styles.service}>
                <IconHomeSearch size={36} className={styles.icon} />
                <h3>Sell Your House</h3>
            </div>
            <div className={styles.service}>
                <IconHomeDollar size={36} className={styles.icon} />
                <h3>Buy a Home</h3>
            </div>
            <div className={styles.service}>
                <IconHomePlus size={36} className={styles.icon} />
                <h3>Rent Your House</h3>
            </div>
            <div className={styles.service}>
                <IconHelp size={36} className={styles.icon} />
                <h3>Need Help?</h3>
            </div>
        </Container>
    );
};

export default Services;