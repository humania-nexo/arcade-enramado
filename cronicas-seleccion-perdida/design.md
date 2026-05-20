# Crónicas de la Selección Perdida
### Documento de Diseño — Versión 1.0
**Homenaje a J.K. Rowling y el Universo de Harry Potter**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Módulo de Inicialización — El Libro de Oro](#módulo-de-inicialización--el-libro-de-oro)
4. [Experiencia 1 — El Test de la Contingencia Conductual](#experiencia-1--el-test-de-la-contingencia-conductual)
5. [Experiencia 2 — El Despertar del Avatar](#experiencia-2--el-despertar-del-avatar)
6. [Experiencia 3 — El Rastro de la Alquimia Mental](#experiencia-3--el-rastro-de-la-alquimia-mental)
7. [Experiencia 4 — Las Vacaciones Mágicas](#experiencia-4--las-vacaciones-mágicas)
8. [Sistema de Respaldo de Datos — Código de Hechizo](#sistema-de-respaldo-de-datos--código-de-hechizo)
9. [Arquitectura de Archivos](#arquitectura-de-archivos)
10. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
11. [Nota Legal Fan-Made](#nota-legal-fan-made)

---

## Concepto General

**Crónicas de la Selección Perdida** es una experiencia interactiva narrativa de tipo arcade-homenaje ambientada en un universo de magia medieval inspirado profundamente en el mundo creado por J.K. Rowling. El jugador entra a una academia de magia olvidada donde el Artefacto Selector —una reliquia encantada que asigna a los estudiantes a sus casas— ha desaparecido misteriosamente.

El jugador debe descubrir su propia casa mediante un sistema psicométrico disfrazado de prueba mágica, despertar su avatar con los colores de su casa, resolver misterios en el aula de la Profesora Klein y, finalmente, convencer al Artefacto Selector de que regrese de sus vacaciones autoimpuestas.

**Tono narrativo:** Cálido, humorístico, nostálgico. Reverente con el material fuente pero con personalidad propia.

**Audiencia objetivo:** Fans de Harry Potter de 16 a 40 años, jugadores casuales, personas que disfrutan de experiencias narrativas interactivas.

**Duración estimada de juego:** 25 a 40 minutos para completar todas las experiencias.

---

## Estética Visual

### Paleta General
- **Fondo principal:** Pergamino envejecido (`#F5E6C8`), con textura de papel rugoso
- **Texto primario:** Tinta sepia oscura (`#3B2E1A`)
- **Acentos dorados:** (`#C9A84C`) para bordes, separadores y elementos mágicos
- **Sombras y profundidad:** (`#1A1008`) para efectos de tinta y bordes de viñeta

### Tipografía
- **Títulos:** Fuente serif cursiva estilo medieval (ej. *UnifrakturMaguntia* o *MedievalSharp*)
- **Cuerpo de texto:** Fuente serif legible estilo manuscrito (ej. *Crimson Text*)
- **Código de hechizo:** Monoespaciada estilo rúnico (ej. *Courier New* con decoraciones)

### Elementos Visuales Clave
- **Pergamino animado:** El fondo se desenrolla suavemente al inicio de cada sección
- **Velas parpadeantes:** Luz ambiental dinámica mediante CSS animations con `box-shadow` dorado
- **Partículas mágicas:** Pequeñas chispas doradas flotantes en momentos de transición
- **Sello de lacre:** Al confirmar el nombre, un sello de lacre rojo estampa el papel con un sonido suave
- **Ilustraciones de casas:** Cada casa tiene un emblema dibujado en estilo grabado medieval

### Efectos de Transición
- Páginas que se vuelven como en un libro antiguo (CSS 3D transform)
- Tinta que aparece progresivamente como si alguien estuviera escribiendo en tiempo real
- Efecto de encantamiento: destello dorado antes de revelar información importante

---

## Módulo de Inicialización — El Libro de Oro

### Descripción
El Libro de Oro es la pantalla de bienvenida e ingreso de datos del jugador. Es el primer punto de contacto y establece el tono de toda la experiencia.

### Pantalla de Bienvenida
Al cargar la página, aparece un libro antiguo cerrado sobre un pedestal. El libro se abre solo con una animación de 3 segundos. Aparece la siguiente inscripción en tinta que se escribe sola:

> *"Viajero que cruzas el umbral de esta Academia Olvidada: antes de que el Artefacto Selector pueda conocerte, debes inscribir tu nombre en el Libro de Oro. Solo entonces podrá la magia obrar en ti."*

### Campos de Entrada

#### Campo 1: Nombre del Iniciado
- **Label:** "Inscribe tu nombre verdadero:"
- **Input type:** `text`
- **Placeholder:** *"Escribe aquí..."*
- **Validación:** Mínimo 2 caracteres, máximo 30. Solo letras, espacios y acentos.
- **Feedback de error:** La tinta tiembla y aparece una nota al margen: *"El libro no reconoce ese nombre. Intenta de nuevo."*

#### Campo 2: Selector de Título
El jugador elige cómo desea ser llamado durante su aventura. Las opciones se presentan como tres pergaminos desplegables:

| Título | Descripción Narrativa |
|--------|----------------------|
| **Mago** | Para los que llevan la magia en la sangre |
| **Hechicera** | Para las que dominan el arte del encantamiento |
| **Iniciado/a** | Para los que apenas descubren su poder |

- **Implementación:** Radio buttons personalizados con aspecto de sellos de lacre de diferentes colores
- **Almacenamiento:** `localStorage.setItem('user_title', selectedTitle)`
- **Almacenamiento:** `localStorage.setItem('user_name', enteredName)`

### Botón de Confirmación
- **Texto:** *"Sellar mi Inscripción"*
- **Efecto al hacer clic:** Animación de sello de lacre cayendo sobre el papel, sonido de golpe suave, transición a Experiencia 1

### Variables Globales Establecidas
```javascript
const USER_NAME = localStorage.getItem('user_name');    // "Valeria"
const USER_TITLE = localStorage.getItem('user_title');  // "Hechicera"
const USER_HOUSE = localStorage.getItem('user_house');  // asignado en Experiencia 1
```

---

## Experiencia 1 — El Test de la Contingencia Conductual

### Descripción
El Test de la Contingencia Conductual es el núcleo psicométrico del juego. Presenta entre 15 y 20 preguntas con apariencia mágica y misteriosa, pero con un algoritmo de puntuación oculto que determina la afinidad del jugador con cada una de las cuatro casas.

### Las Cuatro Casas

#### 🐍 La Sagaz Serpiente
- **Valor central:** Astucia, ambición, ingenio, pragmatismo
- **Color primario:** `#0A5C36` (verde oscuro esmeralda)
- **Color secundario:** `#C0C0C0` (plata)
- **Animal:** Serpiente
- **Emblema:** Serpiente enroscada sobre fondo de escamas verdes
- **Descripción narrativa:** *"Los que saben que el fin justifica los medios, que ven el tablero completo cuando otros aún leen las instrucciones."*

#### 🦁 El Orgulloso León
- **Valor central:** Coraje, valentía, caballerosidad, liderazgo
- **Color primario:** `#740001` (rojo granate oscuro)
- **Color secundario:** `#D3A625` (dorado)
- **Animal:** León
- **Emblema:** León rampante sobre fondo de franjas carmesí y dorado
- **Descripción narrativa:** *"Los que corren hacia el peligro cuando todos huyen, que llevan la antorcha aunque les queme la mano."*

#### 🦅 La Sabia Águila
- **Valor central:** Inteligencia, sabiduría, creatividad, aprendizaje
- **Color primario:** `#0E1A40` (azul marino profundo)
- **Color secundario:** `#946B2D` (bronce)
- **Animal:** Águila
- **Emblema:** Águila extendida sobre fondo de estrellas azules
- **Descripción narrativa:** *"Los que preguntan el porqué antes del cómo, que ven belleza en un teorema y poesía en una fórmula."*

#### 🦡 El Tenaz Tejón
- **Valor central:** Lealtad, justicia, trabajo duro, empatía
- **Color primario:** `#ECB939` (amarillo ámbar cálido)
- **Color secundario:** `#1A1A1A` (negro)
- **Animal:** Tejón
- **Emblema:** Tejón sobre fondo de franjas amarillas y negras
- **Descripción narrativa:** *"Los que nunca abandonan a los suyos, que trabajan cuando nadie los mira porque saben que el trabajo mismo es la recompensa."*

---

### Algoritmo de Puntos Oculto

El jugador nunca ve los puntos. Cada respuesta suma valores a un array de cuatro casas:

```javascript
let scores = {
  serpiente: 0,
  leon: 0,
  aguila: 0,
  tejon: 0
};
```

Al final, la casa con mayor puntaje es asignada. En caso de empate, se desempata por la segunda pregunta que tenga mayor diferencia relativa.

---

### Banco de Preguntas (15–20 preguntas)

A continuación se presentan las preguntas con sus opciones y puntajes asignados (ocultos al jugador):

---

**Pregunta 1**
> *"El Artefacto Selector ha desaparecido. ¿Cuál es tu primer instinto?"*

- A) "Busco aliados. Juntos lo encontraremos antes." → Tejón +3, León +1
- B) "Analizo qué pasó antes de moverme. Los datos primero." → Águila +3, Serpiente +1
- C) "Actuaré solo. Soy más rápido sin estorbos." → Serpiente +3
- D) "Protejo a los más jóvenes. Ellos primero." → León +3, Tejón +1

---

**Pregunta 2**
> *"La Profesora Klein ofrece un libro prohibido que contiene conocimiento extraordinario pero peligroso. ¿Lo tomas?"*

- A) "Sí, sin dudar. El conocimiento no es peligroso por sí solo." → Águila +3
- B) "Sí, pero en secreto. ¿Para qué pedir permiso?" → Serpiente +3
- C) "No. Las reglas existen por una razón." → Tejón +2, León +1
- D) "Solo si puedo proteger a otros con ese conocimiento." → León +3

