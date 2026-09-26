/**
 * audio_interstellar.js — Motor de Órgano Sacro y Paisajes Gravitacionales (0 KB / Vanilla Web Audio API)
 * SAPIENSIA CLAN • Homenaje a Christopher Nolan & Hans Zimmer
 * Diseño e Ingeniería Sónica: Hertz (Sonidista del Yermo)
 */

class InterstellarAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.isMuted = false;
    this.initialized = false;
    this.currentPhase = 'none';
    this.activeVoices = [];
    this.tickInterval = null;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Music Submix
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
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
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.12, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // --- SÍNTESIS DE TUBO DE ÓRGANO ADITIVO (HANS ZIMMER STYLE) ---
  playOrganPipe(freq, duration = 2.0, gainScale = 0.05, attack = 0.25, release = 0.5) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 3.5, t);
    filter.Q.setValueAtTime(1.2, t);

    const pipeGain = this.ctx.createGain();
    pipeGain.gain.setValueAtTime(0.0001, t);
    pipeGain.gain.linearRampToValueAtTime(gainScale, t + attack);
    pipeGain.gain.setValueAtTime(gainScale * 0.85, t + duration - release);
    pipeGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    // 4 Armónicos de Tubo con rank-detuning
    const harmonics = [
      { mult: 1.0, detune: 0, amp: 1.0 },
      { mult: 2.0, detune: 2, amp: 0.6 },
      { mult: 3.0, detune: -2, amp: 0.35 },
      { mult: 4.0, detune: 4, amp: 0.2 }
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
        this.playChordSequence([220, 261.63, 329.63, 440], 3.5); // Am
        break;
      case 'stealth':
        this.startStealthTension();
        break;
      case 'asteroids':
        this.playMountainsCrescendo();
        break;
      case 'orbit':
        this.playNoTimeForCaution();
        break;
      case 'choice':
      case 'ending':
        this.playStayMotif();
        break;
    }
  }

  playChordSequence(freqs, dur = 3.0) {
    freqs.forEach((f, i) => {
      setTimeout(() => {
        this.playOrganPipe(f, dur, 0.045, 0.4, 0.8);
      }, i * 120);
    });
  }

  startStealthTension() {
    // Drone en La1 (55 Hz)
    this.playOrganPipe(55, 12.0, 0.06, 1.0, 2.0);
    this.playOrganPipe(110, 12.0, 0.03, 1.0, 2.0);

    // Ticks de reloj a 60 BPM
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

    gain.gain.setValueAtTime(0.025, t);
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
          this.playChordSequence(chord, 2.4);
        }
      }, idx * 1600);
    });
  }

  playNoTimeForCaution() {
    // Órgano pleno (Tutti) a registro completo con rotación
    const tuttiNotes = [110, 164.81, 220, 329.63, 440, 659.25];
    tuttiNotes.forEach(f => {
      this.playOrganPipe(f, 6.0, 0.055, 0.3, 1.2);
    });

    // Pulso subarmónico gravitacional a 36 Hz
    this.playGravitationalPulse(36, 5.0);
  }

  playStayMotif() {
    const stayNotes = [440, 392, 329.63, 261.63, 220]; // A4 -> G4 -> E4 -> C4 -> A3
    stayNotes.forEach((f, idx) => {
      setTimeout(() => {
        this.playOrganPipe(f, 4.5, 0.04, 0.6, 1.5);
      }, idx * 600);
    });
  }

  // --- EFECTOS DE SONIDO ESPACIALES (SFX) ---

  // 1. Alarma de Detección Hangar
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
    gain.gain.linearRampToValueAtTime(0.06, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.42);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 2. Propulsores RCS / Retrocohetes
  playThruster() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.12);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(280, t);
    filter.Q.setValueAtTime(2.0, t);

    gain.gain.setValueAtTime(0.04, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.15);
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  // 3. Impacto de Asteroide
  playAsteroidHit() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(25, t + 0.28);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.35);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // 4. Pulso Gravitacional de Gargantúa
  playGravitationalPulse(freq = 36, duration = 4.0) {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.linearRampToValueAtTime(freq + 6, t + duration * 0.5);
    osc.frequency.linearRampToValueAtTime(freq, t + duration);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.07, t + 0.5);
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
