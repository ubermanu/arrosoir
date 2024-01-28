import { hydrate } from 'https://cdn.jsdelivr.net/npm/arrosoir@latest/+esm'

const url = new URL(location.href)

function getCurrentPage() {
  return url.searchParams.get('p') * 1 || 1
}

/** When clicking this button, load more elements into the list. */
document.querySelector('.more').addEventListener('click', async () => {
  url.searchParams.set('p', (getCurrentPage() + 1).toString())
  await hydrate('ul.list', url.toString(), { merge: 'append' })
})

/**
 * Overwrite the navigation links, so they load elements instead of reloading
 * the page.
 *
 * The `history` option updates the location url (optional).
 */
document.querySelector('.prev').addEventListener('click', async (ev) => {
  ev.preventDefault()
  url.searchParams.set('p', Math.max(1, getCurrentPage() - 1).toString())
  await hydrate('ul.list', url.toString(), { history: true })
})

document.querySelector('.next').addEventListener('click', async (ev) => {
  ev.preventDefault()
  url.searchParams.set('p', (getCurrentPage() + 1).toString())
  await hydrate('ul.list', url.toString(), { history: true })
})