---

**Pregunta 3**
> *"Encuentras una moneda de oro. Nadie te vio. ¿Qué haces?"*

- A) "La entrego al director de inmediato." → Tejón +3, León +1
- B) "La guardo. Alguien la perdió, no es mi problema." → Serpiente +3
- C) "Pregunto en voz alta si alguien la perdió." → León +2, Tejón +2
- D) "La examino para entender de dónde viene primero." → Águila +3

---

**Pregunta 4**
> *"Tu grupo de estudio está equivocado en su planteamiento. ¿Qué haces?"*

- A) "Los corrijo directamente. El tiempo no tiene paciencia con el error." → Serpiente +2, Águila +1
- B) "Les explico con paciencia hasta que todos entiendan." → Tejón +3
- C) "Les presento mi solución con evidencia." → Águila +3
- D) "Los motivo a llegar solos a la conclusión correcta." → León +2, Tejón +1

---

**Pregunta 5**
> *"Un rival injusto gana un torneo por trampas. Nadie más lo sabe. ¿Actúas?"*

- A) "Lo denuncio aunque me afecte a mí también." → León +3, Tejón +1
- B) "Guardo la información para usarla después." → Serpiente +3
- C) "Investigo más antes de actuar." → Águila +2, Tejón +1
- D) "Hablo con él en privado primero." → Tejón +3

