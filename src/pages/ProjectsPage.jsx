import { ProjectsFetch } from '../components/ProjectsFetch';

export const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsFetch />
    </div>
  );
};

// idea: declare a variable targetProjectID within the ProjectsFetch render