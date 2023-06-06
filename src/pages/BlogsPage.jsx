import { BlogsFetch } from "../components/BlogsFetch";
import blogs from './../Images/blog-img.png'

export const BlogsPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <img className="blog-img" src={blogs} width="250" height="250" alt="Blog"/>
      <BlogsFetch />
    </div>
  );
};