import React from 'react';
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Menu } from '@mantine/core';
import useAuth from '../../hooks/useAuth';
import useFilter from '../../hooks/useFilter';



const NavBar = () => {

    const { logOut, setUser, user, setIsLoading } = useAuth();
    const { uloc, bedRooms, bathRooms, utype, ulower, uupper} = useFilter();

    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                navigate('/')
            })
            .finally(() => {
                setIsLoading(true)
            })
    }



    return (
        <>
            <Container size='lg'>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img src={'/assets/logo/306779426_1757552851287913_919493399515004179_n.png'} width='150px' alt="" />
                    </Link>
                    <div className={styles.align}>
                        <Link className={styles.navLink} to='/' >Home</Link>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink} >Properties</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=0&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    For Rent
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=1&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    For Sell
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item component={Link} to={`/properties?loc=Chittagong&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype?utype:''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Chittagong
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=Dhaka&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype?utype:''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Dhaka
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=Barisal&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype?utype:''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Barisal
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Link className={styles.navLink} to='/blog' >Blog</Link>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <Link className={styles.navLink}>Pages</Link>
                            </Menu.Target>
                            <Menu.Dropdown>
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
                        {user?.email ?
                            <Menu shadow="md" width={200} trigger='hover'>
                                <Menu.Target>
                                    <img className={`${styles.navLink} ${styles.navImg}`} width={35} src={user.photoURL} alt="non" />
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item component={Link} to={`/saved`}>
                                        saved
                                    </Menu.Item>
                                    <Menu.Item component={Link} to={`/bookings`}>
                                        bookings
                                    </Menu.Item>
                                    <Menu.Item component={Link} to={`/posts`}>
                                        My Posts
                                    </Menu.Item>
                                    <Menu.Item component={Link} onClick={handleLogout}>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                            :
                            <Button color='cyan' component={Link} to='/login' sx='margin-left: 1rem'>Login</Button>}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default NavBar;