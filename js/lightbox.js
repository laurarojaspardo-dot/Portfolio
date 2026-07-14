// ============================================================
// LAURA ROJAS — PORTFOLIO — lightbox de galería
// Cualquier <img> dentro de .pgallery se puede ampliar al hacer
// clic. Se cierra con el botón, clic fuera de la imagen, o Esc.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.pgallery img');
  if (!galleryImages.length) return;

  // Overlay único, reutilizado para cualquier imagen en la que se haga clic
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-overlay__close';
  closeBtn.setAttribute('aria-label', 'Cerrar');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>';

  const img = document.createElement('img');
  img.alt = '';

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('is-open');
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
  }

  galleryImages.forEach(el => {
    el.addEventListener('click', () => openLightbox(el.src, el.alt));
  });

  closeBtn.addEventListener('click', closeLightbox);

  // Clic en el fondo (fuera de la imagen) cierra el lightbox
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeLightbox();
  });
});
