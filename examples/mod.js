import { hydrate, params } from 'https://cdn.skypack.dev/arrosoir'

const search = params(location.href)
search.l ??= 10
search.p ??= 0

/**
 * When clicking this button, load more elements into the list.
 */
document.querySelector('.more').addEventListener('click', async () => {
  search.p++
  await hydrate('ul.list', search.apply(location.href), { merge: 'append' })
})

/**
 * Overwrite the navigation links, so they load elements instead
 * of reloading the page.
 *
 * The `history` option updates the location url (optional).
 */
document.querySelector('.prev').addEventListener('click', async (ev) => {
  ev.preventDefault()
  search.p--
  await hydrate('ul.list', search.apply(location.href), { history: true })
})

document.querySelector('.next').addEventListener('click', async (ev) => {
  ev.preventDefault()
  search.p++
  await hydrate('ul.list', search.apply(location.href), { history: true })
})
