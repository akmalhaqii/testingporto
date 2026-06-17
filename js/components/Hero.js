import { mount }       from '../utils/dom.js';
import { profile }     from '../data/profile.js';
import { startTyping } from '../utils/typing.js';

function template() {
  return `
    <section id="hero">
      <div class="hero-bg-blob blob-1"></div>
      <div class="hero-bg-blob blob-2"></div>

      <div class="hero-content">
        <p class="hero-greeting">Halo, saya</p>

        <h1 class="hero-name">
          <span class="highlight">${profile.name}</span>
        </h1>

        <p class="hero-tagline">
          Seorang
          <span class="typed-text" id="typedText"></span><span class="cursor-blink">|</span>
        </p>

        <p class="hero-description">${profile.description}</p>

        <div class="hero-cta">
          <a href="#portfolio" class="btn btn-primary">Lihat Proyek ↓</a>
          <a href="#contact"   class="btn btn-outline">Hubungi Saya</a>
        </div>
      </div>

      <div class="scroll-indicator" aria-hidden="true">
        <span>scroll</span>
        <svg width="18" height="18" fill="none" stroke="currentColor"
             stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  `;
}

export function initHero() {
  mount('hero-root', template());

  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    startTyping(typedEl, profile.roles);
  }
}
