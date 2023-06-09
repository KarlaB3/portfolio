import { RoughNotation } from "react-rough-notation";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
  return (
    <div className="container my-4 px-4">
      <section className="container my-2">
        <h2>
          <RoughNotation type="box" color="#ffc300" show="show.state">
            Contact Me
          </RoughNotation>
        </h2>
        <p className="py-3">Send a message below, or <a href="https://www.linkedin.com/in/karla-bucoy" id="link" target="_blank" rel="noreferrer" >connect with me<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a></p>
      </section>
      <main>
        <ContactForm />
      </main>
    </div>
  )
}