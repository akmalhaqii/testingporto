# TUGAS AKHIR PENGEMBANGAN WEB DAMP
# Pengembangan Web Portofolio

## Struktur Proyek

index.html

css/
| variables.css
| cursor.css
| navbar.css
| hero.css
| about.css
| portfolio.css
| skills.css
| contact.css
| footer.css
| animations.css
| responsive.css

js/
| main.js
|
| components/
|   | Cursor.js
|   | Navbar.js
|   | Hero.js
|   | About.js
|   | Projects.js
|   | Skills.js
|   | Contact.js
|   | Footer.js
|
| data/
|   | profile.js
|   | projects.js
|   | skills.js
|
| utils/
|   | dom.js
|   | observer.js
|   | typing.js

assets/
| foto-profil.jpg
| CV_AkmalBaihaqii.pdf 


## Update Data

### Ganti data pribadi
Buka `js/data/profile.js` = ubah nama, email, bio, sosmed, dll.

### Tambah proyek baru
Buka `js/data/projects.js` = tambahkan objek baru ke array `projects`:
```js
{
  id:       'id',
  category: 'web',          // 'web' | 'mobile' | 'ui'
  tags:     ['React', 'Firebase'],
  title:    'Nama Proyek',
  desc:     'Deskripsi singkat.',
  demo:     'https://...',
  repo:     'https://github.com/...',
}
```

### Aktifkan form email (Formspree)
1. Daftar di [formspree.io](https://formspree.io) lalu salin endpoint
2. Di `js/components/Contact.js`, ganti blok `setTimeout` dengan `fetch`:
   ```js
   const res = await fetch('https://formspree.io/f/KODE_KAMU', {
     method:  'POST',
     headers: { 'Content-Type': 'application/json' },
     body:    JSON.stringify({ name, email, message }),
   });
   if (!res.ok) throw new Error('Server error');
   ```

---

## 🏗 Arsitektur

```
index.html (shell)
|
└── js/main.js
    |
    ├── initCursor()
    |   └── components/Cursor.js
    |
    ├── initNavbar()
    |   └── components/Navbar.js
    |
    ├── initHero()
    |   ├── components/Hero.js
    |   ├── data/profile.js
    |   └── utils/typing.js
    |
    ├── initAbout()
    |   ├── components/About.js
    |   ├── data/profile.js
    |   └── data/skills.js
    |
    ├── initProjects()
    |   ├── components/Projects.js
    |   ├── data/projects.js
    |   └── utils/dom.js
    |
    ├── initSkills()
    |   ├── components/Skills.js
    |   └── data/skills.js
    |
    ├── initContact()
    |   ├── components/Contact.js
    |   └── data/profile.js
    |
    ├── initFooter()
    |   ├── components/Footer.js
    |   └── data/profile.js
    |
    └── initFadeObserver()
        └── utils/observer.js

```

Setiap komponen: **render HTML** > **inject ke mount point** > **bind events**.  
Data tidak pernah ditulis di dalam komponen — selalu diimport dari `data/`.

---
