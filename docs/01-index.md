---
title: Welcome to Patterns
---

Patterns is a starter for mobile first scss develpment.
For more infos visit [GitHub](https://github.com/ingvijonasson/patterns).

<h2>Colors</h2>
<section id="colors-list"></section>

<style>
#colors-list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.color-card {
  padding: 3rem;
  border: 1px solid lightgray;
}

.color-text {
  padding: .5rem 0 2rem;
}
</style>

<script>
  let spacesList = document.querySelector('#colors-list')

  const tokens = fetch('/tokens.json')
  .then(res => res.json())
  .then(json => showColors(json.colors));

function showColors(items) {
  for (const key in items) {
    let el = document.createElement('article');

      let color = document.createElement('div');
      color.style.backgroundColor = items[key];
      color.classList.add('color-card');

      let text = document.createElement('div');
      text.classList.add('color-text');
      text.innerHTML = `<code>var(--${key}): ${items[key]}</code>`;

      el.appendChild(color);
      el.appendChild(text);
      spacesList.appendChild(el);
  }
}

</script>
