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
        <p className="totalCount">{totalCount} posts so far.</p>
      </article>

      <article>
        <h2>about</h2>
        <div>
          <p>This is a blog where I tweet when busy, when having a hard time, when having fun, when moved, or when I want to express my feelings in words.</p>
          <p>The site name is Monologue because it means something like a whisper, not something you send to someone.</p>
        </div>
        <h5>About link</h5>
        <div>
          <dl className="inline">
            <dt>site name</dt>
              <dd>Monologue</dd>
            <dt>url</dt>
              <dd><a href="https://blog-ryocv.vercel.app/">https://blog-ryocv.vercel.app/</a></dd>
          </dl>
        </div>

      </article>
    </main>
  )
}
