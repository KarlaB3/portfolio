import { BlogsFetch } from "../components/BlogsFetch";

export const BlogsPage = () => {
  return (
    <div className="container my-4 px-4">
      <section className="container my-2">
        <h2>Blog</h2>
      </section>
      <div>
        <BlogsFetch />
      </div>
    </div>
  );
};