# El Jardín de las Máquinas
### Documento de Diseño — Versión 1.0
**Homenaje a Alan Turing — Padre de la Computación Moderna**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — La Máquina Enigma](#experiencia-1--la-máquina-enigma)
4. [Experiencia 2 — El Test](#experiencia-2--el-test)
5. [Experiencia 3 — El Jardín](#experiencia-3--el-jardín)
6. [Experiencia 4 — La Injusticia](#experiencia-4--la-injusticia)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**El Jardín de las Máquinas** recorre la vida de Alan Turing a través de sus contribuciones más significativas y del horror de su final. El hilo conductor es el trabajo en **Bletchley Park** (1939-1945), donde Turing lideró el equipo que descifró el código Enigma de la Alemania nazi, acortando la guerra en un estimado de 2 a 4 años y salvando potencialmente entre 14 y 21 millones de vidas.

Y luego, el Estado que defendió lo procesó penalmente por ser homosexual.

**Tono narrativo:** Intelectual y sereno en las experiencias de criptografía. Contemplativo en el jardín. Devastador en la última sección. Esta experiencia no busca suavizar lo que le pasó a Turing. Busca que el jugador lo comprenda en su magnitud.

**Temas centrales:**
- El genio al servicio de la humanidad
- La paradoja de ser juzgado por los que salvaste
- La pregunta "¿pueden pensar las máquinas?" como reflexión sobre la humanidad misma
- El costo humano de la intolerancia institucional

**Duración estimada:** 20 a 30 minutos.

---

## Estética Visual

### Filosofía Visual
**Pixel art gris/verde industrial de la Segunda Guerra Mundial.** Bletchley Park era una mansión victoriana reconvertida en instalación de inteligencia. Los colores son los de la austeridad bélica: grises, verdes oscuros, marrones desgastados. Papel de telegrama. Cintas de teletipo. Metal frío.

En contraste, el Jardín de Turing es el único lugar donde la paleta respira: verdes naturales, luz de tarde, flores.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo base (instalación) | Gris pizarra oscuro | `#2B2B2B` |
| Verde CRT / Enigma | Verde fosforescente | `#00CC44` |
| Papel de telegrama | Crema oxidada | `#D4C9A8` |
| Tinta de telegrama | Negro carbón | `#1A1A1A` |
| Metal de la máquina | Gris acero | `#607080` |
| Luz de oficina | Amarillo tungsteno | `#CC9900` |
| El jardín (verde) | Verde hierba vivo | `#4CAF50` |
| El jardín (flores) | Múltiple suave | varios |
| Turing (sprite) | Marrón sobrio + tie azul | `#5D4037` + `#1565C0` |
| La injusticia (pantalla) | Gris frío desaturado | `#37474F` |

### Elementos Visuales Clave
- **La Bombe:** La máquina descifrado de Turing, representada como un sistema de rotores mecánicos en pixel art. Sus movimientos son rítmicos, casi hipnóticos.
- **El teletipo:** Papel que avanza mostrando mensajes cifrados en tiempo real
- **El jardín:** El único espacio de color en toda la experiencia — contrasta deliberadamente con la austeridad de Bletchley Park
- **Los números:** Turing pensaba en números. Los números aparecen como elemento decorativo recurrente en la UI

### Tipografía
- **Mensajes cifrados:** Fuente monoespaciada (ej. *Courier New* o *IBM Plex Mono*)
- **Textos narrativos:** Serif legible con espaciado generoso (ej. *Merriweather*)
- **La Bombe:** Caracteres del alfabeto inglés mayúsculo, como en la máquina real
- **La sección de La Injusticia:** Sin tipografía decorativa. Solo texto plano en un fondo gris.

---

## Experiencia 1 — La Máquina Enigma

### Contexto Histórico
> *"Enigma era una máquina de cifrado electromecánico usada por las fuerzas armadas de la Alemania nazi para proteger las comunicaciones militares durante la Segunda Guerra Mundial.*
> *Con 158 quintillones de combinaciones posibles.*
> *Los alemanes creían que era inviolable."*

### Descripción
El jugador trabaja como criptanalista en Bletchley Park. Recibe un mensaje interceptado de la Luftwaffe, cifrado con Enigma. Debe descifrar el mensaje usando una simulación simplificada del sistema Enigma.

### Mecánica: El Descifrado

#### Cómo Funciona Enigma (simplificado para el juego)
Enigma tiene tres componentes que el jugador puede ajustar:
1. **Los tres rotores:** Cada uno tiene 26 posiciones (A-Z). El ajuste inicial se conoce por la clave del día.
2. **El tablero de conexiones (Steckerbrett):** 10 pares de letras conectadas entre sí que se intercambian.
3. **El anillo reflector:** Fijo para esta versión simplificada.

#### El Puzzle del Día
Se presenta un mensaje cifrado: una secuencia de letras mayúsculas sin espacios. El jugador conoce un dato de partida (siempre había información conocida en los mensajes — saludos estandarizados, firmas, etc.):

> *Mensaje recibido: BDZGO WCBLV GQYK*
> *Dato conocido: El mensaje comienza con "WETTER" (tiempo meteorológico)*

El jugador ajusta los rotores y prueba combinaciones. Cuando la configuración es correcta, el mensaje comienza a descifrarse letra a letra.

#### La Bombe
Si el jugador encuentra una solución parcial, puede activar **La Bombe**: la máquina real de Turing. La animación muestra los rotores girando a alta velocidad. La Bombe descarta combinaciones imposibles y acelera el proceso. Pero no lo hace sola — el jugador tuvo que darle el punto de partida.

#### El Mensaje Descifrado
Al completar el descifrado, el mensaje revela información militar real (ficticia en el juego) que salva vidas. El jugador siente el peso de lo que acaba de hacer:

> *Mensaje descifrado:*
> *"CONVOY NORTE CAMBIA RUTA. COORDENADAS 52N 18E. PROTECCIÓN AÉREA MÍNIMA."*

**Narración:**
> *"Turing miró el mensaje durante un largo momento.*
> *Luego lo entregó sin decir nada.*
> *Ellos nunca sabrían que fue él.*
> *Esa era la regla. El secreto tenía que durar.*
> *Y duró. Hasta mucho tiempo después de que ya no importaba."*

### El Costo del Secreto
Una nota al margen del nivel explica algo histórico importante: la información descifrada no siempre podía usarse, porque usarla revelaría que Enigma había sido descifrada. En algunos casos, se permitieron ataques enemigos que podrían haberse evitado para proteger el secreto. El jugador lee esto en una nota de expediente clasificado.

---

## Experiencia 2 — El Test

### El Epígrafe
> *"¿Puede pensar una máquina?"*
> — Alan Turing, "Computing Machinery and Intelligence" (1950)

### Descripción
El famoso **Test de Turing** (formalmente llamado por Turing "el juego de la imitación"). El jugador recibe mensajes de texto y debe determinar si provienen de un humano o de una máquina.

### Mecánica: El Juego de la Imitación

El jugador es el **Juez**. Recibe 5 conversaciones por turno de texto. Cada conversación es con una entidad desconocida (humano o máquina). El jugador debe hacer preguntas y, al final, decidir: ¿humano o máquina?

#### Tipos de Respuestas

**Respuestas claramente de máquina (1950):**
> *"La suma de 2 y 2 es 4."*
> *"La capital de Francia es París."*
> *"Proceso tu consulta. Respuesta: no comprendo."*

**Respuestas claramente humanas:**
> *"Uf, las matemáticas nunca fueron lo mío. Creo que es 4, ¿no?"*
> *"París, creo. Aunque nunca he ido. Tengo ganas de ir algún día."*
> *"Esa pregunta me parece un poco rara, ¿a qué viene?"*

**Respuestas ambiguas (la zona gris):**
> *"La respuesta depende del contexto que defines como 'emoción'. Si defines emoción como estado funcional que influye en el procesamiento, entonces sí las tengo. Si las defines como experiencia subjetiva, la pregunta es filosóficamente irresoluble."*

*(¿Máquina muy sofisticada? ¿Filósofo humano?)* 

#### El Giro del Nivel
Al final del test, el jugador descubre los resultados de sus respuestas. Pero hay un momento de inversión: Turing aparece en pantalla (texto, no sprite) y dice:

> *"¿Y si te digo que algunas de las respuestas 'humanas' eran de máquinas?*
> *¿Y que algunas de las respuestas 'de máquina' eran de humanos que decidieron responder así?*
>
> *La pregunta no es si la máquina puede imitar al humano.*
> *La pregunta es: ¿cuánto tiempo llevamos los humanos imitando a la máquina?"*

### La Reflexión Implícita
Este nivel no tiene victoria ni derrota. Solo reflexión. Al final, el jugador puede leer el paper original de Turing de 1950 en una versión resumida dentro del juego.

---

## Experiencia 3 — El Jardín

### Descripción
1952. Alan Turing ya no trabaja en Bletchley Park. El secreto de su trabajo está clasificado. Vive en Manchester, trabaja en computación y en biología matemática. En su jardín, cultiva flores.

**Esta experiencia es de respiro.** No hay peligro, no hay puzzles urgentes. Solo el jardín.

### Mecánica: La Exploración Contemplativa

El jardín de Turing es un espacio pequeño y libre de explorar en vista lateral (side-scroll). Turing camina lento, puede detenerse a observar plantas, puede sentarse en el banco de madera.

#### Elementos Interactuables

- **Las flores:** Cada flor que el jugador inspecciona tiene una nota de Turing. Son reflexiones matemáticas sobre las flores mismas (morfogénesis — el estudio matemático de cómo los patrones biológicos emergen):
  > *"¿Por qué las flores tienen cinco pétalos? ¿Por qué los girasoles siguen la espiral de Fibonacci? El universo tiene una estética que es también matemática. O una matemática que es también estética."*

- **El banco:** Turing puede sentarse. Pasa tiempo mirando el cielo. Una animación de nubes pasa lentamente. No hay texto. Solo la pausa.

- **El cuaderno:** En la mesa del jardín, hay un cuaderno abierto. El jugador puede leer reflexiones de Turing sobre la computación, la conciencia y el futuro:
  > *"Creo que en cincuenta años será posible programar computadoras para que jueguen el juego de la imitación tan bien que el interrogador promedio no tendrá más del 70% de probabilidades de identificar correctamente a la máquina después de cinco minutos de preguntas. La palabra 'pensar' tendrá un significado diferente."*

- **El manzano:** Hay un manzano en el fondo del jardín. Sus manzanas brillan levemente. No hay texto al inspeccionarlo. Solo una pausa larga. (El manzano es el elemento más silencioso del jardín. También el más cargado de significado hacia el final.)

### Tono Musical
Música suave, instrumental, en modo mayor. La única sección de la experiencia con música no tensa. Como un respiro.

### La Transición
Al salir del jardín, el texto dice:

> *"Alan Turing cultivó su jardín durante dos años.*
> *En enero de 1952, reportó un robo en su casa.*
> *La investigación policial reveló que tenía pareja.*
> *Su pareja era un hombre.*
> *El Estado decidió que eso era un crimen."*

---

## Experiencia 4 — La Injusticia

### Descripción
**Sin mecánicas de juego.** Solo relato. Solo texto.

### Por Qué Esta Sección Existe
La Experiencia 4 existe porque sería deshonesto hacer un homenaje a Turing sin confrontar directamente lo que le hicieron. No como dato histórico lejano y neutral — sino como lo que fue: una injusticia específica, institucional, con nombre y apellido, cometida contra una persona específica.

El jugador no puede hacer nada. No hay botones. Solo leer.

### La Secuencia de Texto

La pantalla es gris. Sin decoración. Sin efectos. Texto blanco. Cada párrafo aparece con un click o automáticamente cada 8 segundos.

---

> *Alan Turing fue acusado de "indecencia grave" en 1952.*
> *El delito: tener relaciones consensuales con otro hombre adulto.*
> *La homosexualidad era ilegal en el Reino Unido.*

---

> *Turing fue sometido a "castración química": inyecciones de estrógeno*
> *como alternativa a la prisión.*
> *El tratamiento le causó ginecomastia y cambios físicos irreversibles.*
> *Lo llamaban "tratamiento".*

---

> *En 1952, perdió su autorización de seguridad.*
> *Ya no podía trabajar en criptografía para el gobierno.*
> *El hombre que salvó a ese gobierno no podía ser de fiar.*

---

> *El 8 de junio de 1954, la señora de la limpieza lo encontró muerto.*
> *Tenía 41 años.*
> *Junto a su cama: una manzana mordida con cianuro.*
> *No hubo nota.*

---

> *El coroner determinó suicidio.*
> *Su madre insistió hasta el final en que fue un accidente de laboratorio.*
> *Nadie sabe con certeza qué fue.*

---

> *El gobierno británico tardó hasta 2009 en emitir una disculpa oficial.*
> *Y hasta 2013 en otorgarle el indulto real.*
> *Póstumo.*
> *Cuarenta y nueve años después de su muerte.*

---

> *Alan Turing desarrolló las bases teóricas de la computación moderna.*
> *Sin su trabajo, no existiría la informática tal como la conocemos.*
> *El dispositivo con el que estás jugando esto funciona por sus ideas.*

---

> *Fue juzgado por los que salvó.*
> *Fue destruido por el Estado al que protegió.*
> *Y el Estado esperó cincuenta años para decir perdón.*

---

> *El manzano del jardín todavía da manzanas.*

---

**Pausa larga. Pantalla en negro. Luego aparece la pantalla final.**

---

## Pantalla Final de Homenaje

---

> **💻 En Homenaje a Alan Mathison Turing**
> *Maida Vale, Londres, 23 de junio de 1912 — Wilmslow, Cheshire, 8 de junio de 1954*
>
> **Padre de la ciencia de la computación y de la inteligencia artificial.**
>
> Sus contribuciones principales:
> - **La Máquina de Turing (1936):** Modelo matemático de computación que es la base teórica de todo ordenador moderno
> - **El trabajo en Bletchley Park (1939-1945):** Descifrado del código Enigma, estimado que salvó entre 14 y 21 millones de vidas
> - **Computing Machinery and Intelligence (1950):** El paper que propone el Test de Turing y pregunta por primera vez de manera rigurosa "¿pueden pensar las máquinas?"
> - **Morfogénesis matemática (1952):** Modelo matemático de cómo los patrones biológicos emergen de procesos químicos simples
>
> El **Premio Turing** es el más alto reconocimiento en ciencias de la computación, equivalente al Nobel.
>
> La cara de Alan Turing aparece en el billete de 50 libras esterlinas desde 2021.
>
> La **Ley Turing** (2017) en el Reino Unido amnistió póstumamente a los hombres condenados bajo las leyes de sodomía histórica.
>
> **Sobre el costo humano de la intolerancia:**
> Alan Turing es solo el caso más famoso. Miles de hombres fueron procesados bajo las mismas leyes en el mismo período.
> La mayoría no tenían nombre en la historia. No tenían máquinas que llevarán su nombre.
>
> *"Solo podemos ver un poco hacia adelante,*
> *pero podemos ver suficiente para reconocer que hay mucho por hacer."*
> — Alan Turing

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
turing-jardin-maquinas/
│
├── index.html                     # Entrada a Bletchley Park
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Paleta gris industrial, CRT verde
│   ├── garden.css                 # Estilos del jardín (únicos colores vivos)
│   ├── injustice.css              # Pantalla gris plana sin decoración
│   └── animations.css             # Rotores de la Bombe, teletipo
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── enigma.js                  # Simulación del cifrado Enigma
│   ├── bombe.js                   # Animación de La Bombe
│   ├── turing-test.js             # El Test: diálogos y evaluación
│   ├── garden.js                  # Exploración del jardín
│   ├── injustice.js               # Secuencia narrativa final (solo texto)
│   └── canvas-renderer.js         # Render Canvas 2D
│
├── assets/
│   ├── sprites/
│   │   ├── turing/                # Alan Turing en varias escenas
│   │   ├── bombe-machine.png      # La máquina Bombe (animada)
│   │   └── garden/                # Flores, banco, manzano
│   ├── backgrounds/
│   │   ├── bletchley-office.png   # Oficina en Bletchley Park
│   │   ├── turing-test-room.png   # Sala del Test de Turing
│   │   ├── garden.png             # El jardín
│   │   └── grey-flat.png          # Fondo gris de La Injusticia
│   └── audio/
│       ├── enigma-machine.mp3     # Sonido mecánico de rotores
│       ├── teletype.mp3           # Teletipo recibiendo mensaje
│       ├── garden-birds.mp3       # Pájaros y viento en el jardín
│       └── silence.mp3            # 3 segundos de silencio para La Injusticia
│
└── data/
    ├── enigma-messages.json       # Mensajes cifrados/descifrados
    ├── turing-test-dialogues.json # Conversaciones del Test
    └── garden-notes.json          # Notas de Turing en el jardín
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **El Jardín de las Máquinas** es una obra de homenaje cultural sin fines comerciales.
>
> Alan Turing (1912-1954) es una figura histórica. Los hechos biográficos presentados están basados en registros históricos documentados.
>
> Las citas de Alan Turing son de dominio público o se presentan con atribución explícita.
>
> La simulación de la máquina Enigma y la Bombe presentada en este juego es una simplificación pedagógica con fines educativos y de entretenimiento. No es una representación técnica exacta de los sistemas históricos.
>
> La Máquina de Turing como concepto matemático es de dominio público.
>
> Esta obra no está afiliada con ninguna institución gubernamental, entidad militar, fundación de historia computacional ni con el Gobierno del Reino Unido.
