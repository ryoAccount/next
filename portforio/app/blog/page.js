import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "../utils/mdQueries";

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
