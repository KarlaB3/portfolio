import { BlogsFetch } from "../components/BlogsFetch";
import blogs from './../Images/blog-img.png'

export const BlogsPage = () => {
  return (
    <div className="container-xxl">
      <img className="img-pages" id="blog-img" src={blogs} width="250" height="250" alt="Blog"/>
      <h1>Blog</h1>
      <h6>My web dev journey</h6>
      <BlogsFetch />
    </div>
  );
};