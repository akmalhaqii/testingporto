
import { mount }   from '../utils/dom.js';
import { profile } from '../data/profile.js';

function template() {
  return `
    <section id="contact">
      <div class="section-header fade-up">
        <p class="section-label">Kerja Sama?</p>
        <h2 class="section-title">Hubungi Saya</h2>
      </div>

      <div class="contact-grid">
        <!-- Info kontak -->
        <div class="fade-up">
          <div class="contact-info">
            <h3>Mari Terhubung!</h3>
            <p>
              Terbuka untuk diskusi proyek, kolaborasi, maupun kesempatan
              magang. Jangan ragu menghubungi saya.
            </p>
          </div>

          <div class="contact-items">
            <a href="mailto:${profile.email}" class="contact-item">
              <div class="contact-item-icon" aria-hidden="true">✉</div>
              <span>${profile.email}</span>
            </a>
            <a href="${profile.linkedin}" class="contact-item"
               target="_blank" rel="noopener">
              <div class="contact-item-icon" aria-hidden="true">in</div>
              <span>${profile.linkedin.replace('https://', '')}</span>
            </a>
            <a href="${profile.github}" class="contact-item"
               target="_blank" rel="noopener">
              <div class="contact-item-icon" aria-hidden="true">⌥</div>
              <span>${profile.github.replace('https://', '')}</span>
            </a>
          </div>
        </div>

        <!-- Formulir -->
        <form class="contact-form fade-up" id="contactForm" novalidate>
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" name="name"
                   placeholder="Budi Santoso" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email"
                   placeholder="budi@email.com" required />
          </div>
          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea id="message" name="message"
                      placeholder="Halo, saya tertarik untuk..." required></textarea>
          </div>

          <div class="form-status" id="formStatus"></div>

          <button type="submit" class="btn btn-primary"
                  style="width:100%;justify-content:center;" id="submitBtn">
            Kirim Pesan →
          </button>
        </form>
      </div>
    </section>
  `;
}

function bindForm() {
  const form      = document.getElementById('contactForm');
  const status    = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  function showStatus(msg, type) {
    status.textContent = msg;
    status.className   = `form-status ${type}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showStatus('Mohon isi semua kolom.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Format email tidak valid.', 'error');
      return;
    }

    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled    = true;

    try {
      await new Promise((r) => setTimeout(r, 1500)); // Simulasi

      showStatus('Pesan terkirim! Saya akan membalas segera.', 'success');
      form.reset();
    } catch {
      showStatus('Gagal mengirim. Coba lagi nanti.', 'error');
    } finally {
      submitBtn.textContent = 'Kirim Pesan →';
      submitBtn.disabled    = false;
    }
  });
}

export function initContact() {
  mount('contact-root', template());
  bindForm();
}
