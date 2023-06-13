import projects from './../Images/projects-img.png'
import blogs from './../Images/blog-img.png'
import contact from './../Images/contact-img-2.png'
import profile from './../Images/profile-img.png'
import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
  return (
    <div className="container-xxl">
      <div class="alert alert-info" role="alert">
        This website is a work in progress. Stay tuned.
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <img className="img-home" id="profile-img-home" src={profile} alt="Profile"/>
          </div>
          <div className="col-lg-8">
            <div className="p-5 mt-4">
              <h2 className="display-4">Karla Bucoy</h2>
              <h3 className="display-6">Web Developer & Marketer</h3>
              <h3 className="display-7">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
              <AboutButton />
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
};
