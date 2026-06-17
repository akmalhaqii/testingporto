# TUGAS AKHIR PENGEMBANGAN WEB DAMP
# Pengembangan Web Portofolio

## Struktur Proyek

portfolio/
  index.html                  

css/
  variables.css           
  reset.css               
  cursor.css              
  navbar.css              
  hero.css               
  about.css               
  portfolio.css          
  skills.css            
  contact.css           
  footer.css           
  animations.css         
  responsive.css         

js/
  main.js  

  components/            
    Cursor.js
    Navbar.js
    Hero.js
    About.js
    Projects.js
    Skills.js
    Contact.js
    Footer.js

  data/                  
    profile.js          
    projects.js         
    skills.js         

  utils/                
    dom.js             
    observer.js       
    typing.js          

assets/
  foto-profil.jpg         
  CV_AkmalBaihaqii.pdf    


## ⚡ Cara Menjalankan

ES Modules **tidak bisa dibuka via `file://`** langsung. Butuh local server:

```bash
# Opsi 1: VS Code — install ekstensi "Live Server", klik kanan index.html → Open with Live Server

# Opsi 2: Node.js
npx serve .

# Opsi 3: Python
python -m http.server 3000
```

Buka `http://localhost:3000` di browser.

---

## 🌐 Deploy ke GitHub Pages

```bash
# 1. Buat repo dengan nama: usernamekamu.github.io
git init
git add .
git commit -m "feat: modular portfolio"
git remote add origin https://github.com/usernamekamu/usernamekamu.github.io.git
git push -u origin main

# 2. Settings → Pages → Source: Deploy from branch → main → / (root) → Save
```

> **Catatan:** ES Modules bekerja langsung di GitHub Pages karena file diservce via HTTPS.

---

## ✏️ Cara Update Konten

### Ganti data pribadi
Buka `js/data/profile.js` → ubah nama, email, bio, sosmed, dll.

### Tambah proyek baru
Buka `js/data/projects.js` → tambahkan objek baru ke array `projects`:
```js
{
  id:       'nama-unik',
  emoji:    '🔥',
  category: 'web',          // 'web' | 'mobile' | 'ui'
  tags:     ['React', 'Firebase'],
  title:    'Nama Proyek',
  desc:     'Deskripsi singkat.',
  demo:     'https://...',
  repo:     'https://github.com/...',
}
```

### Ubah skill dan persentase
Buka `js/data/skills.js` → ubah nilai `level` (0–100).

### Ganti foto profil
1. Taruh foto di `assets/foto-profil.jpg`
2. Di `js/components/About.js`, ganti:
   ```js
   <div class="about-photo">🧑‍💻</div>
   ```
   Dengan:
   ```js
   <img src="assets/foto-profil.jpg" alt="Foto ${profile.name}" class="about-photo" />
   ```

### Aktifkan form email (Formspree)
1. Daftar di [formspree.io](https://formspree.io) → salin endpoint
2. Di `js/components/Contact.js`, ganti blok `setTimeout` dengan `fetch`:
   ```js
   const res = await fetch('https://formspree.io/f/KODE_KAMU', {
     method:  'POST',
     headers: { 'Content-Type': 'application/json' },
     body:    JSON.stringify({ name, email, message }),
   });
   if (!res.ok) throw new Error('Server error');
   ```

### Ubah warna tema
Buka `css/variables.css` → ubah `--accent` dan `--accent-light`.

---

## 🏗 Arsitektur

```
index.html (shell)
    └── <script type="module" src="js/main.js">
            ├── initCursor()       ← components/Cursor.js
            ├── initNavbar()       ← components/Navbar.js
            ├── initHero()         ← components/Hero.js  ← data/profile.js
            │                                            ← utils/typing.js
            ├── initAbout()        ← components/About.js ← data/profile.js
            │                                            ← data/skills.js
            ├── initProjects()     ← components/Projects.js ← data/projects.js
            │                                               ← utils/dom.js
            ├── initSkills()       ← components/Skills.js ← data/skills.js
            ├── initContact()      ← components/Contact.js ← data/profile.js
            ├── initFooter()       ← components/Footer.js ← data/profile.js
            ├── initFadeObserver() ← utils/observer.js
            └── initSkillBarObserver() ← utils/observer.js
```

Setiap komponen: **render HTML** → **inject ke mount point** → **bind events**.  
Data tidak pernah ditulis di dalam komponen — selalu diimport dari `data/`.

---

## 🔄 Migrasi ke React (Roadmap)

Karena arsitektur sudah component-based, migrasi ke React hanya butuh:

| Vanilla JS | React Equivalent |
|---|---|
| `js/components/Hero.js` | `src/components/Hero.jsx` |
| `mount(id, template())` | `return <JSX />` |
| `data/projects.js` | Tetap sama (atau pindah ke `src/data/`) |
| `utils/observer.js` | `useEffect` + `useRef` |
| `utils/typing.js` | Custom hook `useTyping()` |

---

## 📄 Lisensi

[MIT License](LICENSE) — bebas digunakan dengan atribusi.

---

*Tugas Mata Kuliah Desain Antarmuka Pengguna — Semester Genap 2025/2026*
