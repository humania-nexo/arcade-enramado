/**
 * audio_interstellar.js — Motor de Órgano Sacro y Paisajes Gravitacionales (0 KB / Vanilla Web Audio API)
 * SAPIENSIA CLAN • Homenaje a Christopher Nolan & Hans Zimmer
 * Diseño e Ingeniería Sónica: Hertz (Sonidista del Yermo)
 * Calibración v2.0: Anti-Clipping Dynamics, SFX Sonda Cuántica 45.0 Hz y Sincronía con Guion Maestro
 */

class InterstellarAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.isMuted = false;
    this.initialized = false;
    this.currentPhase = 'none';
    this.activeVoices = [];
    this.tickInterval = null;
    this.probeOsc = null;
    this.probeGain = null;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master Dynamics Compressor (Protección Anti-Clipping Móvil & Brillo de Órgano)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(24, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(14, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);
      this.compressor.connect(this.ctx.destination);

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.14, this.ctx.currentTime);
      this.masterGain.connect(this.compressor);

      // Music Submix
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.80, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      // SFX Submix
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.75, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.initialized = true;

      const savedMute = localStorage.getItem('interstellar_audio_muted');
      if (savedMute === 'true') {
        this.isMuted = true;
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    } catch (e) {
      console.warn('Web Audio no disponible en Interstellar:', e);
    }
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.ensureContext();
    this.isMuted = !this.isMuted;
    localStorage.setItem('interstellar_audio_muted', this.isMuted ? 'true' : 'false');
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.14, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // --- SÍNTESIS DE TUBO DE ÓRGANO ADITIVO (HANS ZIMMER STYLE) ---
  playOrganPipe(freq, duration = 2.0, gainScale = 0.045, attack = 0.25, release = 0.5) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 3.2, t);
    filter.Q.setValueAtTime(1.1, t);

    const pipeGain = this.ctx.createGain();
    pipeGain.gain.setValueAtTime(0.0001, t);
    pipeGain.gain.linearRampToValueAtTime(gainScale, t + attack);
    pipeGain.gain.setValueAtTime(gainScale * 0.82, t + duration - release);
    pipeGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    // 4 Armónicos de Tubo con rank-detuning de iglesia
    const harmonics = [
      { mult: 1.0, detune: 0, amp: 1.0 },
      { mult: 2.0, detune: 2.5, amp: 0.55 },
      { mult: 3.0, detune: -2.0, amp: 0.30 },
      { mult: 4.0, detune: 3.5, amp: 0.18 }
    ];

    const oscs = [];
    harmonics.forEach(h => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * h.mult, t);
      osc.detune.setValueAtTime(h.detune, t);

      const hGain = this.ctx.createGain();
      hGain.gain.setValueAtTime(h.amp, t);

      osc.connect(hGain);
      hGain.connect(filter);
      oscs.push(osc);
    });

    filter.connect(pipeGain);
    pipeGain.connect(this.musicGain);

    oscs.forEach(osc => {
      osc.start(t);
      osc.stop(t + duration + 0.1);
    });

    oscs[0].onended = () => {
      oscs.forEach(osc => osc.disconnect());
      filter.disconnect();
      pipeGain.disconnect();
    };
  }

  // --- ARREGLO DE FASES DINÁMICAS ---
  setPhase(phaseName) {
    this.ensureContext();
    this.currentPhase = phaseName;
    this.stopTicks();

    switch (phaseName) {
      case 'welcome':
      case 'intro':
        this.playChordSequence([220, 261.63, 329.63, 440], 3.5); // Am (Day One)
        break;
      case 'stealth':
      case 'hangar':
        this.startStealthTension();
        break;
      case 'flight':
      case 'wormhole':
        this.playChordSequence([174.61, 220, 261.63, 349.23], 4.0); // Fmaj7
        break;
      case 'asteroids':
        this.playMountainsCrescendo();
        break;
      case 'preorbit':
      case 'orbit':
        this.playNoTimeForCaution();
        break;
      case 'choice':
      case 'decouple':
      case 'epilogue':
      case 'credits':
        this.playStayMotif();
        break;
    }
  }

  playChordSequence(freqs, dur = 3.0) {
    freqs.forEach((f, i) => {
      setTimeout(() => {
        if (!this.isMuted) {
          this.playOrganPipe(f, dur, 0.042, 0.4, 0.8);
        }
      }, i * 120);
    });
  }

  startStealthTension() {
    // Drone en La1 (55 Hz)
    this.playOrganPipe(55, 14.0, 0.05, 1.0, 2.5);
    this.playOrganPipe(110, 14.0, 0.025, 1.0, 2.5);

    // Ticks de reloj analógico a 60 BPM
    this.tickInterval = setInterval(() => {
      this.playClockTick();
    }, 1000);
  }

  stopTicks() {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
  }

  playClockTick() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.015);

    gain.gain.setValueAtTime(0.022, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.018);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.02);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  playMountainsCrescendo() {
    const chords = [
      [220, 261.63, 329.63], // Am
      [174.61, 220, 261.63], // F
      [261.63, 329.63, 392.00], // C
      [196.00, 246.94, 293.66]  // G
    ];

    chords.forEach((chord, idx) => {
      setTimeout(() => {
        if (this.currentPhase === 'asteroids') {
          this.playChordSequence(chord, 2.2);
        }
      }, idx * 1400);
    });
  }

  // Calibración Tutti Organ (Anti-Clipping & Resonancia Mi Mayor)
  playNoTimeForCaution() {
    const tuttiNotes = [110, 164.81, 220, 329.63, 440, 659.25];
    tuttiNotes.forEach((f, idx) => {
      setTimeout(() => {
        if (this.currentPhase === 'orbit' || this.currentPhase === 'preorbit') {
          this.playOrganPipe(f, 6.5, 0.038, 0.25, 1.2);
        }
      }, idx * 60);
    });

    // Pulso subarmónico gravitacional calibrado a 36 Hz
    this.playGravitationalPulse(36, 5.5);
  }

  playStayMotif() {
    const stayNotes = [440, 392, 329.63, 261.63, 220]; // A4 -> G4 -> E4 -> C4 -> A3
    stayNotes.forEach((f, idx) => {
      setTimeout(() => {
        this.playOrganPipe(f, 4.8, 0.038, 0.6, 1.6);
      }, idx * 550);
    });
  }

  // --- SONDA CUÁNTICA INTERACTIVA (45.0 Hz SFX) ---

  // 1. Calibración en tiempo real según slider
  playProbeCalibration(freqVal, targetFreq = 45.0) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const diff = Math.abs(freqVal - targetFreq);
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (diff < 0.5) {
      // Sintonía exacta: Tono senoidal puro y armónico perfecto a 45 Hz + 90 Hz
      osc.type = 'sine';
      osc.frequency.setValueAtTime(45.0, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

      const hOsc = this.ctx.createOscillator();
      const hGain = this.ctx.createGain();
      hOsc.type = 'sine';
      hOsc.frequency.setValueAtTime(90.0, t);
      hGain.gain.setValueAtTime(0.03, t);
      hGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      hOsc.connect(hGain);
      hGain.connect(this.sfxGain);
      hOsc.start(t);
      hOsc.stop(t + 0.38);
      hOsc.onended = () => { hOsc.disconnect(); hGain.disconnect(); };
    } else {
      // Desafinación: Onda triangular con modulación de pitch proporcional a la distancia
      osc.type = 'triangle';
      const actualPitch = 45.0 + (freqVal - targetFreq) * 6;
      osc.frequency.setValueAtTime(Math.max(25, actualPitch), t);
      gain.gain.setValueAtTime(0.025, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    }

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.38);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 2. Transmisión Exitosa de la Sonda hacia las Estaciones Espaciales
  playProbeTransmitted() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const freqs = [45.0, 90.0, 180.0, 540.0, 1080.0];
    const t = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      const st = t + (idx * 0.08);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, st);

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.045, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + 0.9);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(st);
      osc.stop(st + 1.0);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }

  // --- EFECTOS DE SONIDO ESPACIALES (SFX) ---

  // Alarma de Detección Hangar
  playAlarm() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.linearRampToValueAtTime(440, t + 0.18);
    osc.frequency.linearRampToValueAtTime(880, t + 0.36);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.05, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.40);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // Propulsores RCS / Retrocohetes
  playThruster() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.12);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(280, t);
    filter.Q.setValueAtTime(2.0, t);

    gain.gain.setValueAtTime(0.035, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.14);
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  // Impacto de Asteroide
  playAsteroidHit() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(25, t + 0.26);

    gain.gain.setValueAtTime(0.07, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.30);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.32);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // Pulso Gravitacional de Gargantúa
  playGravitationalPulse(freq = 36, duration = 4.0) {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.linearRampToValueAtTime(freq + 5, t + duration * 0.5);
    osc.frequency.linearRampToValueAtTime(freq, t + duration);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.055, t + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + duration + 0.1);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }
}

// Instancia global
window.interstellarAudio = new InterstellarAudioEngine();
