import { useState, useEffect } from "react";
import axios from "axios";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsFetch = ({ targetProjectID }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/KarlaB3/repos")
      .then((response) => response.data)
      .then((repos) => {
        // Filter the projects based on targetProjectID
        const filteredProjects = repos.filter((project) =>
          targetProjectID.includes(project.id)
        );
        setProjects(filteredProjects);
      });
  }, [targetProjectID]);

  return (
    <div>
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  );
};
  
  
  
  
  
  
  