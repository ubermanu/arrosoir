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
  <section>
    <h1>List of posts</h1>
    <ul className="list">
      {selection.map((post) => (
        <li key={post.id}>
          {post.id} - {post.title}
        </li>
      ))}
    </ul>
    <button className="load-more">Load More</button>
    <script type="module" src="./load-more.js" />
  </section>
)
