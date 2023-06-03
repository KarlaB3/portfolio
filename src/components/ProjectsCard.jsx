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
        <a href={project.html_url} className="card-link" target="_blank" rel="noreferrer">Read More</a>
      </div>
    </div>
  );
};