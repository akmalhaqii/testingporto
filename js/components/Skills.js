import { mount } from '../utils/dom.js';
import { skillBadges } from '../data/skills.js';

function template() {
  return `
    <section id="skills">
      <div class="section-header fade-up">
        <p class="section-label">Kemampuan Teknis</p>
        <h2 class="section-title">Keahlian Saya</h2>
      </div>

      <div class="skills-wrapper">
        <div class="skills-badges fade-up">
          ${skillBadges
            .map(skill => `<span class="skill-badge">${skill}</span>`)
            .join('')}
        </div>
      </div>
    </section>
  `;
}

export function initSkills() {
  mount('skills-root', template());
}
