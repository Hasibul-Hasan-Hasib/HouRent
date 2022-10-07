import React from 'react';
import styles from './Services.module.css';
import { IconHomeSearch, IconHomeDollar, IconHomePlus, IconHelp } from '@tabler/icons';
import { Container } from '@mantine/core';

const Services = () => {
    return (
        <section className={styles.backGround}>
            <Container size='lg' className={styles.container}>
                <h1 className={styles.title}>We have the service you need</h1>
                <div className={styles.serviceContainer}>
                    <div className={styles.service}>
                        <IconHomeSearch size={48} className={styles.icon} />
                        <h3>Sell Your House</h3>
                    </div>
                    <div className={styles.service}>
                        <IconHomeDollar size={48} className={styles.icon} />
                        <h3>Buy a Home</h3>
                    </div>
                    <div className={styles.service}>
                        <IconHomePlus size={48} className={styles.icon} />
                        <h3>Rent Your House</h3>
                    </div>
                    <div className={styles.service}>
                        <IconHelp size={48} className={styles.icon} />
                        <h3>Need Help?</h3>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;