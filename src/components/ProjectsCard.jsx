export const ProjectsCard = ({ project }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={project.image} alt="Repository" />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{project.description}</h6>
        <ul className="list-unstyled">
          {project.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// idea: create a new prop, targetProjectId and use a conditional check similar to proposed BlogCard component 

// card component with image, project name, url, description, topics, read more link/button