---

**Pregunta 6**
> *"¿Qué clase preferirías tomar en la academia?"*

- A) "Encantamientos avanzados — manipular la realidad con palabras." → Serpiente +2, Águila +1
- B) "Historia de la magia — entender el pasado para moldear el futuro." → Águila +3
- C) "Pociones — precisión y paciencia transformando lo mundano en extraordinario." → Tejón +2, Águila +1
- D) "Defensa — estar listo cuando más importa." → León +3

---

**Pregunta 7**
> *"Un amigo te pide que le guardes un secreto peligroso. ¿Lo haces?"*

- A) "Sí, sin importar las consecuencias. La lealtad no negocia." → Tejón +3, León +1
- B) "Depende del tipo de peligro. No soy ciego." → Serpiente +2, Águila +1
- C) "Lo escucho y evalúo si debo intervenir." → Águila +2, Tejón +1
- D) "Lo apoyo pero le digo que busque ayuda también." → León +2, Tejón +2

---

**Pregunta 8**
> *"¿Qué te motiva más?"*

- A) "Entender cómo funciona todo." → Águila +3
- B) "Ser el mejor en lo que hago." → Serpiente +3
- C) "Que las personas a mi alrededor estén bien." → Tejón +3
- D) "Hacer lo correcto aunque cueste." → León +3

