import { ContactForm } from "../components/ContactForm";
import contact from './../Images/contact-img.png'


export function ContactPage(props) {
    return (
        <div>
            <img className="contact-img" src={contact} width="250" height="250" alt="Contact Form"/>
            <h1>Get in Touch</h1>
            <p>Use the form below to contact me</p>
            <ContactForm />
        </div>
    )
}