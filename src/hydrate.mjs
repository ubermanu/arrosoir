export default async (selector, url, options = {}) => {
  const element = document.querySelector(selector)
  const response = await fetch(url)
  const html = await response.text()

  // TODO: Find the content

  element.innerHTML = html

  // if (options.merge) {
  //
  // }
}
