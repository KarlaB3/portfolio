export const BlogsCard = ({ blog }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={blog.cover_image} alt="Blog Cover"/>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{blog.tag_list}</h6>
        <p className="card-text">{blog.description}</p>
        <a href={blog.url} className="card-link" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};