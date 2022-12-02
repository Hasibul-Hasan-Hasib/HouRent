

import { useState } from 'react';
import { createStyles, Navbar, Group, Code, AppShell } from '@mantine/core';
import {
    IconLogout,
    IconBuildingCottage,
    IconUsers,
    IconBrandDisqus,
    IconBrandBooking,
} from '@tabler/icons';
import Logo from '../../assets/logo/logo.png';
import { Link, Outlet } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        },

        footer: {
            paddingTop: theme.spacing.lg,
            marginTop: theme.spacing.lg,
            borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
                    .background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                },
            },
        },
    };
});

const data = [
    { link: '/admin/users', label: 'Posts', icon: IconBuildingCottage },
    { link: '/admin/posts', label: 'Users', icon: IconUsers },
    { link: '', label: 'Booking', icon: IconBrandBooking },
    { link: '', label: 'Comments', icon: IconBrandDisqus },
];

export default function Admin() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');



    const links = data.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            to={item.link}
            onClick={(event) => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>
            <AppShell
                navbar={
                    <Navbar width={{ sm: 300 }} p="md">
                        <Navbar.Section grow>
                            <Group className={classes.header} position="apart">
                                <img width={70} src={Logo} alt="" />
                                <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                            </Group>
                            {links}
                        </Navbar.Section>

                        <Navbar.Section className={classes.footer}>
                            <Link className={classes.link}>
                                <IconLogout className={classes.linkIcon} stroke={1.5} />
                                <span>Logout</span>
                            </Link>
                        </Navbar.Section>
                    </Navbar>
                }
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <Outlet></Outlet>
            </AppShell>
        </>
    );
}