// 1. Toggle menu untuk tampilan HP
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik (di HP)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 2. FITUR TANDA MENU AKTIF SAAT SCROLL
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  // Cek kita lagi ada di bagian mana
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // Angka 150 ini jarak toleransi biar tandanya pas muncul
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  // Hapus tanda aktif dari semua menu, lalu pasang di menu yang sesuai
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});