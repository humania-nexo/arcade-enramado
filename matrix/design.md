# 🔴 DISEÑO: PROYECTO ARCADE MATRIX
## Universo: Las Hermanas Wachowski
**Homenaje a:** Lana y Lilly Wachowski
**Prioridad:** PRIMERA — Semilla transmedia ya sembrada en Capítulo 1 del libro.
**Estado:** Diseño completo. Listo para programar.

---

## 🎯 CONCEPTO GENERAL

Suite de 4 minijuegos web retro-ciberpunk que homenajean el universo Matrix. El jugador llega aquí desde la consola DEVA tras reconocer una semilla transmedia en el libro físico.

**Estética:** Retro-Ciberpunk de 8/16 bits. Código en cascada. Verde sobre negro. Pixel art puro generado por código en Canvas.

**Experiencia de bienvenida:** Una interfaz de terminal analógica donde el sistema exige un alias de hacker.

---

## I. NÚCLEO DE PERSISTENCIA

```javascript
// Capa de juego — privada de Matrix
localStorage.setItem('nexo_alias', user_hacker_name);
localStorage.setItem('matrix_score_total', 0);
localStorage.setItem('matrix_completed', JSON.stringify([]));

// El alias se inyecta dinámicamente en diálogos, HUDs y Game Over
```

**Sistema de alias:** Al abrir la URL el terminal exige:
> `INTRODUCE TU ALIAS DE HACKER: [ ___ ]`

El alias vive en toda la suite. Aparece en pantallas de HUD, Game Over y créditos.

---

## II. LA TETRALOGÍA

### 🔵 Experiencia 1: La Encrucijada de las Píldoras
**Mecánica:** Elección narrativa con consecuencias.

**Interfaz:** Dos manos en pixel art ofrecen la Píldora Roja y la Píldora Azul.

**Ruta Azul (El Bucle):**
- Pantalla CRT: oficina gris, botón `[Sellar Documento Monótono]`
- Al 5to clic: glitch de pantalla
- Terminal expulsa al jugador:
  > *"Estás cometiendo un error, [alias]. Ese cubículo no te pertenece. Forzando redirección..."*
- El juego los lleva de vuelta a la elección.

**Ruta Roja:**
- Activa de inmediato la Experiencia 2.

**Complejidad:** 🟢 Baja — 2 a 3 horas de código.

---

### 🟢 Experiencia 2: El Escape de los Bloques (Endless Runner)
**Mecánica:** Estilo dinosaurio de Chrome. Scroll lateral. Pixel art generado por código.

**Avatar:** Figura con gabardina negra flotante y gafas oscuras.

**HUD:**
```
SUJETO DE INTERÉS: [alias] // ESTADO: EVADIENDO CAPTURA
DISTANCIA: 0000m    VELOCIDAD: ██████░░
```

**Obstáculos:**
- *Bajos:* Cajas de servidores, monitores viejos → **saltar**
- *Altos:* Centinelas mecánicos, ráfagas de balas → **agacharse**

**Controles (universales — PC y móvil):**
- PC: `↑` saltar / `↓` agacharse
- Móvil: Botón `▲ SALTAR` y `▼ AGACHAR` en pantalla

**Dificultad:** Aumenta progresivamente. La velocidad de scroll se incrementa cada 500m.

**Puntuación:** Distancia en metros → suma al `matrix_score_total`.

**Complejidad:** 🟡 Media.

---

### 🟡 Experiencia 3: La Autopista del Código (Conducción Cenital)
**Mecánica:** Vista cenital vertical (desde arriba). Optimizado para móviles.

**Narrativa de entrada:**
Una hacker con traje de cuero negro en pixel art frena en seco su moto:
> *"¡Muévete, [alias]! ¡O subes a la moto ahora mismo o borrarán tu disco duro!"*

**Controles (universales):**
- PC: `←` `→` o `A` `D`
- Móvil: Botón `◀ IZQUIERDA` y `▶ DERECHA` en pantalla (grandes, laterales)

**Obstáculos:**
- Camiones de basura del sistema (bloquean carriles)
- Parches de código corrupto (ralentizan la moto)
- Centinelas aéreos (disparan desde arriba)

**Puntuación:** Distancia recorrida → suma al `matrix_score_total`.

**Complejidad:** 🟡 Media.

---

### 🔴 Experiencia 4: El Duelo de Datos (Brick Breaker)
**Mecánica:** Estilo Arkanoid/Breakout. Barra horizontal en la parte inferior. Pelota (bit de datos) rebota hacia arriba.

**Objetivo:** Destruir muro superior compuesto por bloques de `0` y `1` binarios.

**Power-ups dropeados:**
- `×2` Multiplicador de bits (doble velocidad de la pelota)
- `▬▬` Barra expandida
- `✦ ✦ ✦` Ráfaga láser temporal

**Pantalla de Victoria Final:**
Al destruir el último bloque, la pantalla estalla en cascada verde:
```
▓▒░ SISTEMA HACKEADO ░▒▓
EL MUNDO REAL TE ESPERA, [alias].
```

**Complejidad:** 🟡 Media.

---

## III. PANTALLA FINAL — EL HOMENAJE

Al completar las 4 experiencias, aparece la pantalla más importante:

```
╔══════════════════════════════════════╗
║   MISIÓN COMPLETADA, [alias].        ║
║   BIENVENIDO AL MUNDO REAL.          ║
╠══════════════════════════════════════╣
║                                      ║
║   Este juego es un homenaje a        ║
║   LANA Y LILLY WACHOWSKI             ║
║   Creadoras del universo Matrix.     ║
║                                      ║
║   Matrix (1999) no es solo           ║
║   una película de ciencia ficción.   ║
║   Es una pregunta filosófica         ║
║   que todavía no tiene respuesta.    ║
║                                      ║
║   ¿Habías tomado la píldora azul?    ║
║                                      ║
║   [ → VER MATRIX ]                   ║
║   [ → VOLVER A JUGAR ]               ║
║   [ → ABRIR RECOMPENSA ]             ║
╚══════════════════════════════════════╝
```

---

## IV. ARQUITECTURA DE ARCHIVOS

```
matrix/
├── index.html          ← Hub Matrix + captura de alias
├── game.js             ← Lógica compartida Matrix (alias, scores)
├── exp1-pildoras/
│   ├── index.html
│   └── game.js
├── exp2-runner/
│   ├── index.html
│   └── game.js
├── exp3-autopista/
│   ├── index.html
│   └── game.js
└── exp4-breakout/
    ├── index.html
    └── game.js
```

---

## V. NOTA LEGAL

```
Esta experiencia es un homenaje fan-made de inspiración libre.
Sin fines comerciales.
Matrix es una creación original de Lana y Lilly Wachowski (1999).
Apoya su obra. Apoya el cine que hace preguntas.
```

---

*Diseño completado. Listo para iniciar programación.*
