import { useState, useEffect } from "react";
import axios from "axios";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsFetch = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/KarlaB3/repos")
      .then((response) => response.data)
      .then((repos) => {
        const repoIds = [573636775, 555806599, 607922602, 646332800, 642143267, 646375707];
        const filteredRepos = repos.filter((repo) => repoIds.includes(repo.id));
        setProjects(filteredRepos);
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
