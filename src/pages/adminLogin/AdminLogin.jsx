import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from '@mantine/core';
import styles from './AdminLogin.module.css';


function AdminLogin() {
    return (
        <div className={styles.container}>
            <Container size='xs' pt='25vh'>
                <Paper withBorder shadow="md" p={40}  radius="md">
                    <Title
                        align="center"
                        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900,marginBottom:'2rem' })}
                    >
                        Admin Login
                    </Title>
                    <TextInput label="Email" placeholder="you@mantine.dev" required />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Button fullWidth mt="xl">
                        Login
                    </Button>
                    <Button fullWidth color='cyan' mt="xl">
                        Go Back
                    </Button>
                </Paper>
            </Container >
        </div>
    );
}


export default AdminLogin;