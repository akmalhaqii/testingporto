export const $ = (selector, scope = document) =>
  scope.querySelector(selector);

export const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];

export function mount(rootId, html) {
  const root = document.getElementById(rootId);
  if (!root) {
    console.warn(`[mount] Root element #${rootId} not found.`);
    return;
  }
  root.innerHTML = html;
}

export function delegate(parent, event, childSel, handler) {
  parent.addEventListener(event, (e) => {
    const target = e.target.closest(childSel);
    if (target) handler(e, target);
  });
}
