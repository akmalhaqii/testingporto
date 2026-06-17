import { mount }        from '../utils/dom.js';
import { profile }      from '../data/profile.js';
import { skillBadges }  from '../data/skills.js';

function renderBio() {
  return profile.bio
    .map((para) => `<p class="about-bio">${para}</p>`)
    .join('');
}

function renderBadges() {
  return skillBadges
    .map((b) => `<span class="skill-badge">${b}</span>`)
    .join('');
}

function renderStats() {
  return profile.stats
    .map(
      ({ value, label }) => `
        <div class="stat-item">
          <h3>${value}</h3>
          <p>${label}</p>
        </div>`
    )
    .join('');
}

function template() {
  return `
    <section id="about">
      <div class="section-header fade-up">
        <p class="section-label">Mengenal Saya</p>
        <h2 class="section-title">Tentang Saya</h2>
      </div>

      <div class="about-grid">
        <div class="about-photo-wrap fade-up">
            <img src="assets/foto-profil.jpg"
              alt="Foto ${profile.name}" class="about-photo" />
        </div>

        <div class="fade-up">
          ${renderBio()}
          <div class="skills-badges">${renderBadges()}</div>
          <div class="stats-row">${renderStats()}</div>
        </div>
      </div>
    </section>
  `;
}

export function initAbout() {
  mount('about-root', template());
}