---

**Pregunta 9**
> *"El mensajero llega a medianoche con una misión imposible. ¿Qué dices?"*

- A) "¿Qué necesito saber?" → Águila +2, Tejón +1
- B) "¿Cuál es el beneficio?" → Serpiente +3
- C) "¿Cuándo empezamos?" → León +3
- D) "¿Quién más viene conmigo?" → Tejón +3

---

**Pregunta 10**
> *"¿Cómo prefieres resolver un conflicto?"*

- A) "Con argumentos sólidos y hechos." → Águila +3
- B) "Negociando hasta obtener ventaja." → Serpiente +3
- C) "Enfrentándolo directamente y con honestidad." → León +3
- D) "Buscando el punto medio que satisfaga a todos." → Tejón +3

---

**Preguntas 11 a 20** siguen el mismo patrón con temáticas de: amistad bajo presión, uso del poder, respuesta ante el fracaso, actitud ante la fama, manejo del miedo, respuesta ante la injusticia social, preferencias de habitat mágico, relación con los animales fantásticos, actitud ante la muerte, y elección de objeto mágico.

---

### Textos de Resultado por Casa

#### Resultado: La Sagaz Serpiente
> *"[user_title] [user_name], el Artefacto Selector no se equivoca. Eres de La Sagaz Serpiente.*
>
> *No eres el villano que los cuentos temían — eres el estratega que los cuentos necesitaban. Tu mente calcula donde otros solo sienten. Tu ambición no es codicia; es visión. Mientras todos ven el paso siguiente, tú ves el tablero completo.*
>
> *El verde esmeralda de tu casa no es el color del veneno. Es el color de los bosques profundos donde la magia verdadera aún crece salvaje. Llévalo con orgullo, [user_name]. No pides perdón por saber lo que quieres."*

#### Resultado: El Orgulloso León
> *"[user_title] [user_name], el Artefacto Selector reconoce en ti el fuego del León.*
>
> *Corres hacia el peligro cuando todos huyen. No porque no sientas miedo — sino porque decides actuar a pesar de él. Eso, [user_name], es la única definición de valentía que vale la pena.*
>
> *El carmesí de tu casa es el color de la sangre que se derrama por los que amas, del atardecer que anuncia que el día fue vivido. Llevas la antorcha. No la sueltes."*

#### Resultado: La Sabia Águila
> *"[user_title] [user_name], La Sabia Águila te abre sus puertas con reverencia.*
>
> *Tu mente no descansa. Cada respuesta que encuentras te lleva a tres nuevas preguntas, y eso no te frustra — te deleita. Ves belleza donde otros ven ruido. El universo es para ti un texto que leer, no un obstáculo que superar.*
>
> *El azul profundo de tu casa es el color del cielo justo antes del amanecer, cuando todavía no hay luz pero ya hay promesa. Eso eres tú, [user_name]: promesa en movimiento."*

