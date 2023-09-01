import { client } from "@/libs/client"
import { BlogProps, ContextProps } from "@/libs/type"
import styles from "../../styles/id.module.scss"
import { dateFormat } from "../../util/date";

// SSG
export const getStaticProps = async ( context: ContextProps ) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "blog", contentId: id })

  return {
    props: {
      blog: data as BlogProps
    }
  }
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths,
    fallback: false
  }
}

export default function BlogId({ blog }) {
  return (
    <main>
      <h1 className={styles.blogTitle}>{blog.title}</h1>
      <p className={styles.publishedAt}>{dateFormat(blog.publishedAt)}</p>
      <div dangerouslySetInnerHTML={{__html: blog.body}}></div>
      <div className={styles.goToTop}>
        <a href="../">go to Top</a>
      </div>
    </main>
  )
}