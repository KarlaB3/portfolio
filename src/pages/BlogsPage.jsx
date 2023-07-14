import { RoughNotation } from "react-rough-notation";
import { BlogsFetch } from "../components/BlogsFetch";

export const BlogsPage = () => {
  return (
    <div className="container my-4 px-4">
      <section className="container my-2">
      <h2>
        <RoughNotation type="box" color="#ffc300" show="show.state">
          Blog
        </RoughNotation>
      </h2>
      </section>
      <main>
        <BlogsFetch />
      </main>
    </div>
  );
};