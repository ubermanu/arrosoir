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
    import { hydrate, params } from 'https://cdn.skypack.dev/arrosoir'

    const search = params(location.href)
    search.l ??= 10
    search.p ??= 0

    document.querySelector('button.load-more').addEventListener('click', async () => {
        search.p++
        await hydrate('ul.list', search.apply(location.href), { merge: true })
    })
</script>
```

> The previous example fetches the page with a different query string.<br>
> The `hydrate` function will merge the new HTML into the existing DOM.

### Options

- `merge`: Append the new HTML to the selector.
- `history`: Replace the current URL with the fetched one.
