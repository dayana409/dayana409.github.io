const filters = document.querySelector('.filters');
const buttons = filters.querySelectorAll('button');
const projects = document.querySelectorAll('[data-kind]');
filters.hidden = false;
filters.addEventListener('click', event => {
  const selected = event.target.closest('button');
  if (!selected) return;
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === selected));
  }
  for (const project of projects) {
    project.hidden = selected.dataset.filter !== 'Все' && project.dataset.kind !== selected.dataset.filter;
  }
});
