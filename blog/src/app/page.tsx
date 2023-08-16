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

export default function Home({ blog }) {
  return (
    <div>
      { blog.map((blog) => (
        <li key={blog.id}>
          <a href="">{blog.title}</a>
        </li>
      ))}
    </div>
  )
}
