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
  'common.section.mywork':     { es: 'Mi trabajo', en: 'My work' },
  'common.section.links':      { es: 'Enlaces', en: 'Links' },
  'common.section.challenges': { es: 'Desafíos y aprendizajes', en: 'Challenges & learnings' },
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
    es: 'Diseño y desarrollo experiencias jugables donde la narrativa y la mecánica se ponen a prueba mutuamente. Formándome como Unity Developer con Generation Colombia, con foco en diseño narrativo, diseño de UI/UX y sistemas de juego.',
    en: 'I design and develop playable experiences where narrative and mechanics test each other. Training as a Unity Developer with Generation Colombia, focused on narrative design, UI/UX design and game systems.'
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
  'idx.portfolio.games.count':  { es: '04 proyectos', en: '4 projects' },
  'idx.portfolio.design.title': { es: 'Diseño', en: 'Design' },
  'idx.portfolio.design.count': { es: '02 proyectos', en: '2 projects' },

  'idx.card.tds.meta':  { es: '2026 · You Really Shouldn\'t Mix Those Game Jam', en: '2026 · You Really Shouldn\'t Mix Those Game Jam' },
  'idx.card.tds.desc':  { es: 'Juego de terror en primera persona: purifica dos mitades opuestas de una criatura híbrida entre pesadilla y sueño antes de que consuma al niño que sueña.', en: 'A first-person horror game: purify two opposing halves of a nightmare-dream hybrid creature before it consumes the dreaming child.' },
  'idx.card.tds.stamp': { es: 'Finalizado', en: 'Finished' },

  'idx.card.dtd.meta':  { es: '2026 · Generation Game Jam · Deeper and Deeper', en: '2026 · Generation Game Jam · Deeper and Deeper' },
  'idx.card.dtd.desc':  { es: 'Plataformero arcade de descenso infinito: reparas tuberías y esquivas ratas mientras una cámara implacable te empuja cada vez más profundo.', en: 'An infinite-descent arcade platformer: repair pipes and dodge rats while a relentless camera pushes you deeper and deeper.' },
  'idx.card.dtd.stamp': { es: 'Finalizado', en: 'Finished' },

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
  'idx.card.notco.stamp': { es: 'Finalizado', en: 'Finished' },

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
  'tp.challenges.p': { es: 'El principal reto fue crear pixel art con una estética mucho más creativa y alejada de lo convencional, diseñando platillos mutados con una apariencia posapocalíptica. Para generar ideas exploré distintas propuestas utilizando prompts en Gemini enfocados en el diseño conceptual de alimentos, y a partir de esas referencias desarrollé las versiones finales en pixel art, adaptándolas al estilo visual del juego. Este proceso fortaleció mi capacidad para transformar ideas conceptuales en recursos visuales coherentes con la dirección artística del proyecto.', en: 'The main challenge was creating pixel art with a much more creative aesthetic, far from the conventional, designing mutated dishes with a post-apocalyptic look. To generate ideas I explored different directions using Gemini prompts focused on conceptual food design, and from those references I developed the final pixel art versions, adapting them to the game\'s visual style. This process strengthened my ability to turn conceptual ideas into visual assets consistent with the project\'s art direction.' },
  'tp.mywork.desc': { es: 'Una muestra de los assets de pixel art que diseñé para el juego.', en: 'A sample of the pixel art assets I designed for the game.' },

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
  'fj.mywork.desc': { es: 'Piezas de diseño y arte que desarrollé para este proyecto.', en: 'Design and art pieces I developed for this project.' },
  'fj.challenges.p': { es: 'Este fue mi primer acercamiento al desarrollo de videojuegos con Unity. El mayor desafío fue comprender el funcionamiento general del motor y su flujo de trabajo. Para ello seguí un tutorial estructurado que me permitió construir una base sólida sobre la cual comenzar a desarrollar proyectos propios. Gracias a esta experiencia adquirí los fundamentos necesarios para continuar aprendiendo y desarrollando videojuegos en Unity.', en: 'This was my first hands-on approach to game development with Unity. The biggest challenge was understanding how the engine and its workflow worked as a whole. To do that, I followed a structured tutorial that let me build a solid foundation to start developing my own projects from. Thanks to this experience I gained the fundamentals I needed to keep learning and developing games in Unity.' },

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
  'epr.challenges.p': { es: 'Uno de los mayores retos fue coordinar el trabajo del equipo mientras lideraba la adaptación de una narrativa existente sin perder su esencia. La organización, la comunicación constante y una correcta distribución de responsabilidades fueron fundamentales para lograrlo. Además, utilicé un diagrama de Gantt con todas las tareas planificadas para hacer seguimiento al avance del proyecto y mantener una gestión ordenada. Esta experiencia fortaleció mis habilidades de liderazgo, planificación y trabajo colaborativo dentro de un equipo multidisciplinario.', en: 'One of the biggest challenges was coordinating the team\'s work while leading the adaptation of an existing narrative without losing its essence. Organization, constant communication, and a clear distribution of responsibilities were essential to pulling it off. I also used a Gantt chart with all planned tasks to track the project\'s progress and keep the management organized. This experience strengthened my leadership, planning, and collaborative skills within a multidisciplinary team.' },

  // ---------- NOTCO WEB ----------
  'notco.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'notco.lede': { es: 'Sitio web desarrollado en un reto de programación de 2-3 días durante mi etapa electiva en el SENA, para presentar la llegada de NotCo a Colombia de forma hipotética con un toque local.', en: 'A website built during a 2–3 day coding challenge as part of my elective stage at SENA, presenting NotCo\'s hypothetical arrival in Colombia with a local touch.' },
  'notco.info.year':   { es: '2023', en: '2023' },
  'notco.info.status': { es: 'Publicado', en: 'Published' },
  'notco.info.role':   { es: 'Programación e implementación web', en: 'Web programming & implementation' },
  'notco.info.area':   { es: 'Desarrollo web', en: 'Web development' },
  'notco.desc.p1': { es: 'Este proyecto surgió como un reto de programación durante mi etapa electiva en el SENA: en 2-3 días, debíamos desarrollar el sitio web de una marca que llegaba a Colombia, en este caso, NotCo, implementando el producto con un toque de sabor colombiano.', en: 'This project came out of a coding challenge during my elective stage at SENA: in 2–3 days, we had to build the website for a brand entering Colombia — in this case, NotCo — giving the product a Colombian flavor.' },
  'notco.desc.p2': { es: 'Trabajé en equipo con dos compañeros que se encargaron de algunas piezas gráficas; yo me encargué de toda la programación, algunas piezas gráficas y la implementación del sitio. Por la limitación de tiempo, el sitio no cuenta con diseño responsive, no alcanzamos a cubrirlo dentro del reto.', en: 'I worked with two teammates who handled some of the graphic pieces; I was responsible for all the programming, some of the graphic pieces, and the implementation of the site. Due to the time limit, the site isn\'t responsive — we didn\'t manage to cover that within the challenge.' },
  'notco.desc.p3': { es: 'Fuimos reconocidos como ganadores del reto por la buena implementación web de la imagen de marca de NotCo.', en: 'We were recognized as winners of the challenge for the strong web implementation of NotCo\'s brand image.' },
  'notco.links.live': { es: 'Ver sitio en vivo', en: 'View live site' },
  'notco.challenges.p': { es: 'El principal desafío fue desarrollar el proyecto dentro de un tiempo muy limitado sin perder la identidad visual de la marca. Fue necesario definir cuidadosamente la estructura de las secciones, organizar la información de forma clara y mantener una interfaz consistente con la estética de NotCo. Desde el punto de vista técnico, también procuré escribir un código limpio, organizado y reutilizable, de manera que pudiera aprovechar componentes y estructuras en otras páginas similares del portafolio. Esta experiencia reforzó la importancia de planificar la arquitectura del proyecto desde el inicio para facilitar su mantenimiento y escalabilidad.', en: 'The main challenge was building the project within a very tight timeframe without losing the brand\'s visual identity. That meant carefully defining the section structure, organizing the information clearly, and keeping an interface consistent with NotCo\'s aesthetic. From a technical standpoint, I also aimed to write clean, organized, and reusable code, so I could reuse components and structures across similar pages of the portfolio. This experience reinforced the importance of planning a project\'s architecture from the start to make it easier to maintain and scale.' },

  // ---------- THE DREAM STALKER ----------
  'tds.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'tds.lede': { es: 'Un juego de terror en primera persona ambientado en el sueño fracturado de un niño: debes purificar dos mitades opuestas de una criatura antes de que la pesadilla lo consuma.', en: 'A first-person horror game set inside a child\'s fractured dream: you must purify two opposing halves of a creature before the nightmare consumes them.' },
  'tds.info.status':   { es: 'Publicado', en: 'Released' },
  'tds.info.role':     { es: 'Diseño de narrativa, diseño UI y documentación', en: 'Narrative design, UI design and documentation' },
  'tds.info.theme':    { es: 'You Really Shouldn\'t Mix Those Game Jam', en: 'You Really Shouldn\'t Mix Those Game Jam' },
  'tds.desc.p1': { es: 'The Dream Stalker es un juego de terror en primera persona ambientado dentro del sueño fracturado de un niño. El jugador es un guardián encargado de separar y purificar dos mitades opuestas de una criatura híbrida entre pesadilla y sueño, mientras es acechado por Mothroach: una mezcla entre las fobias más comunes a los insectos y la apariencia engañosamente inofensiva de una polilla bebé.', en: 'The Dream Stalker is a first-person horror game set inside a child\'s fractured dream. The player is a guardian tasked with separating and purifying two opposing halves of a nightmare-dream hybrid creature, while being stalked by Mothroach: a blend of common insect phobias and the deceptively harmless look of a baby moth.' },
  'tds.desc.p2': { es: 'Para lograrlo hay que recolectar baterías para la linterna y mantener a la criatura a raya mientras se resuelve el misterio de sus dos fragmentos, con el objetivo de sanar el sueño y salvar al niño antes de que la pesadilla lo consuma por completo.', en: 'To do this, you must scavenge flashlight batteries and keep the creature at bay while unraveling the mystery of its two fragments, aiming to heal the dream and save the child before the nightmare fully consumes them.' },
  'tds.desc.p3': { es: 'Se desarrolló para la "You Really Shouldn\'t Mix Those Game Jam" y ya está publicado, disponible para jugar directamente en el navegador (WebGL) a través de itch.io. Está pensado para jugadores de game jams y fans del terror ligero.', en: 'It was developed for the "You Really Shouldn\'t Mix Those Game Jam" and is already published, playable directly in the browser (WebGL) via itch.io. It\'s aimed at game jam players and fans of light horror.' },
  'tds.process.1.title': { es: 'Narrativa inicial', en: 'Initial narrative' },
  'tds.process.1.body': { es: 'Antes de entrar en la interfaz, desarrollé la narrativa inicial del proyecto: la premisa del sueño fracturado, la amenaza de Mothroach y el objetivo de separar y purificar ambas mitades de la criatura, sobre la que el equipo construyó el resto del juego.', en: 'Before diving into the interface, I developed the project\'s initial narrative: the fractured-dream premise, the threat of Mothroach, and the goal of separating and purifying both halves of the creature, on top of which the team built the rest of the game.' },
  'tds.process.2.title': { es: 'El HUD, desde el primer día', en: 'The HUD, from day one' },
  'tds.process.2.body': { es: 'Durante los tres primeros días del jam desarrollé el HUD completo y todos sus scripts, mientras el resto del equipo avanzaba en paralelo con el movimiento en primera persona, la linterna y la IA del enemigo (patrullar → perseguir → separar → purificar).', en: 'During the jam\'s first three days I built the entire HUD and all of its scripts, while the rest of the team worked in parallel on first-person movement, the flashlight, and the enemy AI (patrol → chase → split → purify).' },
  'tds.process.3.title': { es: 'Menú principal', en: 'Main menu' },
  'tds.process.3.body': { es: 'Con el mapa principal y el HUD ya en pie, diseñé e implementé el menú principal del juego.', en: 'With the main map and HUD already in place, I designed and implemented the game\'s main menu.' },
  'tds.process.4.title': { es: 'Documentación viva', en: 'Living documentation' },
  'tds.process.4.body': { es: 'En paralelo al desarrollo, mantuve actualizado el GDD base en Word, para que el equipo tuviera siempre una referencia clara de las decisiones de diseño a medida que avanzaba el jam.', en: 'Alongside development, I kept the base GDD updated in Word, so the team always had a clear reference for design decisions as the jam progressed.' },
  'tds.process.5.title': { es: 'Pantallas de victoria y derrota', en: 'Win and lose screens' },
  'tds.process.5.body': { es: 'Diseñé e implementé las pantallas de victoria y derrota, cerrando el ciclo de feedback del jugador.', en: 'I designed and implemented the win and lose screens, closing the player feedback loop.' },
  'tds.process.6.title': { es: 'Integración final en Unity', en: 'Final integration in Unity' },
  'tds.process.6.body': { es: 'Integré todos estos elementos —HUD, menú, pantallas de fin de partida y una ventana de créditos— dentro de Unity mediante scripts, como parte del pulido general del proyecto (efectos de sonido, música y menús).', en: 'I integrated all of these elements — HUD, menu, end-game screens and a credits window — into Unity through scripts, as part of the project\'s overall polish (sound effects, music and menus).' },
  'tds.process.7.title': { es: 'Cierre: GDD y pitch', en: 'Wrap-up: GDD and pitch' },
  'tds.process.7.body': { es: 'El último día del jam me encargué del diseño final del GDD y del pitch usado para presentar el proyecto, coincidiendo con su publicación el 10 de julio de 2026.', en: 'On the jam\'s last day I handled the final design of the GDD and the pitch used to present the project, coinciding with its release on July 10, 2026.' },
  'tds.team.title': { es: 'Equipo', en: 'Team' },
  'tds.team.role.norajulia': { es: 'Programación', en: 'Programming' },
  'tds.team.role.dyenome':   { es: 'Arte 3D / Programación', en: '3D art / Programming' },
  'tds.team.role.mgilford':  { es: 'Programación', en: 'Programming' },
  'tds.team.role.laura':     { es: 'Diseño UI / Documentación', en: 'UI design / Documentation' },
  'tds.links.gdd': { es: 'Ver GDD', en: 'View GDD' },
  'tds.mywork.desc': { es: 'HUD, botones, pantallas de UI y logo que diseñé para este proyecto.', en: 'HUD, buttons, UI screens, and logo that I designed for this project.' },

  // ---------- DOWN THE DRAIN ----------
  'dtd.stamp.status': { es: 'Finalizado', en: 'Finished' },
  'dtd.lede': { es: 'Un plataformero arcade de descenso infinito: reparas tuberías y esquivas ratas mientras una cámara implacable te empuja cada vez más profundo.', en: 'An infinite-descent arcade platformer: repair pipes and dodge rats while a relentless camera pushes you deeper and deeper.' },
  'dtd.info.status': { es: 'Publicado', en: 'Released' },
  'dtd.info.role':   { es: 'Diseño UI/UX, documentación y game design', en: 'UI/UX design, documentation and game design' },
  'dtd.info.theme':  { es: 'Deeper and Deeper', en: 'Deeper and Deeper' },
  'dtd.desc.p1': { es: 'Down The Drain es un plataformero arcade 2D de descenso vertical, desarrollado en una game jam de Generation con una duración de solo dos días, bajo el tema "Deeper and Deeper". Se me ocurrió el concepto principal del juego, y lideré el diseño de UI y la documentación, en equipo con Juan Toca y Santiago Romero en programación, Jeffred Castellanos en pixel art, y Mario Mora en audio.', en: 'Down The Drain is a 2D vertical-descent arcade platformer, developed in a two-day Generation game jam under the theme "Deeper and Deeper". I came up with the game\'s core concept and led the UI design and documentation, alongside Juan Toca and Santiago Romero on programming, Jeffred Castellanos on pixel art, and Mario Mora on audio.' },
  'dtd.desc.p2': { es: 'El jugador controla a Mauro, un fontanero atrapado en una alcantarilla que debe reparar tuberías rotas mientras esquiva a Moshi, una rata que resta puntos al contacto. Una cámara de presión desciende a velocidad creciente y obliga a bajar cada vez más rápido: si te alcanza, es Game Over. No hay una condición de victoria tradicional — el objetivo es superar tu propio puntaje, en un loop de rejugabilidad tipo arcade score-attack.', en: 'The player controls Mauro, a plumber trapped in a sewer who must repair broken pipes while dodging Moshi, a rat that docks points on contact. A pressure camera descends at increasing speed, forcing you to move faster and faster — if it catches you, it\'s Game Over. There\'s no traditional win condition — the goal is to beat your own score, in an arcade score-attack replayability loop.' },
  'dtd.desc.p3': { es: 'Ya está publicado y disponible para jugar en itch.io.', en: 'It\'s already published and playable on itch.io.' },
  'dtd.process.1.title': { es: 'Idea y GDD inicial', en: 'Idea and initial GDD' },
  'dtd.process.1.body': { es: 'Buscábamos una idea simple de implementar en una jam de solo dos días, pero con alta rejugabilidad. Se me ocurrió la premisa del fontanero descendiendo por la alcantarilla, y durante el primer día desarrollé el GDD completo.', en: 'We were after a concept simple enough to build in a two-day jam, but with high replayability. I came up with the premise of a plumber descending through the sewer, and during the first day I wrote the entire GDD.' },
  'dtd.process.2.title': { es: 'Wireframes y diseño de pantallas', en: 'Wireframes and screen design' },
  'dtd.process.2.body': { es: 'En paralelo, diseñé en Figma los wireframes de las pantallas base del juego (menú, créditos, tutorial, Game Over, pausa), acorde a la estética de pixel art que estábamos manejando, e investigué tipografías para títulos y cuerpo de texto. Junto al equipo definimos la paleta de colores.', en: 'In parallel, I designed the game\'s core screen wireframes in Figma (menu, credits, tutorial, Game Over, pause), matching the pixel art aesthetic we were going for, and researched typefaces for titles and body text. Together with the team we defined the color palette.' },
  'dtd.process.3.title': { es: 'Desarrollo en paralelo', en: 'Parallel development' },
  'dtd.process.3.body': { es: 'Mientras tanto, los programadores construyeron la mecánica base de plataformas infinitas, el spawn de enemigos y fallos en tuberías, y la movilidad del jugador; nuestro artista desarrolló los fondos y las tuberías.', en: 'Meanwhile, the programmers built the base infinite-platform mechanic, enemy and pipe-failure spawning, and player movement; our artist developed the backgrounds and pipes.' },
  'dtd.process.4.title': { es: 'Implementación de la UI en Unity', en: 'UI implementation in Unity' },
  'dtd.process.4.body': { es: 'Para el segundo día ya tenía toda la UI implementada en Unity y conectada al juego principal, trabajando en mi propia rama de GitHub (repositorio creado desde el primer día).', en: 'By the second day I already had the entire UI implemented in Unity and wired up to the main game, working on my own GitHub branch (the repository was created on day one).' },
  'dtd.process.5.title': { es: 'Pitch y GDD final', en: 'Pitch and final GDD' },
  'dtd.process.5.body': { es: 'Diseñé el GDD final acorde con la estética del juego y preparé el pitch usado para presentar el proyecto.', en: 'I designed the final GDD to match the game\'s aesthetic and prepared the pitch used to present the project.' },
  'dtd.process.6.title': { es: 'Pulido y lanzamiento', en: 'Polish and launch' },
  'dtd.process.6.body': { es: 'En el pulido final se integró un shake de cámara al recibir daño y un dash para el jugador. Se hizo el merge a la rama principal, se generaron los builds, y diseñé la página final de itch.io.', en: 'The final polish added a camera shake on taking damage and a player dash. We merged into the main branch, generated the builds, and I designed the final itch.io page.' },
  'dtd.team.title': { es: 'Equipo', en: 'Team' },
  'dtd.team.role.juan':     { es: 'Programación', en: 'Programming' },
  'dtd.team.role.santiago': { es: 'Programación', en: 'Programming' },
  'dtd.team.role.jeffred':  { es: 'Pixel art', en: 'Pixel art' },
  'dtd.team.role.mario':    { es: 'Audio', en: 'Audio' },
  'dtd.team.role.laura':    { es: 'Diseño UI/UX, documentación y game design', en: 'UI/UX design, documentation and game design' },
  'dtd.challenges.p': { es: 'Me enfrenté al reto de integrar shader graphs en los botones para lograr un pequeño brillo metálico, y tuve que resolver problemas para que ese brillo se mantuviera activo de forma consistente en todas las pantallas. A esto se sumó trabajar contra un tiempo sumamente limitado, al ser una jam de solo dos días. Esta experiencia amplió mis conocimientos sobre shader graphs en Unity y sobre cómo priorizar bajo restricciones de tiempo muy ajustadas.', en: 'I took on the challenge of integrating shader graphs into the buttons for a subtle metallic shine, and had to work through issues keeping that shine consistently active across every screen. On top of that, I was racing against a very limited timeframe, since it was only a two-day jam. This experience broadened my knowledge of shader graphs in Unity and of how to prioritize under very tight time constraints.' },
  'dtd.mywork.desc': { es: 'Wireframes, pantallas de UI y logo que diseñé para este proyecto.', en: 'Wireframes, UI screens, and a logo I designed for this project.' },
  'dtd.links.gdd': { es: 'Ver GDD', en: 'View GDD' },
  'tds.challenges.p': { es: 'Mi principal desafío fue desarrollar la interfaz de usuario funcional dentro de Unity. Aunque ya tenía experiencia diseñando interfaces, nunca había implementado una UI completa en Unity con estados de botones, navegación y comportamiento funcional. Para superar este reto investigué la documentación oficial de Unity y me apoyé en diversos tutoriales para comprender las mejores prácticas de implementación. Este proyecto me permitió entender mejor el flujo de trabajo entre diseño e implementación, ampliando mis conocimientos sobre el sistema de UI de Unity.', en: 'My main challenge was building a functional user interface inside Unity. Although I already had experience designing interfaces, I had never implemented a full UI in Unity with button states, navigation, and working behavior. To work through this, I dug into Unity\'s official documentation and leaned on several tutorials to understand implementation best practices. This project helped me better understand the workflow between design and implementation, deepening my knowledge of Unity\'s UI system.' },
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
