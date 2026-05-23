# 🛠️ BLUEPRINT DE CODIFICACIÓN CREATIVA Y JUEGOS WEB EN CÓDIGO PURO
Este documento es una guía técnica detallada de los patrones de desarrollo, matemáticas de renderizado y síntesis de audio procedimental creados para el proyecto **Interstellar**. Sirve como especialización de código de referencia para replicar esta calidad estética y rendimiento técnico en futuros desarrollos de videojuegos web en formato monofile (*index.html*).

---

## 🎨 I. ESTÉTICA VISUAL Y DISEÑO (CSS TELEMETRÍA Y GLASSMORPHISM)
Para conseguir una apariencia visual premium de tipo terminal gubernamental de la NASA o visor HUD espacial:
- **Base de colores**: Negros profundos (`#000002` a `#010207`), grises metálicos (`#8fa0b3`), cian tecnológico (`#00dcff`), ámbar de advertencia (`#ff7800`) y rojo crítico (`#ff3838`).
- **Glassmorphism**: Efecto de cristal esmerilado translúcido usando transparencias, bordes delgados de alto brillo y filtros de desenfoque.
- **Filtros CRT**: Efecto analógico retro proyectando líneas de escaneo y parpadeo sutil.

### Estilos CSS Core:
```css
/* Contenedor principal con efecto de vidrio esmerilado */
.panel-container {
    background: rgba(2, 6, 18, 0.82);
    border: 1px solid rgba(0, 220, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8),
                0 0 15px rgba(0, 220, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    padding: 24px;
    font-family: 'Share Tech Mono', monospace;
}

/* Efecto de líneas de escaneo analógicas CRT */
.scanlines {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%, 
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 4px;
    z-index: 9999;
    pointer-events: none;
}
```

---

## 🎹 II. MOTOR DE SÍNTESIS DE AUDIO (WEB AUDIO API)
Para reproducir una banda sonora solemne sin descargar archivos de audio gigantescos, creamos un sintetizador de órgano de tubos mediante síntesis subaditiva (sumando múltiples osciladores con diferentes armónicos) y pasándolos por un filtro pasa-bajos resonante.

### Estructura de Síntesis del Órgano:
```javascript
class InterstellarAudio {
    constructor() {
        this.ctx = null;
        this.masterVolume = null;
        this.oscillators = [];
        this.isPlaying = false;
        this.isFast = false;
        this.chordInterval = null;
        this.chordIndex = 0;
    }

    init() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterVolume = this.ctx.createGain();
        this.masterVolume.gain.setValueAtTime(0.35, this.ctx.currentTime);
        this.masterVolume.connect(this.ctx.destination);
        this.isPlaying = true;
        this.startChordProgression();
    }

    playOrganPipe(frequency, duration, volume = 0.08) {
        if (!this.ctx || this.ctx.state === 'suspended') return;

        // Sumamos armónicos para simular tubos reales de metal/madera
        const harmonics = [1, 2, 1.5, 3]; // Fundamental, Octava, Quinta, Octava superior
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
        // Ataque (fade-in gradual)
        gainNode.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.8);
        // Decaimiento (fade-out gradual)
        gainNode.gain.setValueAtTime(volume, this.ctx.currentTime + duration - 1.0);
        gainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime); // Corte cálido
        filter.Q.setValueAtTime(2.0, this.ctx.currentTime); // Resonancia analógica

        const activeOscillators = harmonics.map((h, i) => {
            const osc = this.ctx.createOscillator();
            osc.type = i === 0 ? 'sawtooth' : 'sine'; // Fundamental en diente de sierra, armónicos senoidales
            osc.frequency.setValueAtTime(frequency * h, this.ctx.currentTime);
            osc.connect(filter);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
            return osc;
        });

        filter.connect(gainNode);
        gainNode.connect(this.masterVolume);
    }

    playChord(frequencies, duration) {
        const individualVolume = 0.24 / frequencies.length;
        frequencies.forEach(freq => {
            this.playOrganPipe(freq, duration, individualVolume);
        });
    }
}
```

---

## 🌀 III. MATEMÁTICAS DE RENDERIZADO EN CANVAS 2D
El motor gráfico corre enteramente sobre `<canvas>` con interpolación lineal basada en **Delta-Time** (`dt`) para asegurar que el movimiento y la física corran a velocidad idéntica sin importar si el monitor del usuario es de 60Hz o 144Hz.

### 1. Bucle de Juego con Delta Time:
```javascript
let lastTime = performance.now();
function gameLoop(currentTime) {
    if (isGameOver) return;
    
    const elapsed = currentTime - lastTime;
    lastTime = currentTime;
    
    // Normalizado de delta-time (1.0 representa 60FPS estables)
    const dt = Math.min(3, elapsed / 16.66);
    
    updateGameLogic(dt);
    drawGraphics();
    
    requestAnimationFrame(gameLoop);
}
```

### 2. Deformación Gravitacional de la Luz (Lente Gravitacional de Gargantúa):
Para simular el efecto de la curvatura del espacio alrededor del agujero negro según la Relatividad General:
- Las partículas del disco de acreción rotan radialmente (`angle += speed * dt`).
- Al calcular las coordenadas rectangulares de las partículas, si se encuentran en el hemisferio superior (detrás del agujero negro), desviamos su coordenada Y hacia arriba de forma exponencial e inversa a la distancia (`radius`). Esto crea el icónico arco superior de Gargantúa en 2D puro:

