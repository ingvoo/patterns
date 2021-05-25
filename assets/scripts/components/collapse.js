/*----------------------------------------*\
  Collapse
\*----------------------------------------*/

const collapseBtns = document.querySelectorAll('[data-collapse]');

collapseBtns.forEach((btn) => {
  const id = btn.getAttribute('aria-controls');
  const content = document.querySelector(`#${id}`);

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
  });
});
