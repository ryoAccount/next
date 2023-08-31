import { client } from "@/libs/client"
import { BlogProps } from "@/libs/type"

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
  const dateFormat = (publishedAt: string) => {
    return new Date(publishedAt).toLocaleDateString()
  }

  return (
    <main>
      <article>
        <h2>blog</h2>
        <div>
          <dl className="inline">
            {contents.map((blog: BlogProps) => (
              <>
                {/* TODO Warning: Each child in a list should have a unique "key" prop. */}
                <dt key={blog.id}>{dateFormat(blog.publishedAt)}</dt>
                <dd><a href={`blog/${blog.id}`}>{blog.title}</a></dd>
              </>
            ))}
          </dl>
        </div>
        <p>{totalCount}</p>
      </article>
    </main>
  )
}