```javascript
// Actualización del disco de acreción
for (let p of accretionParticles) {
    p.angle += p.speed * dt;
    
    const px = Math.cos(p.angle) * p.radius;
    const py = Math.sin(p.angle) * p.radius;
    
    let rx = singularityX + px;
    let ry = singularityY + py;
    
    // Si la partícula está detrás del agujero negro (arriba en Y)
    if (py < 0) {
        // Cuanto más cerca del horizonte de sucesos, mayor es la desviación gravitatoria
        const warpFactor = (1 - (p.radius / maxRadius)) * warpIntensity;
        ry -= warpFactor; // Tira la luz hacia el polo superior
    }
    
    // Dibujo de la partícula sintonizada
    ctx.fillStyle = p.color;
    ctx.fillRect(rx, ry, p.size, p.size);
}
```

---

## 🛰️ IV. MODELADO VECTORIAL PREMIUM (DIBUJO DE LA ENDURANCE II)
En lugar de cargar pesados sprites PNG que consumen red y memoria, la nave interestelar se dibuja dinámicamente mediante trazados de vectores con sombreados luminiscentes, respetando la estructura física real de 12 módulos habitacionales acoplados en anillo:

```javascript
function drawEnduranceV2(ctx, cx, cy, radius, rotation, thrustersActive = false, thrusterType = 0) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    
    // 1. Dibujar anillo exterior de conexión
    ctx.strokeStyle = 'rgba(0, 220, 255, 0.4)';
    ctx.lineWidth = radius * 0.05;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // 2. Dibujar 6 radios de conexión internos (Spokes)
    ctx.strokeStyle = 'rgba(0, 220, 255, 0.2)';
    ctx.lineWidth = radius * 0.02;
    for(let i=0; i<6; i++) {
        const a = (i * Math.PI * 2) / 6;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(Math.cos(a)*radius, Math.sin(a)*radius);
        ctx.stroke();
    }
    
    // 3. Dibujar 12 módulos cilíndricos acoplados radialmente
    const modulesCount = 12;
    const w = radius * 0.25;
    const h = radius * 0.38;
    for(let i=0; i<modulesCount; i++) {
        const aModule = (i * Math.PI * 2) / modulesCount;
        ctx.save();
        ctx.rotate(aModule);
        
        // Estructura sólida del módulo
        ctx.fillStyle = '#010207';
        ctx.strokeStyle = '#00dcff';
        ctx.lineWidth = 1.5;
        ctx.fillRect(-w/2, -radius - h/2, w, h);
        ctx.strokeRect(-w/2, -radius - h/2, w, h);
        
        // Detalles internos del módulo (sensores / paneles solares)
        ctx.fillStyle = '#ff7800';
        ctx.fillRect(-w/4, -radius - h/3, w/2, 2);
        
        ctx.restore();
    }
    
    // 4. Dibujar llamas de propulsores si están encendidas
    if (thrustersActive) {
        ctx.shadowColor = '#ff7800';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#ff7800';
        ctx.beginPath();
        // Fuego principal apuntando en contra de la propulsión
        ctx.moveTo(-radius * 0.2, radius * 1.15);
        ctx.lineTo(0, radius * 1.5 + Math.sin(Date.now() * 0.1) * 8);
        ctx.lineTo(radius * 0.2, radius * 1.15);
        ctx.closePath();
        ctx.fill();
    }
    
    ctx.restore();
}
```

---

## 🕵️ V. MECÁNICAS DE SIGILO Y COLISIÓN RADIAL
Para el minijuego de infiltración por radar, implementamos un sistema eficiente de intersección de conos de luz (los guardias de seguridad) con un punto central (el jugador):

- **Guardia**: Tiene posición `(x, y)`, dirección de mirada `angle` y un campo de visión definido por `aperture` (ej. 45 grados) y `range` (distancia máxima de escaneo).
- **Intersección**:
  1. Calculamos la distancia euclidiana entre el guardia y el jugador. Si es mayor a `range`, no hay colisión.
  2. Si está en rango, calculamos el ángulo absoluto del guardia hacia el jugador usando `Math.atan2(player.y - guard.y, player.x - guard.x)`.
  3. Comparamos la diferencia angular con la dirección de mirada. Si la diferencia es menor a la mitad de `aperture`, el jugador se encuentra dentro del haz de luz y es detectado.

```javascript
function checkDetection(player, guard) {
    const dx = player.x - guard.x;
    const dy = player.y - guard.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Fuera del alcance del faro
    if (dist > guard.scanRange) return false;
    
    // Ángulo desde el guardia hacia el jugador
    const angleToPlayer = Math.atan2(dy, dx);
    
    // Normalizar diferencias angulares entre -PI y PI
    let diffAngle = angleToPlayer - guard.lookAngle;
    while (diffAngle < -Math.PI) diffAngle += Math.PI * 2;
    while (diffAngle > Math.PI) diffAngle -= Math.PI * 2;
    
    // Si cae dentro de la apertura angular del cono de visión
    if (Math.abs(diffAngle) < guard.apertureAngle / 2) {
        return true; // ¡Detección!
    }
    
    return false;
}
```

---

## 📝 VI. CÓMO USAR ESTA GUÍA EN EL FUTURO
Cuando vayamos a crear un nuevo juego arcade interactivo (por ejemplo, basado en *Inception* o *Tenet*), el usuario me indicará: **"Revisa el archivo creative_coding_blueprint.md del proyecto anterior"**. 
Al leerlo, podré heredar instantáneamente:
1.  La estructura del bucle de juego basado en Delta-Time para un control de física impecable.
2.  Las técnicas de Web Audio API para sintetizar acordes ricos y osciladores envolventes.
3.  El modelo de diseño por CSS con filtros analógicos y estructuras glassmorphism para interfaces HUD altamente inmersivas.
4.  La estrategia de dibujo vectorial en Canvas en lugar de assets pesados para mantener el archivo final por debajo de unos pocos kilobytes comprimidos.
