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
      <div class="mb-3">
        <label for="contactName">Name</label>
        <input type="text" name="user_name" class="form-control" placeholder="Your full name" />
      </div>
      <div class="mb-3">
        <label for="contactEmail">Email</label>
        <input type="email" name="user_email" class="form-control" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="contactMessage">Message</label>
        <textarea name="message" class="form-control" placeholder="Your message" />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn">Send</button>
    </div>
    </form>
    );
};