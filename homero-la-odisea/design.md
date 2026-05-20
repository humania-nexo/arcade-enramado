# La Odisea
### Documento de Diseño — Versión 1.0
**Homenaje a Homero y la Literatura Oral Griega**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — El Ciclo (La Cueva de Polifemo)](#experiencia-1--el-ciclo-la-cueva-de-polifemo)
4. [Experiencia 2 — Las Sirenas (El Juego de Ritmo)](#experiencia-2--las-sirenas-el-juego-de-ritmo)
5. [Experiencia 3 — Caribdis y Escila (Navegación de Timing)](#experiencia-3--caribdis-y-escila-navegación-de-timing)
6. [Experiencia 4 — El Regreso (El Duelo de Arco)](#experiencia-4--el-regreso-el-duelo-de-arco)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**La Odisea** es una experiencia interactiva que recorre los momentos más célebres del poema épico de Homero, compuesto alrededor del siglo VIII a.C. El jugador encarna a **Odiseo** (Ulises en la tradición latina) en su viaje de regreso a Ítaca tras la caída de Troya: 10 años navegando un Mediterráneo habitado por dioses, monstruos y tentaciones.

La narrativa central no es la guerra — es el **regreso**. El viaje de vuelta como metáfora de la condición humana: el deseo de hogar, la resistencia a la tentación, la astucia como única arma ante poderes superiores.

**Tono narrativo:** Épico, poético, con momentos de humor homérico y de pavor genuino. El narrador habla al jugador como si cantara un poema: en segunda persona, con ritmo de hexámetro.

**Audiencia objetivo:** Aficionados a la mitología clásica, estudiantes de literatura, jugadores que disfrutan experiencias narrativas con mecánicas variadas.

**Duración estimada:** 20 a 30 minutos para completar las cuatro experiencias.

### Voz del Narrador (Aedo)
Cada experiencia está presentada por un **Aedo** — el cantor de poemas épicos de la tradición griega. Su texto aparece en pantalla como si fuera cantado, con tipografía serif, antes de cada sección:

> *"Cántame, oh Musa, del hábil varón que, después de destruir la sagrada ciudad de Troya, vio las costumbres y las ciudades de muchos hombres y padeció muchos dolores en su ánimo..."*
> — Homero, La Odisea, canto I

---

## Estética Visual

### Filosofía Visual
**Pixel art griega antigua.** Paleta inspirada en la cerámica de figuras negras y rojas del período clásico griego (siglos VI-IV a.C.). Fondos en terracota envejecida. Personajes delineados en negro con detalle geométrico.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Mar Egeo de día | Azul Mediterráneo profundo | `#1B4F8A` |
| Mar Egeo de noche | Azul marino oscuro | `#0B1F3D` |
| Fondo cerámica | Terracota envejecida | `#C85A1E` |
| Figuras en cerámica | Negro de grafito | `#1A1008` |
| Arena/Playa | Arena ocre | `#D4A574` |
| Cielo del Egeo | Azul cielo mediterráneo | `#5B9BD5` |
| Acento dorado | Oro de olimpo | `#D4AF37` |
| Contraste de luz | Blanco mármol | `#F8F4E8` |

### Elementos Visuales Recurrentes
- **Columnas dóricas** como elementos de UI (bordes, marcos)
- **Meandros griegos** como separadores decorativos
- **Olas estilizadas** como elemento de transición entre escenas
- **Constelaciones** en el cielo nocturno: son la guía de Odiseo

### Tipografía
- **Títulos:** Fuente inspirada en la inscripción griega (ej. *Cinzel* o *Trajan Pro*)
- **Narración del Aedo:** Serif elegante en cursiva, con interlineado generoso
- **Diálogos:** Bloque de texto en pergamino claro, enmarcado en grecas

### Transiciones
Las transiciones entre experiencias usan la metáfora de una **vasija girando**: la cámara rota como si fuera la superficie de una ánfora griega pasando de una escena pintada a la siguiente.

---

## Experiencia 1 — El Ciclo (La Cueva de Polifemo)

### Texto del Aedo
> *"Y llegamos a la tierra de los Cíclopes, seres arrogantes y sin ley...*
> *Polifemo, hijo de Poseidón, nos encerró en su cueva.*
> *Comió a dos de mis hombres. Y luego durmió.*
> *Nadie podría moverlo dormido. Pero la astucia...*
> *la astucia puede mover montañas."*

### Descripción de la Mecánica
La cueva de Polifemo es un **puzzle de astucia** en múltiples pasos. No hay combate — Odiseo no puede vencer a Polifemo por la fuerza, sino que debe engañarlo.

### Elementos del Puzzle

#### Fase 1: El Vino
El jugador encuentra una vasija de vino y un cuenco. Debe combinar objetos en el inventario (estilo point-and-click clásico) para preparar el vino que emborrachará a Polifemo.
- *Vasija de vino + cuenco = Cuenco de vino*

#### Fase 2: La Estaca
El jugador debe: encontrar la estaca de olivo, afilarla en la piedra de la cueva, esconderla bajo el estiércol.
- Cada acción requiere hacer clic en el elemento correcto del escenario
- Si el jugador comete errores, Polifemo despierta brevemente y gruñe, pero no los ve

#### Fase 3: El Engaño del Nombre
La escena más famosa: Polifemo pregunta el nombre de Odiseo. El jugador debe elegir la respuesta correcta de tres opciones:

- A) "Soy Odiseo, hijo de Laertes, rey de Ítaca." → *Fallo: Polifemo llama a los otros Cíclopes*
- B) "Soy Nadie. Mi nombre es Nadie." → ✅ *Correcto: la respuesta histórica de Odiseo*
- C) "Soy un marinero anónimo sin valor." → *Fallo: Polifemo pierde el interés pero bloquea la salida*

#### Fase 4: La Cegada y la Fuga
Tras emborracher a Polifemo (cutscene), el jugador controla a Odiseo guiando a sus hombres hacia la salida mientras están amarrados bajo las ovejas gigantes. Mechánica de timing: pasar cuando Polifemo mueve las manos lejos.

### Enseñanza Narrativa
> *"Y cuando nos preguntó su nombre, respondí: Soy Nadie.*
> *Y cuando sus hermanos llegaron y preguntaron quién lo lastimaba,*
> *gritó: ¡Nadie! ¡Nadie me lastima!*
> *Y ellos se rieron y se fueron.*
>
> *La astucia es el arma de los que no tienen otra."*

---

## Experiencia 2 — Las Sirenas (El Juego de Ritmo)

### Texto del Aedo
> *"Las Sirenas seducen con su hermoso canto a todo el que se les acerca.*
> *El que, ignorante, se les acerca y oye su voz ya no vuelve a ver a su esposa e hijos.*
> *Las Sirenas le seducen con su límpido canto."*

### Descripción de la Mecánica
Un **juego de ritmo** donde el jugador controla a Odiseo amarrado al mástil de su barco. La música de las Sirenas es hermosa y tentadora. Las notas llegan desde el lado de las Sirenas (izquierda de la pantalla) y el jugador debe **resistir** — es decir, presionar las teclas en el ritmo CONTRARIO a lo que el canto sugiere.

### Sistema de Resistencia
La pantalla tiene un medidor central: **"Voluntad de Odiseo"** (barra verde) vs. **"Poder del Canto"** (barra roja).

- Cuando una nota de Sirena llega, el jugador tiene 1.5 segundos para presionar la tecla de resistencia correcta
- Si resiste, la barra verde sube
- Si falla, la barra roja sube y Odiseo empieza a forcejear con sus ataduras (animación de sprite)
- Si la barra roja llega al 100%, Odiseo se suelta y el barco se dirige a las rocas: Game Over del acto

### El Encanto del Canto
La música de las Sirenas está compuesta en escala dórica griega (la escala musical que lleva ese nombre). Melodía descendente, hipnótica. El jugador siente genuinamente el encanto porque la música está diseñada para ser seductora.

### Los Mensajes de las Sirenas
Las Sirenas susurran frases que aparecen en pantalla en texto tenue, sobre la música:
> *"Odiseo, gloria de los griegos... detente... conocemos todas las cosas que pasaron en Troya..."*
> *"Ningún marinero pasa por aquí sin que antes oiga la miel de nuestra voz..."*
> *"Ven. Solo quédate. Solo esta vez. Solo escucha."*

### Condición de Victoria
El barco pasa la isla. Los gritos de los hombres (con cera en los oídos) contrastan con el silencio visual de lo que Odiseo vio. Narración final:
> *"Pasamos. El canto de las Sirenas se apagó detrás de nosotros.*
> *Nunca olvidé su melodía. Ni quise."*

---

## Experiencia 3 — Caribdis y Escila (Navegación de Timing)

### Texto del Aedo
> *"Entre Escila y Caribdis.*
> *De un lado, el monstruo de seis cabezas que devora marineros.*
> *Del otro, el remolino que traga barcos enteros.*
> *No hay camino seguro. Solo hay el camino menos mortal."*

### Descripción de la Mecánica
Navegación lateral de **timing preciso**. El barco de Odiseo avanza automáticamente de izquierda a derecha. El jugador controla el movimiento vertical del barco (arriba/abajo) para evitar dos tipos de peligro:

#### El lado de Escila (arriba)
Seis tentáculos/cabezas de serpiente que emergen de las rocas en patrones rítmicos. Cada cabeza tiene un ciclo de aparición-retracción. El jugador debe pasar en los "ventanas" de tiempo entre ataques.

#### El lado de Caribdis (abajo)
Un remolino que pulsa y se expande rítmicamente. Cuando está expandido, cualquier contacto arrastra el barco. El jugador debe esperar a que el remolino se contraiga antes de bajar el barco.

### El Dilema Central
Los dos peligros están sincronizados de manera que cuando Escila se retrae, Caribdis se expande y viceversa. Solo hay momentos muy breves donde ambos son relativamente seguros.

La tensión es máxima: el jugador sabe que perder 1-2 marineros a Escila es preferible a perder el barco en Caribdis.

### Sistema de Marineros
El barco tiene 6 marineros visibles en cubierta. Si el barco se acerca demasiado a Escila, un marinero desaparece (capturado). El juego puede continuar con menos marineros, pero los diálogos cambian para reflejar la pérdida.

### Narración Dinámica
Si el jugador pierde marineros:
> *"Perdí a Antifates. Y a Euríloco. Las cabezas de Escila los alcanzaron.*
> *Grité su nombre. La respuesta fue solo el eco del agua."*

Si el jugador pasa sin perder a nadie:
> *"Pasamos intactos. No sé si fue habilidad o los dioses.*
> *Probablemente los dioses. Pero también probablemente mi timón."*

---

## Experiencia 4 — El Regreso (El Duelo de Arco)

### Texto del Aedo
> *"Veinte años después.*
> *Ítaca. Su palacio. Su mujer rodeada de pretendientes.*
> *Su hijo apenas reconociéndolo.*
> *Un mendigo harapiento entra al palacio.*
> *Nadie sabe quién es. Excepto su perro.*
> *Y el perro muere en paz al verle."*

### Descripción de la Mecánica
Un **minijuego de precisión de arco**. Penélope ha propuesto el desafío final a los pretendientes: quien logre tensar el arco de Odiseo y disparar una flecha a través de los anillos de doce hachas, se casará con ella.

Ningún pretendiente puede tensar el arco. El "mendigo" pide intentarlo.

### Sistema de Disparo

#### Fase 1: Tensar el Arco
El jugador mantiene presionado el botón/click. La barra de tensión sube. El arco de Odiseo requiere máxima tensión. Animación del "mendigo" esforzándose. Si el jugador suelta antes de la tensión máxima, el arco no dispara.

#### Fase 2: El Alineado
Un cursor de mira circular oscila lentamente de izquierda a derecha. Doce anillos de hacha aparecen en perspectiva. El jugador debe soltar cuando el cursor esté centrado en la alineación de los doce anillos.

#### Fase 3: La Revelación
La flecha atraviesa todos los anillos. El "mendigo" suelta la capa. Odiseo, rey de Ítaca, se yergue. Los pretendientes comprenden demasiado tarde.

### La Batalla Final
Mecánica de disparo rápido: los pretendientes atacan. El jugador dispara flechas a los pretendientes que se acercan. Control simple: clic en el pretendiente correcto antes de que llegue. Diálogos breves durante el combate:
> *"¡Soy Odiseo, el destructor de ciudades!*
> *¡Veinte años esperé este momento!*
> *¡Ni uno de vosotros saldrá de este palacio!"*

### El Reencuentro con Penélope
Tras la batalla, una escena contemplativa: Odiseo y Penélope frente a frente. Sin mecánicas. Solo texto:
> *"Y Penélope lo miró. Veinte años habían pasado por su cara.*
> *Y aún así lo reconoció. Porque el amor no lo que ves.*
> *El amor es lo que recuerdas."*

---

## Pantalla Final de Homenaje

Una ilustración pixel art del mar Egeo al amanecer, con Ítaca al fondo. Texto en blanco:

---

> **🏛️ En Homenaje a Homero**
> *"Aedo de los aedos, padre de la literatura occidental"*
>
> La Odisea fue compuesta alrededor del siglo VIII a.C., posiblemente en la costa jónica de Asia Menor.
> Se atribuye a un poeta llamado Homero, aunque los estudiosos debaten si fue una sola persona o una tradición colectiva.
>
> El poema tiene 12.110 versos en hexámetro dactílico.
> Fue transmitido oralmente durante siglos antes de ser escrito.
>
> Odiseo tardó 10 años en llegar a Ítaca después de la Guerra de Troya.
> Penélope esperó 20 años en total: 10 de guerra, 10 de viaje.
>
> **El regreso como metáfora:**
> Toda la literatura que narra un viaje de regreso es hija de la Odisea.
> El héroe que parte, sufre, y vuelve transformado.
> La nostalgia — del griego *nóstos* (regreso) y *álgos* (dolor) — nació en este poema.
>
> *"Muchos caminos llevan a casa.*
> *La Odisea es el más largo.*
> *Y el más hermoso."*

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
homero-la-odisea/
│
├── index.html                     # Entrada principal y pantalla del Aedo
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Paleta terracota, grecas, tipografía
│   ├── pixelart.css               # Sprites, animaciones frame a frame
│   └── ui.css                     # HUD: barra de voluntad, contador marineros
│
├── js/
│   ├── engine.js                  # Motor de escenas y transiciones
│   ├── exp1-cyclops.js            # Puzzle de Polifemo (point-and-click)
│   ├── exp2-sirens.js             # Juego de ritmo (Las Sirenas)
│   ├── exp3-straits.js            # Navegación de timing (Caribdis y Escila)
│   ├── exp4-bow.js                # Duelo de arco (El Regreso)
│   ├── narrator.js                # Sistema de narración del Aedo
│   └── audio.js                   # Gestión de audio
│
├── assets/
│   ├── sprites/
│   │   ├── odysseus/              # Sprites de Odiseo (varios estados)
│   │   ├── polyphemus.png         # Cíclope
│   │   ├── sirens.png             # Sirenas sobre rocas
│   │   ├── scylla.png             # Escila (cabezas de serpiente)
│   │   ├── charybdis.png          # Remolino animado
│   │   ├── suitors/               # Sprites de pretendientes
│   │   └── penelope.png           # Penélope
│   ├── backgrounds/
│   │   ├── cave-cyclops.png       # Cueva de Polifemo
│   │   ├── sea-sirens.png         # Mar abierto con isla
│   │   ├── straits.png            # El estrecho entre Escila y Caribdis
│   │   └── palace-ithaca.png      # Palacio de Ítaca
│   └── audio/
│       ├── siren-song.mp3         # Melodía dórica hipnótica
│       ├── sea-ambience.mp3       # Mar y viento
│       ├── battle.mp3             # Combate final
│       └── homecoming.mp3         # Reencuentro (tema suave)
│
└── data/
    ├── rhythm-patterns.json       # Patrones de ritmo para las Sirenas
    ├── cyclops-puzzle.json        # Configuración del puzzle de Polifemo
    └── dialogues.json             # Todas las narraciones y diálogos
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **La Odisea** (obra arcade-homenaje) es una creación de fans sin fines comerciales.
>
> La Odisea de Homero es una obra del dominio público, compuesta alrededor del siglo VIII a.C. No existen derechos de autor sobre el texto original.
>
> Los personajes, narrativa y elementos de esta experiencia interactiva son interpretación artística libremente inspirada en el texto homérico y en la tradición mitológica griega clásica.
>
> Las traducciones al español del texto homérico utilizadas en esta experiencia son de dominio público o de autoría propia inspirada en el original griego.
