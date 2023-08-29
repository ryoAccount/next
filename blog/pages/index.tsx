import { client } from "@/libs/client"
import { BlogProps } from "@/libs/type"
import styles from "@/styles/Home.module.scss"

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })
  return {
    props: {
      contents: data.contents as BlogProps[],
      totalCount: data.totalCount as number,
      offset: data.offset as number,
      limit: data.limit as number
    }
  }
}

export default function Home({ contents, totalCount }) {
  return (
    <div className={styles.container}>
      <p>{totalCount}</p>
      {contents.map((blog: BlogProps) => (
        <li key={blog.id} className={styles.blogLink}>
          <a href={`blog/${blog.id}`}>{blog.title}</a> : <span>{blog.publishedAt}</span>
        </li>
      ))}
    </div>
  )
}
