export const ProjectsCard = ({ project }) => {
  return (
    <article className="card">
      <section className="card-body">
        <header>
          <h5 className="card-title mb-3">{project.name}</h5>
        </header>
          <section>
            <h6 className="card-subtitle mb-3">{project.description}</h6>
            <h6 className="mb-3">Tech stack:{project.topics.map((topic) => (
            <li key={topic}>{topic}</li>))}</h6>
            <a href={project.html_url} className="card-link" target="_blank" rel="noreferrer">Read more on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/>
            </svg></a>
          </section>
      </section>
    </article>
  );
};