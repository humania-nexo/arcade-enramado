# Macondo
### Documento de Diseño — Versión 1.0
**Homenaje a Gabriel García Márquez y el Realismo Mágico Latinoamericano**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — La Fundación](#experiencia-1--la-fundación)
4. [Experiencia 2 — Los Muertos](#experiencia-2--los-muertos)
5. [Experiencia 3 — El Diluvio](#experiencia-3--el-diluvio)
6. [Experiencia 4 — La Profecía](#experiencia-4--la-profecía)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**Macondo** es una experiencia interactiva ambientada en el pueblo mítico que Gabriel García Márquez creó en *Cien años de soledad* (1967). Macondo no es solo un lugar — es una forma de estar en el mundo. Un pueblo donde los muertos caminan y conversan, donde sube una nube de mariposas amarillas cuando Mauricio Babilonia aparece, donde llover cuatro años, once meses y dos días es un hecho normal que la gente espera con paciencia.

El jugador explora Macondo en diferentes momentos de su historia circular: desde su fundación hasta la profecía que anuncia su final. La paradoja temporal es central: en Macondo, el pasado y el futuro coexisten porque el tiempo no es una línea. Es una espiral que regresa siempre al mismo lugar.

**Tono narrativo:** Cálido, poético, con humor tropical profundo. García Márquez escribía la magia con la misma seriedad con que un periodista escribe los hechos. El realismo mágico no es fantasía: es la realidad narrada desde una perspectiva que no distingue lo extraordinario de lo cotidiano.

**Temas centrales:**
- El tiempo como ciclo, no como progresión
- Los muertos como parte de la comunidad de los vivos
- La soledad como condición Buendía
- El amor como catástrofe y como salvación
- La memoria colectiva de un pueblo

**Duración estimada:** 25 a 35 minutos.

---

## Estética Visual

### Filosofía Visual
**Pixel art tropical en paleta cálida y saturada.** Macondo está en el Caribe colombiano. La luz es intensa, los colores son densos, la vegetación es excesiva. El contraste entre el calor visual del pueblo y el frío emocional de los Buendía es parte de la estética.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Tierra de Macondo | Ocre rojo tropical | `#C0392B` con textura |
| Vegetación exuberante | Verde intenso saturado | `#27AE60` |
| Casas de Macondo | Blanco encalado | `#ECF0F1` |
| Cielo de Caribe | Azul cerúleo brillante | `#2980B9` |
| Mariposas amarillas | Amarillo cálido vibrante | `#F1C40F` |
| Los muertos | Tonos desaturados del color de su vida | varios |
| El diluvio | Gris azulado pluvial | `#7F8C8D` |
| El manuscrito | Sepia envejecida con humedad | `#B8860B` |
| Texto del manuscrito | Negro con sangrado sepia | `#2C1810` |
| José Arcadio Buendía | Marrón piel oscuro + blanco | `#8D6E63` |

### El Efecto de Mariposas Amarillas
Las **mariposas amarillas** son el efecto visual más importante de toda la experiencia. Aparecen como partículas animadas siempre que algo mágico ocurre: cuando un muerto aparece, cuando el tiempo salta, cuando la profecía se acerca. Son pequeños píxeles amarillos que vuelan en patrones orgánicos mediante un sistema de partículas simple pero efectivo.

```javascript
// Sistema de mariposas
class Butterfly {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.wingPhase = Math.random() * Math.PI * 2;
  }
  update() {
    this.wingPhase += 0.15;
    this.x += this.vx + Math.sin(this.wingPhase) * 0.5;
    this.y += this.vy + Math.cos(this.wingPhase * 0.7) * 0.3;
  }
}
```

### Tipografía
- **Títulos de experiencia:** Fuente serif latinoamericana cálida (ej. *Lora* o *Bitter*)
- **Narración:** Cuerpo serif con párrafos bien justificados, como una novela impresa en Bogotá en 1967
- **Los muertos** hablan en texto con ligero *fade* — más transparente que los vivos
- **El manuscrito de Melquíades** aparece en texto en espejo: el jugador debe invertirlo mentalmente

### Animaciones Características
- **La lluvia del diluvio:** Líneas verticales de píxeles azules, densas y persistentes
- **El polvo de plátano:** En el episodio de la masacre de las bananeras, cae un polvo dorado que oscurece la pantalla
- **El tiempo circular:** Cuando el tiempo salta, la pantalla hace un efecto de *spin* suave de 360° antes de mostrar la nueva era

---

## Experiencia 1 — La Fundación

### El Epígrafe
> *"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."*
> — Gabriel García Márquez, Cien años de soledad (incipit)

### Descripción
El principio de todo. José Arcadio Buendía lidera un grupo de familias a través de la selva para fundar un pueblo en el que nadie haya muerto antes. El jugador participa en la **construcción de Macondo**.

### Mecánica: El Puzzle de Construcción

Vista cenital de un claro en la selva. El jugador debe colocar las primeras casas de Macondo siguiendo las instrucciones de José Arcadio Buendía, quien aparece como NPC en el borde de la pantalla.

#### Sistema de Construcción
El jugador tiene un inventario de piezas:
- Casas (3 tipos: familiar, de adobe, de palma)
- Caminos de tierra
- Pozos de agua
- Árboles de mango

Las piezas se arrastran y sueltan en la cuadrícula. Hay restricciones:
- Las casas no pueden estar más de 3 cuadros de distancia del río
- El camino principal debe ser recto (así lo ordenó José Arcadio)
- Cada familia necesita su propio espacio

#### Las Instrucciones de José Arcadio
José Arcadio Buendía da instrucciones que a veces son sabias y a veces son manías:
> *"Las casas deben estar ubicadas de tal manera que desde cualquier puerta se tenga acceso fácil al río."*
> *"El nombre será Macondo. Lo soñé. En el sueño había ruido y había humedad."*
> *"Aquí no hay muertos todavía. Ese es el truco. Ningún muerto todavía."*

#### El Cometa de Melquíades
A mitad de la construcción, los gitanos llegan. Melquíades, el gitano de los pergaminos, aparece en el mapa. El jugador puede interactuar con él:

> *Melquíades: "He escrito la historia completa de tu familia, José Arcadio. Desde hoy hasta el último Aureliano. Pero está cifrada. En sánscrito."*
>
> *José Arcadio: "¿Para qué cifrarla?"*
>
> *Melquíades: "Porque no se puede leer mientras está sucediendo. Ese es el único truco que conozco."*

#### Macondo Fundada
Al completar el puzzle de construcción, el pueblo se "anima": chimeneas humeando, puertas que se abren, niños corriendo. Un texto aparece:

> *"Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos."*

---

## Experiencia 2 — Los Muertos

### El Epígrafe
> *"Fue como si Dios hubiera resuelto poner a prueba toda capacidad de asombro, y mantuviera a los habitantes de Macondo en un permanente vaivén entre el alborozo y el desencanto, la duda y la revelación, hasta el extremo de que ya nadie podía saber a ciencia cierta dónde estaban los límites de la realidad."*

### Descripción
Los Buendía muertos no se van. Se quedan en Macondo, caminan por la casa, se sientan a la mesa. En esta experiencia, el jugador conversa con los **muertos de la familia Buendía** para obtener pistas sobre la historia del pueblo.

### Mecánica: Los Diálogos con los Muertos

Vista lateral de la casa de los Buendía. Los muertos aparecen como sprites ligeramente transparentes, con los colores desaturados, flotando 2 píxeles sobre el suelo.

#### Los Muertos Disponibles

**Úrsula Iguarán (la matriarca):**
Muerta a los 122 años. Está en la cocina, todavía cocinando, aunque ya no puede tocar nada.
> *"La familia siempre fue la misma. Diferentes nombres, mismas locuras. Los que van a guerra se llaman Aureliano. Los que hacen tonterías por amor se llaman José Arcadio. Nunca entendí por qué no pudieron ser diferentes."*

**El Coronel Aureliano Buendía:**
Muerto en el taller de platería. Está haciendo pescaditos de oro, aunque sus manos ya no dejan huella.
> *"Hice 32 guerras civiles. Las perdí todas. Y al final entendí que no había nada que ganar. Que las guerras no se hacen para ganar. Se hacen para no tener que hacerlas."*

**Rebeca (la primera forastera):**
Muerta en su cuarto, donde vivió sola 40 años después de matar a su marido sin querer.
> *"Vine cargando los huesos de mis padres. Todavía los tengo. No sé dónde enterrarlos. Macondo también los tiene."*

**Remedios la Bella (ascendida al cielo):**
Aparece como excepción: no muerta sino ascendida. Su sprite es más luminoso. Solo aparece brevemente.
> *"...no tengo mucho que decir. Me fui. Es que aquí hacía mucho calor."*

#### El Puzzle de las Pistas
Cada muerto da una pista sobre la ubicación del **manuscrito de Melquíades** (necesario para la Experiencia 4). Las pistas son poéticas y requieren interpretación, no literalidad:

- Úrsula: *"Está en el cuarto donde se olvidó el tiempo."* (El cuarto de Melquíades)
- El Coronel: *"Está donde empezó todo lo que nunca debió empezar."* (El taller de la platería)
- Rebeca: *"Está detrás de los huesos que nunca se enterraron."* (El jardín trasero)

El jugador debe combinar las tres pistas para encontrar la ubicación exacta.

#### El Momento Más Poético
Cuando el jugador ha hablado con todos los muertos, el narrador dice:

> *"En Macondo nadie sabía exactamente cuándo había muerto ni cuándo estaba vivo.*
> *La diferencia nunca fue tan importante como la gente de afuera suponía.*
> *Los muertos cocinaban. Los vivos soñaban.*
> *Era prácticamente lo mismo."*

---

## Experiencia 3 — El Diluvio

### El Epígrafe
> *"Cuatro años, once meses y dos días.*
> *Cuando por fin paró de llover,*
> *el sol salió tan de golpe*
> *que todo el mundo se olvidó*
> *de que alguna vez había tenido miedo."*

### Descripción
El diluvio de los años de lluvia. **4 años, 11 meses y 2 días de lluvia ininterrumpida.** El jugador debe sobrevivir administrando los recursos de la casa Buendía durante la tormenta.

### Mecánica: Resistencia y Gestión

Vista lateral de la casa Buendía inundándose progresivamente. El agua sube 1 píxel cada 30 segundos de juego real. El jugador tiene 5 minutos para gestionar la situación (representando simbólicamente los años del diluvio).

#### Recursos a Gestionar

| Recurso | Descripción | Crisis si llega a 0 |
|---------|-------------|---------------------|
| **Comida** | Reservas de la despensa | Hambre — los personajes se debilitan |
| **Ánimo** | El estado emocional colectivo | Desesperanza — algunos intentan irse |
| **Estructura** | Las paredes de la casa | Derrumbe — secciones de la casa se inundan |
| **Memoria** | El recuerdo de cómo era antes de la lluvia | Amnesia — los personajes olvidan el propósito |

#### Las Acciones del Jugador
El jugador puede hacer clic en diferentes partes de la casa para:
- **Reforzar una pared** (gasta materiales, mejora Estructura)
- **Contar historias** al grupo (gasta tiempo, mejora Ánimo y Memoria)
- **Buscar comida en el jardín inundado** (arriesgado, puede mejorar Comida o empeorar Ánimo)
- **Leer los pergaminos de Melquíades** (siempre disponible, da lore pero no mejora recursos)

#### Los Personajes Durante el Diluvio
Cada miembro de los Buendía tiene una reacción única a la lluvia:
- **Aureliano Segundo:** Celebra, bebe, toca el acordeón. Aumenta Ánimo pero gasta Comida.
- **Fernanda del Carpio:** Escribe cartas a un médico invisible. No hace nada útil pero tampoco daña.
- **Petra Cotes:** La amante. Llega a buscar refugio. Trae comida pero baja el Ánimo de Fernanda.
- **Santa Sofía de la Piedad:** Trabaja en silencio. Siempre. Mejora todos los recursos en pequeña cantidad.

#### Los 1,822 Días
Un contador en la esquina muestra los días transcurridos. Sube en tiempo real acelerado. Al llegar a 1,822 (4 años, 11 meses y 2 días), la lluvia para.

La pantalla hace un corte directo a la luz del sol. Todos los personajes salen. El sol es tan brillante que la pantalla está casi blanca por 3 segundos.

> *"El sol salió.*
> *Nadie dijo nada.*
> *Lo que se había olvidado durante cuatro años no volvió a recordarse.*
> *Era mejor así."*

---

## Experiencia 4 — La Profecía

### El Epígrafe
> *"Antes de llegar al verso final ya había comprendido que no saldría jamás de ese cuarto, pues estaba previsto que la ciudad de los espejos (o los espejismos) sería arrasada por el viento y desterrada de la memoria de los hombres..."*
> — García Márquez, Cien años de soledad (final)

### Descripción
El jugador encuentra el **manuscrito de Melquíades**, el gitano que escribió la historia completa de la familia Buendía en el momento de su fundación. El manuscrito está en sánscrito y además está escrito **en espejo**: el jugador debe descifrar el texto.

### Mecánica: El Texto en Espejo

La pantalla muestra páginas del manuscrito de Melquíades. El texto está escrito horizontalmente pero invertido (como si lo leyeras frente a un espejo). El jugador debe "descifrar" el texto usando una herramienta de espejo en pantalla.

#### La Herramienta de Espejo
Un panel deslizable divide la pantalla. La mitad izquierda muestra el texto invertido. La mitad derecha refleja el texto en espejo, haciéndolo legible. El jugador puede ajustar el tamaño del panel para leer fragmentos más grandes.

#### Lo que Dice el Manuscrito
A medida que el jugador descifra fragmentos, el manuscrito va revelando la historia de los Buendía en orden cronológico inverso — desde el final hasta el principio. Las últimas páginas (las del final de la novela) aparecen primero.

**Fragmentos descifrados (en orden de aparición):**

> *"...y que todo lo escrito en ellos era irrepetible desde siempre y para siempre, porque las estirpes condenadas a cien años de soledad no tenían una segunda oportunidad sobre la tierra."*

> *"...había predicho que la ciudad de los espejos sería arrasada por el viento..."*

> *"...el primero de la estirpe está amarrado en un árbol y al último se lo están comiendo las hormigas..."*

> *"...en el principio fue el hielo, y en el fin será el viento."*

#### La Revelación Final
Al descifrar la última página, el jugador entiende que lo que acaba de leer es todo el juego que acaba de jugar. El manuscrito describía exactamente lo que el jugador experimentó: la fundación, los muertos, el diluvio.

**Texto del narrador:**
> *"El manuscrito lo sabía todo.*
> *Desde el principio.*
> *Macondo había sido descrita antes de existir.*
> *El jugador había recorrido los pasos que Melquíades ya había escrito.*
>
> *¿Eso significa que no había libre albedrío?*
>
> *O significa que el libre albedrío y la profecía son la misma cosa*
> *mirada desde lados opuestos del mismo espejo."*

Las mariposas amarillas llenan la pantalla. El viento empieza. Macondo desaparece en el viento, píxel por píxel.

---

## Pantalla Final de Homenaje

---

> **🦋 En Homenaje a Gabriel García Márquez**
> *Aracataca, Colombia, 6 de marzo de 1927 — Ciudad de México, 17 de abril de 2014*
>
> **Premio Nobel de Literatura, 1982.**
>
> *Cien años de soledad* fue publicada en 1967 por la Editorial Sudamericana, Buenos Aires.
> En la primera semana agotó su primera edición de 8,000 ejemplares.
> Ha vendido más de 50 millones de ejemplares y ha sido traducida a más de 46 idiomas.
>
> El término **Realismo Mágico** fue usado para describir la literatura latinoamericana de esta generación,
> aunque García Márquez siempre dijo que simplemente narraba el mundo como lo vio crecer en Aracataca:
> donde los muertos convivían con los vivos, donde la lluvia podía durar años,
> donde la magia no era excepcional — era la norma cotidiana del Caribe colombiano.
>
> Macondo está basado en Aracataca, el pueblo natal de García Márquez.
> Existe de verdad. Se puede visitar.
> Los habitantes dicen que es exactamente como lo describió en la novela.
>
> **Sobre las mariposas amarillas:**
> Las mariposas amarillas que acompañan a Mauricio Babilonia en la novela
> son uno de los símbolos más recordados de toda la literatura latinoamericana.
> García Márquez dijo que las tomó de un recuerdo real: su abuelo las mencionaba.
>
> *"Macondo no es un lugar.*
> *Es un estado del alma.*
> *Y está en todos los lugares donde la gente todavía cree*
> *que el pasado y el futuro son la misma cosa."*

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
garcia-marquez-macondo/
│
├── index.html                     # Entrada a Macondo (mariposas amarillas animadas)
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Paleta tropical cálida y saturada
│   ├── butterflies.css            # Sistema de partículas de mariposas
│   ├── rain.css                   # Efecto de lluvia del diluvio
│   └── manuscript.css             # Estilos del texto en espejo
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── exp1-foundation.js         # Puzzle de construcción de Macondo
│   ├── exp2-dead.js               # Sistema de diálogos con los muertos
│   ├── exp3-deluge.js             # Gestión de recursos durante el diluvio
│   ├── exp4-prophecy.js           # Puzzle del manuscrito en espejo
│   ├── butterfly-system.js        # Sistema de partículas de mariposas amarillas
│   ├── rain-system.js             # Sistema de lluvia procedural
│   └── canvas-renderer.js         # Render Canvas 2D
│
├── assets/
│   ├── sprites/
│   │   ├── jose-arcadio.png       # José Arcadio Buendía
│   │   ├── ursula.png             # Úrsula (viva y muerta)
│   │   ├── coronel.png            # El Coronel Aureliano Buendía
│   │   ├── rebeca.png             # Rebeca
│   │   ├── remedios.png           # Remedios la Bella
│   │   ├── melquiades.png         # El gitano Melquíades
│   │   ├── buendia-family/        # Otros miembros
│   │   └── butterfly-frames/      # 4 frames de animación de mariposa
│   ├── backgrounds/
│   │   ├── macondo-founding.png   # Claro en la selva
│   │   ├── buendia-house.png      # Casa de los Buendía
│   │   ├── flooded-house.png      # Casa durante el diluvio
│   │   └── manuscrito-room.png    # El cuarto de Melquíades
│   └── audio/
│       ├── caribbean-ambience.mp3 # Calor, pájaros tropicales
│       ├── rain-heavy.mp3         # Lluvia del diluvio
│       ├── accordion.mp3          # Aureliano Segundo durante la lluvia
│       ├── butterflies.mp3        # Aleteo suave
│       └── wind-final.mp3         # El viento del final
│
└── data/
    ├── building-layout.json       # Configuración del puzzle de fundación
    ├── dead-dialogues.json        # Diálogos de los muertos Buendía
    ├── resource-events.json       # Eventos del diluvio
    └── manuscript-pages.json      # Páginas del manuscrito en espejo
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **Macondo** es una obra de homenaje fan-made sin fines comerciales.
>
> *Cien años de soledad* de Gabriel García Márquez es una obra protegida por derechos de autor.
> Los derechos están administrados por Agencia Literaria Carmen Balcells y herederos de García Márquez.
>
> Los fragmentos textuales de *Cien años de soledad* utilizados en esta experiencia se citan con atribución explícita, en cantidad mínima y con propósito cultural y educativo.
>
> Los personajes de la familia Buendía, Macondo y Melquíades son creaciones originales de Gabriel García Márquez y se utilizan en este contexto de homenaje con reconocimiento explícito de su autoría.
>
> Esta obra no está afiliada con los herederos de García Márquez, la Editorial Sudamericana, Random House ni ninguna entidad relacionada con los derechos de *Cien años de soledad*.
>
> Si usted representa los intereses de los derechos de autor y considera que esta obra excede el uso de homenaje cultural, contáctenos para retirar cualquier elemento en disputa.
