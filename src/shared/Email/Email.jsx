import React, { useRef } from 'react';
import styles from './Email.module.css';
import emailjs from '@emailjs/browser';
import { Button, Grid, Textarea, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons';



const Email = () => {

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [message,setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4fa406w', 'template_acsf6zc', form.current)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <Grid className={styles.container}>
            <Grid.Col span={6} style={{ padding: '0' }}>
                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.648841118486!2d91.79919361542821!3d22.329116647489794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8d230aa220d%3A0x3148f72010b590cb!2sAgrabad%20Access%20Rd%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1643132835748!5m2!1sen!2sbd"></iframe>
            </Grid.Col>
            <Grid.Col className={styles.emailContainer} span={6}>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className={styles.title}>Ready to get Started?</h2>
                    <span>Give us a call or drop by anytime, we endeavour quaries.</span>
                    <TextInput
                        placeholder="Your name"
                        size='lg'
                        withAsterisk
                        style={{ marginTop: '2rem' }}
                        type="text" name="user_name"
                    // onChange={(event) => setName(event.currentTarget.value)}
                    />
                    <TextInput
                        placeholder="Your email"
                        size='lg'
                        style={{ marginTop: '1rem' }}
                        icon={<IconAt size={14} />}
                        type="email" name="user_email"
                    // onChange={(event) => setEmail(event.currentTarget.value)}

                    />
                    <Textarea
                        placeholder="Your comment"
                        size='lg'
                        style={{ marginTop: '1rem' }}
                        minRows={4}
                        maxRows={4}
                        withAsterisk
                        // onChange={(event) => setMessage(event.currentTarget.value)}
                        name="message"
                    />
                    <Button onClick={()=>{sendEmail()}} type='submit' size='lg' color="cyan" className={styles.submitBtn}>
                        Send a Massage
                    </Button>
                </form>
            </Grid.Col>
        </Grid>
    );
};

export default Email;