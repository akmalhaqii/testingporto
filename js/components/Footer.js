/* =====================================================
   components/Footer.js
   ===================================================== */
import { mount }   from '../utils/dom.js';
import { profile } from '../data/profile.js';

function template() {
  return `
    <footer>
      <p>© ${profile.year} <span>${profile.name}</span>.</p>

      <nav class="social-links" aria-label="Media sosial">
        <a href="${profile.github}" class="social-link"
           target="_blank" rel="noopener" aria-label="GitHub">GH</a>
        <a href="${profile.linkedin}" class="social-link"
           target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
        <a href="${profile.instagram}" class="social-link"
           target="_blank" rel="noopener" aria-label="Instagram">IG</a>
      </nav>
    </footer>
  `;
}

export function initFooter() {
  mount('footer-root', template());
}
