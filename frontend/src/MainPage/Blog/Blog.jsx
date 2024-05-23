import "./Blog.css";
import { v4 as uuidv4 } from 'uuid';

import { data } from "./Blog.json";
import BlogCard from "./BlogCard/BlogCard";
import { memo } from "react";

const Blog = memo(function Blog(){
  return (
    <div className="blog--container">
      <h1>Blog</h1>
      <p>Keep you updated with the latest market trend and industry insights</p>
      <div className="blog--card--container">
        {data.map((elm,index) => {
          return (
            <BlogCard key={uuidv4()} imgSrc={elm.imgSrc} header={elm.header} text={elm.text} index={index} />
          );
        })}
      </div>
    </div>
  );
});

export default Blog;
