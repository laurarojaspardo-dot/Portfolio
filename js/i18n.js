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
  'common.infobar.theme':    { es: 'Tema', en: 'Theme' },
  'common.infobar.type':     { es: 'Tipo', en: 'Type' },
  'common.infobar.genre':    { es: 'Género', en: 'Genre' },
  'common.infobar.area':     { es: 'Área', en: 'Area' },
  'common.media.pending':  { es: 'Imagen pendiente', en: 'Image pending' },
  'common.media.capture':  { es: 'Captura pendiente', en: 'Screenshot pending' },
  'common.media.video':    { es: 'Video pendiente', en: 'Video pending' },
  'common.btn.itch':  { es: 'Ver en itch.io', en: 'View on itch.io' },
  'common.btn.repo':  { es: 'Ver repositorio', en: 'View repository' },
  'common.sena.intern': { es: 'SENA — Etapa productiva', en: 'SENA — Internship' },
  'common.theme.toggle': { es: 'Cambiar a modo oscuro', en: 'Switch to dark mode' },

  // ---------- INDEX — Hero ----------
  'idx.hero.tag':   { es: 'Ficha de perfil', en: 'Profile file' },
  'idx.hero.desc':  {
    es: 'Diseño y desarrollo experiencias jugables donde la narrativa y la mecánica se ponen a prueba mutuamente. Formándome como Unity Developer con Generation Colombia, con foco en diseño narrativo, diseño de niveles y sistemas de juego.',
    en: 'I design and develop playable experiences where narrative and mechanics test each other. Training as a Unity Developer with Generation Colombia, focused on narrative design, level design and game systems.'
  },
  'idx.hero.scroll': { es: 'Desplázate', en: 'Scroll' },
  'idx.hero.spotlight.meta':  { es: '2026 · Finalizado', en: '2026 · Completed' },
  'idx.hero.spotlight.cta':   { es: 'Ver proyecto actual', en: 'See current project' },

  // ---------- INDEX — About ----------
  'idx.about.eyebrow': { es: 'FILE_01 — Sobre mí', en: 'FILE_01 — About me' },
  'idx.about.title':   { es: 'El camino de la producción de multimedia al diseño de mundos jugables', en: 'The path from multimedia production to designing playable worlds' },
  'idx.about.p1': {
    es: 'Soy Laura, diseñadora y desarrolladora de videojuegos con base en producción multimedia. Curso el bootcamp de Unity Developer en Generation Colombia, afinando herramientas técnicas que ya intuía desde el diseño visual: composición, ritmo y cómo guiar la atención de alguien a través de un espacio.',
    en: 'I\'m Laura, a game designer and developer with a background in multimedia production. I\'m taking the Unity Developer bootcamp at Generation Colombia, sharpening technical tools I already sensed from visual design: composition, pacing, and how to guide someone\'s attention through a space.'
  },
  'idx.about.p2': {
    es: 'Me interesa particularmente el diseño narrativo, el diseño de UI y el diseño de niveles, sobre todo en juegos de plataformas y de inspección: espacios y sistemas donde cada mecánica cuenta algo sobre el mundo que representa. He explorado esto en distintos proyectos de game jam, combinando puzzles de deducción con narrativa ambiental.',
    en: 'I\'m particularly interested in narrative design, UI design and level design, especially in platformers and inspection games: spaces and systems where every mechanic says something about the world it represents. I\'ve explored this across different game jam projects, combining deduction puzzles with environmental narrative.'
  },
  'idx.about.p3': {
    es: 'Vengo del branding y la ilustración digital, así que cuido tanto la lógica de un sistema como la piel visual que lo comunica.',
    en: 'I come from branding and digital illustration, so I care as much about a system\'s logic as I do about the visual skin that communicates it.'
  },
  'idx.about.dev':   { es: 'Desarrollo', en: 'Development' },
  'idx.about.art':   { es: 'Arte & Diseño', en: 'Art & Design' },
  'idx.about.focus': { es: 'Enfoque', en: 'Focus' },

  // ---------- INDEX — Portfolio ----------
  'idx.portfolio.eyebrow': { es: 'FILE_02 — Portafolio', en: 'FILE_02 — Portfolio' },
  'idx.portfolio.title':   { es: 'Proyectos bajo inspección', en: 'Projects under inspection' },
  'idx.portfolio.desc':    { es: 'Una selección de trabajo en videojuegos y en diseño visual. Cada ficha lleva a un informe completo del proceso.', en: 'A selection of game and visual design work. Each file leads to a full report of the process.' },
  'idx.portfolio.games.title':  { es: 'Videojuegos', en: 'Games' },
  'idx.portfolio.games.count':  { es: '03 proyectos', en: '3 projects' },
  'idx.portfolio.design.title': { es: 'Diseño', en: 'Design' },
  'idx.portfolio.design.count': { es: '02 proyectos', en: '2 projects' },

  'idx.card.tds.meta':  { es: '2026 · You Really Shouldn\'t Mix Those Game Jam', en: '2026 · You Really Shouldn\'t Mix Those Game Jam' },
  'idx.card.tds.desc':  { es: 'Juego de terror en primera persona: purifica dos mitades opuestas de una criatura híbrida entre pesadilla y sueño antes de que consuma al niño que sueña.', en: 'A first-person horror game: purify two opposing halves of a nightmare-dream hybrid creature before it consumes the dreaming child.' },
  'idx.card.tds.stamp': { es: 'Finalizado', en: 'Finished' },

  'idx.card.tp.meta':  { es: '2026 · Game Jam MadeToBePlayed', en: '2026 · MadeToBePlayed Game Jam' },
  'idx.card.tp.desc':  { es: 'Juego de inspección y memoria en primera persona creado para la Game Jam MadeToBePlayed. El jugador es el degustador de un restaurante y debe identificar qué combinaciones de ingredientes son tóxicas antes de servir cada plato.', en: 'A first-person inspection and memory game made for the MadeToBePlayed Game Jam. The player is a restaurant\'s taster, tasked with identifying which ingredient combinations are toxic before each dish is served.' },
  'idx.card.tp.stamp': { es: 'Finalizado', en: 'Finished' },

  'idx.card.fj.meta':  { es: 'Proyecto personal', en: 'Personal project' },
  'idx.card.fj.desc':  { es: 'Un endless flyer estilo Flappy Bird, construido a partir de un tutorial y reimaginado con una flama como protagonista y estalactitas de hielo como obstáculos. Sigue recibiendo actualizaciones.', en: 'A Flappy Bird-style endless flyer, built from a tutorial and reimagined with a little flame as the main character and ice stalactites as obstacles. Still receiving updates.' },
  'idx.card.fj.stamp': { es: 'En desarrollo', en: 'In development' },

  'idx.card.epr.meta':  { es: '2025 · Concept art · Preproducción VR 180°', en: '2025 · Concept art · VR 180° pre-production' },
  'idx.card.epr.desc':  { es: 'Concept art para un proyecto audiovisual en VR 180° que recrea, desde la mirada de un niño, la huelga obrera de 1963 en la cementera El Cairo, Santa Bárbara, Antioquia. Adaptación narrativa de "Las Cruces Sobre el Agua", de Joaquín Gallegos Lara.', en: 'Concept art for a VR 180° audiovisual project that recreates, through a child\'s eyes, the 1963 workers\' strike at the El Cairo cement plant in Santa Bárbara, Antioquia. A narrative adaptation of "Las Cruces Sobre el Agua" by Joaquín Gallegos Lara.' },
  'idx.card.epr.stamp': { es: 'Finalizado', en: 'Finished' },

  'idx.card.notco.meta':  { es: '2023 · SENA · Reto de programación', en: '2023 · SENA · Coding challenge' },
  'idx.card.notco.desc':  { es: 'Sitio web que tomaba como reto una situación hipotética de la llegada de NotCo a Colombia, desarrollado en un reto de programación de 2-3 días durante mi etapa electiva en el SENA. Gané el reto impuesto por la instructora por la implementación de la imagen de marca.', en: 'A website built around the hypothetical scenario of NotCo entering Colombia, developed during a 2–3 day coding challenge as part of my elective stage at SENA. I won the challenge set by the instructor for the brand implementation.' },
  'idx.card.notco.stamp': { es: 'Ganador del reto', en: 'Challenge winner' },

  // ---------- INDEX — CV ----------
  'idx.cv.eyebrow': { es: 'FILE_03 — CV', en: 'FILE_03 — Resume' },
  'idx.cv.title':   { es: 'Perfil profesional', en: 'Professional profile' },
  'idx.cv.resumen.title': { es: 'Resumen', en: 'Summary' },
  'idx.cv.resumen.p': { es: 'Diseñadora y desarrolladora de videojuegos con base en producción multimedia, enfocada en diseño narrativo y de niveles. Combino programación en Unity y C# con formación en diseño visual y comunicación.', en: 'Game designer and developer with a background in multimedia production, focused on narrative and level design. I combine Unity and C# programming with training in visual design and communication.' },
  'idx.cv.tech.title': { es: 'Habilidades técnicas', en: 'Technical skills' },
  'idx.cv.soft.title': { es: 'Habilidades blandas', en: 'Soft skills' },
  'idx.cv.soft.li1': { es: 'Trabajo en equipo en entornos de desarrollo colaborativo (game jams)', en: 'Teamwork in collaborative development environments (game jams)' },
  'idx.cv.soft.li2': { es: 'Comunicación técnica en inglés en contextos de IT', en: 'Technical communication in English in IT contexts' },
  'idx.cv.soft.li3': { es: 'Resolución de problemas y pensamiento de sistemas', en: 'Problem solving and systems thinking' },
  'idx.cv.edu.title': { es: 'Formación', en: 'Education' },
  'idx.cv.edu.e1.title':  { es: 'Bootcamp en Desarrollo en Unity', en: 'Unity Development Bootcamp' },
  'idx.cv.edu.e1.status': { es: 'En curso', en: 'Ongoing' },
  'idx.cv.edu.e2.title': { es: 'Técnico en Producción Multimedia', en: 'Multimedia Production Technician' },
  'idx.cv.edu.e2.desc':  { es: 'Comunicación, diseño y desarrollo multimedia.', en: 'Communication, design and multimedia development.' },
  'idx.cv.exp.title': { es: 'Experiencia', en: 'Experience' },
  'idx.cv.exp.e1.title': { es: 'Asistente de Comunicaciones', en: 'Communications Assistant' },
  'idx.cv.exp.e1.desc':  { es: 'Apoyo en piezas de comunicación y diseño digital.', en: 'Support on communication pieces and digital design.' },
  'idx.cv.download.p':   { es: 'El CV completo en PDF incluye al detalle mi experiencia, proyectos relevantes y habilidades.', en: 'The full PDF resume includes detailed experience, relevant projects and skills.' },
  'idx.cv.download.btn': { es: 'Descargar CV', en: 'Download resume' },

  // ---------- INDEX — Contact ----------
  'idx.contact.eyebrow': { es: 'FILE_04 — Contacto', en: 'FILE_04 — Contact' },
  'idx.contact.title':   { es: '¿Deseas trabajar conmigo?', en: 'Want to work together?' },
  'idx.contact.desc':    { es: 'Estoy abierta a colaboraciones, procesos de selección y proyectos de game jam. ¡Escríbeme!', en: 'I\'m open to collaborations, hiring processes and game jam projects. Send me a message!' },
  'idx.contact.btn.email':    { es: 'Escribir correo', en: 'Send an email' },
  'idx.contact.btn.linkedin': { es: 'Ver LinkedIn', en: 'View LinkedIn' },

  // ---------- TOXIC DELICACIES ----------
  'tp.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'tp.lede': { es: 'Un juego de inspección y memoria en primera persona: eres el degustador de un restaurante y debes descubrir qué combinaciones —no ingredientes— convierten un plato en veneno.', en: 'A first-person inspection and memory game: you\'re a restaurant\'s taster, and you must discover which combinations — not ingredients — turn a dish into poison.' },
  'tp.info.status':   { es: 'Publicado', en: 'Released' },
  'tp.info.role':     { es: 'Arte de assets y diseño de juego', en: 'Asset art & game design' },
  'tp.info.theme':    { es: 'Toxic', en: 'Toxic' },
  'tp.desc.p1': { es: 'Toxic Delicacies se desarrolló para MadeToBePlayed, la game jam organizada por MintMood entre el 25 de junio y el 5 de julio de 2026. El tema revelado fue "tóxico". Lo desarrollamos en equipo: Jorge Horta y Mónica Juarez en programación, Jabnel Bobadilla y Esteban Romero en arte, Valentina Castrillon en diseño UI, y yo en arte de assets y diseño de juego.', en: 'Toxic Delicacies was developed for MadeToBePlayed, the game jam organized by MintMood between June 25 and July 5, 2026. The revealed theme was "toxic". We built it as a team: Jorge Horta and Mónica Juarez on programming, Jabnel Bobadilla and Esteban Romero on art, Valentina Castrillon on UI design, and me on asset art and game design.' },
  'tp.desc.p2': { es: 'La narrativa cambió bastante durante el desarrollo: empezamos con un mundo post-apocalíptico y terminamos en algo más ligero y concreto — el jugador es el degustador de un restaurante, encargado de probar cada plato antes de que llegue a los comensales. El problema de diseño central se mantuvo intacto durante todo ese cambio: evitar la solución obvia de "ingredientes buenos vs. ingredientes malos". La toxicidad surge de la combinación, no del ingrediente en sí — cada plato es un pequeño rompecabezas de memoria y deducción.', en: 'The narrative shifted quite a bit during development: we started with a post-apocalyptic world and landed on something lighter and more concrete — the player is a restaurant\'s taster, in charge of testing each dish before it reaches the diners. The core design problem stayed intact through that whole change: avoiding the obvious "good ingredients vs. bad ingredients" solution. Toxicity comes from the combination, not the ingredient itself — each dish is a small memory and deduction puzzle.' },
  'tp.desc.p3': { es: 'El público objetivo son jugadores de juegos de inspección y narrativa ligera, interesados en mecánicas de puzzle contemplativas más que en reflejos o acción.', en: 'The target audience is players of inspection games and light narrative, more interested in contemplative puzzle mechanics than in reflexes or action.' },
  'tp.process.1.title': { es: 'Interpretar el tema del jam', en: 'Interpreting the jam theme' },
  'tp.process.1.body': { es: 'MintMood reveló "tóxico" como tema de MadeToBePlayed. Decidimos evitar la lectura literal (veneno como objeto) y explorar la toxicidad como propiedad emergente de una combinación — una decisión que definió todo el sistema de juego.', en: 'MintMood revealed "toxic" as the theme for MadeToBePlayed. We chose to avoid the literal reading (poison as an object) and explore toxicity as an emergent property of combination — a decision that shaped the entire game system.' },
  'tp.process.2.title': { es: 'Iterar la narrativa', en: 'Iterating the narrative' },
  'tp.process.2.body': { es: 'La primera versión situaba la historia en un mundo post-apocalíptico opresivo. A mitad del jam la reenfocamos hacia algo más concreto y jugable: un restaurante, con el jugador en el rol de su degustador. El sistema de combinaciones no cambió — solo el mundo que lo envolvía.', en: 'The first version set the story in an oppressive post-apocalyptic world. Midway through the jam we refocused it into something more concrete and playable: a restaurant, with the player as its taster. The combination system didn\'t change — only the world around it.' },
  'tp.process.3.title': { es: 'Sistema de combinaciones', en: 'Combination system' },
  'tp.process.3.body': { es: 'Definimos las fichas de ingredientes y sus reglas de interacción, de forma que ninguna ficha sea "mala" por sí sola — la toxicidad depende exclusivamente de con qué se combina.', en: 'We defined ingredient cards and their interaction rules so that no card is "bad" on its own — toxicity depends entirely on what it\'s combined with.' },
  'tp.process.4.title': { es: 'Coordinar al equipo y el GDD', en: 'Coordinating the team and the GDD' },
  'tp.process.4.body': { es: 'Con seis personas en distintos roles, mantuvimos un GDD vivo para sincronizar mecánicas, narrativa y arte a medida que el alcance se ajustaba dentro de los diez días del jam.', en: 'With six people across different roles, we kept a living GDD to keep mechanics, narrative and art in sync as the scope shifted within the jam\'s ten days.' },
  'tp.process.5.title': { es: 'Producción de assets', en: 'Asset production' },
  'tp.process.5.body': { es: 'Como parte del equipo de arte, trabajé specs de sprites y assets para mantener consistencia visual entre platos, ingredientes y el entorno del restaurante.', en: 'As part of the art team, I worked on sprite specs and assets to keep visual consistency across dishes, ingredients and the restaurant environment.' },
  'tp.team.title': { es: 'Equipo', en: 'Team' },
  'tp.team.role.jorge':     { es: 'Programación y diseño de juego', en: 'Programming & game design' },
  'tp.team.role.monica':    { es: 'Programación', en: 'Programming' },
  'tp.team.role.jabnel':    { es: 'Arte de escenarios', en: 'Environment art' },
  'tp.team.role.esteban':   { es: 'Arte de assets', en: 'Asset art' },
  'tp.team.role.valentina': { es: 'Diseño UI', en: 'UI design' },
  'tp.team.role.laura':     { es: 'Arte de assets y diseño de juego', en: 'Asset art & game design' },
  'tp.challenges.title': { es: 'Retos y aprendizajes', en: 'Challenges & learnings' },
  'tp.challenges.p': { es: 'El mayor reto fue balancear la complejidad del sistema de combinaciones para que se sintiera como un misterio resoluble y no como memorización arbitraria. A eso se sumó coordinar a seis personas en roles distintos dentro de los diez días del jam, incluyendo el giro narrativo a mitad de camino — mantener el GDD como documento vivo fue clave para que todo el equipo avanzara alineado pese al cambio.', en: 'The biggest challenge was balancing the complexity of the combination system so it felt like a solvable mystery rather than arbitrary memorization. On top of that, coordinating six people across different roles within the jam\'s ten days, including the narrative pivot midway through — keeping the GDD as a living document was key to keeping the whole team aligned despite the change.' },

  // ---------- FLAMMY JIM ----------
  'fj.stamp.status': { es: 'En desarrollo', en: 'In development' },
  'fj.lede': { es: 'Un endless flyer propio construido a partir de un tutorial, con una flama como protagonista, estalactitas de hielo como obstáculos, y una mecánica diferenciadora todavía por llegar.', en: 'An original endless flyer built from a tutorial, with a little flame as the main character, ice stalactites as obstacles, and a differentiating mechanic still on the way.' },
  'fj.info.year':   { es: '2026', en: '2026' },
  'fj.info.status': { es: 'En desarrollo', en: 'In development' },
  'fj.info.role':   { es: 'Diseño, arte y programación', en: 'Design, art and programming' },
  'fj.desc.p1a': { es: 'Flammy Jim nació como ejercicio práctico a partir de ', en: 'Flammy Jim started as a practical exercise based on ' },
  'fj.desc.p1b': { es: ', para aterrizar en un proyecto pequeño el ciclo completo de diseño, arte y programación. Sobre esa base técnica, lo reimaginé visualmente: en vez de un pájaro, una pequeña flama; en vez de tubos, estalactitas de hielo.', en: ', as a way to land the full design, art and programming cycle in one small project. On top of that technical base, I reimagined it visually: instead of a bird, a little flame; instead of pipes, ice stalactites.' },
  'fj.desc.p2': { es: 'Ya está publicado en itch.io, pero no es su versión final — sigue recibiendo actualizaciones. Mi objetivo pendiente es incorporar una mecánica que lo diferencie de un Flappy Bird estándar; todavía no está implementada, así que por ahora es la siguiente meta del proyecto, no una funcionalidad terminada.', en: 'It\'s already published on itch.io, but it\'s not the final version — it keeps receiving updates. My pending goal is adding a mechanic that sets it apart from a standard Flappy Bird; it isn\'t implemented yet, so for now it\'s the project\'s next goal rather than a finished feature.' },
  'fj.process.1.title': { es: 'Base técnica guiada', en: 'Guided technical base' },
  'fj.process.1.body': { es: 'Seguí un tutorial de introducción a Unity para tener una base sólida de mecánicas de vuelo y colisiones, y enfocar mi energía en la ejecución más que en resolver un sistema desde cero.', en: 'I followed an introductory Unity tutorial to get a solid base of flight mechanics and collisions, so I could focus my energy on execution rather than solving a system from scratch.' },
  'fj.process.2.title': { es: 'Reskin visual completo', en: 'Full visual reskin' },
  'fj.process.2.body': { es: 'Rediseñé personaje, obstáculos y paleta: el pájaro se convirtió en una pequeña flama, y los tubos en estalactitas de hielo, alejándome por completo de la referencia original.', en: 'I redesigned the character, obstacles and palette: the bird became a little flame, and the pipes became ice stalactites, moving fully away from the original reference.' },
  'fj.process.3.title': { es: 'Publicar y seguir iterando', en: 'Publish and keep iterating' },
  'fj.process.3.body': { es: 'Subí el juego a itch.io como primera versión jugable, sabiendo que recibiría actualizaciones — no lo trato como un proyecto cerrado.', en: 'I uploaded the game to itch.io as a first playable version, knowing it would receive updates — I don\'t treat it as a closed project.' },
  'fj.process.4.title': { es: 'Meta pendiente', en: 'Pending goal' },
  'fj.process.4.body': { es: 'Tengo planeada una mecánica que rompa la monotonía del loop original de "esquivar y esquivar" y diferencie el juego de un Flappy Bird estándar. Todavía no la he implementado.', en: 'I have a mechanic planned that breaks the monotony of the original "dodge and dodge" loop and sets the game apart from a standard Flappy Bird. I haven\'t implemented it yet.' },
  'fj.links.note': { es: 'El repositorio de este proyecto es privado por ahora.', en: 'This project\'s repository is private for now.' },

  // ---------- EL PRECIO DE RESISTIR ----------
  'epr.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'epr.lede': { es: 'Concept art de un proyecto audiovisual en VR 180° que recrea, desde la mirada de un niño, la huelga obrera de 1963 en la cementera El Cairo, Santa Bárbara, Antioquia.', en: 'Concept art for a VR 180° audiovisual project that recreates, through a child\'s eyes, the 1963 workers\' strike at the El Cairo cement plant in Santa Bárbara, Antioquia.' },
  'epr.info.year':   { es: '2025', en: '2025' },
  'epr.info.status': { es: 'Finalizado', en: 'Finished' },
  'epr.info.role':   { es: 'Dirección de proyecto, investigación y narrativa', en: 'Project direction, research and narrative' },
  'epr.info.area':   { es: 'Memoria histórica / concept art', en: 'Historical memory / concept art' },
  'epr.desc.p1': { es: 'El precio de resistir es el concept art de un proyecto audiovisual en formato VR 180° que recrea, desde la perspectiva de un niño, los acontecimientos de la huelga de los trabajadores de la cementera El Cairo, en Santa Bárbara (Antioquia), en 1963. El proyecto combina investigación histórica y creación narrativa para representar las condiciones sociales, las luchas obreras y las experiencias de las familias afectadas por la represión estatal.', en: 'El precio de resistir is the concept art for a VR 180° audiovisual project that recreates, through a child\'s perspective, the events of the 1963 workers\' strike at the El Cairo cement plant in Santa Bárbara, Antioquia. The project combines historical research and narrative creation to represent the social conditions, labor struggles, and experiences of the families affected by state repression.' },
  'epr.desc.p2': { es: 'A través de Daniel, el protagonista —representado como un pequeño conejo—, se contrasta la dureza del entorno con la imaginación como refugio frente a la violencia. Su propósito es preservar la memoria de este episodio histórico desde una mirada sensible y crítica, contribuyendo a reconocer las luchas sociales y la resistencia como un acto de dignidad colectiva.', en: 'Through Daniel, the protagonist — depicted as a small rabbit —, the harshness of the environment is contrasted with imagination as a refuge from violence. Its purpose is to preserve the memory of this historical episode from a sensitive, critical perspective, helping to recognize social struggles and resistance as an act of collective dignity.' },
  'epr.desc.p3': { es: 'Es una adaptación narrativa de "Las Cruces Sobre el Agua", novela social e histórica de Joaquín Gallegos Lara, que narra la masacre obrera del 15 de noviembre de 1922 en Guayaquil, Ecuador. Tomamos como referencia especialmente su capítulo IV, centrado en la explotación laboral y las injusticias que enfrentaban los jóvenes trabajadores de la época, para trasladar ese mismo espíritu de denuncia al contexto colombiano de 1963.', en: 'It\'s a narrative adaptation of "Las Cruces Sobre el Agua", a social and historical novel by Joaquín Gallegos Lara, which narrates the workers\' massacre of November 15, 1922, in Guayaquil, Ecuador. We drew especially on its fourth chapter, centered on the labor exploitation and injustices faced by young workers of the time, to carry that same spirit of protest into the 1963 Colombian context.' },
  'epr.process.1.title': { es: 'Investigación histórica', en: 'Historical research' },
  'epr.process.1.body': { es: 'Investigué las condiciones laborales y el contexto social de la huelga de 1963 en la cementera El Cairo, en Santa Bárbara, Antioquia, como base documental del proyecto.', en: 'I researched the labor conditions and social context of the 1963 strike at the El Cairo cement plant in Santa Bárbara, Antioquia, as the project\'s documentary foundation.' },
  'epr.process.2.title': { es: 'Adaptación narrativa', en: 'Narrative adaptation' },
  'epr.process.2.body': { es: 'Tomé "Las Cruces Sobre el Agua" de Joaquín Gallegos Lara como punto de partida y desarrollé la idea narrativa de trasladar ese espíritu de denuncia obrera al contexto colombiano, contado desde la mirada de un niño.', en: 'I took "Las Cruces Sobre el Agua" by Joaquín Gallegos Lara as a starting point and developed the narrative idea of carrying that spirit of worker protest into the Colombian context, told through a child\'s eyes.' },
  'epr.process.3.title': { es: 'Fichas de personaje', en: 'Character sheets' },
  'epr.process.3.body': { es: 'Desarrollé las fichas de personaje, incluyendo a Daniel, representado como un pequeño conejo para reforzar el contraste entre la dureza del entorno y la imaginación como refugio.', en: 'I developed the character sheets, including Daniel, depicted as a small rabbit to reinforce the contrast between the harshness of the environment and imagination as a refuge.' },
  'epr.process.4.title': { es: 'Dirección de arte', en: 'Art direction' },
  'epr.process.4.body': { es: 'Dirigí a las ilustradoras del equipo en el desarrollo visual de personajes y escenarios, manteniendo coherencia con la investigación histórica y la intención narrativa.', en: 'I directed the team\'s illustrators on the visual development of characters and settings, keeping it consistent with the historical research and narrative intent.' },
  'epr.process.5.title': { es: 'Planeación', en: 'Planning' },
  'epr.process.5.body': { es: 'Construí un diagrama de Gantt en Excel para llevar el cronograma de trabajo del equipo a lo largo del proyecto.', en: 'I built a Gantt chart in Excel to track the team\'s work schedule throughout the project.' },
  'epr.process.6.title': { es: 'Diagramación del libro de producción', en: 'Production book layout' },
  'epr.process.6.body': { es: 'Diagramé por completo el libro de producción, documentando el desarrollo conceptual, creativo y técnico de la obra.', en: 'I fully laid out the production book, documenting the conceptual, creative and technical development of the piece.' },
  'epr.team.title': { es: 'Equipo', en: 'Team' },
  'epr.team.intro': { es: 'Lideré el proyecto: investigación, análisis, fichas de personaje, idea narrativa y diagramación del libro de producción. Las ilustraciones se desarrollaron bajo mi dirección junto a:', en: 'I led the project: research, analysis, character sheets, the narrative idea and the production book layout. The illustrations were developed under my direction together with:' },
  'epr.team.role.personajes':  { es: 'Ilustración de personajes', en: 'Character illustration' },
  'epr.team.role.escenarios':  { es: 'Ilustración de escenarios', en: 'Environment illustration' },
  'epr.links.book': { es: 'Ver libro de producción', en: 'View production book' },

  // ---------- NOTCO WEB ----------
  'notco.stamp.status': { es: 'Ganador del reto', en: 'Challenge winner' },
  'notco.lede': { es: 'Sitio web desarrollado en un reto de programación de 2-3 días durante mi etapa electiva en el SENA, para presentar la llegada de NotCo a Colombia de forma hipotética con un toque local.', en: 'A website built during a 2–3 day coding challenge as part of my elective stage at SENA, presenting NotCo\'s hypothetical arrival in Colombia with a local touch.' },
  'notco.info.year':   { es: '2023', en: '2023' },
  'notco.info.status': { es: 'Publicado', en: 'Published' },
  'notco.info.role':   { es: 'Programación e implementación web', en: 'Web programming & implementation' },
  'notco.info.area':   { es: 'Desarrollo web', en: 'Web development' },
  'notco.desc.p1': { es: 'Este proyecto surgió como un reto de programación durante mi etapa electiva en el SENA: en 2-3 días, debíamos desarrollar el sitio web de una marca que llegaba a Colombia, en este caso, NotCo, implementando el producto con un toque de sabor colombiano.', en: 'This project came out of a coding challenge during my elective stage at SENA: in 2–3 days, we had to build the website for a brand entering Colombia — in this case, NotCo — giving the product a Colombian flavor.' },
  'notco.desc.p2': { es: 'Trabajé en equipo con dos compañeros que se encargaron de algunas piezas gráficas; yo me encargué de toda la programación, algunas piezas gráficas y la implementación del sitio. Por la limitación de tiempo, el sitio no cuenta con diseño responsive, no alcanzamos a cubrirlo dentro del reto.', en: 'I worked with two teammates who handled some of the graphic pieces; I was responsible for all the programming, some of the graphic pieces, and the implementation of the site. Due to the time limit, the site isn\'t responsive — we didn\'t manage to cover that within the challenge.' },
  'notco.desc.p3': { es: 'Fuimos reconocidos como ganadores del reto por la buena implementación web de la imagen de marca de NotCo.', en: 'We were recognized as winners of the challenge for the strong web implementation of NotCo\'s brand image.' },
  'notco.links.live': { es: 'Ver sitio en vivo', en: 'View live site' },

  // ---------- THE DREAM STALKER ----------
  'tds.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'tds.lede': { es: 'Un juego de terror en primera persona ambientado en el sueño fracturado de un niño: debes purificar dos mitades opuestas de una criatura antes de que la pesadilla lo consuma.', en: 'A first-person horror game set inside a child\'s fractured dream: you must purify two opposing halves of a creature before the nightmare consumes them.' },
  'tds.info.status':   { es: 'Publicado', en: 'Released' },
  'tds.info.role':     { es: 'Diseño de narrativa, diseño UI y documentación', en: 'Narrative design, UI design and documentation' },
  'tds.info.theme':    { es: 'You Really Shouldn\'t Mix Those Game Jam', en: 'You Really Shouldn\'t Mix Those Game Jam' },
  'tds.desc.p1': { es: 'The Dream Stalker es un juego de terror en primera persona ambientado dentro del sueño fracturado de un niño. El jugador es un guardián encargado de separar y purificar dos mitades opuestas de una criatura híbrida entre pesadilla y sueño, mientras es acechado por Mothroach: una mezcla entre las fobias más comunes a los insectos y la apariencia engañosamente inofensiva de una polilla bebé.', en: 'The Dream Stalker is a first-person horror game set inside a child\'s fractured dream. The player is a guardian tasked with separating and purifying two opposing halves of a nightmare-dream hybrid creature, while being stalked by Mothroach: a blend of common insect phobias and the deceptively harmless look of a baby moth.' },
  'tds.desc.p2': { es: 'Para lograrlo hay que recolectar baterías para la linterna y mantener a la criatura a raya mientras se resuelve el misterio de sus dos fragmentos, con el objetivo de sanar el sueño y salvar al niño antes de que la pesadilla lo consuma por completo.', en: 'To do this, you must scavenge flashlight batteries and keep the creature at bay while unraveling the mystery of its two fragments, aiming to heal the dream and save the child before the nightmare fully consumes them.' },
  'tds.desc.p3': { es: 'Se desarrolló para la "You Really Shouldn\'t Mix Those Game Jam" y ya está publicado, disponible para jugar directamente en el navegador (WebGL) a través de itch.io. Está pensado para jugadores de game jams y fans del terror ligero con elementos de puzzle.', en: 'It was developed for the "You Really Shouldn\'t Mix Those Game Jam" and is already published, playable directly in the browser (WebGL) via itch.io. It\'s aimed at game jam players and fans of light horror with puzzle elements.' },
  'tds.process.1.title': { es: 'El HUD, desde el primer día', en: 'The HUD, from day one' },
  'tds.process.1.body': { es: 'Durante los tres primeros días del jam desarrollé el HUD completo y todos sus scripts, mientras el resto del equipo avanzaba en paralelo con el movimiento en primera persona, la linterna y la IA del enemigo (patrullar → perseguir → separar → purificar).', en: 'During the jam\'s first three days I built the entire HUD and all of its scripts, while the rest of the team worked in parallel on first-person movement, the flashlight, and the enemy AI (patrol → chase → split → purify).' },
  'tds.process.2.title': { es: 'Menú principal', en: 'Main menu' },
  'tds.process.2.body': { es: 'Con el mapa principal y el HUD ya en pie, diseñé e implementé el menú principal del juego.', en: 'With the main map and HUD already in place, I designed and implemented the game\'s main menu.' },
  'tds.process.3.title': { es: 'Documentación viva', en: 'Living documentation' },
  'tds.process.3.body': { es: 'En paralelo al desarrollo, mantuve actualizado el GDD base en Word, para que el equipo tuviera siempre una referencia clara de las decisiones de diseño a medida que avanzaba el jam.', en: 'Alongside development, I kept the base GDD updated in Word, so the team always had a clear reference for design decisions as the jam progressed.' },
  'tds.process.4.title': { es: 'Pantallas de victoria y derrota', en: 'Win and lose screens' },
  'tds.process.4.body': { es: 'Diseñé e implementé las pantallas de victoria y derrota, cerrando el ciclo de feedback del jugador.', en: 'I designed and implemented the win and lose screens, closing the player feedback loop.' },
  'tds.process.5.title': { es: 'Integración final en Unity', en: 'Final integration in Unity' },
  'tds.process.5.body': { es: 'Integré todos estos elementos —HUD, menú, pantallas de fin de partida y una ventana de créditos— dentro de Unity mediante scripts, como parte del pulido general del proyecto (efectos de sonido, música y menús).', en: 'I integrated all of these elements — HUD, menu, end-game screens and a credits window — into Unity through scripts, as part of the project\'s overall polish (sound effects, music and menus).' },
  'tds.process.6.title': { es: 'Cierre: GDD y pitch', en: 'Wrap-up: GDD and pitch' },
  'tds.process.6.body': { es: 'El último día del jam me encargué del diseño final del GDD y del pitch usado para presentar el proyecto, coincidiendo con su publicación el 10 de julio de 2026.', en: 'On the jam\'s last day I handled the final design of the GDD and the pitch used to present the project, coinciding with its release on July 10, 2026.' },
  'tds.team.title': { es: 'Equipo', en: 'Team' },
  'tds.team.role.norajulia': { es: 'Programación', en: 'Programming' },
  'tds.team.role.dyenome':   { es: 'Arte 3D / Programación', en: '3D art / Programming' },
  'tds.team.role.mgilford':  { es: 'Programación', en: 'Programming' },
  'tds.team.role.laura':     { es: 'Diseño UI / Documentación', en: 'UI design / Documentation' },
  'tds.links.gdd': { es: 'Ver GDD', en: 'View GDD' },
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
