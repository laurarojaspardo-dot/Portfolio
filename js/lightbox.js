// ============================================================
// LAURA ROJAS — PORTFOLIO — lightbox de galería
// Cualquier <img> dentro de .pgallery se puede ampliar al hacer
// clic. Una vez abierto, se puede recorrer toda la galería con
// las flechas en pantalla o con las flechas del teclado.
// Se cierra con el botón, clic fuera de la imagen, o Esc.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('.pgallery');
  if (!galleries.length) return;

  // Overlay único, reutilizado para cualquier imagen en la que se haga clic
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-overlay__close';
  closeBtn.setAttribute('aria-label', 'Cerrar');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-overlay__nav lightbox-overlay__nav--prev';
  prevBtn.setAttribute('aria-label', 'Imagen anterior');
  prevBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-overlay__nav lightbox-overlay__nav--next';
  nextBtn.setAttribute('aria-label', 'Imagen siguiente');
  nextBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const img = document.createElement('img');
  img.alt = '';

  overlay.appendChild(closeBtn);
  overlay.appendChild(prevBtn);
  overlay.appendChild(img);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  let currentList = [];
  let currentIndex = 0;

  function updateNavVisibility() {
    const multiple = currentList.length > 1;
    prevBtn.style.display = multiple ? 'flex' : 'none';
    nextBtn.style.display = multiple ? 'flex' : 'none';
  }

  function showAt(index) {
    if (!currentList.length) return;
    // Módulo que también funciona con índices negativos
    currentIndex = ((index % currentList.length) + currentList.length) % currentList.length;
    const el = currentList[currentIndex];
    img.src = el.src;
    img.alt = el.alt || '';
  }

  function openLightbox(list, index) {
    currentList = list;
    updateNavVisibility();
    showAt(index);
    overlay.classList.add('is-open');
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
  }

  // Cada galería mantiene su propia lista de imágenes, para no
  // mezclar la navegación entre galerías de distintos proyectos
  galleries.forEach(gallery => {
    const images = Array.from(gallery.querySelectorAll('img'));
    images.forEach((el, index) => {
      el.addEventListener('click', () => openLightbox(images, index));
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showAt(currentIndex - 1));
  nextBtn.addEventListener('click', () => showAt(currentIndex + 1));

  // Clic en el fondo (fuera de la imagen y las flechas) cierra el lightbox
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
    if (e.key === 'ArrowRight') showAt(currentIndex + 1);
  });
});
