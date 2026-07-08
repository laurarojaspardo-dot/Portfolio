// ============================================================
// LAURA ROJAS — PORTFOLIO — modo oscuro
// El tema se aplica lo antes posible via un script inline en
// <head> (evita el parpadeo); este archivo solo maneja el clic
// del botón y guarda la preferencia.
// ============================================================

const THEME_KEY = 'laura-portfolio-theme';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* noop */ }
  });
});