#### Resultado: El Tenaz Tejón
> *"[user_title] [user_name], El Tenaz Tejón te abraza como a uno de los suyos.*
>
> *No buscas el aplauso. No buscas la victoria. Buscas que al final del día, las personas que amas puedan dormir tranquilas sabiendo que tú estás ahí. Y eso, [user_name], es más difícil y más valioso que cualquier trofeo.*
>
> *El ámbar de tu casa es el color de la miel, del trigo maduro, del sol de tarde cayendo sobre el trabajo bien hecho. Eres la piedra sobre la que otros construyen. No lo olvides nunca."*

---

## Experiencia 2 — El Despertar del Avatar

### Descripción
Una vez asignada la casa, el juego transforma visualmente toda la interfaz y presenta al jugador su avatar personalizado. Esta experiencia es visual y emotiva, más que mecánica.

### Secuencia de Activación

1. **Leer localStorage:** El sistema recupera `user_house`, `user_name`, `user_title`
2. **Transición cromática:** La paleta de colores de toda la interfaz cambia gradualmente (CSS transition 2s) hacia los colores de la casa asignada
3. **Aparición del emblema:** El emblema de la casa aparece en el centro de la pantalla con animación de "materialización" (opacity 0 → 1, scale 0.5 → 1, con partículas doradas)
4. **Texto de invocación:** Aparece el texto de bienvenida personalizado con `[user_title]` y `[user_name]`

### Sistema de Cambio de Paleta por Casa

```css
/* La Sagaz Serpiente */
--primary: #0A5C36;
--secondary: #C0C0C0;
--accent: #1A8C55;
--text-on-primary: #F5E6C8;

/* El Orgulloso León */
--primary: #740001;
--secondary: #D3A625;
--accent: #A50002;
--text-on-primary: #F5E6C8;

/* La Sabia Águila */
--primary: #0E1A40;
--secondary: #946B2D;
--accent: #1A2E6E;
--text-on-primary: #E8D5B7;

/* El Tenaz Tejón */
--primary: #ECB939;
--secondary: #1A1A1A;
--accent: #D4A020;
--text-on-primary: #1A1A1A;
```

### Diseño del Avatar en Canvas

El emblema de cada casa se dibuja mediante HTML5 Canvas (400x400px):

- **La Sagaz Serpiente:** Serpiente enroscada en espiral sobre fondo verde oscuro, escamas dibujadas con líneas curvas, ojos color plata
- **El Orgulloso León:** León en posición rampante, melena expresiva dibujada con líneas dinámicas, sobre fondo carmesí
- **La Sabia Águila:** Águila con alas extendidas vista desde abajo, sobre fondo azul nocturno con estrellas pequeñas
- **El Tenaz Tejón:** Tejón mirando de frente con expresión determinada, sobre fondo de rayas amarillas y negras

### La Varita Personal

Además del emblema de casa, se genera una varita personalizada en Canvas basada en el nombre del jugador. El algoritmo usa el hash del nombre para determinar:
- **Madera:** (Roble, Sauce, Acebo, Olmo, Cerezo)
- **Núcleo:** (Pluma de fénix, Pelo de unicornio, Cuerda de corazón de dragón)
- **Longitud:** (25 - 35 cm)
- **Flexibilidad:** (Rígida, Ligeramente flexible, Muy flexible, Sorprendentemente flexible)

El texto se muestra debajo de la varita dibujada:
> *"La madera de Roble, núcleo de Pluma de Fénix, 31 cm, Ligeramente flexible. Tiene opiniones propias, [user_name]. Trátala bien."*

---

## Experiencia 3 — El Rastro de la Alquimia Mental

