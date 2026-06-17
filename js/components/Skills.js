import { mount }        from '../utils/dom.js';
import { skillGroups }  from '../data/skills.js';

function renderBar({ name, level }) {
  return `
    <div class="skill-row">
      <div class="skill-row-header">
        <span>${name}</span>
        <span>${level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="--w: ${level}%"></div>
      </div>
    </div>
  `;
}

function renderGroup({ group, skills }) {
  return `
    <div class="skills-group fade-up">
      <h3>${group}</h3>
      ${skills.map(renderBar).join('')}
    </div>
  `;
}

function template() {
  return `
    <section id="skills">
      <div class="section-header fade-up">
        <p class="section-label">Kemampuan Teknis</p>
        <h2 class="section-title">Keahlian Saya</h2>
      </div>

      <div class="skills-wrapper">
        <div class="skills-columns">
          ${skillGroups.map(renderGroup).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initSkills() {
  mount('skills-root', template());
}
