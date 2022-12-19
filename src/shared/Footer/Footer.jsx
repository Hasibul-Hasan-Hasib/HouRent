import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import styles from './Footer.module.css'
import { IconPhone, IconChevronRight, IconMail, IconChevronUp, IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconMapPin } from '@tabler/icons';
import { Container, Grid } from '@mantine/core'
import { Link } from 'react-router-dom';


const Footer = () => {

    const { scrollIntoView } = useScrollIntoView();

    return (
        <footer className={styles.footer}>
            <Container size='lg'>
                <Grid >
                    <Grid.Col span={3}>
                        <h2>Contact Us</h2>
                        <div style={{ margin: '1rem 0', display: 'flex' }}>
                            <IconPhone size={24}></IconPhone>
                            <span>(+880) 17 6684 8008 </span>
                        </div>
                        <div style={{ margin: '1rem 0', display: 'flex' }}>
                            <IconMail size={24}></IconMail>
                            <span style={{ marginLeft: '2px' }}>mdhasibulctg100@gmail.com</span>
                        </div>
                        <div style={{ margin: '1rem 0', display: 'flex' }}>
                            <IconMapPin size={24}></IconMapPin>
                            <span style={{ marginLeft: '2px' }}>9R55+PP8, S Khulshi Rd, Chattogram</span>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <h2>Useful Links</h2>
                        <div className={styles.align}>
                            <Container component={Link} to='/about' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>About us</span>
                            </Container>
                            <Container component={Link} to='/blog' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Blog</span>
                            </Container>
                            <Container component={Link} to='/' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Pricing</span>
                            </Container>
                            <Container component={Link} to='/contact' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Contact Us</span>
                            </Container>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <h2>Rent with us</h2>
                        <div className={styles.align}>
                            <Container component={Link} to='/properties' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Rent a house</span>
                            </Container>
                            <Container component={Link} to='/add-post' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Sell a house</span>
                            </Container>
                            <Container component={Link} to='/properties' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Book Now</span>
                            </Container>
                            <Container component={Link} to='/' className={styles.listAlign}>
                                <IconChevronRight size={24} />
                                <span className={styles.footerLink}>Privacy</span>
                            </Container>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <h2>Recent Post</h2>
                        <div className={styles.footerPost}>
                            <img className={styles.postImg} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg&_gl=1*130pgds*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2Njg5MjAyNC42LjAuMTY2Njg5MjAyNC4wLjAuMA.." alt="" />
                            <span style={{marginLeft:'0.5rem'}}>Great Service</span>
                        </div>
                        <div className={styles.footerPost}>
                            <img className={styles.postImg} src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg&_gl=1*8p4x7j*_ga*MjA0NzY5MjA0OC4xNjYzNDY5MTA0*_ga_8JE65Q40S6*MTY2Njg5MjAyNC42LjEuMTY2Njg5MjA3MS4wLjAuMA.." alt="" />
                            <span style={{marginLeft:'0.5rem'}}>Best Coverage</span>
                        </div>
                    </Grid.Col>
                </Grid>
                <Grid className={styles.upBtnContainer}>
                    <span>©copyright by Hourent.</span>
                    <button onClick={() => scrollIntoView()} className={styles.upBtn}>
                        <IconChevronUp size={60} />
                    </button>
                    <div>
                        <button className={styles.footerIcon}>
                            <IconBrandFacebook size={24} />
                        </button>
                        <button className={styles.footerIcon}>
                            <IconBrandTwitter size={24} />
                        </button>
                        <button className={styles.footerIcon}>
                            <IconBrandYoutube size={24} />
                        </button>
                        <button className={styles.footerIcon}>
                            <IconBrandLinkedin size={24} />
                        </button>
                        <button className={styles.footerIcon}>
                            <IconBrandInstagram size={24} />
                        </button>
                    </div>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;