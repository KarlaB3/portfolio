import { AboutButton } from '../components/AboutButton'
import profile from './../Images/profile-img.png'

export function HomePage(props) {
  return (
    <div className="container my-5 px-4" id="introduction">
      <section className="container">
        <header>
          <h5 className="py-2">Hi, I'm Karla</h5>
        </header>
      <section className="row">
        <header className="col-lg-9">
          <h1 className="py-2">Web Developer and Marketer</h1>
        <h3 className="py-2">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
        </header>
        <section className="col">
            <img className="img-home " id="profile-home" src={profile} alt="Profile"/>
        </section>
      </section>
        {/* <h3 className="py-2">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3> */}
      </section>
      <AboutButton />
    </div>
  );
};