### Descripción
Una aventura point-and-click 2D ambientada en la oficina de la Profesora Klein. El jugador debe descubrir pistas sobre la desaparición del Artefacto Selector interactuando con objetos del aula.

### Escenario: La Oficina de la Profesora Klein
Vista desde el frente. Elementos interactuables:

| Objeto | Descripción | Interacción |
|--------|-------------|-------------|
| Escritorio principal | Desordenado con papeles y frascos | Revela una nota críptica con coordenadas |
| Estantería izquierda | Llena de libros con títulos absurdos | Hay un libro que no encaja — contiene un mapa |
| Retrato hablante | El retrato de un antiguo director | Da pistas según la casa del jugador |
| Caldero olvidado | Humeante, con líquido azul | Muestra visiones del pasado del Artefacto |
| Ventana | Con vista al jardín mágico | Se ve al Artefacto Selector alejándose |
| Tablero de fórmulas | Ecuaciones mágicas incompletas | Completar la ecuación revela una contraseña |

### Sistema de Diálogos Condicionales por Casa

Los diálogos del Retrato Hablante cambian según `localStorage.getItem('user_house')`:

**Si casa = serpiente:**
> *"Ah, un alumno de La Sagaz Serpiente. Bien. El Artefacto no se perdió por accidente, lo sé. Alguien lo convenció de que merecía un descanso. Necesitas encontrar quién. Busca en el escritorio — hay una carta con sello verde. No se lo digas a nadie más."*

**Si casa = leon:**
> *"Un León, ¡magnífico! El Artefacto Selector está vivo a su manera, y los valientes lo reconocen. No temas tocar el caldero — la visión que te dará asustará a muchos, pero tú la sostendrás. Entra al pasillo norte cuando tengas el mapa."*

**Si casa = aguila:**
> *"Una mente del Águila. Excelente. El Artefacto dejó rastros lógicos que solo alguien como tú puede seguir. Las ecuaciones del tablero — la tercera está incompleta a propósito. Complétala. La respuesta es el camino."*

**Si casa = tejon:**
> *"Oh, un Tejón. El Artefacto te quería, ¿sabes? Siempre dijo que los Tejones eran los únicos que lo escuchaban de verdad. Habla con él cuando lo encuentres. No con argumentos — con honestidad. Eso es lo único que lo convence."*

### Flujo de la Experiencia
1. El jugador entra al aula
2. Explora haciendo clic en objetos
3. Recolecta 3 pistas (carta + mapa + contraseña)
4. El caldero revela la ubicación del Artefacto: **el Resort Místico de la Playa de los Sueños**
5. Transición a Experiencia 4

---

## Experiencia 4 — Las Vacaciones Mágicas

### Descripción
El Artefacto Selector, agotado de años de catalogar almas, decidió tomarse unas vacaciones indefinidas en el Resort Místico de la Playa de los Sueños. El jugador debe convencerlo de regresar usando la característica principal de su casa.

### Escenario: El Resort Místico
Playa tropical con elementos mágicos anacrónicos: palmeras que dan libros en lugar de cocos, cócteles con ingredientes de poción, el Artefacto (un sombrero viejo y gastado) reclinado en una silla de playa con gafas de sol.

### Diálogos del Artefacto en Descanso

**Apertura (igual para todos):**
> *"...Ah. Me encontraron. Claro que sí. Siempre me encuentran. ¿Saben cuántos siglos llevo asignando casas sin que nadie me pregunte cómo estoy? Muchos. Demasiados. Así que no. No regreso. Estoy de vacaciones y nadie me va a..."*

*(El jugador interrumpe según su casa)*

---

