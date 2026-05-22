# 🌌 DISEÑO: PROYECTO ARCADE INTERSTELLAR
## Universo: Christopher Nolan
**Homenaje a:** Christopher Nolan & Jonathan Nolan (Interstellar, 2014)
**Estado:** Diseño Completo e Implementado.

---

## 🎯 CONCEPTO GENERAL

Una experiencia interactiva y narrativa transmedia basada en los momentos finales de *Interstellar*, continuando de manera alternativa a partir del robo del Ranger por parte de Cooper y TARS. El jugador deberá guiar a Cooper en una misión desesperada para robar un carguero masivo de clase *Endurance II*, navegar un cinturón de asteroides, estabilizar manualmente la nave en la órbita de *Gargantúa* bajo interferencias extremas, y tomar la decisión final de sacrificio que alterará el destino de la nueva humanidad.

**Estética**: Ciencia ficción dura y cinematográfica. Interfaz de instrumentación espacial retro-futurista de la NASA. Paleta de negros profundos, polvo estelar dorado y destellos ámbar y cian. CSS Glassmorphism de alta fidelidad, partículas estelares interactivas y efecto de líneas de escaneo CRT analógicas.

**Audio**: Banda sonora generada por procedimiento mediante la Web Audio API, sintetizando acordes majestuosos y trágicos de órgano de tubos en tributo a Hans Zimmer, que reaccionan dinámicamente según la fase del juego.

---

## I. NÚCLEO DE PERSISTENCIA Y ESTADO

El estado del juego es lineal y simplificado para evitar bloqueos y favorecer la rejugabilidad inmediata, manteniendo un sistema de autoguardado de fases:

```javascript
localStorage.setItem('interstellar_current_phase', 'welcome'); // welcome, intro, stealth, asteroids, orbit, choice, ending_tars, ending_cooper
localStorage.setItem('interstellar_stealth_deaths', '0');
localStorage.setItem('interstellar_asteroids_score', '0');
```

Si el jugador falla en los minijuegos de Sigilo, Asteroides u Órbita, el sistema le permite reintentar inmediatamente desde la fase actual (punto de control) sin perder el progreso narrativo previo.

---

## II. DESGLOSE DE FASES JUGABLES

### 📡 Fase 1: Conexión Cuántica (Pantalla de Inicio)
- **Mecánica**: Inicialización temática interactiva.
- **Visual**: Fondo de Canvas interactivo con un campo de estrellas en movimiento y un túnel de gusano procedimental. El texto simula un terminal cuántico de la NASA estableciendo comunicación con el Ranger robado en órbita.
- **Acción**: El usuario hace clic en `[ ESTABLECER ENLACE BIFROST ]`. Al interactuar, se activa el motor de audio de órgano sintetizado.

### 💬 Fase 2: Diálogo Crítico (Ranger)
- **Mecánica**: Diálogo cinematográfico con TARS.
- **Narrativa**: Cooper pilota el Ranger de exploración recién robado. TARS le advierte que la nave carece de motores hiperbólicos y combustible suficiente para viajar al sistema de la Dra. Brand (sistemas FTL). Revela la existencia de la *Endurance II*, un gigantesco carguero espacial que Murph Cooper construyó pero que los gobiernos de las estaciones espaciales dejaron inoperativo y oxidándose en los hangares debido al conformismo de la humanidad en los hábitats artificiales.
- **Objetivo**: Cooper y TARS deciden infiltrarse en el hangar gubernamental para robar la *Endurance II*.

### 🕵️ Fase 3: Infiltración en el Hangar (Sigilo 2D)
- **Mecánica**: Minijuego de sigilo táctico basado en Canvas.
- **Controles**: Teclas de dirección (PC) o D-Pad virtual en pantalla (Móviles).
- **Gameplay**: 
  - El jugador controla a Cooper (un punto azul brillante o avatar minimalista con estela de partículas).
  - Debe moverse por un laberinto de pasillos oscuros del hangar para llegar a la cabina de mando de la *Endurance II* (zona verde brillante).
  - Los guardias de seguridad son representados por focos de patrullaje con conos de visión de luz radial amarilla que se mueven en patrones repetitivos.
  - Si Cooper toca un cono de visión, salta una alarma, la pantalla destella en rojo y se reinicia la fase (Hangar).
- **Efecto Visual**: Luces dinámicas, sombras proyectadas y partículas de polvo flotando en los haces de luz.

