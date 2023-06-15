import { ContactForm } from "../components/ContactForm";
import contact from './../Images/contact-img.png'


export function ContactPage(props) {
    return (
        <div className="container-xxl my-4">
            <img className="img-pages" id="contact-img" src={contact} alt="Contact Form"/>
            <h1>Get in Touch</h1>
            <p>I'm available for marketing and web developer collaborations and freelance opportunities.</p>
            <ContactForm />
        </div>
    )
}