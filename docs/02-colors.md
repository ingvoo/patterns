---
title: Colors
---

<table class="list" id="token-list"></table>

<script>
  let tokenList = document.querySelector('#token-list')

  const tokens = fetch('/tokens.json')
  .then(res => res.json())
  .then(json => showColors(json.color));

function showColors(items) {
  for (const key in items) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td><code>var(--color-${key})</code></td>
    <td><code>${items[key]}</code></td>`;
    tokenList.appendChild(tr);
  }
}

</script>
