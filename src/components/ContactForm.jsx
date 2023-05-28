import { useState } from "react"

export const ContactForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lasttname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = "Thank you for contacting me. I'll be in touch shortly.";

        const data = {
            firstname,
            lastname,
            email,
            phone

            fetch()
        }
            
    }
}