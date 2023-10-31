import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PrevNext from "@/app/components/prevNext";
import { getAllBlogs, getSingleBlog } from "@/app/utils/mdQueries";

export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog) => `/${blog.slug}`);
  return paths;
}

const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props);
  const { blogs } = await getAllBlogs();
  const prev = blogs.filter((blog) => blog.frontmatter.id === singleDocument.data.id - 1);
  const next = blogs.filter((blog) => blog.frontmatter.id === singleDocument.data.id + 1);
  return (
    <div>
      <Image src={singleDocument.data.image} alt="blog-image" height={500} width={1000} quality={90} priority={true} />
      <h1>{singleDocument.data.title}</h1>
      <p>{singleDocument.data.date}</p>
      <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
      <PrevNext prev={prev} next={next} />
    </div>
  );
};

export default SingleBlog;
