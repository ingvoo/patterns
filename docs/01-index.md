---
title: Welcome to Patterns
---

Patterns is a starter for mobile first scss develpment.
For more infos visit [GitHub](https://github.com/ingvijonasson/patterns).


<h2>Spaces available</h2>
<ul class="list" id="spaces-list"></ul>

<script>
  let spacesList = document.querySelector('#spaces-list')

  const tokens = fetch('/tokens.json')
  .then(res => res.json())
  .then(json => showColors(json.space));

function showColors(items) {
  for (const key in items) {
    let el = document.createElement('li');
    el.innerHTML = `${key} - ${items[key]}`;
    spacesList.appendChild(el);
  }
}

</script>
