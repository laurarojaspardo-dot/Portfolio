// ============================================================
// LAURA ROJAS — PORTFOLIO — i18n (ES / EN)
// Diccionario de traducciones + aplicación por data-i18n
// ============================================================

const translations = {
  // ---------- Navegación (común a todas las páginas) ----------
  'nav.inicio':      { es: 'Inicio',       en: 'Home' },
  'nav.sobre':       { es: 'Sobre mí',     en: 'About' },
  'nav.portafolio':  { es: 'Portafolio',   en: 'Portfolio' },
  'nav.cv':          { es: 'CV',           en: 'Resume' },
  'nav.contacto':    { es: 'Contacto',     en: 'Contact' },
  'common.back':     { es: '\u2190 Volver al portafolio', en: '\u2190 Back to portfolio' },

  // ---------- Piezas comunes reutilizadas en varias páginas ----------
  'common.viewreport':   { es: 'Ver informe completo', en: 'View full report' },
  'common.stamp.game':   { es: 'Videojuego', en: 'Game' },
  'common.stamp.design': { es: 'Diseño', en: 'Design' },
  'common.section.desc':       { es: 'Descripción', en: 'Description' },
  'common.section.process':    { es: 'Proceso de desarrollo', en: 'Development process' },
  'common.section.tools':      { es: 'Herramientas', en: 'Tools' },
  'common.section.skills':     { es: 'Habilidades demostradas', en: 'Skills demonstrated' },
  'common.section.gallery':    { es: 'Galería', en: 'Gallery' },
  'common.section.links':      { es: 'Enlaces', en: 'Links' },
  'common.infobar.year':     { es: 'Año', en: 'Year' },
  'common.infobar.status':   { es: 'Estado', en: 'Status' },
  'common.infobar.role':     { es: 'Mi rol', en: 'My role' },
  'common.infobar.duration': { es: 'Duración', en: 'Duration' },
  'common.infobar.type':     { es: 'Tipo', en: 'Type' },
  'common.infobar.genre':    { es: 'Género', en: 'Genre' },
  'common.infobar.area':     { es: 'Área', en: 'Area' },
  'common.media.pending':  { es: 'Imagen pendiente', en: 'Image pending' },
  'common.media.capture':  { es: 'Captura pendiente', en: 'Screenshot pending' },
  'common.btn.itch':  { es: 'Ver en itch.io', en: 'View on itch.io' },
  'common.btn.repo':  { es: 'Ver repositorio', en: 'View repository' },
  'common.sena.intern': { es: 'SENA — Etapa productiva', en: 'SENA — Internship' },

  // ---------- INDEX — Hero ----------
  'idx.hero.tag':   { es: 'Ficha de perfil — activo', en: 'Profile file — active' },
  'idx.hero.desc':  {
    es: 'Diseño y construyo experiencias jugables donde la narrativa y la mecánica se examinan mutuamente, como un plato bajo inspección. Actualmente en formación en Generation Colombia, moviendo mi trabajo en producción multimedia hacia el desarrollo de videojuegos.',
    en: 'I design and build playable experiences where narrative and mechanics inspect each other, like a dish under examination. Currently training at Generation Colombia, moving my multimedia production background into game development.'
  },
  'idx.hero.scroll': { es: 'Desplázate', en: 'Scroll' },
  'idx.hero.spotlight.meta':  { es: '2026 · Finalizado', en: '2026 · Completed' },
  'idx.hero.spotlight.cta':   { es: 'Ver proyecto actual', en: 'See current project' },

  // ---------- INDEX — About ----------
  'idx.about.eyebrow': { es: 'FILE_01 — Sobre mí', en: 'FILE_01 — About me' },
  'idx.about.title':   { es: 'El camino de la producción de multimedia al diseño de mundos jugables', en: 'From multimedia production to designing playable worlds' },
  'idx.about.p1': {
    es: 'Soy Laura, productora multimedia en transición activa hacia el desarrollo de videojuegos. Actualmente curso el bootcamp de Game Development en Generation Colombia, donde estoy afinando las herramientas técnicas que ya intuía desde el diseño visual: composición, ritmo y cómo guiar la atención de alguien a través de un espacio.',
    en: 'I\'m Laura, a multimedia producer actively transitioning into game development. I\'m currently taking the Game Development bootcamp at Generation Colombia, sharpening technical tools I already sensed from visual design: composition, pacing, and how to guide someone\'s attention through a space.'
  },
  'idx.about.p2': {
    es: 'Me interesa particularmente el diseño narrativo y el diseño de niveles, sobre todo en juegos de plataformas: espacios donde cada obstáculo cuenta algo sobre el mundo que lo rodea. Mi proyecto actual, Toxic Delicacies, nace de esa intersección — un juego de inspección y memoria donde la toxicidad emerge de la combinación, no del ingrediente aislado.',
    en: 'I\'m particularly interested in narrative design and level design, especially in platformers: spaces where every obstacle says something about the world around it. My current project, Toxic Delicacies, comes from that intersection — an inspection and memory game where toxicity emerges from combination, not from any single ingredient.'
  },
  'idx.about.p3': {
    es: 'Vengo del pixel art, el branding y la ilustración digital, así que cuido tanto la lógica del sistema como la piel visual que lo comunica.',
    en: 'I come from pixel art, branding and digital illustration, so I care as much about a system\'s logic as I do about the visual skin that communicates it.'
  },
  'idx.about.dev':   { es: 'Desarrollo', en: 'Development' },
  'idx.about.art':   { es: 'Arte & Diseño', en: 'Art & Design' },
  'idx.about.focus': { es: 'Enfoque', en: 'Focus' },

  // ---------- INDEX — Portfolio ----------
  'idx.portfolio.eyebrow': { es: 'FILE_02 — Portafolio', en: 'FILE_02 — Portfolio' },
  'idx.portfolio.title':   { es: 'Proyectos bajo inspección', en: 'Projects under inspection' },
  'idx.portfolio.desc':    { es: 'Una selección de trabajo en videojuegos y en diseño visual. Cada ficha lleva a un informe completo del proceso.', en: 'A selection of game and visual design work. Each file leads to a full report of the process.' },
  'idx.portfolio.games.title':  { es: 'Videojuegos', en: 'Games' },
  'idx.portfolio.games.count':  { es: '02 proyectos', en: '2 projects' },
  'idx.portfolio.design.title': { es: 'Diseño', en: 'Design' },
  'idx.portfolio.design.count': { es: '02 proyectos', en: '2 projects' },

  'idx.card.tp.meta':  { es: '2026 · Game Jam "Tóxico"', en: '2026 · "Toxic" Game Jam' },
  'idx.card.tp.desc':  { es: 'Juego de inspección y memoria en primera persona. Un catador forzado debe identificar qué combinaciones de ingredientes son tóxicas dentro de un mundo post-apocalíptico gobernado por El Consorcio.', en: 'A first-person inspection and memory game. A forced taster must identify which ingredient combinations are toxic inside a post-apocalyptic world ruled by El Consorcio.' },
  'idx.card.tp.stamp': { es: 'En desarrollo', en: 'In development' },

  'idx.card.fj.meta':  { es: 'Proyecto personal', en: 'Personal project' },
  'idx.card.fj.desc':  { es: 'Un endless flyer estilo Flappy Bird reconstruido desde cero: identidad visual propia y una mecánica adicional que cambia el ritmo del clásico.', en: 'A Flappy Bird-style endless flyer rebuilt from scratch: its own visual identity and an extra mechanic that changes the pace of the classic.' },
  'idx.card.fj.stamp': { es: 'Jugable', en: 'Playable' },

  'idx.card.epr.meta':  { es: 'Proyecto universitario', en: 'University project' },
  'idx.card.epr.desc':  { es: 'Proyecto de identidad visual y narrativa desarrollado en la universidad, explorando composición y mensaje a través del diseño gráfico.', en: 'A visual identity and narrative project developed at university, exploring composition and message through graphic design.' },
  'idx.card.epr.stamp': { es: 'Diseño', en: 'Design' },

  'idx.card.notco.meta':  { es: 'SENA — Etapa productiva', en: 'SENA — Internship' },
  'idx.card.notco.desc':  { es: 'Sitio web diseñado y maquetado como parte de mi etapa productiva. Publicación en GitHub Pages en proceso.', en: 'A website designed and built during my internship. Publishing on GitHub Pages is in progress.' },
  'idx.card.notco.stamp': { es: 'En camino', en: 'Coming soon' },

  // ---------- INDEX — CV ----------
  'idx.cv.eyebrow': { es: 'FILE_03 — CV', en: 'FILE_03 — Resume' },
  'idx.cv.title':   { es: 'Perfil profesional', en: 'Professional profile' },
  'idx.cv.resumen.title': { es: 'Resumen', en: 'Summary' },
  'idx.cv.resumen.p': { es: 'Productora multimedia en transición hacia el desarrollo de videojuegos, con enfoque en diseño narrativo y de niveles. Combino base técnica en programación con formación en diseño visual y comunicación.', en: 'Multimedia producer transitioning into game development, focused on narrative and level design. I combine a technical programming base with training in visual design and communication.' },
  'idx.cv.tech.title': { es: 'Habilidades técnicas', en: 'Technical skills' },
  'idx.cv.soft.title': { es: 'Habilidades blandas', en: 'Soft skills' },
  'idx.cv.soft.li1': { es: 'Trabajo en equipo en entornos de desarrollo colaborativo (game jams)', en: 'Teamwork in collaborative development environments (game jams)' },
  'idx.cv.soft.li2': { es: 'Comunicación técnica en inglés en contextos de IT', en: 'Technical communication in English in IT contexts' },
  'idx.cv.soft.li3': { es: 'Resolución de problemas y pensamiento de sistemas', en: 'Problem solving and systems thinking' },
  'idx.cv.edu.title': { es: 'Formación', en: 'Education' },
  'idx.cv.edu.e1.status': { es: 'En curso', en: 'Ongoing' },
  'idx.cv.edu.e2.title': { es: 'Técnico en Producción Multimedia', en: 'Multimedia Production Technician' },
  'idx.cv.edu.e2.desc':  { es: 'Comunicación, diseño y desarrollo multimedia.', en: 'Communication, design and multimedia development.' },
  'idx.cv.exp.title': { es: 'Experiencia', en: 'Experience' },
  'idx.cv.exp.e1.title': { es: 'Asistente de Comunicaciones', en: 'Communications Assistant' },
  'idx.cv.exp.e1.desc':  { es: 'Apoyo en piezas de comunicación y diseño digital.', en: 'Support on communication pieces and digital design.' },
  'idx.cv.download.p':   { es: 'El CV completo en PDF incluye el detalle de experiencia, certificaciones y referencias.', en: 'The full PDF resume includes detailed experience, certifications and references.' },
  'idx.cv.download.btn': { es: 'Descargar CV', en: 'Download resume' },

  // ---------- INDEX — Contact ----------
  'idx.contact.eyebrow': { es: 'FILE_04 — Contacto', en: 'FILE_04 — Contact' },
  'idx.contact.title':   { es: '¿Trabajamos en un jam, un juego, o algo entre ambos?', en: 'Want to work on a jam, a game, or something in between?' },
  'idx.contact.desc':    { es: 'Estoy abierta a colaboraciones, procesos de selección y proyectos de game jam. Escríbeme y te respondo pronto.', en: 'I\'m open to collaborations, hiring processes and game jam projects. Send me a message and I\'ll get back to you soon.' },
  'idx.contact.btn.email':    { es: 'Escribir correo', en: 'Send an email' },
  'idx.contact.btn.linkedin': { es: 'Ver LinkedIn', en: 'View LinkedIn' },

  // ---------- Toxic Delicacies ----------
  'tp.stamp.status': { es: 'En desarrollo', en: 'In development' },
  'tp.lede': { es: 'Un juego de inspección y memoria en primera persona sobre descubrir qué combinaciones —no ingredientes— convierten un plato en veneno.', en: 'A first-person inspection and memory game about discovering which combinations — not ingredients — turn a dish into poison.' },
  'tp.info.status':   { es: 'En desarrollo (game jam)', en: 'In development (game jam)' },
  'tp.info.role':     { es: 'Diseño de niveles, narrativa y assets', en: 'Level design, narrative and assets' },
  'tp.info.duration': { es: 'Ciclo de game jam', en: 'Game jam cycle' },
  'tp.desc.p1': { es: 'Toxic Delicacies se desarrolló para un game jam con el tema "tóxico". En un mundo post-apocalíptico gobernado por una organización llamada El Consorcio, el jugador asume el rol de un catador forzado: alguien obligado a probar y clasificar comida antes de que llegue a manos de otros.', en: 'Toxic Delicacies was developed for a game jam themed "toxic". In a post-apocalyptic world ruled by an organization called El Consorcio, the player takes on the role of a forced taster: someone required to test and classify food before it reaches anyone else.' },
  'tp.desc.p2': { es: 'El problema de diseño central era evitar la solución obvia de "objetos buenos vs. objetos malos". En su lugar, la toxicidad surge de la combinación de ingredientes, no del ingrediente en sí mismo — lo que convierte cada plato en un pequeño rompecabezas de memoria y deducción en vez de una simple lista de prohibidos.', en: 'The core design problem was avoiding the obvious "good items vs. bad items" solution. Instead, toxicity emerges from combining ingredients, not from any single ingredient — turning each dish into a small memory and deduction puzzle rather than a simple blacklist.' },
  'tp.desc.p3': { es: 'El público objetivo son jugadores de juegos de inspección y narrativa ambiental, interesados en mecánicas de puzzle contemplativas más que en reflejos o acción.', en: 'The target audience is players of inspection and environmental-narrative games, more interested in contemplative puzzle mechanics than in reflexes or action.' },
  'tp.process.1.title': { es: 'Interpretar el tema del jam', en: 'Interpreting the jam theme' },
  'tp.process.1.body': { es: 'Partimos de "tóxico" como tema y decidimos evitar la lectura literal (veneno como objeto) para explorar la toxicidad como propiedad emergente de una combinación — una decisión de diseño que definió todo el sistema de juego.', en: 'We started from "toxic" as the theme and chose to avoid the literal reading (poison as an object) to explore toxicity as an emergent property of combination — a design decision that shaped the entire game system.' },
  'tp.process.2.title': { es: 'Construir el mundo: El Consorcio', en: 'Building the world: El Consorcio' },
  'tp.process.2.body': { es: 'Diseñamos el contexto narrativo de una organización opresiva que controla el suministro de alimentos, dando sentido a por qué el catador está atrapado en su rol y qué está realmente en juego si falla.', en: 'We designed the narrative context of an oppressive organization that controls the food supply, giving meaning to why the taster is trapped in their role and what is really at stake if they fail.' },
  'tp.process.3.title': { es: 'Sistema de combinaciones', en: 'Combination system' },
  'tp.process.3.body': { es: 'Definimos las fichas de ingredientes y sus reglas de interacción, de forma que ninguna ficha sea "mala" por sí sola — la toxicidad depende exclusivamente de con qué se combina.', en: 'We defined ingredient cards and their interaction rules so that no card is "bad" on its own — toxicity depends entirely on what it\'s combined with.' },
  'tp.process.4.title': { es: 'Documentar en el GDD', en: 'Documenting in the GDD' },
  'tp.process.4.body': { es: 'Mantuvimos un Game Design Document vivo (actualmente en v1.3) para sincronizar mecánicas, narrativa y arte entre el equipo a medida que el alcance del jam se ajustaba.', en: 'We kept a living Game Design Document (currently at v1.3) to keep mechanics, narrative and art in sync across the team as the jam\'s scope shifted.' },
  'tp.process.5.title': { es: 'Producción de assets', en: 'Asset production' },
  'tp.process.5.body': { es: 'Trabajé specs de sprites y prompts de generación de imágenes para mantener consistencia visual entre los platos, ingredientes y el entorno del juego.', en: 'I worked on sprite specs and image-generation prompts to keep visual consistency across dishes, ingredients and the game environment.' },
  'tp.challenges.title': { es: 'Retos y aprendizajes', en: 'Challenges & learnings' },
  'tp.challenges.p': { es: 'El mayor reto fue balancear la complejidad del sistema de combinaciones para que se sintiera como un misterio resoluble y no como memorización arbitraria — es decir, diseño de puzzle real, no una lista disfrazada. También aprendí a mantener un GDD como documento vivo dentro de los tiempos ajustados de un jam, iterando la documentación al mismo ritmo que el prototipo.', en: 'The biggest challenge was balancing the complexity of the combination system so it felt like a solvable mystery rather than arbitrary memorization — real puzzle design, not a disguised checklist. I also learned to keep a GDD as a living document within a jam\'s tight timeline, iterating the documentation at the same pace as the prototype.' },

  // ---------- FLAMMY JIM ----------
  'fj.stamp.status': { es: 'Jugable', en: 'Playable' },
  'fj.lede': { es: 'Un endless flyer propio, construido sobre la base de Flappy Bird, con identidad visual personalizada y una mecánica adicional que cambia su ritmo.', en: 'An original endless flyer, built on the Flappy Bird foundation, with a custom visual identity and an extra mechanic that changes its pace.' },
  'fj.info.type':   { es: 'Proyecto personal', en: 'Personal project' },
  'fj.info.status': { es: 'Jugable', en: 'Playable' },
  'fj.info.role':   { es: 'Diseño, arte y programación', en: 'Design, art and programming' },
  'fj.desc.p1': { es: 'Flammy Jim toma la fórmula reconocible de Flappy Bird —esquivar obstáculos manteniendo el vuelo con un solo input— y la reconstruye con arte propio y una mecánica adicional que altera el ritmo habitual del género. El objetivo era practicar el ciclo completo de un proyecto pequeño y personal: diseño, arte y programación, de principio a fin, sin depender de un equipo.', en: 'Flammy Jim takes the recognizable Flappy Bird formula — dodging obstacles while staying airborne with a single input — and rebuilds it with original art and an extra mechanic that shifts the genre\'s usual pace. The goal was to practice the full cycle of a small, personal project: design, art and programming, start to finish, without relying on a team.' },
  'fj.process.1.title': { es: 'Punto de partida', en: 'Starting point' },
  'fj.process.1.body': { es: 'Elegí un clásico simple e ineludible como base para poder enfocarme en la ejecución más que en inventar un sistema desde cero.', en: 'I chose a simple, unavoidable classic as a base so I could focus on execution rather than inventing a system from scratch.' },
  'fj.process.2.title': { es: 'Identidad propia', en: 'Own identity' },
  'fj.process.2.body': { es: 'Rediseñé por completo la parte visual: personaje, fondo y paleta, alejándome de la referencia original.', en: 'I fully redesigned the visuals: character, background and palette, moving away from the original reference.' },
  'fj.process.3.title': { es: 'Una mecánica, un cambio de ritmo', en: 'One mechanic, one shift in pace' },
  'fj.process.3.body': { es: 'Incorporé una mecánica adicional pensada específicamente para romper la monotonía del loop original de "esquivar y esquivar".', en: 'I added an extra mechanic designed specifically to break the monotony of the original "dodge and dodge" loop.' },

  // ---------- EL PRECIO DE RESISTIR ----------
  'epr.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'epr.lede': { es: 'Proyecto universitario de identidad visual y diseño gráfico, enfocado en comunicar un mensaje a través de composición e ilustración.', en: 'A university project in visual identity and graphic design, focused on communicating a message through composition and illustration.' },
  'epr.info.type':   { es: 'Proyecto universitario', en: 'University project' },
  'epr.info.status': { es: 'Finalizado', en: 'Finished' },
  'epr.info.role':   { es: 'Diseño gráfico e ilustración', en: 'Graphic design & illustration' },
  'epr.info.area':   { es: 'Identidad visual', en: 'Visual identity' },
  'epr.desc.note': { es: 'Nota: esta sección está en borrador — cuéntame más detalles del brief y el mensaje del proyecto para completarla con precisión.', en: 'Note: this section is a draft — share more details about the brief and the project\'s message so I can complete it precisely.' },
  'epr.desc.p1': { es: 'El precio de resistir es un proyecto de diseño gráfico desarrollado durante mi formación universitaria, centrado en construir una identidad visual coherente que comunique un mensaje concreto a través de composición, tipografía e ilustración.', en: 'El precio de resistir is a graphic design project developed during my university studies, focused on building a coherent visual identity that communicates a concrete message through composition, typography and illustration.' },
  'epr.process.note': { es: 'Espacio reservado para el detalle del proceso: brief inicial, referencias, bocetos y decisiones de dirección de arte. Se puede completar con capturas del proceso cuando estén disponibles.', en: 'Placeholder for the process detail: initial brief, references, sketches and art direction decisions. Can be filled in with process captures once available.' },

  // ---------- NOTCO WEB ----------
  'notco.stamp.status': { es: 'Publicación en camino', en: 'Publishing soon' },
  'notco.lede': { es: 'Sitio web diseñado y maquetado como parte de mi etapa productiva en el SENA. La publicación en vivo está en proceso.', en: 'A website designed and built during my SENA internship. The live publication is in progress.' },
  'notco.info.type':   { es: 'Etapa productiva — SENA', en: 'Internship — SENA' },
  'notco.info.status': { es: 'Por publicar en GitHub Pages', en: 'Pending publication on GitHub Pages' },
  'notco.info.role':   { es: 'Diseño y maquetación web', en: 'Web design & layout' },
  'notco.info.area':   { es: 'Diseño web', en: 'Web design' },
  'notco.desc.note': { es: 'Nota: esta sección está en borrador. Cuéntame el objetivo del sitio y qué parte del proceso hiciste tú para completarla con precisión.', en: 'Note: this section is a draft. Share the site\'s goal and which part of the process was yours so I can complete it precisely.' },
  'notco.desc.p1': { es: 'Sitio web desarrollado durante mi etapa productiva como Asistente de Comunicaciones en el SENA, enfocado en maquetación y diseño de interfaz.', en: 'A website developed during my internship as a Communications Assistant at SENA, focused on layout and interface design.' },
  'notco.links.note': { es: 'Este sitio aún no está publicado. Cuando lo subamos a GitHub Pages, el enlace en vivo aparecerá aquí.', en: 'This site isn\'t published yet. Once it\'s up on GitHub Pages, the live link will appear here.' },
  'notco.links.stamp': { es: 'Enlace pendiente', en: 'Link pending' },
};

const LANG_KEY = 'laura-portfolio-lang';

function getStoredLang() {
  try {
    return localStorage.getItem(LANG_KEY) || 'es';
  } catch (e) {
    return 'es';
  }
}

function storeLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* noop */ }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.textContent = entry[lang];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.setAttribute('aria-label', entry[lang]);
    }
  });

  document.querySelectorAll('.lang-toggle .lang-opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const current = getStoredLang();
  applyLanguage(current);

  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const optEl = e.target.closest('.lang-opt');
      const next = optEl ? optEl.getAttribute('data-lang') : (getStoredLang() === 'es' ? 'en' : 'es');
      storeLang(next);
      applyLanguage(next);
    });
  });
});
