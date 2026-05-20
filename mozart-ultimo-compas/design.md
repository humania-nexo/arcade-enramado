# Mozart: El Último Compás
### Documento de Diseño — Versión 1.0
**Homenaje a Wolfgang Amadeus Mozart y el Réquiem K.626**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Acto I — El Olor de la Agonía](#acto-i--el-olor-de-la-agonía)
4. [Acto II — La Prórroga de Penélope](#acto-ii--la-prórroga-de-penélope)
5. [Acto III — La Traición Divina](#acto-iii--la-traición-divina)
6. [Acto IV — El Silencio del Imperio](#acto-iv--el-silencio-del-imperio)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Nota sobre el Dominio Público](#nota-sobre-el-dominio-público)
9. [Arquitectura de Archivos](#arquitectura-de-archivos)
10. [Nota Legal](#nota-legal)

---

## Concepto General

**Mozart: El Último Compás** es una experiencia interactiva narrativa que coloca al jugador dentro de los últimos días de Wolfgang Amadeus Mozart en Viena, diciembre de 1791. El hilo conductor es el **Réquiem K.626**, la obra que Mozart sabía que era su testamento musical y que la muerte misma le encargó —según la leyenda— a través de un misterioso mensajero de negro.

El conflicto central es **Mozart contra la Muerte**: una raza contra el tiempo para completar el Réquiem antes de que el mensajero gris reclame lo que vino a buscar. No es un juego sobre el miedo a morir. Es un juego sobre el acto de crear algo eterno sabiendo que tú no lo serás.

**Tono narrativo:** Solemne, poético, melancólico. Hay momentos de delirio febril, momentos de belleza pura y un final que no busca consolar sino elevar.

**Estructura:** 4 actos, inspirados en la narrativa real de los últimos meses de Mozart y en la estructura del Réquiem K.626.

**Duración estimada:** 20 a 30 minutos de experiencia completa.

**Influencias de diseño:** *Papers, Please* (atmósfera opresiva de burocracia), *Gris* (emoción sin palabras), clásicos de pixel art como *Owlboy* y *Undertale* en su capacidad narrativa.

---

## Estética Visual

### Filosofía Visual
**Pixel art barroco.** La contradicción es intencional: la pixelación digital aplicada a la suntuosidad del barroco vienés del siglo XVIII. Cada píxel es como una nota en una partitura: individual, preciso, parte de algo mayor.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo principal | Negro de terciopelo | `#0A0806` |
| Mármol vienés | Gris azulado | `#2C3040` |
| Dorado de vela | Ámbar cálido | `#C8900A` |
| Papel de partitura | Marfil envejecido | `#F0E8D0` |
| Tinta de Mozart | Negro intenso | `#1A1208` |
| El mensajero gris | Gris ceniza | `#5A5A5A` |
| Luz de revelación | Blanco puro | `#FFFFFF` |
| Sangre/urgencia | Carmesí oscuro | `#6B0000` |

### Iluminación
La fuente de luz principal en todos los actos es **la vela**. No hay luz eléctrica, no hay luz de día. La oscuridad rodea siempre al jugador. Las velas proyectan sombras dinámicas que tiemblan ligeramente —efecto de animación de 4 frames que simula el parpadeo orgánico de la llama.

### Tipografía
- **Títulos de actos:** Fuente serif clásica mayúscula (ej. *Playfair Display*)
- **Diálogos de Mozart:** Cursiva con sangría, simulando manuscrito
- **Texto del mensajero:** Fuente sans-serif fría, letra por letra, como si fuera dictado
- **Partituras:** Representación pixel art de notas musicales reales del Réquiem K.626

### Referencias Visuales
- El apartamento de Mozart en la Rauhensteingasse, Viena
- Retratos reales de Mozart (especialmente el inacabado de 1790 atribuido a Joseph Lange)
- Manuscrito original del Réquiem K.626 (páginas con correcciones y manchas de tinta)
- Grabados de Viena del siglo XVIII

---

## Acto I — El Olor de la Agonía

### Subtítulo: *Introitus*

### Descripción Narrativa
Viena, noviembre de 1791. La habitación de Mozart huele a fiebre. Un hombre que en otro tiempo llenó salones con su presencia ahora es la sombra de sí mismo, atrapado en sábanas empapadas de sudor y genialidad al mismo tiempo. En la mesita, una partitura a medio terminar. En la puerta, alguien llama.

### Mecánica
Esta sección es deliberadamente **pasiva**. El jugador observa. No hay puzzles, no hay acciones urgentes. Solo atmósfera.

### Secuencia Visual

1. **Fade in desde negro total.** Un punto de luz aparece: es una vela.
2. La cámara se desplaza lentamente hacia la derecha, revelando la habitación en pixel art.
3. Se ve a Mozart en cama, de espaldas, respirando visiblemente.
4. La música del **Introitus** del Réquiem K.626 comienza a sonar a volumen bajo, como si viniera de otro cuarto.
5. Una sombra aparece en la pared: alguien llama a la puerta.
6. **Texto en pantalla, apareciendo letra por letra:**
   > *"Viena. 20 de noviembre de 1791.*
   > La fiebre lleva diecisiete días.*
   > El mensajero llegó esta mañana.*
   > El Réquiem no está terminado."*

7. El mensajero gris entra. Su píxel-sprite es deliberadamente ambiguo: ¿hombre? ¿sombra? Porta una carta sellada.
8. La cámara hace zoom a las manos de Mozart, tendidas sobre la partitura.
9. Aparece el único prompt interactivo del Acto I:

**[Haz clic para tomar la pluma]**

10. Al hacer clic, Mozart se incorpora lentamente. La música sube de volumen. Comienza el Acto II.

### Audio
- **Introitus, Réquiem K.626** — grabación de dominio público a volumen 30%
- Sonido ambiental: lluvia sobre ventana, madera que cruje, respiración difícil
- Efecto de puerta al abrirse

### Propósito de Este Acto
Establecer el tono emocional. El jugador debe entender antes de que el juego le diga nada: esto es serio. Esto es real. Algo fue interrumpido aquí y nunca pudo completarse del todo.

---

## Acto II — La Prórroga de Penélope

### Subtítulo: *Kyrie — Dies Irae*

### Descripción
Este es el **corazón mecánico del juego**. El acto toma su nombre de Penélope, la esposa de Odiseo, quien tejía de día y destejía de noche para ganar tiempo. Mozart hace lo mismo con su Réquiem: compone desesperadamente mientras el mensajero intenta deshacer lo ya creado.

### Mecánica Principal: El Pentagrama

La pantalla muestra un pentagrama musical (las cinco líneas horizontales) que ocupa el tercio inferior de la pantalla. En la parte superior, notas musicales de diferentes tipos caen hacia abajo:

#### Tipos de Notas
| Símbolo Visual | Nombre | Complejidad |
|----------------|--------|-------------|
| ♩ | Negra | Fácil — posición fija |
| ♪ | Corchea | Media — dos posibles posiciones |
| 𝅗𝅥 | Blanca | Difícil — tiempo extendido, se puede mover |
| 𝄽 | Silencio | Trampa — no se atrapa, se esquiva |

#### Mecánica de Captura
- Las notas caen desde arriba a velocidad variable
- El jugador mueve un cursor horizontal (mouse o touch) para posicionar a Mozart bajo las notas
- Al "atrapar" una nota en la posición correcta del pentagrama, se escucha el sonido de esa nota real
- Las notas capturadas correctamente se suman al compás actual
- Al completar un compás, este **se sella con un brillo dorado** y una animación de tinta que lo consolida

#### Mecánica de Penélope: El Mensajero
- El mensajero gris se desplaza lentamente de derecha a izquierda por la parte superior de la pantalla
- Cuando llega a un compás sellado, intenta "borrarlo" con una animación de borrador
- El jugador puede interrumpirlo haciendo clic sobre él, lo que lo detiene por 3 segundos
- Si el mensajero logra borrar un compás, Mozart grita

#### Los Gritos de Mozart (diálogos en latín y español)
Los diálogos aparecen cuando el mensajero borra un compás. Mozart los grita a la pared vacía, en delirio febril. Los textos mezclan fragmentos reales del Réquiem con ficción:

> *"Lacrimosa dies illa — ¡el día lleno de lágrimas! ¿Cuántos compases te llevaste ya? ¡Te los voy a recuperar todos!"*

> *"Rex tremendae majestatis — ¡Rey de tremenda majestad! ¿Qué clase de rey permite que su música sea borrada?"*

> *"¡No me importa la fiebre! ¡No me importa el frío! ¡Escúchame, mensajero! Cuando esto esté terminado, hasta tú te detendrás a oír."*

> *"Confutatis maledictis — ¡Condenados al fuego! Si no termino esto, estaré entre ellos. ¡Dame más tiempo!"*

> *"¡Constanze! ¡Constanze, no dejes que se lleve el Do menor! ¡El Do menor es el alma de todo!"*

#### Condición de Victoria del Acto II
El jugador completa 8 compases sellados sin que el mensajero borre más de 3. Los 8 compases forman el fragmento musical del **Kyrie** del Réquiem.

#### Condición de Derrota y Reinicio
Si el mensajero borra más de 3 compases, Mozart cae exhausto. La pantalla se oscurece. Aparece el texto:
> *"La fiebre ganó esta vez. Pero la música no se rinde. ¿Intentamos de nuevo?"*
Botón: [Retomar la pluma]

### Dificultad Progresiva
- **Compases 1-3:** Solo negras, sin actividad del mensajero
- **Compases 4-5:** Se agregan corcheas, el mensajero aparece pero lento
- **Compases 6-7:** Se agregan blancas y silencios, el mensajero acelera
- **Compás 8 (clímax):** Lluvia de notas de todos los tipos, el mensajero intenta borrar con urgencia

---

## Acto III — La Traición Divina

### Subtítulo: *Lacrimosa*

### Descripción Narrativa
8 compases más. Las últimas notas del **Lacrimosa**. Son las últimas que Mozart escribió en su vida. La leyenda dice que rompió a llorar mientras las dictaba. Este acto es el más lento, el más pesado, el más íntimo.

### Mecánica: La Mano Temblorosa

El cursor del jugador se vuelve **lento y torpe**. Simula la mano de Mozart temblorosa por la fiebre. El control es impreciso por diseño — no como castigo, sino como empatía. El jugador siente en su propio cuerpo la lucha del compositor.

#### Sistema de Control Modificado
```javascript
// El cursor responde con inercia y deriva leve
cursorVelocity = cursorVelocity * 0.85 + targetDelta * 0.15;
// Añade micro-temblor aleatorio
cursorX += (Math.random() - 0.5) * trembleIntensity;
```

La `trembleIntensity` aumenta gradualmente de 0.5 a 2.0 durante el acto.

### El Guiado de la Pluma
El jugador no atrapa notas que caen. En cambio, guía la mano de Mozart (representada como un sprite de mano con pluma) sobre notas que aparecen fijas en el pentagrama, tenuemente visibles como guías punteadas. El jugador debe mantener la pluma sobre cada nota por 1-2 segundos para "inscribirla" en el papel.

### La Revelación del Mensajero
A mitad del Lacrimosa, el mensajero gris se detiene. Ha estado leyendo el manuscrito mientras Mozart trabajaba.

**Por primera vez, el jugador ve su cara.**

El sprite del mensajero gira. Su rostro pixelado muestra: no amenaza. No triunfo. **Asombro.** Reverencia. La boca ligeramente abierta de quien acaba de escuchar algo que no esperaba.

**Texto que aparece:**
> *El mensajero no habló. Pero dejó de avanzar.*
> *En diecisiete años llevando almas, nunca había visto esto.*
> *Alguien que componía para él. Para la muerte misma.*
> *Un Réquiem. Un descanso. Una oración.*

### El Papel Luminoso
Cuando el jugador completa la última nota del Lacrimosa, el papel de la partitura emite una **luz blanca** que expande hacia los bordes de la pantalla. No es un efecto digital genérico: es como si el papel ardiera de adentro hacia afuera, como si la música atrapara luz.

La música del Lacrimosa real suena a volumen completo por primera vez.

**Fade a blanco. Silencio de 3 segundos.**

Luego, el Acto IV comienza.

---

## Acto IV — El Silencio del Imperio

### Subtítulo: *Lux Aeterna*

### Descripción
**Sin mecánicas.** No hay nada que hacer. Solo mirar.

### Secuencia Visual

1. Fade in desde blanco. Se ve el exterior de Viena: noche, nieve pixelada cayendo.
2. La cámara está a nivel de suelo. Se ve una fosa común (histórica: Mozart fue enterrado en una fosa común por decreto imperial de austeridad de José II).
3. La cámara comienza a moverse lentamente hacia arriba.
4. La fosa se aleja. Los tejados de Viena. Las torres de la Catedral de San Esteban.
5. Las nubes. El cielo estrellado en pixel art.
6. Las estrellas se multiplican. El pixel art se vuelve más abstracto — no es ya Viena sino el universo.
7. Una sola nota de piano: La (440 Hz). Luego el **Lacrimosa** completo comienza.
8. **Texto apareciendo en pantalla, sobre las estrellas:**

---

> *"Wolfgang Amadeus Mozart murió el 5 de diciembre de 1791.*
> Tenía 35 años.*
>
> El Réquiem K.626 quedó incompleto.*
>
> Fue completado por su alumno Franz Xaver Süssmayr en 1792,*
> siguiendo los esbozos y las instrucciones que Mozart dejó.*
>
> Se estrena por primera vez en enero de 1793.*
>
> Constanze Mozart, su viuda, nunca supo con certeza quién encargó el Réquiem.*
> El mensajero no volvió a reclamar el pago.*
>
> El Réquiem K.626 se escucha hoy en cada rincón del mundo.*
> En funerales de jefes de Estado.*
> En conciertos llenos.*
> En auriculares de personas que lloran solas a las 3 de la madrugada.*
>
> Mozart no lo terminó.*
> Pero lo suficiente alcanzó para que la muerte misma se detuviera a escuchar."*

---

9. La música continúa. El jugador no puede hacer nada. No debe hacer nada.
10. Fade a negro lento. La música continúa sobre negro por 30 segundos más.
11. Aparece la pantalla final de homenaje.

---

## Pantalla Final de Homenaje

Una página estilo enciclopedia ilustrada, con el estilo visual de un libro antiguo:

---

> **🎼 Wolfgang Amadeus Mozart**
> *27 de enero de 1756, Salzburgo — 5 de diciembre de 1791, Viena*
>
> Compuso su primera sinfonía a los 8 años.
> Su primera ópera, a los 11.
> En total: más de 600 obras en 35 años de vida.
>
> El **Réquiem en Re menor, K.626** fue la última de todas.
> Quedó incompleto. Fue completado por Franz Xaver Süssmayr.
> Hasta hoy, no existe consenso académico sobre qué porción terminó Mozart exactamente.
>
> La identidad del "mensajero gris" que encargó el Réquiem
> fue revelada como el Conde Franz von Walsegg-Stuppach,
> quien pretendía presentarlo como obra propia en memoria de su esposa fallecida.
>
> El Réquiem K.626 es hoy una de las obras más interpretadas de la historia.
> No lo terminó quien lo empezó.
> Sin embargo, es perfecta.

---

**Botón principal:** `▶ Escuchar el Réquiem K.626 completo`
*(Enlaza a una grabación de dominio público en archive.org o similar)*

**Botón secundario:** `↩ Volver al inicio`

---

## Nota sobre el Dominio Público del Réquiem K.626

> **📜 Nota sobre derechos de autor**
>
> El **Réquiem en Re menor, K.626** de Wolfgang Amadeus Mozart (1756-1791) se encuentra en el **dominio público** en todos los países del mundo, ya que fue compuesto hace más de 230 años.
>
> Las **grabaciones específicas** del Réquiem pueden estar protegidas por derechos de los intérpretes y sello discográfico correspondiente, incluso si la obra en sí es de dominio público.
>
> Para uso en esta experiencia interactiva, se utilizarán únicamente:
> - Grabaciones con licencia Creative Commons
> - Grabaciones cargadas en archive.org bajo dominio público
> - Síntesis MIDI propia basada en la partitura original (de dominio público)
>
> La partitura original del Réquiem K.626 puede consultarse libremente en [IMSLP/Petrucci Music Library](https://imslp.org).

---

## Arquitectura de Archivos

```
mozart-ultimo-compas/
│
├── index.html                    # Punto de entrada
├── design.md                     # Este documento
│
├── css/
│   ├── main.css                  # Estilos base: fondo negro, velas, tipografía
│   ├── pixelart.css              # Estilos para sprites pixelados y animaciones
│   └── animations.css            # Keyframes de velas, fade in/out, luz del papel
│
├── js/
│   ├── engine.js                 # Motor de juego principal (loop, escenas)
│   ├── act1.js                   # Acto I: atmósfera pasiva
│   ├── act2.js                   # Acto II: Tetris de notas + mensajero
│   ├── act3.js                   # Acto III: cursor torpe + revelación
│   ├── act4.js                   # Acto IV: cinemática sin mecánicas
│   ├── audio.js                  # Gestión de audio (Web Audio API)
│   ├── canvas-renderer.js        # Render de sprites en Canvas 2D
│   └── pentagrama.js             # Lógica de notas y pentagrama
│
├── assets/
│   ├── sprites/
│   │   ├── mozart-bed.png        # Mozart en cama (Acto I)
│   │   ├── mozart-composing.png  # Mozart componiendo (Actos II y III)
│   │   ├── messenger-back.png    # El mensajero de espaldas
│   │   ├── messenger-face.png    # El mensajero de frente (revelación)
│   │   ├── hand-pen.png          # Mano con pluma (Acto III)
│   │   └── notes/                # Sprites de negras, corcheas, blancas, silencios
│   ├── backgrounds/
│   │   ├── vienna-room.png       # Habitación vienesa (Actos I-III)
│   │   └── vienna-sky.png        # Cielo de Viena (Acto IV)
│   ├── audio/
│   │   ├── requiem-introitus.mp3         # Acto I
│   │   ├── requiem-kyrie.mp3             # Acto II
│   │   ├── requiem-lacrimosa.mp3         # Acto III
│   │   ├── requiem-lacrimosa-full.mp3    # Acto IV completo
│   │   ├── note-c.mp3                    # Notas individuales para feedback
│   │   ├── note-d.mp3
│   │   ├── note-e.mp3
│   │   ├── note-f.mp3
│   │   ├── note-g.mp3
│   │   ├── note-a.mp3
│   │   ├── note-b.mp3
│   │   ├── seal-gold.mp3                 # Compás sellado
│   │   └── erase.mp3                     # Borrado del mensajero
│   └── fonts/
│       ├── PlayfairDisplay-Italic.woff2
│       └── SourceSerifPro-Regular.woff2
│
└── data/
    ├── notes-act2.json           # Secuencia de notas para Acto II
    ├── notes-act3.json           # Secuencia de notas para Acto III
    └── dialogues.json            # Gritos de Mozart (Acto II)
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **Mozart: El Último Compás** es una obra de homenaje cultural sin fines comerciales, creada con el propósito de acercar la figura de Wolfgang Amadeus Mozart y el Réquiem K.626 a nuevas audiencias a través del medio interactivo.
>
> Wolfgang Amadeus Mozart (1756-1791) y toda su obra se encuentran en el **dominio público**. Los hechos históricos presentados están basados en registros históricos documentados.
>
> Los fragmentos narrativos ficticios (diálogos, la figura del mensajero como personaje) son interpretación artística y no pretenden ser representación histórica exacta.
>
> Las grabaciones del Réquiem K.626 utilizadas en este proyecto son de dominio público o están licenciadas bajo Creative Commons.
>
> Esta experiencia no tiene afiliación con ninguna editorial, sello discográfico ni institución académica musical.
