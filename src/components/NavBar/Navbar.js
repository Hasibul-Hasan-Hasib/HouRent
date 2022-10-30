import React from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconPhone,
    IconMapPin,
} from '@tabler/icons'
import logo from '../../assets/logo/logo.png'
import { Button, Container, Menu } from '@mantine/core'



const NavBar = () => {
    return (
        <>
            <div className={styles.navBack}>
                <Container size='lg' className={styles.socialContainer}>
                    <div className={styles.align}>
                        <Link className={styles.socialLink}><IconBrandFacebook size={24} /></Link>
                        <Link className={styles.socialLink}><IconBrandTwitter size={24} /></Link>
                        <Link className={styles.socialLink}><IconBrandYoutube size={24} /></Link>
                        <Link className={styles.socialLink}><IconBrandLinkedin size={24} /></Link>
                        <Link className={styles.socialLink}><IconBrandInstagram size={24} /></Link>
                    </div>
                    <div className={styles.align}>
                        <div className={styles.info}>
                            <IconPhone size={24} />(+880)1766848008
                        </div>
                        <div className={styles.info}>
                            <IconMapPin size={24} />South Khulshi,Chittagong
                        </div>
                    </div>
                </Container>
            </div>
            <Container size='lg'>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img src={logo} width='150px' alt="" />
                    </Link>
                    <div>
                        <Link className={styles.navLink} to='/'>Home</Link>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink} to='/listing'>Listings</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to='/rent-properties'>
                                    For Rent Properties
                                </Menu.Item>
                                <Menu.Item component={Link} to='/sale-properties'>
                                    For Sale Properties
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink} to='/home'>Properties By Area</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to='/list'>
                                    Chittagong
                                </Menu.Item>
                                <Menu.Item component={Link} to='/list'>
                                    Dhaka
                                </Menu.Item>
                                <Menu.Item component={Link} to='/list'>
                                    Barisal
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink}>Pages</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to='/blog'>
                                    Blog
                                </Menu.Item>
                                <Menu.Item component={Link} to='/contact'>
                                    Contact
                                </Menu.Item>
                                <Menu.Item component={Link} to='/about'>
                                    About Us
                                </Menu.Item>
                                <Menu.Item component={Link} to='/featured-house'>
                                    Featured House
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Button sx='margin-left: 1rem'>Login</Button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default NavBar;