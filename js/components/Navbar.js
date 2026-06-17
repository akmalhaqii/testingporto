import { mount } from '../utils/dom.js';
import { profile } from '../data/profile.js';

function template() {
  return `
    <nav id="navbar">
      <a href="#hero" class="nav-logo">
        ${profile.logoInitials}<span>.</span>
      </a>

      <ul class="nav-links" id="navLinks">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#portfolio">Proyek</a></li>
        <li><a href="#skills">Keahlian</a></li>
        <li><a href="#contact">Kontak</a></li>
        <li>
          <a href="assets/CV_AkmalBaihaqii.pdf" download class="btn-cv">
            Download CV
          </a>
        </li>
      </ul>

      <button class="hamburger" id="hamburger" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

function bindEvents() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

export function initNavbar() {
  mount('navbar-root', template());
  bindEvents();
}
