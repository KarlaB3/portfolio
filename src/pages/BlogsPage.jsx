import { BlogsFetch } from "../components/BlogsFetch";
import blogs from './../Images/blog-img.png'

export const BlogsPage = () => {
  return (
    <div className="container my-5 px-4">
      <section className="container my-2">
        <section className="row">
          <header className="col-lg-2">
            <h2>Blog</h2>
          </header>
          <section className="col">
            <img className="img-pages" id="blog-img" src={blogs} alt="Blog"/>
          </section>
        </section>
      </section>
      <div>
        <BlogsFetch />
      </div>
    </div>
  );
};