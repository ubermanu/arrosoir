# Arrosoir

[![CI](https://github.com/ubermanu/arrosoir/actions/workflows/ci.yml/badge.svg)](https://github.com/ubermanu/arrosoir/actions/workflows/ci.yml)

Small DOM hydration function for generated HTML.

### Install

    npm install arrosoir

### Usage

```js
import { hydrate } from 'arrosoir'
await hydrate(selector, url)
```

For example:

```html
<script type="module">
    import { hydrate } from 'https://cdn.skypack.dev/arrosoir'

    const url = new URL(location.href)
    let p = url.searchParams.get('p') * 1 || 1

    document.querySelector('button.load-more').addEventListener('click', async () => {
        url.searchParams.set('p', ++p)
        await hydrate('ul.list', url.toString(), { merge: 'append' })
    })
</script>
```

> The previous example fetches the page with a different query string.<br>
> The `hydrate` function will merge the new HTML into the existing DOM.

### Options

- `merge`: Append the new HTML to the selector.
- `history`: Replace the current URL with the fetched one.
