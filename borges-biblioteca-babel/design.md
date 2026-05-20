# La Biblioteca de Babel
### Documento de Diseño — Versión 1.0
**Homenaje a Jorge Luis Borges**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — El Hexágono](#experiencia-1--el-hexágono)
4. [Experiencia 2 — El Libro Total](#experiencia-2--el-libro-total)
5. [Experiencia 3 — El Espejo](#experiencia-3--el-espejo)
6. [Experiencia 4 — El Bibliotecario](#experiencia-4--el-bibliotecario)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**La Biblioteca de Babel** es una experiencia interactiva basada en el cuento homónimo de Jorge Luis Borges (1941). El jugador es un **Bibliotecario** que existe dentro de la Biblioteca de Babel: una estructura infinita de hexágonos que contiene todos los libros posibles, todos los que se pueden escribir con las 25 letras ortográficas, el punto, la coma y el espacio.

En algún lugar de la Biblioteca existe **El Libro Total**: el libro que contiene en sus páginas todos los demás libros. El jugador busca ese libro. Pero en una biblioteca donde todos los libros posibles existen, también existen todos los libros falsos, todos los libros inútiles, todos los libros que mienten. ¿Cómo distinguir la verdad del sinsentido cuando ambos tienen la misma apariencia?

**Tono narrativo:** Filosófico, sereno, algo inquietante. El humor de Borges es sutil y académico. La locura de la Biblioteca es fría, matemática, tranquila. No hay monstruos — hay infinito, que es más terrorífico.

**Temas centrales:**
- La paradoja del libro que contiene todo
- El laberinto como metáfora del universo
- El espejo como duplicación del yo
- La búsqueda de sentido en el caos
- La literatura como sistema cerrado que se contiene a sí mismo

**Duración estimada:** 20 a 30 minutos.

---

## Estética Visual

### Filosofía Visual
**Pixel art en sepia y papel envejecido.** La Biblioteca de Babel existe fuera del tiempo. Sus hexágonos son de madera pulida, sus libros son de papel amarillento, su luz viene de lámparas de gas que nunca se apagan. El texto es el elemento visual más importante — no como decoración, sino como protagonista.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Papel de libros | Sepia cálido | `#D4B896` |
| Texto en libros | Sepia oscuro | `#4A3728` |
| Madera de estanterías | Castaño oscuro | `#3E2314` |
| Suelo del hexágono | Roble envejecido | `#8B6914` |
| Techo del hexágono | Negro de tinta | `#1A1008` |
| Luz de lámpara | Ámbar cálido | `#C4860A` |
| El Bibliotecario | Silueta gris | `#5A5A5A` |
| El Libro Verdadero | Blanco luminoso | `#F8F8F0` |
| El Espejo | Plata fría | `#C0C0C0` |
| Texto significativo | Negro puro | `#000000` |

### El Texto como Elemento Visual
En La Biblioteca de Babel, el texto no es solo narración — **es arquitectura**. Las paredes de los hexágonos están cubiertas de letras. Las páginas de los libros muestran texto real (generado proceduralmente). Los títulos de los estantes son combinaciones de letras sin sentido.

Todo esto está en pixel art, pero el pixel art de texto es deliberadamente legible. El jugador puede leer fragmentos de los libros y debe distinguir el sentido del nonsense.

### Tipografía
- **Títulos de experiencia:** Fuente serif clásica en mayúsculas (ej. *Playfair Display*)
- **Texto de libros:** Serif envejecido de cuerpo pequeño (ej. *EB Garamond*)
- **Narración de Borges:** Párrafos bien formados con sangría, como una novela bien editada
- **El Libro Total:** Tipografía perfecta, clara, sin errores — contrasta con el resto

### Iluminación
Una sola lámpara de gas por hexágono. La luz es circular, cálida en el centro, fría y oscura en los bordes donde las estanterías se pierden en la penumbra. El infinito de la Biblioteca se sugiere por la oscuridad, no por la escala.

---

## Experiencia 1 — El Hexágono

### El Epígrafe
> *"El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y tal vez infinito, de galerías hexagonales..."*
> — Jorge Luis Borges, La Biblioteca de Babel (1941)

### Descripción
El jugador despierta en el centro de un hexágono de la Biblioteca. No sabe cómo llegó. No sabe hace cuánto lleva en la Biblioteca. Ningún Bibliotecario recuerda una vida fuera de ella.

### Mecánica: Navegación Laberíntica Procedural

El hexágono es la unidad de la Biblioteca. Tiene 6 paredes. Cada pared tiene una puerta que lleva a otro hexágono. Desde el centro, el jugador ve 6 puertas.

#### Generación Procedural
Los hexágonos se generan algorítmicamente al pasar cada puerta. El algoritmo garantiza:
- Que siempre existe al menos un camino a cada objetivo
- Que los hexágonos visitados se recuerdan (minimapa circular en la esquina)
- Que los hexágonos tienen combinaciones pseudo-aleatorias de características:

| Característica | Variantes |
|----------------|-----------|
| Número de estanterías | 4, 5, 6 |
| Estado de los libros | Intactos, desordenados, quemados parcialmente |
| Luz de lámpara | Normal, parpadeante, apagada |
| Presencia de otros Bibliotecarios | Sí (0-2) o No |
| Objetos especiales | Ninguno, escalera, espejo, libro destacado |

#### La Orientación en el Infinito
El minimapa muestra los últimos 7 hexágonos visitados. Más allá, el mapa se vuelve niebla. El jugador puede marcar hexágonos con símbolos (marcadores de tiza en la pared).

#### Los Libros
En cada hexágono hay estanterías con libros. El jugador puede inspeccionar cualquier libro. Los libros tienen:
- Un **título** en la etiqueta del lomo: combinación de letras (ej. "Agf zrtz, bxb")
- Un **texto interior** generado algorítmicamente: mezcla de palabras reales con nonsense
- Una **señal de valor**: el 99.9% de los libros son inútiles; ocasionalmente aparece una frase con sentido

**Ejemplos de páginas de libros (generadas):**
```
"agb bna cmo xhz ler pod mnt"
"el hombre que buscaba el libro no encontró"
"zxqp mntb agtr lkjhg cdf bns"
"la biblioteca existe ab aeterno"
```

#### Los Otros Bibliotecarios
Si hay otros Bibliotecarios en el hexágono, el jugador puede hablar con ellos. Dan pistas sobre la dirección del Libro Total, pero sus pistas son a veces contradictorias:

> *"El Libro Total está al norte. Siempre al norte. Llevo 30 años yendo al norte y sé que existe porque alguien me lo dijo."*

> *"El Libro Total no existe. Ya lo encontré. Lo leí. No decía nada. El Libro que contiene todo contiene también el silencio."*

---

## Experiencia 2 — El Libro Total

### El Epígrafe
> *"También hubo hombres que se suicidaron para no morir sin haber descifrado ese libro. Hay buscadores. Los he visto en el ejercicio de su función.*"
> — Jorge Luis Borges, La Biblioteca de Babel (1941)

### Descripción
El jugador encuentra un hexágono diferente. La lámpara aquí es más brillante. En el centro de la sala, sobre un pedestal de madera, hay un libro que no está en las estanterías: **El Libro Total**.

### Mecánica: El Puzzle de Patrones

El Libro Total no se puede simplemente leer. Está codificado. El texto parece inicialmente idéntico al nonsense de los otros libros. Pero hay un patrón.

#### El Sistema de Descifrado
El jugador debe identificar secuencias con sentido dentro del ruido. La pantalla muestra una página del libro (texto completo en pixel art). El jugador hace clic en palabras/frases que cree que son significativas.

**Mecánica de validación:**
- Frases con sentido: se marcan en dorado
- Frases sin sentido seleccionadas: permanecen grises y el libro "tiembla"
- Al identificar 5 frases correctas seguidas, se desbloquea la siguiente página

**Ejemplo de página:**
```
xbt agf mnzk
    la verdad existe en toda combinación posible
bnt zxqp kljh agtr
    incluso en el caos hay un orden que el caos no puede ver
mnt pod zxb agf
    porque el caos también es una forma
qpr mnt bxz agf
    porque el sinsentido también fue escrito
```

*(Las frases en español serían las correctas a identificar entre el ruido)*

#### El Hallazgo de la Contradicción
Al llegar a la página final del Libro Total, el jugador encuentra algo inesperado. El libro dice:

> *"Este libro contiene todos los libros. Incluyendo el libro que dice que este libro no existe. Por lo tanto, este libro no existe. Por lo tanto, todos los libros que contiene no existen. Por lo tanto, ningún libro en la Biblioteca existe. Por lo tanto, la Biblioteca tampoco existe. Por lo tanto, tú no exis"*

El texto se corta. La página siguiente está en blanco.

**Texto del narrador:**
> *"El Bibliotecario cerró el libro.*
> *No con decepción.*
> *Con algo más parecido al reconocimiento.*
> *Como cuando uno llega al final de un chiste y entiende que el chiste era el camino, no el destino."*

---

## Experiencia 3 — El Espejo

### El Epígrafe
> *"Los espejos y la cópula son abominables, porque multiplican el número de los hombres."*
> — Jorge Luis Borges, Tlön, Uqbar, Orbis Tertius (1940)

### Descripción
Un hexágono con un espejo en la pared norte. Los espejos son motivo recurrente en Borges: la duplicación, la copia, el yo que observa al yo que observa.

### Mecánica: El Laberinto de Espejos

Al pasar a través del espejo (es traspasable), el jugador entra en una versión especular de la Biblioteca. La misma estructura, pero reflejada. Izquierda y derecha invertidas. El texto de los libros es texto en espejo.

#### El Doppelgänger
En el laberinto especular, el jugador es seguido por su propio reflejo — el mismo sprite de Bibliotecario, pero en espejo. El Doppelgänger no es hostil, pero copia todos los movimientos del jugador con un retraso de 2 segundos.

#### El Puzzle del Reflejo
Para salir del laberinto de espejos, el jugador debe llegar a la "puerta de salida" ubicada al centro de una sala circular. El Doppelgänger bloquea la puerta porque hace exactamente los mismos movimientos. 

**Solución:** El jugador debe detenerse completamente durante 5 segundos. El Doppelgänger, copiando el movimiento con retraso, seguirá moviéndose después de que el jugador se detenga y se alejará de la puerta. Ese es el momento de cruzar.

**Enseñanza:** La paradoja del yo observado. Para superar a tu reflejo, debes dejar de actuar.

### Texto del Espejo
Al salir del laberinto especular, el jugador puede leer un libro que estaba en la sala de salida. Texto:

> *"He pasado toda mi vida en esta Biblioteca.*
> *He visto hombres perder la razón buscando el Libro Total.*
> *He visto hombres perder la razón creyendo haberlo encontrado.*
> *He visto hombres encontrarse a sí mismos en un espejo y no reconocerse.*
>
> *El espejo es la trampa más honesta de la Biblioteca.*
> *Te muestra exactamente lo que eres.*
> *Y eso, para la mayoría, es suficiente para perderse."*

---

## Experiencia 4 — El Bibliotecario

### El Epígrafe
> *"Yo afirmo que la Biblioteca es interminable. Los idealistas arguyen que las salas hexagonales son una forma necesaria del espacio puro o, por lo menos, de nuestra intuición del espacio."*
> — Jorge Luis Borges, La Biblioteca de Babel (1941)

### Descripción
En un hexágono diferente a todos los demás, el jugador encuentra al **Bibliotecario Eterno**: un anciano que lleva en la Biblioteca más tiempo del que puede recordar. No sabe si alguna vez hubo un exterior. Ha leído millones de libros. Ha encontrado el Libro Total. Lo perdió. Lo encontró de nuevo. Lo perdió otra vez.

### El Diálogo Filosófico
Este es el corazón narrativo de toda la experiencia. El diálogo es lineal pero extenso. El jugador puede hacer preguntas eligiendo entre opciones.

---

**EL BIBLIOTECARIO:** *"Otro buscador. ¿Del Libro Total, supongo?"*

*(El jugador elige:)*
- **"Sí. ¿Dónde está?"**
- **"Ya lo encontré. No decía nada que no supiera."**
- **"Ya no sé por qué estoy buscando."**

---

**Si el jugador dice "Sí. ¿Dónde está?":**

> *"El Libro Total existe en cada hexágono. También no existe en ninguno. Estas dos afirmaciones son simultáneamente verdaderas, y eso no es una contradicción: es la definición precisa de una biblioteca infinita. En infinitas páginas, todo existe. Incluyendo la afirmación de que nada existe."*

---

**Si el jugador dice "Ya lo encontré. No decía nada que no supiera.":**

> *"Ah. Entonces entendiste algo que a mí me costó cuarenta años comprender. La búsqueda del Libro Total no era para encontrar el libro. Era para descubrir quién eres cuando lo encuentras y no cambia nada. Eso es lo que la Biblioteca quería enseñarte."*

---

**Si el jugador dice "Ya no sé por qué estoy buscando.":**

> *"Ese es el estado más honesto en que alguien puede estar en esta Biblioteca. El 'por qué' es una pregunta que la Biblioteca no puede responder, porque fue construida antes de que existieran los por qués. La Biblioteca simplemente es. Como tú. La pregunta no es por qué buscas. La pregunta es si puedes existir sin buscar."*

---

### La Pregunta Final
Al final de todos los diálogos, el Bibliotecario hace una pregunta:

> *"¿Sabes cuántos libros posibles existen en esta Biblioteca?*
>
> *Con 25 símbolos, páginas de 40 líneas, 80 caracteres por línea, 410 páginas por libro...*
> *el número es* 25^(1,312,000).*
> *Un número tan grande que no cabe en ningún libro de la Biblioteca para expresarlo completo.*
>
> *Ahora dime: ¿cuántos de esos libros eres tú capaz de leer en una vida?*
>
> *Y sin embargo.*
> *Sin embargo.*
>
> *¿No vale la pena empezar?"*

La pantalla hace fade. Aparece el homenaje.

---

## Pantalla Final de Homenaje

---

> **📚 En Homenaje a Jorge Luis Borges**
> *Buenos Aires, 24 de agosto de 1899 — Ginebra, 14 de junio de 1986*
>
> Jorge Luis Borges es considerado uno de los escritores más influyentes del siglo XX.
> Su obra es fundamentalmente el cuento y el ensayo — géneros que llevó a una perfección técnica y filosófica sin precedentes.
>
> **La Biblioteca de Babel** fue publicada en 1941 en la colección *El Jardín de Senderos que se Bifurcan*.
> El cuento anticipa conceptos de la teoría de la información, la computación y la filosofía del lenguaje
> que no serían formalizados matemáticamente hasta décadas después.
>
> Borges perdió progresivamente la vista a partir de los 50 años.
> Siendo director de la Biblioteca Nacional Argentina, era incapaz de leer sus propios libros.
> Escribió sobre esa ironía con la misma elegancia serena con que escribía sobre el infinito.
>
> **Sobre la literatura como sistema:**
> Borges propuso que toda la literatura ya fue escrita.
> Que los escritores no crean sino que descubren textos que ya existían en potencia.
> Que leer y escribir son el mismo acto visto desde lados opuestos del mismo espejo.
>
> *"Siempre imaginé que el Paraíso sería algún tipo de biblioteca."*
> — Jorge Luis Borges

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
borges-biblioteca-babel/
│
├── index.html                     # Entrada a la Biblioteca
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Paleta sepia, tipografía de libro
│   ├── hexagon.css                # Estilos del hexágono y estanterías
│   └── mirror.css                 # Efectos del laberinto de espejos
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── hexagon-generator.js       # Generador procedural de hexágonos
│   ├── book-generator.js          # Generador de texto pseudo-aleatorio
│   ├── book-total.js              # Puzzle del Libro Total
│   ├── mirror-maze.js             # Laberinto de espejos y doppelgänger
│   ├── librarian-dialogue.js      # Sistema de diálogo filosófico
│   ├── minimap.js                 # Minimapa circular de hexágonos
│   └── canvas-renderer.js         # Render Canvas 2D
│
├── assets/
│   ├── sprites/
│   │   ├── librarian/             # Sprite del jugador (varios estados)
│   │   ├── doppelganger.png       # Reflejo especular
│   │   ├── eternal-librarian.png  # El Bibliotecario Eterno
│   │   └── book-pedestal.png      # El Libro Total sobre pedestal
│   ├── backgrounds/
│   │   ├── hexagon-base.png       # Hexágono base
│   │   ├── hexagon-mirror.png     # Hexágono especular (invertido)
│   │   └── hexagon-special.png    # Hexágonos de puzzles
│   └── audio/
│       ├── library-ambience.mp3   # Silencio de biblioteca con páginas
│       ├── book-open.mp3          # Abrir un libro
│       ├── mirror-whoosh.mp3      # Pasar por el espejo
│       ├── revelation.mp3         # Tema del Libro Total
│       └── dialogue-theme.mp3     # Tema del Bibliotecario Eterno
│
└── data/
    ├── words-es.json              # Vocabulario español para generador
    ├── nonsense-patterns.json     # Patrones de texto sin sentido
    ├── book-total-pages.json      # Páginas con solución del puzzle
    └── librarian-dialogues.json   # Árbol de diálogos filosóficos
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **La Biblioteca de Babel** (obra arcade-homenaje) es una experiencia cultural sin fines comerciales.
>
> El cuento "La Biblioteca de Babel" de Jorge Luis Borges (1899-1986) fue publicado en 1941. En muchas jurisdicciones, los derechos de autor sobre la obra de Borges están administrados por la Fundación Internacional Jorge Luis Borges.
>
> Esta experiencia interactiva es una **interpretación artística y homenaje** al cuento de Borges. No reproduce el texto completo de ninguna obra protegida. Los fragmentos citados son de uso académico y cultural limitado.
>
> Las citas de Borges utilizadas en esta experiencia se atribuyen explícitamente a su autor en cada aparición.
>
> Esta obra no está afiliada con la Fundación Internacional Jorge Luis Borges ni con ninguna editorial que administre sus derechos.
