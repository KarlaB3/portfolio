import projects from './../Images/projects-img.png'
import blogs from './../Images/blog-img.png'
import contact from './../Images/contact-img.png'
import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
    return (
        <div>
            <section>
                <h1>Hello, I'm Karla</h1>
                <h4>This website is a work in progress. Stay tuned.</h4>
            </section>
            <section className="introduction">
                <h1>Dev Marketing Hybrid</h1>
                <h4>Hi, I'm Karla.</h4>
                <h6>I'm professionally passionate about bringing digital projects and platforms to life, and crafting exceptional user experiences.</h6>
                <AboutButton />
            </section>
            <section>
                <img className="projects-img" src={projects} width="200" height="200" alt="Projects"/>
                <img className="blog-img" src={blogs} width="200" height="200" alt="Blog"/>
                <img className="contact-img" src={contact} width="200" height="200" alt="Contact Form"/>
            </section>
        </div>
    )
}