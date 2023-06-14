import profile from './../Images/profile-img.png'
import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
  return (
    <div className="container-xxl">
      <div class="alert alert-info" role="alert">
        This website is a work in progress. Stay tuned.
      </div>
      <div className="container my-5">
      
              <h2 className="display-4">KARLA BUCOY</h2>
              <h3 className="display-6">Web Developer & Marketer</h3>
              <h3 className="display-7">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
              <AboutButton />
            </div>
          </div>
    );
};
