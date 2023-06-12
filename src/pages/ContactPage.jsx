import { ContactForm } from "../components/ContactForm";
import contact from './../Images/contact-img.png'


export function ContactPage(props) {
    return (
        <div className="container-xxl">
            <img className="img-pages" id="contact-img" src={contact} width="250" height="250" alt="Contact Form"/>
            <h1>Get in Touch</h1>
            <p>I'm available for marketing and web developer collaborations and freelance opportunities.</p>
            <ContactForm />
        </div>
    )
}