# Cosmos
### Documento de Diseño — Versión 1.0
**Homenaje a Carl Sagan y la Divulgación Científica como Acto de Amor**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — El Big Bang](#experiencia-1--el-big-bang)
4. [Experiencia 2 — La Tierra (La Pale Blue Dot)](#experiencia-2--la-tierra-la-pale-blue-dot)
5. [Experiencia 3 — El Calendario Cósmico](#experiencia-3--el-calendario-cósmico)
6. [Experiencia 4 — El Mensaje](#experiencia-4--el-mensaje)
7. [La Cita de la Pale Blue Dot](#la-cita-de-la-pale-blue-dot)
8. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
9. [Arquitectura de Archivos](#arquitectura-de-archivos)
10. [Nota Legal](#nota-legal)

---

## Concepto General

**Cosmos** es una experiencia interactiva de contemplación y asombro basada en el trabajo de Carl Sagan: astrónomo, cosmólogo, escritor y el más grande divulgador científico del siglo XX. El punto de partida es el **Calendario Cósmico**: la idea de comprimir los 13.8 mil millones de años de historia del universo en un solo año calendario, donde cada mes equivale a aproximadamente 1,150 millones de años.

El jugador no conquista el cosmos. No lo vence. Lo **contempla**. Cosmos es un juego sobre la pequeñez y la grandeza simultánea de existir: somos insignificantes a escala cósmica y somos, sin embargo, la única parte del universo que sabe que el universo existe.

**Tono narrativo:** La voz de Sagan: cálida, maravillada, precisa. Sin sensacionalismo. El asombro no requiere exageración cuando el material es el cosmos real. Los datos son más extraordinarios que cualquier ficción.

**Temas centrales:**
- La escala del tiempo cósmico y la brevedad de la humanidad
- La Pale Blue Dot: la Tierra como punto de luz en la oscuridad
- El universo como algo que puede conocerse y que vale la pena conocer
- La divulgación científica como el acto más generoso que existe
- El mensaje al cosmos como afirmación de existencia

**Duración estimada:** 20 a 35 minutos, dependiendo del tiempo que el jugador dedique a contemplar.

---

## Estética Visual

### Filosofía Visual
**Pixel art espacial de alta densidad cromática.** El espacio no es negro — tiene textura. Las nebulosas tienen gradientes de color que van del azul profundo al magenta al dorado. Las estrellas son puntos blancos de diferentes tamaños con halos de luz. El pixel art aquí trabaja a favor del cosmos: la limitación del píxel convierte cada estrella en un punto preciso, deliberado.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Espacio profundo (fondo) | Negro azulado profundo | `#03071E` |
| Nebulosa azul | Azul ultramarino | `#023E8A` |
| Nebulosa púrpura | Violeta oscuro | `#6A0572` |
| Nebulosa naranja | Ámbar cósmico | `#CC5200` |
| Estrellas brillantes | Blanco puro | `#FFFFFF` |
| Estrellas medias | Azul blanquecino | `#CAF0F8` |
| Estrellas lejanas | Gris azulado | `#90E0EF` |
| La Pale Blue Dot | Azul claro puntual | `#4FC3F7` |
| El Sol (joven) | Amarillo intenso | `#FFD60A` |
| La Tierra | Azul verde vivo | `#1A73E8` |
| El Big Bang (luz inicial) | Blanco caliente | `#FFFDE7` |

### Nebulosas Generativas
Las nebulosas de fondo se generan algorítmicamente mediante ruido de Perlin en Canvas 2D. No son imágenes fijas: se generan cada vez que el jugador entra, creando un cosmos ligeramente diferente en cada partida.

```javascript
function generateNebula(ctx, width, height) {
  const imageData = ctx.createImageData(width, height);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noise = perlin(x * 0.01, y * 0.01);
      const idx = (y * width + x) * 4;
      if (noise > 0.6) {
        // Nebulosa azul-púrpura
        imageData.data[idx] = 30 + noise * 50;
        imageData.data[idx+1] = 0;
        imageData.data[idx+2] = 100 + noise * 155;
        imageData.data[idx+3] = (noise - 0.6) * 500;
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
}
```

### Las Estrellas
El campo de estrellas tiene tres capas de profundidad (parallax):
1. **Capa lejana:** Puntos de 1 píxel, grises azulados, se mueven muy lento con el scroll
2. **Capa media:** Puntos de 1-2 píxeles, blancos, velocidad media
3. **Capa cercana:** Puntos de 2-3 píxeles con halo suave, blancos brillantes, velocidad normal

### Tipografía
- **Títulos de experiencia:** Sans-serif moderna espacial (ej. *Exo 2* o *Orbitron*)
- **Narración de Sagan:** Serif elegante con interlineado generoso (ej. *Merriweather*)
- **Datos científicos:** Monoespaciada limpia (ej. *IBM Plex Mono*)
- **La cita de la Pale Blue Dot:** Tipografía grande, centrada, con espaciado amplio — para que las palabras respiren

---

## Experiencia 1 — El Big Bang

### El Epígrafe
> *"El Cosmos es todo lo que es, o lo que fue, o lo que será alguna vez.*
> *Nuestras más tenues contemplaciones del Cosmos nos provocan.*
> *Sentimos como un cosquilleo en los nervios, una voz muda, una leve sensación*
> *como el recuerdo vago de caer desde lo alto."*
> — Carl Sagan, Cosmos: A Personal Voyage (1980)

### Descripción
El punto de origen. El jugador **observa** el nacimiento del universo. Esta experiencia tiene la interacción mínima de todo el juego — casi ninguna. Es deliberadamente pasiva porque el Big Bang no requiere participación. Simplemente ocurrió.

### Secuencia Visual

1. **Pantalla en negro absoluto.** Silencio total. 5 segundos.
2. Un punto de luz blanca aparece en el centro. Apenas perceptible. Una sola partícula.
3. El punto pulsa. Una vez. Dos veces.
4. En el tercer pulso, **explota**: la pantalla se llena de luz blanca total.
5. La luz se expande. Se fragmenta. Aparecen colores: primero el rojo, luego el naranja, luego el amarillo.
6. Los primeros átomos: hidrógeno y helio. Representados como puntos que se mueven caóticamente.
7. La temperatura cae. Los colores se oscurecen. El azul aparece. Las primeras nebulosas.
8. Las primeras estrellas: puntos de luz que se encienden uno a uno.
9. Las primeras galaxias: espirales de píxeles girando lentamente.
10. La cámara hace zoom out hasta que toda la estructura cósmica es visible: filamentos de materia, vacíos enormes.

### El Único Input del Jugador
Durante toda la secuencia, hay un solo texto en pantalla:

> *"Hace 13,800 millones de años,*
> *de una singularidad que no ocupa espacio ni tiempo,*
> *surgió todo lo que existe.*
>
> *[Haz clic cuando estés listo para continuar]"*

El jugador puede tomarse el tiempo que quiera. No hay urgencia. Es el cosmos.

### Narración al Final
Cuando el jugador hace clic:
> *"El universo tenía aproximadamente 380,000 años cuando la luz pudo viajar libremente por primera vez.*
> *Esa luz todavía existe.*
> *La llamamos la Radiación de Fondo de Microondas.*
> *Es el eco del Big Bang.*
> *Puedes captarla con una antena de televisión ordinaria.*
> *Parte de esa nieve estática que ves cuando no hay señal*
> *es el resplandor del nacimiento del universo.*
>
> *El cosmos está literalmente en tu sala de estar."*

---

## Experiencia 2 — La Tierra (La Pale Blue Dot)

### El Epígrafe
> *"Mira ese punto. Eso es aquí. Eso es casa. Eso somos nosotros."*
> — Carl Sagan, Pale Blue Dot (1994)

### Descripción
El jugador debe encontrar la **Pale Blue Dot** — la famosa fotografía de la Tierra tomada por la sonda Voyager 1 el 14 de febrero de 1990 desde 6,000 millones de kilómetros de distancia. En esa imagen, la Tierra es un punto de 0.12 píxeles de tamaño.

### Mecánica: La Búsqueda

Una pantalla llena de estrellas. Miles de puntos de luz. El jugador debe encontrar uno específico: la Pale Blue Dot. La Tierra aparece en algún lugar de la pantalla, pero es casi invisible.

#### El Tamaño Real
La Pale Blue Dot en la fotografía original ocupa apenas el 0.12% de un píxel. En esta experiencia, se escala para ser visible pero sigue siendo diminuta: un punto de 3x3 píxeles de un azul suave, rodeado por lo que parece ser un rayo de luz solar (un artefacto óptico de la fotografía real).

#### Ayudas Disponibles
El jugador puede activar:
- **Zoom:** Amplía secciones de la pantalla (5 usos disponibles)
- **Filtro de color:** Resalta los puntos azulados (3 usos disponibles)
- **Constelaciones:** Muestra líneas de referencia para orientarse (1 uso disponible)

#### El Momento del Hallazgo
Cuando el jugador hace clic en la Pale Blue Dot correcta, la cámara hace zoom lentamente hacia ella. El punto crece. Se convierte en el planeta Tierra reconocible. Los continentes aparecen. Las nubes. El océano.

La pantalla se divide: a la izquierda, la Tierra desde el espacio. A la derecha, el texto de la Pale Blue Dot de Sagan — completo.

---

## La Cita de la Pale Blue Dot

*(Aparece en esta experiencia, completa, letra por letra, con la Tierra visible al lado)*

---

> **Carl Sagan — Pale Blue Dot (1994)**
>
> *"Mira ese punto. Eso es aquí. Eso es casa. Eso somos nosotros.*
> *En él, todos los que amaste, todos los que conociste,*
> *todos de los que alguna vez oíste hablar,*
> *cada ser humano que existió, vivió sus vidas.*
>
> *La suma de toda nuestra alegría y sufrimiento,*
> *miles de religiones confiadas, ideologías y doctrinas económicas,*
> *cada cazador y recolector, cada héroe y cobarde,*
> *cada creador y destructor de civilizaciones,*
> *cada rey y campesino, cada pareja joven enamorada,*
> *cada madre y padre, niño esperanzador,*
> *inventor y explorador, cada maestro moral,*
> *cada político corrupto, cada superestrella,*
> *cada líder supremo, cada santo y pecador*
> *en la historia de nuestra especie*
> *vivió aquí — en una mota de polvo*
> *suspendida en un rayo de sol.*
>
> *La Tierra es un escenario muy pequeño en la vasta arena cósmica.*
> *Piensa en los ríos de sangre vertida por todos esos generales y emperadores*
> *para que, en gloria y triunfo, pudieran ser los amos momentáneos*
> *de una fracción de un punto.*
>
> *Piensa en las crueldades sin fin infligidas por los habitantes de un rincón de este punto*
> *sobre los apenas distinguibles habitantes de algún otro rincón del mismo punto,*
> *cuán frecuentes sus malentendidos,*
> *cuán ansiosos están de matarse unos a otros,*
> *cuán fervorosos son sus odios.*
>
> *Nuestra pose, nuestra imaginada autoimportancia,*
> *la ilusión de que tenemos alguna posición privilegiada en el Universo,*
> *son desafiadas por este punto de luz pálida.*
>
> *Nuestro planeta es una mota solitaria en la gran oscuridad cósmica que todo lo envuelve.*
> *En nuestra oscuridad, en toda esta vastedad,*
> *no hay ningún indicio de que llegará ayuda de ningún otro lugar*
> *para salvarnos de nosotros mismos.*
>
> *La Tierra es el único mundo conocido que alberga vida.*
> *No hay ningún otro lugar, al menos en el futuro cercano,*
> *al que nuestra especie pudiera migrar.*
> *Visitar, sí. Asentarse, todavía no.*
> *Nos guste o no, en este momento la Tierra es donde tenemos que quedarnos.*
>
> *Se ha dicho que la astronomía es una experiencia de humildad y que construye el carácter.*
> *No hay quizás mejor demostración de la insensatez de las engreídas humanas*
> *que esta distante imagen de nuestro diminuto mundo.*
>
> *Para mí, subraya nuestra responsabilidad de tratarnos más amablemente entre nosotros*
> *y de preservar y querer la Pale Blue Dot,*
> *el único hogar que hemos conocido."*

---

## Experiencia 3 — El Calendario Cósmico

### El Epígrafe
> *"Si el Universo tiene 13,800 millones de años*
> *y lo comprimimos en un año calendario,*
> *entonces cada mes equivale a 1,150 millones de años.*
> *Y toda la historia humana registrada*
> *cabe en los últimos 14 segundos del 31 de diciembre."*

### Descripción
El jugador navega por un **calendario de 12 meses** donde cada mes representa aproximadamente 1,150 millones de años. El objetivo es llegar al 31 de diciembre y ver cuándo aparece la humanidad.

### Mecánica: La Navegación Temporal

Un calendario visual de 12 meses, presentado en vista de cuadrícula. El jugador puede hacer clic en cada mes para expandirlo y ver qué eventos cósmicos ocurrieron.

#### Los Eventos por Mes

**Enero 1 — El Big Bang**
> *El universo nace. Temperatura: 10^32 grados Celsius. Toda la materia y energía del cosmos emerge de la singularidad inicial.*

**Enero 21 — Las primeras estrellas**
> *Las primeras estrellas se encienden. No hay planetas todavía. No hay elementos pesados. El universo es solo hidrógeno y helio.*

**Marzo — Las primeras galaxias**
> *Las galaxias comienzan a formarse. La Vía Láctea tardará hasta septiembre en nacer.*

**Mayo — Explosiones de supernovas crean elementos pesados**
> *Las primeras estrellas masivas explotan como supernovas, diseminando por el cosmos los elementos que formarán los planetas: carbono, oxígeno, hierro, silicio.*
> *Las supernovas son necesarias para que exista la vida. Somos literalmente polvo de estrellas.*

**Septiembre 9 — Nace la Vía Láctea**
> *Nuestra galaxia natal comienza a formarse. Tardará millones de años en tomar su forma espiral.*

**Septiembre 14 — Nace el Sistema Solar**
> *El Sol se enciende. Los planetas del Sistema Solar empiezan a aglomerarse a partir del disco de polvo y gas que rodea al Sol joven.*

**Septiembre 21 — La Tierra**
> *La Tierra se forma. Es un planeta volcánico, sin atmósfera respirable, bombardeado por meteoritos. Hace 4,540 millones de años.*

**Septiembre 25 — Los primeros océanos**
> *El agua llega a la Tierra, posiblemente traída por cometas. Los océanos primitivos se forman.*

**Septiembre 29 — La primera vida**
> *Las primeras células primitivas aparecen. Bacterias. Ningún sistema nervioso, ningún pensamiento. Pero vida.*
> *La vida tarda menos en aparecer que la Tierra en enfriarse. La vida no es un milagro excepcional — es casi inevitable dado el tiempo suficiente y las condiciones correctas.*

**Octubre — Diciembre — La evolución lenta**
> *3,000 millones de años de evolución microbiana. Lenta. Imperceptible. Sin drama visible. La fotosíntesis. El oxígeno en la atmósfera. Los primeros organismos multicelulares.*

**Diciembre 17 — Los primeros peces**

**Diciembre 19 — Las primeras plantas terrestres**

**Diciembre 20 — Los primeros insectos**

**Diciembre 22 — Los primeros dinosaurios**

**Diciembre 26 — Los dinosaurios se extinguen** *(el asteroide Chicxulub)*

**Diciembre 30 — Los primeros homínidos**

**Diciembre 31, 22:24 — Homo sapiens**
> *El ser humano anatómicamente moderno aparece. Hace 200,000 años.*

**Diciembre 31, 23:46 — Las primeras pinturas rupestres**

**Diciembre 31, 23:59:32 — La invención de la agricultura**

**Diciembre 31, 23:59:46 — Las primeras ciudades**

**Diciembre 31, 23:59:54 — La primera escritura**

**Diciembre 31, 23:59:58 — El Imperio Romano**

**Diciembre 31, 23:59:59,5 — El Renacimiento**

**Diciembre 31, 23:59:59,75 — La Revolución Industrial**

**Diciembre 31, 23:59:59,93 — El siglo XX**

**El último 0.07 segundos del 31 de diciembre — Todo lo que llamamos "historia moderna"**

---

### El Efecto de la Escala
Cuando el jugador llega al 31 de diciembre y ve la humanidad aparecer en los últimos 14 segundos, el narrador dice:

> *"14 segundos.*
>
> *14 segundos de un año cósmico.*
>
> *En ese tiempo hemos creado lenguaje, música, matemáticas,*
> *medicina, filosofía, arte, ciencia, tecnología.*
>
> *En ese tiempo hemos amado, sufrido, construido y destruido.*
>
> *Somos recién llegados en el cosmos.*
> *Y sin embargo, somos la parte del cosmos*
> *que puede hacer calendarios del cosmos.*
>
> *Eso no es poca cosa."*

---

## Experiencia 4 — El Mensaje

### El Epígrafe
> *"En nuestra obscuridad, en toda esta vastedad, no hay indicio de que llegará ayuda de algún otro lugar para salvarnos de nosotros mismos.*
> *Depende de nosotros."*

### Descripción
En 1977, la NASA lanzó las sondas Voyager 1 y Voyager 2 al espacio. Cada una lleva un **Disco de Oro**: un registro fonográfico con sonidos e imágenes de la Tierra, destinado a cualquier civilización que pudiera encontrarlo. Carl Sagan dirigió el comité que decidió qué poner en ese disco.

En esta experiencia final, el jugador **envía su propio mensaje al cosmos**.

### Mecánica: El Mensaje Personal

Una interfaz simple: un campo de texto, un fondo de estrellas, el sonido del espacio.

**Texto que aparece:**
> *"En 1977, Carl Sagan y su equipo decidieron qué decirle al cosmos si alguien escuchaba.*
>
> *Si tuvieras un mensaje que pudiera viajar para siempre por el espacio,*
> *¿qué dirías?*
>
> *Aquí no hay respuesta correcta.*
> *Aquí no hay puntuación.*
> *Solo hay la pregunta.*
> *Y tu respuesta.*
>
> *[Escribe tu mensaje]"*

### El Campo de Mensaje
Un input de texto simple. Sin límite de caracteres. Sin restricciones de formato. El jugador escribe lo que quiera.

### El Envío
Al hacer clic en el botón `[Enviar al Cosmos]`, ocurre la siguiente animación:

1. El texto del jugador se convierte en píxeles pequeños
2. Los píxeles ascienden en la pantalla, siguiendo la trayectoria de la constelación de Voyager
3. Una sonda espacial pixelada (la Voyager) aparece y recoge los píxeles
4. La Voyager se aleja hacia el fondo de la pantalla, hacia las estrellas
5. Se hace cada vez más pequeña. Un punto. Una estrella más.
6. Desaparece.

**Texto final:**
> *"Tu mensaje viaja ahora a 17 kilómetros por segundo.*
>
> *En 40,000 años, la Voyager pasará relativamente cerca de otra estrella.*
> *Tu mensaje estará en ella.*
>
> *Nadie sabe si alguien lo encontrará.*
> *Carl Sagan tampoco lo sabía.*
> *Pero dijo que valía la pena intentarlo.*
>
> *Eso es la ciencia.*
> *Eso es el amor.*
> *Básicamente lo mismo."*

---

## Pantalla Final de Homenaje

Una ilustración de la Voyager alejándose en el espacio, con la Pale Blue Dot visible detrás:

---

> **🔭 En Homenaje a Carl Edward Sagan**
> *Brooklyn, Nueva York, 9 de noviembre de 1934 — Seattle, Washington, 20 de diciembre de 1996*
>
> Carl Sagan fue astrónomo, cosmólogo, astrofísico, astrobiologista, escritor y comunicador científico.
>
> Sus contribuciones principales:
> - **La serie Cosmos: A Personal Voyage (1980)** fue vista por más de 500 millones de personas en 60 países. Es la serie de divulgación científica más vista de la historia.
> - **El libro Pale Blue Dot (1994)** contiene la fotografía y el discurso que dan nombre a esta experiencia.
> - **El Disco de Oro de la Voyager (1977):** Sagan dirigió la selección de sonidos, imágenes y música para el mensaje interestelar más lejano que ha enviado la humanidad.
> - **El Proyecto SETI:** Apoyó activamente la búsqueda de inteligencia extraterrestre.
> - **El libro Contact (1985)** y su adaptación cinematográfica de 1997 con Jodie Foster.
>
> Murió de mielodisplasia (cáncer en la médula ósea) el 20 de diciembre de 1996.
> Tenía 62 años.
> Murió sabiendo que la Voyager 1 todavía viajaba.
> Todavía lo hace. Está a más de 23,000 millones de kilómetros de la Tierra.
> El mensaje de Sagan viaja en ella.
>
> **Sobre la divulgación científica como acto de amor:**
> Sagan no divulgaba para hacerse famoso.
> Divulgaba porque creía que el asombro científico era un derecho humano.
> Que nadie debería vivir sin saber que está hecho de estrellas.
> Que la humildad cósmica no deprime — libera.
>
> *"Somos una forma del cosmos*
> *que se ha desarrollado para conocerse a sí mismo."*
> — Carl Sagan, Cosmos (1980)
>
> ---
>
> *La Pale Blue Dot sigue ahí.*
> *Todavía azul.*
> *Todavía frágil.*
> *Todavía nuestra.*

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
sagan-cosmos/
│
├── index.html                     # Entrada: campo de estrellas generativo
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Fondo oscuro espacial, tipografía
│   ├── stars.css                  # Capas de parallax de estrellas
│   ├── nebula.css                 # Efecto de nebulosas en Canvas
│   └── pale-blue-dot.css          # Estilos de la experiencia 2
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── exp1-bigbang.js            # El Big Bang (animación)
│   ├── exp2-paleblue.js           # La búsqueda de la Pale Blue Dot
│   ├── exp3-calendar.js           # El Calendario Cósmico interactivo
│   ├── exp4-message.js            # El campo de mensaje y la animación de envío
│   ├── star-field.js              # Generador de campo estelar con parallax
│   ├── nebula-generator.js        # Nebulosas via ruido de Perlin
│   ├── perlin-noise.js            # Algoritmo de ruido de Perlin
│   └── canvas-renderer.js         # Render principal Canvas 2D
│
├── assets/
│   ├── sprites/
│   │   ├── voyager.png            # La sonda Voyager en pixel art
│   │   ├── earth-from-space.png   # La Tierra desde el espacio
│   │   ├── sun-pixel.png          # El Sol
│   │   └── galaxy-milkyway.png    # La Vía Láctea (pixel art)
│   ├── backgrounds/
│   │   ├── deep-space.png         # Espacio profundo base (semilla)
│   │   ├── cosmic-calendar/       # Imágenes para cada mes del calendario
│   │   │   ├── january.png        # Big Bang
│   │   │   ├── september.png      # Sistema Solar
│   │   │   └── december.png       # La humanidad
│   │   └── pale-blue-starfield.png # Campo de estrellas de la experiencia 2
│   └── audio/
│       ├── cosmic-drone.mp3       # Tono grave y sostenido del cosmos
│       ├── bigbang-swell.mp3      # El crescendo del Big Bang
│       ├── space-ambience.mp3     # Silencio del espacio con textura
│       ├── pale-blue-strings.mp3  # Cuerdas suaves para la Pale Blue Dot
│       ├── calendar-tick.mp3      # Tic suave al avanzar por el calendario
│       └── voyager-departure.mp3  # Tema del envío del mensaje
│
└── data/
    ├── cosmic-calendar.json       # Todos los eventos del Calendario Cósmico
    ├── pale-blue-position.json    # Posición de la Pale Blue Dot en la pantalla
    └── pale-blue-dot-text.json    # La cita completa de Sagan en español
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **Cosmos** es una obra de homenaje cultural sin fines comerciales.
>
> Carl Sagan (1934-1996) es una figura histórica. Los datos científicos y biográficos presentados están basados en registros verificados.
>
> El texto completo de la **Pale Blue Dot** de Carl Sagan (1994) es una cita atribuida explícitamente. Los derechos de sus obras literarias están administrados por los herederos de Carl Sagan y Druyan-Sagan Associates, Inc.
>
> La cita de la Pale Blue Dot se reproduce en esta experiencia con propósito cultural, educativo y de homenaje, con atribución explícita. No representa reproducción comercial de la obra de Sagan.
>
> La serie **Cosmos: A Personal Voyage** (1980) fue producida por la KCET y Carl Sagan Productions. La serie **Cosmos: A Spacetime Odyssey** (2014) fue producida por Cosmos Studios y Fox Broadcasting Company.
>
> Las imágenes reales de la Pale Blue Dot son de la NASA/JPL (dominio público, producidas por el gobierno de los Estados Unidos).
>
> El **Disco de Oro de la Voyager** es una iniciativa de la NASA de dominio público.
>
> Esta obra no está afiliada con la NASA, Druyan-Sagan Associates, la Fundación Carl Sagan ni ninguna institución científica oficial.
