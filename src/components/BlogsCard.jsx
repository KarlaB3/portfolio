export const BlogsCard = ({ blog }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{`#${blog.tags}`}</h6>
        <p className="card-text">{blog.description}</p>
        <a href={blog.url} className="card-link" target="_blank" rel="noreferrer">Read more on dev.to</a>
      </div>
    </div>
  );
};