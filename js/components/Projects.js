import { mount, delegate }       from '../utils/dom.js';
import { projects, categories }  from '../data/projects.js';

function renderFilterTabs() {
  return categories
    .map(
      ({ value, label }) => `
        <button class="filter-btn ${value === 'all' ? 'active' : ''}"
                data-filter="${value}">
          ${label}
        </button>`
    )
    .join('');
}

function renderCard({ emoji, imgUrl, category, tags, title, desc, demo, repo }) {
  const tagHtml = tags
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join('');

  const overlayLinks = [
    demo ? `<a href="${demo}" class="overlay-btn" target="_blank" rel="noopener">Demo</a>` : '',
    repo ? `<a href="${repo}" class="overlay-btn" target="_blank" rel="noopener">GitHub</a>` : '',
  ].join('');

  const bodyLinks = [
    demo ? `<a href="${demo}" class="project-link" target="_blank" rel="noopener">↗ Live Demo</a>` : '',
    repo ? `<a href="${repo}" class="project-link" target="_blank" rel="noopener">⌥ Source Code</a>` : '',
  ].join('');

  const imageContent = imgUrl
    ? `<img src="${imgUrl}" alt="${title}" style="width:100%;height:100%;object-fit:cover;" />`
    : emoji;

  return `
    <article class="project-card fade-up" data-category="${category}">
      <div class="project-image">
        ${imageContent}
        <div class="project-overlay">${overlayLinks}</div>
      </div>
      <div class="project-body">
        <div class="project-tags">${tagHtml}</div>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-links">${bodyLinks}</div>
      </div>
    </article>
  `;
}

function renderCards(filter = 'all') {
  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);
  return filtered.map(renderCard).join('');
}

function template() {
  return `
    <section id="portfolio">
      <div class="section-header fade-up">
        <p class="section-label">Karya Terbaik</p>
        <h2 class="section-title">Proyek Saya</h2>
      </div>

      <div class="filter-tabs fade-up" id="filterTabs">
        ${renderFilterTabs()}
      </div>

      <div class="projects-grid" id="projectsGrid">
        ${renderCards()}
      </div>
    </section>
  `;
}

function bindEvents() {
  const tabs = document.getElementById('filterTabs');
  const grid = document.getElementById('projectsGrid');

  delegate(tabs, 'click', '.filter-btn', (e, btn) => {
    tabs
      .querySelectorAll('.filter-btn')
      .forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    grid.innerHTML = renderCards(filter);

    import('../utils/observer.js').then(({ initFadeObserver }) =>
      initFadeObserver()
    );
  });
}

export function initProjects() {
  mount('portfolio-root', template());
  bindEvents();
}
