import React from 'react';
import IMG from '../../assets/images/Fingerprint-rafiki.svg'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../contexts/AuthContext';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
    Grid,
} from '@mantine/core';


const Login = (props) => {

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const { signInUsingGooglePopup, signInUsingFacebookPopup,setError,setUser} =  Auth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInUsingGooglePopup()
            .then(result => {
                setUser(result.user)
                navigate(-1)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleFacebookSignIn = () => {
        signInUsingFacebookPopup()
            .then(result => {
                setUser(result.user)
                navigate(-1)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Container size='lg'>
            <Grid align='center' style={{ margin: '5rem 0' }} gutter={40}>
                <Grid.Col span={6}>
                    <img src={IMG} alt="" />
                </Grid.Col>
                <Grid.Col span={6} style={{ padding: '0 4rem ' }}>
                    <Text size="lg" weight={500}>
                        Welcome to Hourent, {type} with
                    </Text>

                    <Group grow mb="md" mt="md">
                        <Button onClick={handleGoogleSignIn} size='md' color='cyan' variant='outline' radius="xl">Google</Button>
                        <Button onClick={handleFacebookSignIn} size='md' color='cyan' variant='outline' radius="xl">Facebook</Button>
                    </Group>

                    <Divider label="Or continue with email" labelPosition="center" my="lg" />

                    <form onSubmit={form.onSubmit(() => { })}>
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                />
                            )}

                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@mantine.dev"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                            />

                            {type === 'register' && (
                                <Checkbox
                                    color='cyan'
                                    label="I accept terms and conditions"
                                    checked={form.values.terms}
                                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                />
                            )}
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="xs"
                            >
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : "Don't have an account? Register"}
                            </Anchor>
                            <Button color='cyan' type="submit">{upperFirst(type)}</Button>
                        </Group>
                    </form>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Login;