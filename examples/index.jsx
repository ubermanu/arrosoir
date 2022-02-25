/**
 * This example is served using JHJ.
 * Check it out for more information: https://github.com/ubermanu/jhj
 */

let curPage = +location.searchParams.get('p') || 0
let pageSize = +location.searchParams.get('l') || 10

let posts = []

for (let i = 0; i < 100; i++) {
  posts.push({
    id: i,
    title: `Post ${i}`
  })
}

let selection = posts.slice(curPage * pageSize, (curPage + 1) * pageSize)

export default (
  <html lang="en">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Examples</title>
    </head>
    <body>
      <section className="container">
        <div className="row">
          <div className="col-sm-4">
            <button className="load-more">Load More</button>
            <div>
              <a
                href={`?p=${curPage - 1}&l=${pageSize}`}
                className="button prev"
              >
                Previous
              </a>
              <a
                href={`?p=${curPage + 1}&l=${pageSize}`}
                className="button next"
              >
                Next
              </a>
            </div>
          </div>
          <div className="col-sm-8">
            <h1>List of posts</h1>
            <ul className="list">
              {selection.map((post) => (
                <li key={post.id}>
                  {post.id} - {post.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <script type="module" src="./mod.js" />
      </section>
    </body>
  </html>
)
