# Starman
### Documento de Diseño — Versión 1.0
**Homenaje a David Bowie — El Arte de Reinventarse**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — Ziggy Stardust](#experiencia-1--ziggy-stardust)
4. [Experiencia 2 — Aladdin Sane](#experiencia-2--aladdin-sane)
5. [Experiencia 3 — El Duque Blanco](#experiencia-3--el-duque-blanco)
6. [Experiencia 4 — Starman](#experiencia-4--starman)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**Starman** es una experiencia interactiva que recorre los alter egos más icónicos de David Robert Jones (1947-2016), conocido al mundo como David Bowie. El concepto central no es la música de Bowie, sino su obsesión artística: **la reinvención perpetua**. La idea de que una persona puede convertirse en algo completamente diferente, y luego en algo diferente de eso, y luego de nuevo, y que cada versión es igualmente real.

El jugador no juega como Bowie. El jugador juega **a través** de los alter egos de Bowie, experimentando una mecánica y una paleta cromática radicalmente diferentes en cada nivel. Como si cambiar de personaje fuera también cambiar las reglas del universo.

**Tono narrativo:** Glam, psicodélico, entre lo serio y lo teatral. Bowie nunca tomó sus personajes al pie de la letra — los habitaba plenamente pero con cierta ironía de actor que sabe que actúa. El juego tiene esa misma conciencia de sí mismo.

**Los cuatro alter egos:**
1. **Ziggy Stardust** (1972-1973) — La estrella de rock alienígena
2. **Aladdin Sane** (1973) — El lado oscuro de Ziggy, más caótico
3. **El Duque Blanco** (1975-1976) — La fase más fría y minimalista
4. **Starman** (el personaje original, anterior a todos) — La síntesis final

**Duración estimada:** 20 a 30 minutos para las cuatro experiencias.

---

## Estética Visual

### Filosofía Visual
**Pixel art glam rock psicodélico.** Cada alter ego tiene una paleta completamente diferente y un estilo visual propio. La única constante es el rayo de Aladdin Sane (el que divide la cara de Bowie en rojo y azul) como elemento visual recurrente en las transiciones.

### Paleta por Alter Ego

#### Ziggy Stardust
| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo | Negro espacial profundo | `#050510` |
| Acento principal | Rojo escarlata eléctrico | `#FF1744` |
| Acento secundario | Dorado glam | `#FFD600` |
| Ziggy (sprite) | Naranja llameante | `#FF6D00` |
| Estrellas | Blanco con brillo | `#FFFFFF` |
| Guitarra | Cromo plateado | `#E0E0E0` |

#### Aladdin Sane
| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo izquierda | Rojo sangre | `#B71C1C` |
| Fondo derecha | Azul eléctrico | `#0D47A1` |
| El rayo divisor | Blanco brillante | `#FFFFFF` |
| Aladdin (sprite) | Dorado/plateado cambiante | animado |
| Partículas | Multicolor errático | varios |

#### El Duque Blanco
| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo | Gris ceniza frío | `#212121` |
| El Duque (sprite) | Blanco casi puro | `#F5F5F5` |
| Acento único | Rojo oscuro discreto | `#4E0000` |
| Texto | Blanco sobre gris | `#FAFAFA` |
| UI | Minimalista, sin bordes | — |

#### Starman (el final)
| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo | Gradiente de azul nocturno a blanco | animado |
| Starman | Plateado brillante | `#E8EAF6` |
| Estrellas | Todas las paletas anteriores | multicolor |
| El cohete | Naranja y plata | `#FF6D00` + `#CFD8DC` |
| La nota final | Arcoíris pixelado | varios |

### Elemento Visual Unificador
El **Rayo de Aladdin Sane** (la franja diagonal que divide rojo y azul sobre el rostro) aparece como transición entre cada experiencia. La pantalla se parte en diagonal: la mitad antigua desaparece, la mitad nueva aparece.

---

## Experiencia 1 — Ziggy Stardust

### El Alter Ego
> *"Ziggy Stardust era un rock star de otro planeta.*
> *Vino a la Tierra para anunciar que quedaban cinco años.*
> *Cinco años más de existencia.*
> *Y en lugar de llorar, el mundo decidió bailar."*

### Descripción
Un **juego de ritmo** basado en los acordes de guitarra eléctrica de la era Ziggy (1972-1973). Ziggy está en el escenario. El mundo se acaba en 5 años. La única respuesta lógica es tocar.

### Mecánica: Los Acordes de la Guitarra

La pantalla muestra a Ziggy Stardust en el escenario, con el fondo de concierto lleno de siluetas de fans. En la parte inferior: el mástil de una guitarra pixelada con 6 cuerdas.

#### Sistema de Acordes
Llegan "acordes" desde la derecha de la pantalla. Cada acorde es un bloque de color con una tecla/botón asignado:

| Acorde | Tecla | Color |
|--------|-------|-------|
| G | Q | Rojo |
| D | W | Dorado |
| Em | E | Naranja |
| C | R | Blanco |
| A | A | Azul eléctrico |
| Bm | S | Plateado |

Cuando el bloque llega a la zona de ejecución, el jugador presiona la tecla. Si acierta el timing: Ziggy toca la nota, los fans responden (animación de crowd), la puntuación sube. Si falla: el sonido desafina, Ziggy tropieza ligeramente.

#### La Estructura de la Canción
El nivel sigue una estructura de canción real con:
- **Intro:** Pocas notas, tiempo para aprender
- **Verso:** Ritmo moderado, accordes básicos
- **Pre-coro:** Acceleración gradual
- **Coro:** Máxima velocidad y complejidad — el jugador siente la catarsis de la canción

#### El Final del Mundo en el Escenario
A mitad de la canción, la pantalla tiembla. Aparece una cuenta regresiva al fondo: 5... 4... 3... pero la música no para. Los fans siguen bailando. Ziggy sigue tocando.

Al final del nivel:
> *"Y cuando el mundo terminó...*
> *nadie lo notó.*
> *Porque la música era demasiado buena."*

---

## Experiencia 2 — Aladdin Sane

### El Alter Ego
> *"Aladdin Sane era Ziggy pero roto.*
> *Ziggy llegó a la Tierra y la Tierra lo cambió.*
> *El rayo en su cara era la división entre lo que era y lo que se estaba volviendo.*
> *Entre control y caos.*
> *Entre cordura y algo más interesante."*

### Descripción
Un **laberinto psicodélico** donde la realidad cambia de color constantemente. Aladdin Sane no confía en lo que ve. El jugador tampoco debería.

### Mecánica: El Laberinto que Cambia

El laberinto tiene paredes fijas, pero los colores del suelo, las paredes y el personaje cambian de paleta cada 10 segundos de forma abrupta. Lo que antes era un pasillo rojo visible ahora es invisible porque el suelo y la pared son del mismo tono.

#### Sistema de Cambio Cromático
Hay 5 paletas que se alternan aleatoriamente:
1. Rojo sobre rojo oscuro (peligrosa — casi todo invisible)
2. Azul sobre azul oscuro (peligrosa — casi todo invisible)
3. Rojo y azul separados (segura — distinción clara)
4. Blanco sobre negro (muy segura — máximo contraste)
5. Multicolor errático (trampa — el jugador no puede confiar en ningún color)

#### El Rayo como Guía
El único elemento constante en el laberinto es el **Rayo de Aladdin Sane**: una franja diagonal de luz blanca que siempre apunta hacia la salida. No importa cuánto cambien los colores, el rayo permanece. Es el único ancla.

#### Los Espejos que Distorsionan
En algunas salas del laberinto hay espejos. A diferencia de los espejos de Borges, estos distorsionan: muestran al jugador en la paleta de color opuesta. Son desorientadores, no informativos.

#### Diálogos de Aladdin
Mientras el jugador navega, aparecen textos breves de Aladdin Sane:
> *"¿De qué color es este pasillo para ti? Para mí cambia cada vez que lo miro."*
> *"Sigue el rayo. Es lo único que no miento."*
> *"El caos tiene su propio orden. Solo tienes que dejar de buscar el tuyo."*

### Al Salir del Laberinto
Aladdin Sane se detiene en la salida y mira atrás. El laberinto detrás de él vuelve gradualmente a colores neutros.

> *"Salí del laberinto.*
> *O el laberinto salió de mí.*
> *Es difícil saberlo.*
> *Probablemente no importa."*

---

## Experiencia 3 — El Duque Blanco

### El Alter Ego
> *"El Duque Blanco fue la etapa más oscura de Bowie.*
> *No como personaje — como persona.*
> *Adicciones, paranoia, Berlín.*
> *Pero del Berlín oscuro nació Heroes.*
> *Del frío más intenso, el calor más puro."*

### Descripción
Un **puzzle frío y minimalista**. Sin música de fondo (o casi sin ella — solo un tono bajo y sostenido). Paleta de grises. El Duque Blanco debe reorganizar elementos en el espacio para crear orden a partir del caos.

### Mecánica: El Orden del Vacío

La pantalla muestra una habitación vacía en pixel art gris. Hay objetos dispersos: cuadros, muebles, notas musicales sueltas, palabras en papel.

#### El Puzzle
El jugador debe:
1. **Agrupar objetos similares** — arrastrarlos a zonas de color (las únicas manchas de color en la paleta gris)
2. **Completar secuencias** — algunas notas musicales deben ordenarse en orden correcto
3. **Descubrir el patrón oculto** — al colocar los objetos correctamente, forman la silueta de una canción: el título de *Heroes* aparece escrito con los objetos reordenados

#### La Frialdad Deliberada
El Duque Blanco no tiene animaciones expresivas. Se mueve con economía de movimiento. Los efectos de sonido son mínimos: pasos sobre madera, el sonido suave de un objeto al colocarse.

Esto contrasta con los niveles anteriores — el jugador siente la diferencia entre el caos colorido de Aladdin Sane y el orden frío del Duque Blanco.

#### El Momento de Quiebre
Al completar el puzzle, el Duque Blanco se sienta en el suelo. El gris de la habitación empieza a teñirse muy lentamente de un azul oscuro cálido. La primera nota de una melodía suave se escucha.

**Texto:**
> *"Y de todo ese silencio.*
> *De esa habitación de Berlín.*
> *De ese invierno.*
>
> *Bowie escribió Heroes.*
>
> *'We can be heroes, just for one day.'*
>
> *Resulta que el frío también puede crear algo que arde."*

---

## Experiencia 4 — Starman

### El Alter Ego
> *"Antes de todos los alter egos.*
> *Antes de Ziggy, antes del Duque, antes de todo...*
> *había un chico de Brixton que miraba las estrellas*
> *y pensaba que pertenecía allá arriba.*
>
> *Y tenía razón."*

### Descripción
La **experiencia final**. Starman sube al cielo en un cohete de píxeles. No hay enemigos, no hay obstáculos. Solo el viaje.

### Mecánica: El Vuelo al Cielo

El jugador controla el cohete de píxeles de Starman. El scroll es vertical ascendente. El objetivo es simple: llegar a las estrellas.

#### Las Capas del Ascenso
El vuelo atraviesa varias capas, cada una con la paleta cromática de un alter ego anterior:

1. **Capa Ziggy (rojo-dorado):** Fuegos artificiales de concierto
2. **Capa Aladdin Sane (rojo-azul):** El rayo diagonal cruza la pantalla entera
3. **Capa Duque Blanco (gris-azul):** Las estrellas empiezan a aparecer, austeras
4. **Capa Starman (gradiente a blanco):** El espacio abierto, lleno de estrellas de todos colores

#### Las Estrellas que Responden
Las estrellas en la capa final no son estáticas. Cuando el cohete pasa cerca de ellas, brillan. Al pasar por 5 estrellas, cada una emite una nota musical. Las 5 notas forman la melodía de apertura de *Starman*.

#### La Nota Final
El cohete llega al punto más alto. Se detiene. Starman flota en el espacio. Una última estrella, la más brillante, pulsa. El jugador hace clic en ella.

La estrella explota suavemente en un arcoíris de píxeles que llena toda la pantalla.

La última pantalla, antes del homenaje, es un solo texto en el centro del arcoíris:

> *"He pasado los últimos 25 años tratando de imaginar cómo se sentiría si alguien me dijera de pequeño que iba a hacer esto.*
> *Hubiera creído que era la historia más bonita que jamás había escuchado.*
> *Y lo fue."*
> — David Bowie (adaptación ficcional)

---

## Pantalla Final de Homenaje

---

> **🌟 En Homenaje a David Robert Jones — David Bowie**
> *Brixton, Londres, 8 de enero de 1947 — Ciudad de Nueva York, 10 de enero de 2016*
>
> David Bowie publicó 27 álbumes de estudio en 54 años de carrera.
> Vendió más de 100 millones de discos en todo el mundo.
>
> Sus alter egos principales:
> - **Ziggy Stardust** (1972) — *The Rise and Fall of Ziggy Stardust and the Spiders from Mars*
> - **Aladdin Sane** (1973) — *Aladdin Sane*
> - **Halloween Jack** (1974) — *Diamond Dogs*
> - **El Duque Blanco** (1976) — *Station to Station*
> - **Jareth** (1986) — *Labyrinth* (película de Jim Henson)
> - **Nathan Adler** (1995) — *Outside*
>
> Bowie murió dos días después de publicar su último álbum, ***Blackstar***, el 8 de enero de 2016, su cumpleaños número 69.
> Muchos de los críticos que lo escucharon ese día describen *Blackstar* como una despedida deliberada y consciente.
>
> **Sobre el arte de reinventarse:**
> Bowie no cambiaba de personaje para escapar de sí mismo.
> Cambiaba para encontrar nuevas partes de sí mismo que todavía no conocía.
> Esa es la diferencia entre la fuga y la exploración.
>
> *"Nunca me cansé de ser yo.*
> *Me cansé de las versiones de mí que ya había agotado.*
> *Siempre hay más."*

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
bowie-starman/
│
├── index.html                     # Pantalla de inicio: el rayo de Aladdin Sane
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Estilos base y transición del rayo
│   ├── ziggy.css                  # Paleta Ziggy: rojo, dorado, negro espacial
│   ├── aladdin.css                # Paleta Aladdin: rojo-azul dividido
│   ├── duke.css                   # Paleta Duque Blanco: grises fríos
│   ├── starman.css                # Paleta Starman: gradiente multicolor
│   └── animations.css             # El rayo, transiciones, partículas
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── ziggy.js                   # Juego de ritmo de guitarra
│   ├── aladdin.js                 # Laberinto psicodélico cambiante
│   ├── duke.js                    # Puzzle minimalista de orden
│   ├── starman.js                 # Vuelo al espacio
│   ├── rhythm-engine.js           # Motor de ritmo para Ziggy
│   ├── color-manager.js           # Sistema de cambio cromático para Aladdin
│   └── canvas-renderer.js
│
├── assets/
│   ├── sprites/
│   │   ├── ziggy/                 # Ziggy Stardust en escenario
│   │   ├── aladdin/               # Aladdin Sane en laberinto
│   │   ├── duke/                  # El Duque Blanco en habitación
│   │   └── starman/               # Starman en cohete
│   ├── backgrounds/
│   │   ├── concert-stage.png      # Escenario de Ziggy
│   │   ├── psychedelic-maze.png   # Laberinto de Aladdin (base)
│   │   ├── berlin-room.png        # Habitación de Berlín del Duque
│   │   └── space-gradient.png     # Espacio de Starman
│   └── audio/
│       ├── ziggy-chord-g.mp3      # Acorde G (guitarra eléctrica)
│       ├── ziggy-chord-d.mp3
│       ├── ziggy-chord-em.mp3
│       ├── ziggy-chord-c.mp3
│       ├── aladdin-drone.mp3      # Tono psicodélico sostenido
│       ├── duke-minimal.mp3       # Tono frío y suave
│       ├── starman-ascent.mp3     # Melodía de ascenso
│       └── starman-notes.mp3      # Las 5 notas de Starman
│
└── data/
    ├── ziggy-rhythm.json          # Secuencia de acordes del nivel Ziggy
    ├── aladdin-maze.json          # Configuración del laberinto
    └── duke-puzzle.json           # Objetos y posiciones del puzzle
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **Starman** es una obra de homenaje fan-made sin fines comerciales.
>
> David Bowie, Ziggy Stardust, Aladdin Sane, The Thin White Duke, Starman y todos los nombres y alter egos relacionados son marcas registradas y propiedad intelectual de David Bowie Estate, Tintoretto Music, Inc. y sus licenciatarios.
>
> La música de David Bowie está protegida por derechos de autor. Esta experiencia no reproduce música protegida de David Bowie — los sonidos musicales utilizados son originales inspirados en el estilo, no reproducciones de las canciones.
>
> Las referencias a títulos de canciones y álbumes son puramente informativas y de reconocimiento cultural.
>
> Esta obra no está afiliada, respaldada ni autorizada por el David Bowie Estate, Parlophone Records, Warner Music ni ninguna entidad oficial relacionada con la obra de David Bowie.
