import { AboutButton } from '../components/AboutButton'

export function HomePage(props) {
  return (
    <div className="container-xxl my-4" id="bodyPadding">
        <h1 className="py-2">Hi, I'm Karla.</h1>
        <h1 className="py-2">I am a Web Developer and Marketer.</h1>
        <h3 className="py-2">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
        <AboutButton />
      </div>
    );
};
