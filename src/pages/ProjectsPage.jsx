import { ProjectsFetch } from '../components/ProjectsFetch';

export const ProjectsPage = () => {
  //const targetProjectID = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
  
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsFetch />
    </div>
  );
};