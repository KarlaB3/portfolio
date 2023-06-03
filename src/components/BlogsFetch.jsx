import { useEffect, useState } from "react";
import axios from "axios";
import { BlogsCard } from "./BlogsCard";


export const BlogsFetch = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://dev.to/api/articles?username=karlab3")
    .then((response) => response.data)
    .then((blogs) => {
        setBlogs(blogs);
    });
  }, []);


  return (
    <div>
      {blogs.map((blog) => (
        <BlogsCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};