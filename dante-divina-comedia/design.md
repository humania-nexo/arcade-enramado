# La Divina Comedia
### Documento de Diseño — Versión 1.0
**Homenaje a Dante Alighieri**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — La Selva Oscura](#experiencia-1--la-selva-oscura)
4. [Experiencia 2 — Los Círculos del Infierno](#experiencia-2--los-círculos-del-infierno)
5. [Experiencia 3 — El Purgatorio](#experiencia-3--el-purgatorio)
6. [Experiencia 4 — El Paraíso](#experiencia-4--el-paraíso)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**La Divina Comedia** es una experiencia interactiva que recorre los tres reinos del más allá según la visión de Dante Alighieri: Infierno, Purgatorio y Paraíso. El jugador encarna al propio Dante en su viaje iniciático, guiado primero por el poeta Virgilio y luego por Beatriz.

El viaje de Dante no es un viaje de castigo ni de conquista. Es un viaje de **conocimiento**. Cada círculo, cada cornisa, cada cielo es una lección sobre la naturaleza humana, sobre el pecado y la virtud, sobre el amor y sus consecuencias.

**Tono narrativo:** Solemne, filosófico, con momentos de belleza abrumadora y de horror genuino. La voz de Dante es la primera persona de alguien que está viendo algo que no debería ser posible ver.

**Audiencia objetivo:** Estudiantes de literatura, aficionados a la filosofía medieval, jugadores de juegos de exploración narrativa.

**Duración estimada:** 25 a 35 minutos para completar los cuatro actos.

**Estructura narrativa:**
- La Selva Oscura → portal de entrada
- Los Círculos del Infierno → descenso (9 niveles)
- El Purgatorio → ascenso (mecánica invertida)
- El Paraíso → trascendencia visual y musical

---

## Estética Visual

### Filosofía Visual
**Pixel art gótico oscuro medieval.** La imagen visual de referencia son las iluminaciones de manuscritos medievales: figuras estilizadas, perspectiva no realista, colores simbólicos más que naturalistas. El horror del Infierno es expresionista, no gore. La belleza del Paraíso es geométrica y lumínica.

### Paleta de Colores

| Reino/Elemento | Color | Hex |
|----------------|-------|-----|
| La Selva Oscura | Verde negro amenazante | `#0B1A0B` |
| Cielo del Infierno | Carmesí humeante | `#3D0000` |
| Roca del Infierno | Gris oscuro basáltico | `#1C1C1C` |
| Fuego infernal | Naranja profundo | `#CC4400` |
| Lava/Ríos del Infierno | Rojo oscuro | `#8B0000` |
| Purgatorio - rocas | Gris azulado frío | `#4A5568` |
| Purgatorio - alba | Violeta lavanda | `#6B5B95` |
| Paraíso - luz | Blanco dorado | `#FFFDE7` |
| Paraíso - cielos | Azul ultramarino | `#1A237E` |
| Virgilio (guía) | Túnica ocre oscuro | `#8B7355` |
| Dante (jugador) | Capa roja oscura | `#6B1A1A` |
| Beatriz (guía) | Blanco luminoso | `#F5F5DC` |

### Paleta por Círculo del Infierno

| Círculo | Pecado | Tono dominante |
|---------|--------|---------------|
| I — Limbo | Virtud sin fe | Gris azulado neutro `#37474F` |
| II — Lujuria | Concupiscencia | Rosa oscuro `#4A1942` |
| III — Gula | Exceso | Verde putrefacto `#1B5E20` |
| IV — Avaricia | Codicia | Marrón oxidado `#3E2723` |
| V — Ira | Violencia | Naranja carmesí `#BF360C` |
| VI — Herejía | Incredulidad | Negro ceniza `#212121` |
| VII — Violencia | Brutalidad | Rojo sangre `#B71C1C` |
| VIII — Fraude | Engaño | Amarillo enfermizo `#827717` |
| IX — Traición | La traición | Azul hielo glacial `#006064` |

### Tipografía
- **Títulos de círculos:** Fuente gótica medieval (ej. *UnifrakturMaguntia*)
- **Versos de Dante:** Serif italiana, en cursiva, con letrina inicial
- **Virgilio:** Texto en bloque clásico, más formal, más antiguo
- **Beatriz:** Texto luminoso, con un suave glow dorado

### Elementos Visuales Recurrentes
- **La inscripción de la puerta del Infierno:** *"Lasciate ogne speranza, voi ch'intrate"* aparece en pixel art de letras medievales al entrar
- **Las llamas:** Animación de 6 frames de fuego pixelado en tonos naranja-rojo
- **Las sombras de los condenados:** Siluetas semi-transparentes que no tienen forma definida
- **Las estrellas:** Al final de cada reino de la Comedia, Dante ve las estrellas. Son el único elemento que se repite en los tres reinos.

---

## Experiencia 1 — La Selva Oscura

### El Epígrafe
> *"A mitad del camino de nuestra vida,*
> *me encontré en una selva oscura,*
> *pues la senda recta había perdido."*
> — Dante, Inferno, Canto I

### Descripción
El jugador despierta como Dante en **La Selva Oscura** (Selva Oscura), perdido, sin saber cómo llegó allí. La selva es el estado de desorientación moral y espiritual. El objetivo es encontrar a **Virgilio**, quien aparecerá como guía.

### Mecánica: El Laberinto de Entrada

La selva es un laberinto de vista cenital (top-down) en pixel art. Los árboles son negros, retorcidos, sin hojas. El suelo es tierra negra. No hay cielo visible — solo copa de árboles que bloquean cualquier luz.

#### Elementos del Laberinto
- **Las tres bestias:** En el camino, Dante encontrará las tres bestias que lo bloquearon en el poema: la Pantera (lujuria), el León (soberbia) y la Loba (avaricia). Cada bestia bloquea un camino. El jugador debe rodearlas, no enfrentarlas.
- **La luz de Virgilio:** Una luz tenue aparece en la distancia. El jugador la sigue.
- **Las voces del bosque:** Sonidos ambientales de gemidos y murmullos — las almas que se perdieron en la selva y nunca encontraron guía.

#### El Encuentro con Virgilio
Virgilio aparece al final del laberinto. Diálogo:

**Virgilio:** *"¿Por qué no subes el deleitoso monte que es el principio y causa de toda alegría?*
*Soy Virgilio, aquel cuya voz manó tan rica."*

**Dante (el jugador elige):**
- A) "¿Por qué debería seguirte?" → Virgilio explica su misión enviada por Beatriz
- B) "Guíame. Necesito salir de aquí." → Virgilio acepta y explica brevemente
- C) "¿Eres un fantasma?" → Virgilio da la respuesta correcta del poema sobre su naturaleza

Tras el diálogo, Virgilio se convierte en NPC compañero. Aparece siempre a la izquierda del jugador. Sus comentarios contextuales acompañan cada círculo.

---

## Experiencia 2 — Los Círculos del Infierno

### Descripción
Un **plataformer de desplazamiento vertical descendente**. El jugador cae hacia el centro de la Tierra, pasando por los 9 círculos del Infierno. Cada círculo es un nivel breve con mecánica única y representación visual del pecado correspondiente.

### Mecánica Base
El desplazamiento es hacia abajo. El mundo se "sube" (scroll inverso). Dante puede moverse izquierda/derecha y tiene un salto limitado. El objetivo de cada nivel no es sobrevivir en modo acción, sino **observar y pasar**: llegar al borde inferior del círculo que lleva al siguiente.

### Los 9 Círculos — Mecánicas y Narrativa

#### Círculo I — El Limbo
**Pecado:** Virtud pagana sin fe cristiana
**Mecánica:** Ninguna. El jugador camina tranquilamente. Las almas aquí no sufren — solo existe una tristeza perpetua. Es el lugar de los grandes filósofos y poetas paganos.
**Visual:** Una ciudad oscura pero ordenada. Calles grises. Figuras que conversan en silencio.
**Narración de Virgilio:** *"Aquí vivimos en el deseo sin esperanza. Solo en el anhelo."*
**Encuentro especial:** Homero, Horacio, Ovidio y Lucano saludan a Virgilio. Dante los ve y entiende la magnitud de donde está.

#### Círculo II — Los Lujuriosos
**Pecado:** Lujuria — dejarse llevar por la pasión carnal
**Mecánica:** El viento en el nivel sopla con fuerza. Dante debe resistir el viento presionando continuamente la dirección contraria para avanzar. Las almas son llevadas por el viento sin control.
**Visual:** Torbellinos rosados oscuros. Parejas de siluetas girando eternamente abrazadas.
**Encuentro especial:** Paolo y Francesca. Sus diálogos son los más emotivos del Infierno:
> *"Amor nos condujo a una sola muerte.*
> *Quien nos quitó la vida nos aguarda."*
Dante llora. El jugador ve la animación de Dante cayendo desmayado de compasión.

#### Círculo III — Los Golosos
**Pecado:** Gula — exceso en los placeres materiales
**Mecánica:** El suelo está fangoso. El movimiento de Dante es lento. Debe esquivar la lluvia de granizo sucio y nieve negra que cae constantemente.
**Visual:** Cieno, barro, lluvia sucia. El perro Cerbero (de tres cabezas en pixel art) gruñe sobre los condenados.
**Mecánica especial:** Para avanzar, Dante debe distraer a Cerbero con comida (objeto encontrado en el nivel).

#### Círculo IV — Los Avaros y Pródigos
**Pecado:** Codicia y despilfarro — los dos extremos del mismo pecado material
**Mecánica:** Puzzle de pesos. Dante debe equilibrar una balanza para abrir la puerta al siguiente círculo. Los avaros empujan pesos enormes hacia un lado; los pródigos empujan hacia el otro.
**Visual:** Dos grupos de sombras que se chocan eternamente, haciendo rodar pesos colosales.

#### Círculo V — Los Iracundos y Perezosos
**Pecado:** Ira en la superficie del Estigia; pereza en el fondo
**Mecánica:** Dante cruza el río Estigia en barca. Las almas iracundas intentan subir a la barca. El jugador las empuja de vuelta al agua con clics en el momento correcto.
**Visual:** Pantano lodoso. Manos emergiendo del fango. La barca se mueve sola.

#### Círculo VI — Los Herejes
**Pecado:** Negación del alma inmortal
**Mecánica:** Laberinto de tumbas ardientes. Las tumbas están abiertas, llameantes. Dante debe navegar el laberinto sin tocar las llamas.
**Visual:** Ciudad de piedra ardiente. Sepulcros con tapas levantadas. Luz roja intensa.

#### Círculo VII — Los Violentos
**Pecado:** Violencia contra el prójimo, contra sí mismo, contra Dios y la Naturaleza
**Mecánica:** Plataformer clásico breve. Dante cruza sobre el río Flegetonte (sangre hirviente) saltando sobre rocas. Los violentos están sumergidos en diferentes profundidades según su crimen.
**Visual:** Río de sangre oscura burbujeante. Centauros en las orillas disparando flechas a quien intente salir.

#### Círculo VIII — Los Fraudulentos (Malebolge)
**Pecado:** Fraude — los 10 tipos de trampa y engaño
**Mecánica:** El más largo. Dante atraviesa una serie de zanjas concéntricas. En cada una, una forma distinta de fraude es representada visualmente. Minipuzzle de reconocimiento: el jugador debe identificar qué tipo de pecado representa cada zanja.
**Visual:** Arquitectura laberíntica de zanjas de piedra. La más importante: los hipócritas caminan eternamente con capas de plomo que parecen de oro.
**Encuentro especial:** Ulises (Odiseo) está aquí por su engaño del Caballo de Troya. Cuenta su último viaje más allá de las Columnas de Hércules — uno de los momentos más bellos del poema.

#### Círculo IX — Los Traidores
**Pecado:** Traición — el pecado más frío y calculado
**Mecánica:** Ninguna física. El frío es tan extremo que las almas están congeladas en el lago Cocito. El jugador solo camina. El ritmo se vuelve lentísimo. El suelo es hielo azul transparente y se ven las caras congeladas bajo los pies.
**Visual:** Blanco azulado. Silencio total. En el centro: Lucifer, congelado hasta la cintura, con tres bocas masticando a Judas, Bruto y Casio.
**El paso:** Para salir del Infierno, Virgilio lleva a Dante trepando por el cuerpo de Lucifer, pasando el centro de la Tierra, y saliendo al otro hemisferio. Una inversión literal: lo que era abajo se vuelve arriba.

**Texto de transición:**
> *"Y salimos a ver de nuevo las estrellas."*

---

## Experiencia 3 — El Purgatorio

### Descripción
**Mecánica inversa:** Ahora el mundo desciende mientras Dante sube. El Purgatorio es una montaña cónica. Las almas aquí no están castigadas eternamente — están purificándose. Hay esperanza.

### El Cambio de Tono
La paleta cambia: de los rojos y negros del Infierno a los grises azulados del alba. La música cambia de disonante a modal. Las sombras son largas pero no amenazantes.

### Las Cornisas del Purgatorio

El Purgatorio tiene 7 cornisas (los 7 pecados capitales) más el Antepurgatorio y el Paraíso Terrenal en la cima.

#### Mecánica Diferenciada: La Marca
En cada cornisa, Dante lleva una marca en la frente (representada como un símbolo luminoso). Al superar cada cornisa, la marca desaparece y Dante se siente más ligero — literalmente más rápido y ágil en el juego.

#### Cornisa I — Soberbia
El orgullo se purga cargando pesos enormes que doblan la espalda. Mecánica: Dante camina encorvado, más lento. Al ayudar a un alma a levantarse, su marca de soberbia desaparece y ambos avanzan más erguidos.

#### Cornisas II a VII
Cada una presenta una mecánica ligera y una lección temática:
- **Envidia:** Los ojos de las almas están cosidos. Dante debe guiar a un alma ciega.
- **Ira:** Niebla oscura que impide la visión. Dante avanza por el sonido.
- **Pereza:** El camino está inclinado y resbaladizo. Las almas corren para no detenerse.
- **Avaricia:** Todos yacen en el suelo, caras contra la tierra. Dante debe hablar con ellos sin mirarlos.
- **Gula:** Un árbol con fruta apetecible. Las almas no pueden acercarse. Dante pasa sin comer.
- **Lujuria:** Un muro de fuego. Dante debe cruzarlo. El calor es intenso en la representación visual (distorsión de píxeles).

### La Llegada al Paraíso Terrenal
En la cima, Virgilio se despide. No puede entrar al Paraíso. Solo Beatriz puede guiar allí.

**Diálogo de despedida:**
> *"Virgilio no está. Virgilio está.*
> *No como hombre. Como todo lo que me enseñó.*
> *Mi guía, mi maestro, mi más querido padre."*

Beatriz aparece. La luz aumenta. Comienza el Paraíso.

---

## Experiencia 4 — El Paraíso

### Descripción
**Sin mecánicas de juego.** El Paraíso no se "juega" — se contempla. Como el Acto IV de Mozart, el jugador no tiene control. Solo observa.

### La Ascensión
Dante y Beatriz ascienden por los cielos planetarios. Cada cielo corresponde a un planeta del sistema ptolemaico y a una virtud:

| Cielo | Planeta | Virtud | Visual |
|-------|---------|--------|--------|
| I | Luna | Fe | Blanco nacarado |
| II | Mercurio | Esperanza | Plateado vibrante |
| III | Venus | Amor | Dorado cálido |
| IV | Sol | Prudencia | Amarillo radiante |
| V | Marte | Fortaleza | Rojo dorado |
| VI | Júpiter | Justicia | Blanco azulado |
| VII | Saturno | Templanza | Azul profundo |
| VIII | Estrellas Fijas | Contemplación | Campo estelar |
| IX | Primer Móvil | Unidad | Luz pura |
| X | Empíreo | El Amor Eterno | Blanco absoluto |

### La Rosa Mística
En el Empíreo, Dante ve la **Rosa Mística**: las almas benditas dispuestas en forma de rosa blanca, con los ángeles como abejas que vuelan entre ellas. En pixel art: una espiral generativa de puntos de luz que se expande desde el centro de la pantalla.

### La Visión Final
Beatriz se aleja y Dante queda ante la presencia de Dios: una luz que no puede mirarse directamente. La pantalla se llena de blanco progresivamente. La última línea del poema aparece:

> *"L'amor che move il sole e l'altre stelle."*
> *"El amor que mueve el sol y las demás estrellas."*

Fade a blanco total. Silencio. Luego, la pantalla de homenaje.

---

## Pantalla Final de Homenaje

---

> **✍️ En Homenaje a Dante Alighieri**
> *Florencia, 1265 — Rávena, 1321*
>
> La Divina Comedia fue escrita entre 1308 y 1321, en el exilio político de Dante de su Florencia natal.
> Fue el primer gran poema épico escrito en idioma vulgar — no en latín, sino en el toscano del pueblo.
> Con ese acto, Dante fundó la literatura italiana y transformó la concepción de la lengua literaria en Europa.
>
> La obra tiene 14.233 versos distribuidos en 100 cantos: 1 introductorio, 33 del Infierno, 33 del Purgatorio y 33 del Paraíso.
> Cada canto termina con la palabra *stelle* (estrellas). Los tres reinos terminan mirando al cielo.
>
> Dante nunca regresó a Florencia.
> Murió en Rávena a los 56 años, sin ver su ciudad natal.
> Florencia le erigió una estatua siete siglos después.
>
> **Sobre la alegoría:**
> El viaje de Dante no es teológico. Es humano.
> La Selva Oscura somos nosotros a mitad de la vida, perdidos.
> Virgilio es la razón que puede llevarnos hasta cierto punto.
> Beatriz es el amor que nos lleva más lejos de donde la razón puede ir.
>
> *"El camino recto estaba perdido.*
> *No para siempre.*
> *Nunca para siempre."*

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
dante-divina-comedia/
│
├── index.html                     # Entrada y portal
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Estilos base góticos
│   ├── inferno.css                # Paleta y efectos del Infierno
│   ├── purgatorio.css             # Paleta y efectos del Purgatorio
│   ├── paradiso.css               # Paleta y efectos del Paraíso
│   └── animations.css             # Llamas, hielo, luz divina
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── selva.js                   # Experiencia 1: laberinto
│   ├── inferno.js                 # Experiencia 2: plataformer descendente
│   ├── purgatorio.js              # Experiencia 3: plataformer ascendente
│   ├── paradiso.js                # Experiencia 4: cinemática
│   ├── virgilio.js                # Sistema de NPC guía
│   ├── canvas-renderer.js         # Render Canvas 2D
│   └── audio.js                   # Gestión de audio
│
├── assets/
│   ├── sprites/
│   │   ├── dante/                 # Sprites de Dante (estados múltiples)
│   │   ├── virgilio.png
│   │   ├── beatriz.png
│   │   ├── souls/                 # Sprites de almas condenadas/purgantes
│   │   └── monsters/              # Cerbero, Minos, Lucifer
│   ├── backgrounds/
│   │   ├── selva-oscura.png
│   │   ├── circles/ (9 imágenes)
│   │   ├── cornisas/ (7 imágenes)
│   │   └── cielos/ (10 imágenes)
│   └── audio/
│       ├── inferno-ambience.mp3
│       ├── purgatorio-theme.mp3
│       └── paradiso-choir.mp3
│
└── data/
    ├── circles-config.json        # Config de cada círculo
    ├── cornisas-config.json       # Config de cada cornisa
    └── dialogues.json             # Todos los diálogos de Virgilio y Beatriz
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **La Divina Comedia** (obra arcade-homenaje) es una experiencia cultural sin fines comerciales.
>
> La Divina Comedia de Dante Alighieri (1308-1321) es una obra de dominio público. Los textos originales en italiano y las traducciones utilizadas pertenecen al dominio público o son traducciones propias inspiradas en el original.
>
> Los datos biográficos sobre Dante Alighieri están basados en registros históricos documentados.
>
> Esta obra no está afiliada con ninguna institución académica, editorial ni entidad religiosa.
