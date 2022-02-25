import { hydrate, params } from 'https://cdn.skypack.dev/arrosoir'

const search = params(location.href)
search.l ??= 10
search.p ??= 0

document
  .querySelector('button.load-more')
  .addEventListener('click', async () => {
    search.p++
    await hydrate('ul.list', search.apply(location.href), { merge: true })
  })
