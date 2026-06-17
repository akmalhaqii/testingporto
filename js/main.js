import { initCursor }   from './components/Cursor.js';
import { initNavbar }   from './components/Navbar.js';
import { initHero }     from './components/Hero.js';
import { initAbout }    from './components/About.js';
import { initProjects } from './components/Projects.js';
import { initSkills }   from './components/Skills.js';
import { initContact }  from './components/Contact.js';
import { initFooter }   from './components/Footer.js';

import { initFadeObserver, initSkillBarObserver } from './utils/observer.js';

function init() {
  initCursor();

  initNavbar();
  initHero();
  initAbout();
  initProjects();
  initSkills();
  initContact();
  initFooter();

  initFadeObserver();
  initSkillBarObserver();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init(); 
}
