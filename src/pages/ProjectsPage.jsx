import { ProjectsFetch } from '../components/ProjectsFetch';
import { RoughNotation } from "react-rough-notation";

export const ProjectsPage = () => {
  const targetProjectID = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
  
  return (
    <div className="container my-4 px-4">
      <section className="container my-2">
        <h2>
        <RoughNotation type="box" color="#ffc300" show="show.state">
          Projects
        </RoughNotation>
        </h2>
      </section>
      <main>
        <ProjectsFetch targetProjectID={targetProjectID} />
      </main>
    </div>
  );
};