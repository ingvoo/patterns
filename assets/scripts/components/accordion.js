/*----------------------------------------*\
  Accordion
\*----------------------------------------*/

const accordionBtns = document.querySelectorAll('.accordion__btn');

accordionBtns.forEach((btn) => {
  const id = btn.getAttribute('aria-controls');
  const content = document.querySelector(`#${id}`);

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true' || false;

    btn.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
  });
});
  