**Si casa = serpiente — La Negociación:**
> *Jugador: "Interesante posición. Entiendo que tienes apalancamiento. Pero considera esto: mientras estás aquí, los estudiantes se están asignando casas ellos mismos. Y ya hay tres Serpientes que dicen ser Leones. La reputación del proceso está en juego."*
>
> *Artefacto: "...Eso es... no puedes hacer eso. No pueden auto-asignarse. El sistema..."*
>
> *Jugador: "Regresa y nadie sabrá que esto pasó. Tú controlas la narrativa."*
>
> *Artefacto: "Detesto y admiro a los de Serpiente en igual medida. Está bien. Regreso. Pero quiero viernes libres."*

**Si casa = leon — El Desafío:**
> *Jugador: "¿Vacaciones? Los que se van de vacaciones cuando se les necesita no son artefactos legendarios. Son muebles con pretensiones."*
>
> *Artefacto: "¿Perdón?"*
>
> *Jugador: "Lo que oíste. La academia te necesita. Los estudiantes te necesitan. Si no regresas, no eres el gran Artefacto Selector — eres solo un sombrero viejo en una playa."*
>
> *Artefacto: "NADIE me llama sombrero viejo. NADIE. Empaco ahora mismo."*

**Si casa = aguila — El Argumento:**
> *Jugador: "Entiendo tu agotamiento. Siglos de trabajo sin descanso producen una fatiga cognitiva documentada incluso en artefactos mágicos. Pero he analizado el problema: lo que necesitas no es ausencia, sino un sistema de rotación. Tres semanas de trabajo, una de descanso. Lo he calculado."*
>
> *Artefacto: "¿Lo... calculaste?"*
>
> *Jugador: "Aquí está el modelo." *(El jugador muestra un pergamino con tablas)*
>
> *Artefacto: "Nadie nunca... ¿puedo quedármelo? El pergamino, digo. Regreso. Pero ese acuerdo es vinculante."*

**Si casa = tejon — La Honestidad:**
> *Jugador: "No vine a convencerte con argumentos. Solo vine a decirte que te echamos de menos. No por lo que haces. Sino porque sin ti, el primer día en la academia no es el mismo. Es el momento que todos recuerdan el resto de sus vidas. Y mereces ser parte de él."*
>
> *Artefacto: "Yo... *(pausa larga)* ...nadie me había dicho eso antes. Solo me dicen lo que hago, no lo que soy."*
>
> *Jugador: "Sé lo que eres. Eres la primera puerta. La más importante."*
>
> *Artefacto: "*(sonido de llanto retenido)* Está bien. Regreso. Pero este año canto una canción. Lo decidí."*

---

## Sistema de Respaldo de Datos — Código de Hechizo

### Descripción
Al finalizar la experiencia, el sistema genera un **Código de Hechizo**: una cadena legible por humanos que contiene toda la información relevante del jugador. Sirve como respaldo manual en caso de que el localStorage se pierda.

### Formato del Código

```
[NOMBRE]-[TÍTULO]-[CASA]-[PUNTUACIÓN_TOTAL]
```

**Ejemplos:**
```
VALERIA-HECHICERA-AGUILA-77
CARLOS-MAGO-LEON-82
SOFIA-INICIADA-TEJON-65
MIGUEL-MAGO-SERPIENTE-91
```

### Implementación

```javascript
function generateSpellCode() {
  const name = localStorage.getItem('user_name').toUpperCase();
  const title = localStorage.getItem('user_title').toUpperCase();
  const house = localStorage.getItem('user_house').toUpperCase();
  const totalScore = calculateTotalScore(); // suma de todos los puntos
  return `${name}-${title}-${house}-${totalScore}`;
}

function restoreFromSpellCode(code) {
  const parts = code.split('-');
  if (parts.length !== 4) throw new Error('Código inválido');
  localStorage.setItem('user_name', parts[0]);
  localStorage.setItem('user_title', parts[1]);
  localStorage.setItem('user_house', parts[2]);
  // totalScore es solo referencial, no se restaura al juego
}
```

