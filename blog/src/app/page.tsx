import Link from "next/link";
import { client } from "../../libs/client";
import styles from './page.module.css'

// SSG
// Error: Cannot read properties of undefined (reading 'map')

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog"})
//   return {
//     props: {
//       blog: data.contents
//     }
//   }
// }

type Blog = {
  id: string
  title: string
  body: string
}

export default async function Home() {
  const data = await client.get({ endpoint: "blog"})
  const blogs = data.contents as Blog[]
  return (
    <div className={styles.container}>
      { blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}
