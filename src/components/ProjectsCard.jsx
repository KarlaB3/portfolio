export const ProjectsCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{project.description}</h6>
        <ul className="list-unstyled">
          {project.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <a href={project.html_url} className="card-link" target="_blank" rel="noreferrer">Read more on GitHub</a>
      </div>
    </div>
  );
};