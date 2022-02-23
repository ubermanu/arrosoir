<?php
$curPage = $_GET['p'] ?: 0;
$pageSize = $_GET['l'] ?: 10;

$posts = array_fill(0, 100, 'Title');
$selection = array_slice($posts, $curPage * $pageSize, $pageSize, true);
?>
<!DOCTYPE html>
<html lang>
<body>
<ul class="list">
    <?php foreach ($selection as $k => $post): ?>
        <li class="item"><?= sprintf('%s - %s', $k, $post) ?></li>
    <?php endforeach ?>
</ul>
<button class="load-more">Load More</button>
<script type="module">
    import { hydrate, params } from './js/main.mjs'

    const search = params(location.href)
    search.l ??= 10
    search.p ??= 0

    document.querySelector('button.load-more').addEventListener('click', async () => {
        search.p++
        await hydrate('ul.list', search.apply(location.href), { merge: true })
    })
</script>
</body>
</html>
