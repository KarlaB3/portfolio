import { useState } from "react"

export const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = "Thank you for contacting me. I'll be in touch shortly.";

        const data = {
            firstName,
            lastName,
            email,
            phone

            fetch()
        }
            
    }
}