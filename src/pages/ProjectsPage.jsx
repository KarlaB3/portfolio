import { ProjectsFetch } from '../components/ProjectsFetch';
import projects from './../Images/projects-img.png'

export const ProjectsPage = () => {
  const targetProjectID = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
  
  return (
    <div className="container my-5 px-5">
      <section className="container my-2">
        <section className="row">
          <header className="col-lg-2">
            <h2>Projects</h2>
          </header>
          <section className="col">
              <img className="img-pages" id="projects-img" src={projects} alt="Projects"/>
          </section>
        </section>
      </section>
      <div>
        <ProjectsFetch targetProjectID={targetProjectID} />
      </div>
    </div>
  );
};