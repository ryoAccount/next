import { client } from "@/libs/client"
import { BlogProps } from "@/libs/type"
import styles from "@/styles/Home.module.css"

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })
  return {
    props: {
      blogs: data.contents as BlogProps[]
    }
  }
}

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <a href={`blog/${blog.id}`}>{blog.title}</a>
        </li>
      ))}
    </div>
  )
}
