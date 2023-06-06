import projects from './../Images/projects-img.png'
import blogs from './../Images/blog-img.png'
import contact from './../Images/contact-img.png'

export function HomePage(props) {
    return (
        <div>
            <section>
                <h1>Hello, I'm Karla</h1>
                <h4>This website is a work in progress. Stay tuned.</h4>
            </section>
            <section>
                <img className="projects-img" src={projects} width="200" height="200" alt="Projects"/>
                <img className="blog-img" src={blogs} width="200" height="200" alt="Blog"/>
                <img className="contact-img" src={contact} width="200" height="200" alt="Contact Form"/>
            </section>
        </div>
    )
}