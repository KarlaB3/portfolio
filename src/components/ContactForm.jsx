import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_4n9jghi', 'contact_form', form.current, 'zVIYdj3XMqEdHz0wt')
        .then((result) => {
            console.log(result.text);   
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};