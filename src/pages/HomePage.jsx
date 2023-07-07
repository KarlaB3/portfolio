import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
  return (
    <div className="container my-4 px-4" id="introduction">
      <h5 className="py-2">Hi, I'm Karla</h5>
      <h1 className="py-2">Web Developer and Marketer</h1>
        <h3 className="py-2">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
      <AboutButton />
    </div>
  );
};
