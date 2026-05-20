# Operación Sombra
### Documento de Diseño — Versión 1.0
**Homenaje a Hideo Kojima y Metal Gear**

---

## Índice

1. [Concepto General](#concepto-general)
2. [Estética Visual](#estética-visual)
3. [Experiencia 1 — La Infiltración](#experiencia-1--la-infiltración)
4. [Experiencia 2 — El Codec](#experiencia-2--el-codec)
5. [Experiencia 3 — El Enfrentamiento](#experiencia-3--el-enfrentamiento)
6. [Experiencia 4 — La Revelación](#experiencia-4--la-revelación)
7. [Pantalla Final de Homenaje](#pantalla-final-de-homenaje)
8. [Arquitectura de Archivos](#arquitectura-de-archivos)
9. [Nota Legal](#nota-legal)

---

## Concepto General

**Operación Sombra** es una experiencia interactiva de espionaje y sigilo inspirada profundamente en el universo de Metal Gear creado por Hideo Kojima. El jugador encarna a **SOMBRA-7**, un agente de operaciones especiales infiltrándose en una instalación enemiga denominada **BASTION ROJA** para neutralizar una amenaza de destrucción masiva.

Pero Operación Sombra no es solo un juego de sigilo. Es una reflexión sobre la naturaleza de la guerra, el libre albedrío, el control y la identidad. Como todo lo que Kojima crea, tiene más preguntas que respuestas.

**Tono narrativo:** Thriller filosófico de espionaje. Diálogos densos con referencias a Nietzsche, Foucault y el existencialismo. Momentos de acción tensa seguidos de pausas reflexivas largas. El juego sabe que es un videojuego y lo usa como herramienta narrativa.

**Audiencia objetivo:** Fans de Metal Gear Solid, jugadores de juegos narrativos complejos, aficionados a la filosofía aplicada al entretenimiento.

**Duración estimada:** 25 a 40 minutos.

**El giro central:** El jugador fue el villano todo el tiempo. La instalación que infiltraba era su propia base. Los "guardias enemigos" eran sus compañeros. La misión era destruirse a sí mismo.

---

## Estética Visual

### Filosofía Visual
**Pixel art 2D cenital (top-down).** Vista aérea clásica del espionaje, reminiscente del Metal Gear original (MSX, 1987) pero con resolución y animación del nivel de 2010s indie. El pixel art es deliberadamente austero: verde militar y gris, sin colores brillantes, sin decoración innecesaria.

### Paleta de Colores

| Elemento | Color | Hex |
|----------|-------|-----|
| Suelo base | Verde militar oscuro | `#1B3A1B` |
| Muros y estructuras | Gris militar | `#3A3A3A` |
| SOMBRA-7 (jugador) | Gris marengo | `#404040` |
| Guardias enemigos | Verde oliva | `#4A5C2A` |
| Conos de visión | Amarillo tenue | `#FFD700` con alpha 0.3 |
| Zonas de alerta | Naranja parpadeante | `#FF6B00` |
| Zonas de alarma | Rojo puro | `#CC0000` |
| Metal Gear (boss) | Gris acero frío | `#607080` |
| Codec UI | Verde CRT monocromático | `#00FF41` |
| Fondo de Codec | Negro CRT | `#050505` |

### Efectos Visuales
- **Cono de visión de guardias:** Área sombreada en amarillo semitransparente que se mueve con el guardia
- **Efecto CRT:** En las pantallas de Codec, se aplica un filtro de líneas de exploración (scanlines) para simular un monitor de tubo de rayos catódicos
- **Ruido de película:** Grain sutil sobre toda la pantalla, como película de espionaje en 16mm
- **Humo de cigarrillo:** SOMBRA-7 fuma (sin ser visible en acción) — partículas de humo aparecen en los momentos de pausa del Codec

### Sistema de Iluminación
Los niveles tienen **zonas de sombra** donde SOMBRA-7 es invisible para los guardias aunque estén cerca. Las zonas iluminadas son peligrosas. El manejo de la luz es central al sigilo.

---

## Experiencia 1 — La Infiltración

### Texto de Apertura (transmisión de Codec al inicio)
> *"SOMBRA-7. Esta es tu misión.*
> *Infiltrate en BASTION ROJA.*
> *Neutraliza el objetivo.*
> *No hay margen para errores.*
> *Ni preguntas.*
> *Cuida los ángulos de visión."*

### Descripción
Sigilo clásico top-down. El jugador controla a SOMBRA-7 a través de 3 áreas de la instalación, evitando ser detectado por los guardias.

### Sistema de Sigilo

#### Mecánica de Detección
Cada guardia tiene un **cono de visión** visible como zona sombreada. Si SOMBRA-7 entra en el cono:
1. **Alerta Amarilla:** El guardia sospecha. Se acerca a investigar. El jugador tiene 3 segundos para esconderse.
2. **Alerta Naranja:** El guardia confirma presencia. Llama refuerzos. El jugador tiene 5 segundos para alejarse del área.
3. **Alerta Roja:** Alarma total. Refuerzos convergen. La misión se pone en riesgo de fallo.

#### Mecánica de Ocultamiento
SOMBRA-7 puede:
- **Pegarse a la pared** (tecla de acción en adyacencia a muro): el cono de visión del guardia no lo detecta si está pegado
- **Entrar en casilleros** (objetos interactuables marcados con icono): desaparece completamente
- **Arrojar señuelo** (ítem limitado): los guardias investigan el sonido

#### Las 3 Áreas

**Área A — El Perímetro Exterior**
Instalación al aire libre. Noche. 4 guardias patrullando en rutas predefinidas. Objetivo: alcanzar la puerta principal sin ser detectado. Introduce todos los conceptos básicos del sigilo.

**Área B — Los Pasillos Interiores**
Interior de la instalación. Luz artificial. 6 guardias + 2 cámaras de seguridad rotativas. Objetivo: llegar al núcleo de la instalación. Las cámaras añaden una capa: tienen un cono fijo que rota. El jugador aprende a sincronizar movimientos con los ciclos de cámara.

**Área C — El Núcleo de Investigación**
Un laboratorio. 4 científicos que no atacan pero sí hacen la alarma si ven a SOMBRA-7. El objetivo es llegar a la sala central donde espera el comandante — pero hay un Codec obligatorio antes de enfrentarse.

### Diálogos Contextuales de Sigilo
Si el jugador es detectado brevemente y logra escapar:
> *"Demasiado ruidoso. Un fantasma no deja rastro. Sé el fantasma."*

Si el jugador tarda mucho en avanzar:
> *"El tiempo también es un enemigo, SOMBRA-7. Más lento que la muerte, pero igualmente fatal."*

---

## Experiencia 2 — El Codec

### Descripción
Tras llegar al Área C, antes del enfrentamiento final, SOMBRA-7 recibe una llamada de Codec obligatoria. Esta sección es **completamente narrativa**: pantalla dividida horizontalmente, estilo Metal Gear Solid. Un retrato pixelado del personaje que llama a la izquierda, texto del diálogo en el centro.

### Interfaz del Codec
- Fondo negro CRT con scanlines
- Número de frecuencia parpadeando en verde: **140.85**
- Nombre del interlocutor en mayúsculas sobre el retrato
- Texto apareciendo letra por letra al ritmo de voz simulada
- Botón de avance: [►] o Enter

### Los Interlocutores

#### EL CORONEL SIGMA
Voz grave. Directo. Le da órdenes a SOMBRA-7 sin explicar el porqué. Representa la cadena de mando ciega.

#### DOCTOR AURUM
Científica de la instalación. La única que hace preguntas. Representa la conciencia moral.

#### LA VOZ (sin nombre)
Solo aparece una vez. No tiene retrato — solo estática. Su voz pregunta la pregunta central del juego.

### Transcripción del Codec Central

---

**[CORONEL SIGMA]:** *"SOMBRA-7. Llegas al objetivo. El comandante está en la sala principal. Neutralízalo y confirma la destrucción del prototipo."*

**[SOMBRA-7]:** *"Coronel. ¿Quién es el comandante?"*

**[CORONEL SIGMA]:** *"Eso no es relevante para la misión."*

**[SOMBRA-7]:** *"Todo es relevante para la misión."*

**[CORONEL SIGMA]:** *"Ejecuta la orden, soldado."* — [FIN DE TRANSMISIÓN]

---

**[DR. AURUM]:** *"SOMBRA-7... ¿me escuchas? Escucha. Esta instalación no es lo que te dijeron. Esto no es BASTION ROJA."*

**[SOMBRA-7]:** *"¿Qué significa eso?"*

**[DR. AURUM]:** *"Los guardias que esquivaste. Las cámaras que evitaste. ¿Los reconociste? ¿A alguno?"*

**[SOMBRA-7]:** *(pausa)* *"No."*

**[DR. AURUM]:** *"Deberías."* — [FIN DE TRANSMISIÓN]

---

**[VOZ DE ESTÁTICA]:** *"¿Eres libre, SOMBRA-7? ¿O llevas toda la misión creyendo que lo eres?"* — [FIN DE TRANSMISIÓN]

---

### Diálogos Filosóficos Adicionales (opcionales)
El jugador puede llamar a los interlocutores opcionales para diálogos adicionales sobre:
- **El libre albedrío en el contexto militar**
- **La diferencia entre obedecer y actuar**
- **La paradoja del soldado perfecto que piensa demasiado**
- **La herencia genética vs. la identidad construida** (referencia directa a Metal Gear Solid 2)

Ejemplo de diálogo filosófico opcional:
> **DR. AURUM:** *"¿Sabes qué estudié antes de esto? Filosofía. Schopenhauer. La voluntad como fuerza ciega. Me pregunto si los soldados son la voluntad hecha carne: movimiento sin dirección propia."*
>
> **SOMBRA-7:** *"Prefiero creer que elijo."*
>
> **DR. AURUM:** *"Todos lo preferimos. La pregunta es si ese preferir también fue elegido por nosotros."*

---

## Experiencia 3 — El Enfrentamiento

### Descripción
**Boss fight** contra un mecha tipo Metal Gear: **ROJO-MG** (Metal Gear Rojo). Bípedo, armado, con sistema de misiles. El combate es la prueba de habilidad central del juego.

### Descripción del Enemigo: ROJO-MG
Un robot de combate bípedo de 10 metros. En pixel art top-down se ve como un cuadrado metálico grande con dos "piernas" mecánicas y múltiples cañones. Se mueve en patrones predecibles pero acelerados.

### Sistema de Combate

#### Fases del Boss

**Fase 1 — El Escáner (HP 100-70%)**
ROJO-MG dispara un escáner de luz (similar al cono de visión de los guardias, pero en 360°). El jugador debe moverse constantemente para no ser alcanzado. Ataques: misiles teledirigidos (seguimiento lento, esquivables con curvas) y disparos de ametralladora (patrón fijo).

**Vulnerabilidad Fase 1:** Las piernas mecánicas. El jugador debe posicionarse detrás del mecha (punto ciego) y atacar las articulaciones de las piernas.

**Fase 2 — El Modo Pánico (HP 70-30%)**
ROJO-MG pierde movilidad en una pierna y entra en "modo pánico": sus ataques se vuelven más erráticos e impredecibles. Los misiles ahora tienen seguimiento rápido. Nuevos ataques: onda de choque al pisotear.

**Vulnerabilidad Fase 2:** El generador de energía en la espalda, ahora expuesto por el daño a la estructura. Más difícil de alcanzar porque el mecha protege su espalda activamente.

**Fase 3 — El Último Protocolo (HP 30-0%)**
ROJO-MG activa su protocolo final: arma nuclear integrada cargando. El jugador tiene 60 segundos para destruirlo antes de que el arma se dispare. Máxima intensidad. Todos los ataques activos simultáneamente.

**Vulnerabilidad Fase 3:** La cabina del piloto, ahora visible en el torso. Un ataque preciso termina el combate.

### Diálogos Durante el Combate
ROJO-MG habla durante el combate (voz sintetizada):
> *"PROTOCOLO ACTIVADO. AMENAZA NEUTRALIZADA. ELIMINANDO."*
> *"ERROR. OBJETIVO ESQUIVA. RECALCULANDO."*
> *"ALERTA. DAÑO CRÍTICO. MODO EMERGENCIA ACTIVADO."*

### La Revelación al Final del Combate
Cuando ROJO-MG cae, el jugador activa el protocolo de destrucción. El mecha explota. En el humo, la silueta del comandante aparece... es SOMBRA-7 mirando al espejo. La misma animación, el mismo pixel art.

Comienza el Acto 4.

---

## Experiencia 4 — La Revelación

### Descripción
**Sin mecánicas de juego.** Solo narrativa. La verdad del giro se revela en una secuencia de Codec final.

### La Verdad
BASTION ROJA no era una instalación enemiga. Era el **Proyecto Sombra**: el programa de entrenamiento y acondicionamiento mental que creó a SOMBRA-7. Los "guardias" eran otras versiones del agente, distintas iteraciones del mismo soldado perfecto. El "comandante" era SOMBRA-7 original — quien quiso terminar el programa.

**La misión era neutralizar la disidencia.** Y SOMBRA-7 la completó perfectamente. Sin hacer preguntas. Exactamente como fue entrenado.

### Transmisión Final del Coronel Sigma
> *"Misión completada, SOMBRA-7. Eficiencia: 98.7%. Neutral. Sin errores.*
>
> *¿Sabes por qué el comandante quería terminar el proyecto?*
> *Porque empezó a hacerse preguntas.*
> *Preguntas como las que tú me hiciste.*
>
> *Pero a diferencia de él...*
> *tú completaste la misión de todos modos.*
>
> *Eso es lo que te hace diferente.*
> *Y lo que te hace perfectamente igual a todos los demás."*

### El Silencio de SOMBRA-7
Pantalla de Codec. SOMBRA-7 no responde. El retrato del jugador muestra... nada. El espacio vacío donde debería estar el retrato.

**Texto final, letra por letra, lento:**
> *"¿Puede un arma elegir?*
> *¿Puede un soldado perfecto ser libre?*
> *¿Eres tú quien juega este juego...*
> *o es el juego quien te jugó a ti?"*

Fade a negro.

---

## Pantalla Final de Homenaje

---

> **🎮 En Homenaje a Hideo Kojima**
> *Nacido el 24 de agosto de 1963, Setagaya, Tokio*
>
> Metal Gear fue lanzado en 1987 para MSX2.
> Metal Gear Solid (1998) redefinió la narrativa en los videojuegos.
>
> Kojima fue pionero en usar el videojuego como medio filosófico:
> preguntas sobre el libre albedrío, la identidad, la herencia genética, el control mediático y la naturaleza de la guerra.
>
> En Metal Gear Solid 2 (2001), Kojima predijo con notable precisión:
> la manipulación de la información digital, las cámaras de eco en redes sociales
> y la fabricación de verdades alternativas — 15 años antes de que fueran términos comunes.
>
> Fue despedido de Konami en 2015 después de 30 años.
> Fundó Kojima Productions y lanzó Death Stranding (2019),
> un juego sobre la reconexión humana en un mundo fragmentado.
>
> **El videojuego como arte narrativo:**
> Kojima demostró que un joystick puede ser una pluma.
> Que los controles pueden ser metáforas.
> Que el jugador puede ser el medio y el mensaje al mismo tiempo.
>
> *"¿Eres tú quien juega...*
> *o estás siendo jugado?"*
> — Temática central de Metal Gear Solid 2

---

**Botón:** `↩ Volver al inicio`

---

## Arquitectura de Archivos

```
kojima-operacion-sombra/
│
├── index.html                     # Pantalla de inicio (animación de Codec)
├── design.md                      # Este documento
│
├── css/
│   ├── main.css                   # Paleta verde militar y CRT
│   ├── codec.css                  # UI del Codec con scanlines
│   └── animations.css             # Efectos de detección, alarma, explosión
│
├── js/
│   ├── engine.js                  # Motor de escenas
│   ├── stealth.js                 # Sistema de sigilo y detección
│   ├── guards.js                  # IA de guardias con patrullas y conos
│   ├── codec.js                   # Sistema de diálogos tipo Codec
│   ├── boss.js                    # Combate con ROJO-MG (3 fases)
│   ├── revelation.js              # Secuencia final narrativa
│   └── canvas-renderer.js         # Render top-down en Canvas 2D
│
├── assets/
│   ├── sprites/
│   │   ├── shadow7/               # SOMBRA-7 (estados: sigilo, alerta, combate)
│   │   ├── guards/                # Guardias (patrulla, alerta, alarma)
│   │   ├── rojo-mg/               # Fases del mecha boss
│   │   └── codec-portraits/       # Retratos para pantalla Codec
│   ├── backgrounds/
│   │   ├── perimeter.png          # Área A
│   │   ├── corridors.png          # Área B
│   │   ├── laboratory.png         # Área C
│   │   └── boss-arena.png         # Arena del boss
│   └── audio/
│       ├── stealth-ambience.mp3   # Música de sigilo (tensión baja)
│       ├── alert-yellow.mp3       # Sonido de alerta
│       ├── alert-red.mp3          # Alarma completa
│       ├── codec-beep.mp3         # Tono de llamada Codec
│       ├── boss-theme.mp3         # Música de combate con mecha
│       └── revelation-silence.mp3 # Silencio narrativo final
│
└── data/
    ├── guard-routes.json          # Rutas de patrulla de guardias
    ├── codec-dialogues.json       # Todos los diálogos del Codec
    └── boss-phases.json           # Configuración de las 3 fases del boss
```

---

## Nota Legal

> **⚠️ Aviso Legal**
>
> **Operación Sombra** es una obra de homenaje fan-made sin fines comerciales.
>
> Metal Gear y todos sus personajes, nombres y elementos asociados son marcas registradas y propiedad de Konami Holdings Corporation.
>
> Esta obra no está afiliada, respaldada ni autorizada por Konami, Hideo Kojima ni Kojima Productions.
>
> El nombre Hideo Kojima se menciona con fines de homenaje cultural y reconocimiento artístico. Ningún contenido de Operación Sombra replica literalmente activos de juegos de Konami o Kojima Productions.
>
> Todos los personajes, nombres de misiones y elementos narrativos originales de Operación Sombra son creación de sus autores.
