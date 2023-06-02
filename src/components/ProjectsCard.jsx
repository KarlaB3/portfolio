export const ProjectsCard = ({ project }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={project.image} alt="Repository" />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <ul className="list-unstyled">
          {project.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};