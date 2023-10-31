import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));

  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileData = fs.readFileSync(path.join("data", filename), "utf-8");
    const { data } = matter(fileData);

    return {
      frontmatter: data,
      slug: slug,
    };
  });

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  return {
    blogs: orderedBlogs,
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
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
          <div>
            <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
