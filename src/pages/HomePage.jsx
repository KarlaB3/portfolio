import projects from './../Images/projects-img.png'
import blogs from './../Images/blog-img.png'
import contact from './../Images/contact-img-2.png'
import profile from './../Images/profile-img.png'
import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
  return (
    <div className="container-xxl">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-3">
              <img className="img-home" id="profile-img-home" src={profile} alt="Profile"/>
            </div>
            <div className="col-lg-8">
              <div className="p-5 mt-4">
                <h2 className="display-4">This website is a work in progress. Stay tuned. </h2>
                <br>
                </br>
                <h2 className="display-4">Web Developer & Marketer</h2>
                <h3 className="display-6">Hi, I'm Karla</h3>
                <h3 className="display-7">I bring digital projects to life and craft exceptional user experiences.</h3>
                <AboutButton />
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-3">
              <img className="img-home" id="projects-img-home" src={projects} alt="Projects"/>
            </div>
            <div className="col-lg-3">
              <img className="img-home" id="blogs-img-home" src={blogs} alt="Blog"/>
            </div>
            <div className="col-lg-3">
              <img className="img-home" id="contact-img-home"src={contact} alt="Contact Form"/>
            </div>
          </div>
        </div>
    </div> 
    )
}

          {/* <section>
              <h4>This website is a work in progress. Stay tuned.</h4>
          </section>
          <section className="introduction">
              <h1>Dev Marketing Hybrid</h1>
              <h4>Hi, I'm Karla.</h4>
              <h6>I'm professionally passionate about bringing digital projects and platforms to life, and crafting exceptional user experiences.</h6>
              <AboutButton />
          </section>
          <section>
            <img className="img-home" id="profile-img-home" src={profile} alt="Profile"/>
          </section>
          <section>
              <img className="img-home" id="projects-img-home" src={projects} alt="Projects"/>
              <img className="img-home" id="blogs-img-home" src={blogs} alt="Blog"/>
              <img className="img-home" id="contact-img-home"src={contact} alt="Contact Form"/>
          </section>
      </div> */}
