import { useState, useEffect } from "react";
import axios from "axios";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsFetch = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/KarlaB3/repos")
      .then((response) => response.data)
      .then((repos) => {
        setProjects(repos)
      });
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  );
};