### ☄️ Fase 4: Tormenta de Asteroides (Dodge Runner)
- **Mecánica**: Juego de naves y reflejos de desplazamiento vertical en Canvas.
- **Controles**: Flechas Izquierda/Derecha (PC) o botones laterales de timón (Móviles).
- **Gameplay**:
  - La *Endurance II* asciende a gran velocidad.
  - Una lluvia densa de asteroides (polígonos rocosos detallados que rotan y emiten partículas de fricción) cae desde la parte superior.
  - El jugador debe maniobrar la nave para evitar colisionar. Cada esquiva exitosa aumenta el contador de distancia.
  - Se requiere sobrevivir 25 segundos para escapar del cinturón. Un impacto daña los escudos y reinicia el despegue.
- **Efecto Visual**: Parallax de estrellas en el fondo, sacudida de pantalla (screen shake) ante colisiones cercanas y fuego de propulsores animado en la nave.

### 🌀 Fase 5: Estabilización de Órbita en Gargantúa (Fuerza G)
- **Mecánica**: Minijuego físico de mantenimiento vectorial y balance.
- **Gameplay**:
  - Llegando a Gargantúa, la gravedad es extrema y las perturbaciones magnéticas apagan los instrumentos (calibraciones numéricas parpadeantes).
  - El agujero negro se representa en el centro como una singularidad supermasiva rodeada por un disco de acreción deformado gravitacionalmente (miles de partículas ardientes rotando velozmente).
  - La nave sufre una constante tracción gravitatoria hacia el centro.
  - El jugador debe dar pulsos a los retrocohetes laterales (izquierda/derecha/arriba/abajo) para mantener la nave dentro de una franja orbital segura (anillo verde con bordes pulsantes).
  - Mantener la nave dentro del rango seguro durante 15 segundos calibra el vector de eyección cuántica. Si la nave toca el horizonte de sucesos (centro oscuro) o escapa demasiado lejos, la misión falla.

### ⚖️ Fase 6: El Horizonte de Sucesos (La Decisión)
- **Mecánica**: Dilema narrativo final con dos cartas holográficas interactivas.
- **Contexto**: Para impulsar la *Endurance II* al planeta habitable de la Dra. Brand mediante efecto honda, una parte de la nave debe sacrificarse en Gargantúa.
- **Elección**:
  1. **Enviar a TARS**: TARS se sumerge en la singularidad para enviar los datos cuánticos a la nueva colonia.
  2. **Lanzarse Cooper**: Cooper se sacrifica en el agujero negro para transmitir los datos cuánticos personalmente, permitiendo que TARS pilotee la *Endurance II* a salvo con Brand.

### 📜 Fase 7: Ramificaciones del Fin (Epílogo)
- **Desenlace A (TARS)**: La colonia recibe la información de manera misteriosa y anónima. Con el paso de los siglos, la humanidad olvida su propia historia y venera las señales cuánticas de TARS como una deidad o mensajes extraterrestres. La comodidad de la estación prevalece bajo una nueva religión robótica.
- **Desenlace B (Cooper)**: Los datos cuánticos de Cooper son tan reveladores que en una década la Dra. Brand logra establecer un asentamiento habitable masivo. A pesar de la opresión e incredulidad de los gobiernos de las estaciones espaciales, que prohíben la migración debido al control absoluto de los recursos, el mensaje final de Brand resuena por los receptores disidentes: *"no entres dócilmente en esa buena noche. enfurece, enfurece contra la agonía de la luz"*. Una gran diáspora de científicos y colonos emprende el viaje hacia el nuevo hogar.
- **Visual**: Desplazamiento tipográfico de créditos e historia sobre un fondo animado en cámara lenta de Gargantúa con acordes solemnes de órgano.

---

## III. ARQUITECTURA DE ARCHIVOS

```
nolan-interestelar/
├── design.md         ← Este documento
└── index.html        ← Archivo único del juego y estilos
```

---

## IV. NOTA HISTÓRICA & HOMENAJE Fan-Made

Esta obra es un tributo no comercial al cine de ciencia ficción y filosofía física de Christopher Nolan. Todos los recursos visuales y auditivos son generados matemáticamente a través de APIs del navegador (HTML5 Canvas y Web Audio API) para garantizar autonomía técnica y fidelidad estética al concepto de la obra original (2014).
