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
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#4400ff" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </svg>
      </div>
    </div>
  );
};