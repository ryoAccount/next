import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));

  const blogs = files.map((filename) => {
    const fileData = fs.readFileSync(path.join("data", filename), "utf-8");
    const { data } = matter(fileData);

    return {
      frontmatter: data,
    };
  });

  return {
    blogs: blogs,
  };
}

const Blog = async () => {
  const { blogs } = await getAllBlogs();

  return (
    <div>
      <h1>Blog Test</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
