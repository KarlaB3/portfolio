import { ProjectsFetch } from '../components/ProjectsFetch';
import projects from './../Images/projects-img.png'

export const ProjectsPage = () => {
  //const targetProjectID = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
  
  return (
    <div className="container-xxl">
      <h1>Projects</h1>
      <img className="img-pages" id="projects-img" src={projects} width="250" height="250" alt="Projects"/>
      <ProjectsFetch />
    </div>
  );
};