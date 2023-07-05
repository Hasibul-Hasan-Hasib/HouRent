import React from 'react';
import styles from './NavBar.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Menu, Tooltip } from '@mantine/core';
import useAuth from '../../hooks/useAuth';
import useFilter from '../../hooks/useFilter';



const NavBar = () => {

    const { logOut, setUser, user, setIsLoading } = useAuth();
    const { uloc, bedRooms, bathRooms, utype, ulower, uupper } = useFilter();

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
                    <Link to='/' >
                        <img src={'/assets/logo/306779426_1757552851287913_919493399515004179_n.png'} width='150px' alt="" />
                    </Link>
                    <div className={styles.align}>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.navLink
                            }
                        >Home</NavLink>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <NavLink to='/properties' className={styles.navLink}>Properties</NavLink>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=0&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    For Rent
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=${uloc ? uloc : ''}&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=1&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    For Sell
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item component={Link} to={`/properties?loc=Chittagong&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype ? utype : ''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Chittagong
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=Dhaka&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype ? utype : ''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Dhaka
                                </Menu.Item>
                                <Menu.Item component={Link} to={`/properties?loc=Barisal&bed=${bedRooms ? bedRooms : ''}&bath=${bathRooms ? bathRooms : ''}&type=${utype ? utype : ''}&upper=${uupper ? uupper : ''}&lower=${ulower ? ulower : ''}`}>
                                    Barisal
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <NavLink to='/blog'
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.navLink
                            }>Blog</NavLink>
                        <Menu shadow="md" width={200} trigger='hover'>
                            <Menu.Target>
                                <NavLink className={styles.navLink}>Pages</NavLink>
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
                                    <Tooltip position='left' color='cyan' label={user.email}>
                                        <img className={`${styles.navLink} ${styles.navImg}`} width={35} src={user.photoURL} alt={user.email} />
                                    </Tooltip>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item component={Link} to={`/saved`}>
                                        saved
                                    </Menu.Item>
                                    <Menu.Item component={Link} to={`/bookings`}>
                                        bookings
                                    </Menu.Item>
                                    <Menu.Item component={Link} to={`/my-posts`}>
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