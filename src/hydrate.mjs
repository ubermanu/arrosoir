const parser = new DOMParser()

/**
 * Fetch the HTML from the given URL and hydrate the given element with it.
 *
 * @param {string} selector
 * @param {string} url
 * @param {{merge?:string, history?:boolean}} options
 * @return {Promise<void>}
 */
export default async (selector, url, options = {}) => {
  const element = document.querySelector(selector)

  const response = await fetch(url)
  const doc = parser.parseFromString(await response.text(), 'text/html')
  const content = doc.querySelector(selector).innerHTML

  if (options.merge) {
    switch (options.merge) {
      case 'prepend':
      case 'before':
        element.innerHTML = content + element.innerHTML
        break
      case 'append':
      case 'after':
      default:
        element.innerHTML += content
    }
  } else {
    element.innerHTML = content
  }

  if (options.history) {
    history.pushState({}, '', url)
  }
}