### Presentación al Jugador
El código aparece en un pergamino especial con efecto de "sellado mágico". Se puede:
- **Copiar al portapapeles** con un botón de varita
- **Descargar** como archivo `.txt` con nombre `hechizo-[nombre].txt`
- **Restaurar** desde la pantalla de bienvenida ingresando el código

---

## Arquitectura de Archivos

```
cronicas-seleccion-perdida/
│
├── index.html                    # Entrada principal, contiene el Libro de Oro
├── design.md                     # Este documento
│
├── css/
│   ├── main.css                  # Estilos base, pergamino, tipografía
│   ├── houses.css                # Variables CSS por casa (4 temas)
│   ├── animations.css            # Keyframes, transiciones, partículas
│   └── responsive.css            # Media queries
│
├── js/
│   ├── init.js                   # Módulo del Libro de Oro
│   ├── quiz.js                   # Lógica del Test (preguntas + scoring)
│   ├── avatar.js                 # Canvas: emblema + varita
│   ├── pointclick.js             # Motor point-and-click (Experiencia 3)
│   ├── resort.js                 # Experiencia 4: Las Vacaciones Mágicas
│   ├── spellcode.js              # Generación y restauración de Código de Hechizo
│   └── router.js                 # Navegación entre experiencias (SPA simple)
│
├── assets/
│   ├── fonts/                    # UnifrakturMaguntia, Crimson Text
│   ├── images/
│   │   ├── background-parchment.jpg
│   │   ├── book-open.png
│   │   ├── wax-seal.png
│   │   ├── professor-office.jpg  # Fondo de la oficina de Klein
│   │   └── beach-resort.jpg      # Fondo del resort mágico
│   ├── audio/
│   │   ├── page-turn.mp3
│   │   ├── wax-seal.mp3
│   │   ├── magic-sparkle.mp3
│   │   └── house-reveal.mp3
│   └── canvas/                   # Sprites para el motor Canvas
│
└── data/
    ├── questions.json            # Banco de preguntas del Test
    └── dialogues.json            # Diálogos por casa (Experiencias 3 y 4)
```

---

## Pantalla Final de Homenaje

Después de que el Artefacto regresa, aparece una pantalla de créditos animada con pergamino dorado:

---

> **🧙‍♀️ En Homenaje a Joanne Kathleen Rowling**
>
> *Por crear un mundo donde los niños aprenden que la valentía no es la ausencia del miedo,*
> *que la lealtad vale más que la victoria,*
> *que la inteligencia es un regalo que se comparte,*
> *y que incluso la astucia, en las manos correctas, puede ser una forma de amor.*
>
> *Hogwarts no fue un castillo. Fue el primer lugar donde millones de personas sintieron que encajaban.*
>
> *Gracias por darnos eso.*
>
> — Los Creadores de Crónicas de la Selección Perdida

---

*Datos biográficos al pie: J.K. Rowling (n. 1965, Yate, Gloucestershire). Harry Potter y la Piedra Filosofal publicado en 1997. 7 novelas, más de 500 millones de ejemplares vendidos, traducidas a 80 idiomas.*

---

## Nota Legal Fan-Made

> **⚠️ Aviso Legal**
>
> **Crónicas de la Selección Perdida** es una obra de fans (*fan-made*) creada con fines educativos, culturales y de homenaje. No tiene fines comerciales ni de lucro.
>
> Harry Potter, Hogwarts, los nombres de las casas y todos los elementos relacionados son marcas registradas y propiedad intelectual de J.K. Rowling, Warner Bros. Entertainment Inc. y sus licenciatarios asociados.
>
> Esta obra no está afiliada, respaldada ni autorizada por J.K. Rowling, Warner Bros., ni por ninguna entidad oficial del universo de Harry Potter.
>
> Todos los nombres de personajes, lugares y eventos originales en esta experiencia son creación de sus autores y cualquier similitud con personas reales es coincidencia.
>
> Si eres el propietario de derechos y deseas que este contenido sea retirado, contáctanos y lo haremos de inmediato.
