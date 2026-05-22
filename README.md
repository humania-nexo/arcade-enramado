# 🎮 ARCADE ENRAMADO
## El Puente Entre Mundos

> *"Este arcade no tiene dueño. Es un homenaje gratuito a las mentes que cambiaron el mundo con una historia.*
> *Aquí viven Mozart, Homero, Dante, las Wachowski, Rowling, Kojima y muchos más.*
> *Juega, recuérdalos, léelos. No dejes morir las grandes ideas."*

---

## 🧭 CONCEPTO

El Arcade Enramado es una biblioteca interactiva. Cada juego es una puerta a un universo creado por una mente brillante. No hay logos. No hay marcas. Solo el homenaje.

Los jugadores llegan aquí a través de **semillas transmedia** sembradas en los libros del Universo Proiectio. El Bifrost (portal de entrada) vive en otro sistema. Aquí vive la experiencia.

**Sin fines comerciales. Proyecto de homenaje cultural.**

---

## 📋 LISTA DE UNIVERSOS

### ✅ CONFIRMADOS Y DISEÑADOS

| # | Universo | Referente | Prioridad | Estado |
|---|---|---|---|---|
| 1 | [Matrix](#) | Lana y Lilly Wachowski | 🔴 PRIMERA (semilla plantada Cap.1) | Diseñado |
| 2 | [Crónicas de la Selección Perdida](#) | J.K. Rowling | 🟡 Segunda | Diseñado |
| 3 | [Mozart: El Último Compás](#) | Wolfgang Amadeus Mozart | 🟡 Tercera | Diseñado |
| 4 | [Interstellar: No Entres Dócilmente](nolan-interestelar/index.html) | Christopher Nolan | 🔴 PRIMERA | Diseñado y Completado |

---

### 🗂️ EN LISTA (Con propuesta base)

| # | Universo | Referente | Tipo de Obra | Propuesto por |
|---|---|---|---|---|
| 4 | [La Odisea](#) | Homero | Literatura épica griega | Joshua |
| 5 | [La Divina Comedia](#) | Dante Alighieri | Literatura medieval | Joshua |
| 6 | [Operación Sombra](#) | Hideo Kojima / Metal Gear | Videojuego | Joshua |
| 7 | [La Biblioteca de Babel](#) | Jorge Luis Borges | Literatura fantástica | Antigravity |
| 8 | [El Jardín de las Máquinas](#) | Alan Turing | Ciencia / Historia | Antigravity |
| 9 | [Starman](#) | David Bowie | Música | Antigravity |
| 10 | [Macondo](#) | Gabriel García Márquez | Literatura | Antigravity |
| 11 | [Cosmos](#) | Carl Sagan | Ciencia / Divulgación | Antigravity |

---

### 💡 IDEAS ABIERTAS (Sin diseño todavía)

- Nina Simone / Miles Davis — El jazz como mecánica de improvisación
- Shakespeare — Teatro isabelino interactivo
- Frida Kahlo — Arte como exploración de dolor y color
- Nikola Tesla — Electricidad y visión incomprendida
- Ada Lovelace — La primera programadora
- Pink Floyd — *The Wall* como estructura narrativa de juego

---

## 🗂️ ESTRUCTURA DEL REPOSITORIO

```
arcade-enramado/
│
├── README.md                          ← Este documento
│
├── matrix/                            ← 🔴 PRIORIDAD 1
│   └── design.md
│
├── cronicas-seleccion-perdida/        ← J.K. Rowling
│   └── design.md
│
├── mozart-ultimo-compas/              ← Wolfgang Amadeus Mozart
│   └── design.md
│
├── homero-la-odisea/                  ← Homero
│   └── design.md
│
├── dante-divina-comedia/              ← Dante Alighieri
│   └── design.md
│
├── kojima-operacion-sombra/           ← Hideo Kojima
│   └── design.md
│
├── borges-biblioteca-babel/           ← Jorge Luis Borges
│   └── design.md
│
├── turing-jardin-maquinas/            ← Alan Turing
│   └── design.md
│
├── bowie-starman/                     ← David Bowie
│   └── design.md
│
├── garcia-marquez-macondo/            ← Gabriel García Márquez
│   └── design.md
│
├── sagan-cosmos/                      ← Carl Sagan
│   └── design.md
│
└── nolan-interestelar/                ← Christopher Nolan
    ├── design.md
    └── index.html
```

---

## ⚙️ ARQUITECTURA TÉCNICA GLOBAL

- **Stack:** HTML5 + Vanilla JS + Canvas API. Sin frameworks. Sin dependencias.
- **Persistencia:** `localStorage` en 3 capas (global / universo / juego)
- **Compatibilidad:** Móvil y escritorio. Botones en pantalla para controles táctiles.
- **Assets:** Pixel art generado por código (matrices de color en Canvas). Cero imágenes externas.
- **Audio:** Web Audio API para efectos. Audio público / dominio público donde aplique (ej. Mozart).
- **Deploy:** GitHub Pages bajo `humania-nexo/arcade-enramado`

---

*Documento vivo — actualizar con cada nuevo universo confirmado.*
