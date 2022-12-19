import React from 'react';
import { Container } from '@mantine/core';
import styles from './Team.module.css'


const Team = () => {
    return (
        <div>
            <h2 className={styles.teamTitle}>Our Team</h2>
            <span className={styles.titleInfo}>This is the people who designed and developed this website</span>
            <Container size='lg' className={styles.teamContainer}>
                <div className={styles.person}>
                    <div className={styles.container}>
                        <div className={styles.containerInner}>
                            <img
                                className={styles.circle}
                                src='https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?cs=srgb&dl=pexels-wendy-wei-4000421.jpg&fm=jpg&_gl=1*1l4t47d*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2NzY4MjAwMi4xMC4xLjE2Njc2ODIwNTkuMC4wLjA.'
                                alt=''
                            />
                            <img
                                className={`${styles.img} ${styles.img2}`}
                                src={'/src/assets/images/IMG_20220507_171135-removebg-preview.png'}
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.name}>Sopnil</div>
                </div>
                <div className={styles.person}>
                    <div className={styles.container}>
                        <div className={styles.containerInner}>
                            <img
                                className={styles.circle}
                                src='https://images.pexels.com/photos/6109124/pexels-photo-6109124.jpeg?cs=srgb&dl=pexels-polina-kovaleva-6109124.jpg&fm=jpg&_gl=1*fatkxe*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2NzA3NDg0OS43LjEuMTY2NzA3NTE3NS4wLjAuMA..'
                                alt=''
                            />
                            <img
                                className={`${styles.img} ${styles.img1}`}
                                src='https://raw.githubusercontent.com/Hasibul-Hasan-Hasib/HSB-BLOGS/main/src/Assets/Images/2.png'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.name}>Hasib</div>
                </div>
                <div className={styles.person}>
                    <div className={styles.container}>
                        <div className={styles.containerInner}>
                            <img
                                className={styles.circle}
                                src='https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                alt=''
                            />
                            <img
                                className={`${styles.img} ${styles.img4}`}
                                src='src/assets/images/20221124_004709.png'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.name}>Pranto</div>
                </div>
                <div className={styles.person}>
                    <div className={styles.container}>
                        <div className={styles.containerInner}>
                            <img
                                className={styles.circle}
                                src='https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                alt=''
                            />
                            <img
                                className={`${styles.img} ${styles.img3}`}
                                src='src/assets/images/1641998596872.png'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.name}>Yasin</div>
                </div>
            </Container>
        </div>
    );
};

export default Team;