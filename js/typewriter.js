// ============================================================
// LAURA ROJAS — PORTFOLIO — typewriter del hero
// Escribe y borra cada rol en bucle: Game Developer / Game
// Designer / Level Designer. Respeta prefers-reduced-motion.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typedRole');
  if (!el) return;

  const roles = ['Game Developer', 'Game Designer', 'Level Designer'];
  const cursor = document.querySelector('.typed-cursor');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = roles.join(' / ');
    if (cursor) cursor.style.display = 'none';
    return;
  }

  const TYPE_SPEED = 70;
  const DELETE_SPEED = 40;
  const HOLD_TIME = 1400;
  const SWITCH_PAUSE = 300;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, SWITCH_PAUSE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
});
