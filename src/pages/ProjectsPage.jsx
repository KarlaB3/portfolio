import { ProjectsFetch } from '../components/ProjectsFetch';
import projects from './../Images/projects-img.png'

export const ProjectsPage = () => {
  //const targetProjectID = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
  
  return (
    <div className="container-xxl my-5" id="bodyPadding">
      <div className="container my-5">
          <div className="row">
            <div className="col-lg-3">
              <img className="img-pages" id="projects-img" src={projects} alt="Projects"/>
            </div>
            <div className="col-lg-8">
              <div className="p-5 mt-4">
                <h2 className="display-4">Projects</h2>
              </div>
            </div>
          </div>
      </div>
      <div>
      <ProjectsFetch />
      </div>
    </div>
  );
};