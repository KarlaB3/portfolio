import { RoughNotation } from "react-rough-notation";

export function AboutPage() {
	return (
	<div className="container my-4 px-4">
		<section className="container pb-4">
			<h2>
        <RoughNotation type="box" color="#ffc300" show="show.state">
          About Me
        </RoughNotation>
      </h2>
			<main className="py-3">
				<p>I'm passionate about bringing digital projects and platforms to life.</p>
				<p>With experience in web development, marketing, and communications I have an eye for design and love crafting exceptional user experiences.</p>
				<p>I've worked in a range of organisations, roles and projects including the management of new website and app builds with developers, project managers, clients, and internal stakeholders, B2C and B2B marketing strategy development and execution, content creation and management, client service and new business development.</p>
				<p>As a problem solver and project manager at heart I enjoy working across teams and organisations to develop and implement creative solutions that meet the needs of end users. As a technical and creative hybrid I love transforming complex concepts into clear and concise messages and strategies.</p>
				<a href="https://www.linkedin.com/in/karla-bucoy" id="link" target="_blank" rel="noreferrer" >Let's connect<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a>
			</main>
		</section>		
	</div>
	)
}