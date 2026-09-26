/**
 * audio_interstellar.js — Motor de Órgano Sacro y Paisajes Gravitacionales (0 KB / Vanilla Web Audio API)
 * SAPIENSIA CLAN • Homenaje a Christopher Nolan & Hans Zimmer
 * Diseño e Ingeniería Sónica: Hertz (Sonidista del Yermo)
 * Calibración v2.5: Alta Presencia Acústica, Bucle Continuo Dinámico, SFX Agujero de Gusano y Sonda Cuántica Dual
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
    this.phaseLoopInterval = null;
    this.tickInterval = null;
    this.probeOsc = null;
    this.probeGain = null;
    this.droneOscs = [];
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master Dynamics Compressor (Protección Anti-Clipping & Presencia Máxima)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(20, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(8, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.20, this.ctx.currentTime);
      this.compressor.connect(this.ctx.destination);

      // Master Gain Equilibrado (0.38 - Potente pero sin saturar)
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.38, this.ctx.currentTime);
      this.masterGain.connect(this.compressor);

      // Music Submix
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.70, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      // SFX Submix
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.65, this.ctx.currentTime);
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
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.38, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // --- SÍNTESIS DE TUBO DE ÓRGANO ADITIVO SACRO (HANS ZIMMER STYLE) ---
  playOrganPipe(freq, duration = 3.5, gainScale = 0.18, attack = 0.35, release = 0.8) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(12000, freq * 3.8), t);
    filter.Q.setValueAtTime(1.4, t);

    const pipeGain = this.ctx.createGain();
    pipeGain.gain.setValueAtTime(0.0001, t);
    pipeGain.gain.linearRampToValueAtTime(gainScale, t + attack);
    pipeGain.gain.setValueAtTime(gainScale * 0.85, t + duration - release);
    pipeGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    // 4 Armónicos de Tubo con rank-detuning de catedral
    const harmonics = [
      { mult: 1.0, detune: 0, amp: 1.0, type: 'triangle' },
      { mult: 2.0, detune: 3.0, amp: 0.65, type: 'triangle' },
      { mult: 3.0, detune: -2.5, amp: 0.38, type: 'sine' },
      { mult: 0.5, detune: 1.0, amp: 0.50, type: 'sine' } // Sub-armónico profundo de pedal
    ];

    const oscs = [];
    harmonics.forEach(h => {
      const osc = this.ctx.createOscillator();
      osc.type = h.type;
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

  // --- GESTOR DE FASES & BUCLES CONTINUOS ---
  setPhase(phaseName) {
    this.ensureContext();
    this.currentPhase = phaseName;
    this.stopLoops();

    switch (phaseName) {
      case 'welcome':
      case 'intro':
        this.startDayOneLoop();
        break;
      case 'stealth':
      case 'hangar':
        this.startStealthTension();
        break;
      case 'flight':
        this.startFirstStepLoop();
        break;
      case 'asteroids':
        this.startMountainsLoop();
        break;
      case 'wormhole':
        this.startWormholeImmersion();
        break;
      case 'preorbit':
      case 'orbit':
        this.startNoTimeForCautionLoop();
        break;
      case 'choice':
      case 'decouple':
      case 'epilogue':
      case 'credits':
        this.startStayLoop();
        break;
    }
  }

  stopLoops() {
    if (this.phaseLoopInterval) {
      clearInterval(this.phaseLoopInterval);
      this.phaseLoopInterval = null;
    }
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
    this.stopDrones();
  }

  stopDrones() {
    this.droneOscs.forEach(d => {
      try {
        d.osc.stop();
        d.osc.disconnect();
        if (d.lfo) { d.lfo.stop(); d.lfo.disconnect(); }
      } catch (e) {}
    });
    this.droneOscs = [];
  }

  // --- BUCLES MUSICALES CINEMATOGRÁFICOS ---

  // 1. "Day One" / "Cornfield Chase" (La menor -> Fa -> Do -> Sol)
  startDayOneLoop() {
    const sequence = [
      { chord: [220, 261.63, 329.63, 440], dur: 4.0 }, // Am
      { chord: [174.61, 220, 261.63, 349.23], dur: 4.0 }, // Fmaj7
      { chord: [261.63, 329.63, 392.00, 523.25], dur: 4.0 }, // C
      { chord: [196.00, 246.94, 293.66, 392.00], dur: 4.0 }  // G
    ];
    let step = 0;
    const playNext = () => {
      if (this.currentPhase !== 'welcome' && this.currentPhase !== 'intro') return;
      const item = sequence[step % sequence.length];
      this.playChordSequence(item.chord, item.dur, 0.16);
      step++;
    };
    playNext();
    this.phaseLoopInterval = setInterval(playNext, 3800);
  }

  // 2. "First Step" (Vuelo de Crucero hacia Saturno)
  startFirstStepLoop() {
    const sequence = [
      { chord: [174.61, 220, 261.63, 349.23], dur: 4.5 }, // Fmaj7
      { chord: [220, 261.63, 329.63, 440], dur: 4.5 },    // Am
      { chord: [196.00, 246.94, 293.66, 392], dur: 4.5 }, // G
      { chord: [146.83, 220, 261.63, 293.66], dur: 4.5 }  // Dm7
    ];
    let step = 0;
    const playNext = () => {
      if (this.currentPhase !== 'flight') return;
      const item = sequence[step % sequence.length];
      this.playChordSequence(item.chord, item.dur, 0.18);
      step++;
    };
    playNext();
    this.phaseLoopInterval = setInterval(playNext, 4200);
  }

  // 3. "Mountains" / Tormenta en Saturno (120 BPM Staccato Pulsante)
  startMountainsLoop() {
    const chords = [
      [220, 261.63, 329.63], // Am
      [174.61, 220, 261.63], // F
      [261.63, 329.63, 392.00], // C
      [196.00, 246.94, 293.66]  // G
    ];
    let idx = 0;
    const playPulse = () => {
      if (this.currentPhase !== 'asteroids') return;
      const chord = chords[idx % chords.length];
      this.playChordSequence(chord, 1.8, 0.20);
      idx++;
    };
    playPulse();
    this.phaseLoopInterval = setInterval(playPulse, 1600);
  }

  // 4. Agujero de Gusano (Wormhole Relativistic Drone & Doppler Shear)
  startWormholeImmersion() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    // Drone grave de agujero negro / curvatura espaciotemporal (43.65 Hz - F0)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(43.65, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, t);
    filter.Q.setValueAtTime(3.0, t);

    // LFO de modulación de lente gravitacional
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.35, t);
    lfoGain.gain.setValueAtTime(80, t);
    lfo.connect(filter.frequency);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 1.0);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    lfo.start(t);
    this.droneOscs.push({ osc, lfo, gain });

    // Acordes flotantes espaciotemporales
    const chordSeq = [
      [130.81, 164.81, 196.00, 246.94], // Cmaj7 profundo
      [110.00, 164.81, 220.00, 277.18], // A chord
      [146.83, 174.61, 220.00, 261.63]  // Dm7
    ];
    let cIdx = 0;
    const playWormChords = () => {
      if (this.currentPhase !== 'wormhole') return;
      this.playChordSequence(chordSeq[cIdx % chordSeq.length], 4.5, 0.16);
      cIdx++;
    };
    playWormChords();
    this.phaseLoopInterval = setInterval(playWormChords, 4000);
  }

  // 5. "No Time for Caution" / Gargantúa (Tutti Organ a Máxima Potencia)
  startNoTimeForCautionLoop() {
    const playTuttiClimax = () => {
      if (this.currentPhase !== 'orbit' && this.currentPhase !== 'preorbit') return;
      const tuttiNotes = [110, 164.81, 220, 329.63, 440, 659.25];
      tuttiNotes.forEach((f, idx) => {
        setTimeout(() => {
          if (this.currentPhase === 'orbit' || this.currentPhase === 'preorbit') {
            this.playOrganPipe(f, 4.8, 0.22, 0.15, 0.8);
          }
        }, idx * 70);
      });
      this.playGravitationalPulse(36, 4.0);
    };
    playTuttiClimax();
    this.phaseLoopInterval = setInterval(playTuttiClimax, 4500);
  }

  // 6. "S.T.A.Y." (Epílogo / Créditos / Decisiones)
  startStayLoop() {
    const staySequence = [
      [440, 392, 329.63, 261.63, 220],
      [349.23, 329.63, 261.63, 220, 174.61],
      [392, 329.63, 293.66, 246.94, 196.00]
    ];
    let sIdx = 0;
    const playStay = () => {
      if (this.currentPhase !== 'choice' && this.currentPhase !== 'decouple' && this.currentPhase !== 'epilogue' && this.currentPhase !== 'credits') return;
      const notes = staySequence[sIdx % staySequence.length];
      notes.forEach((f, idx) => {
        setTimeout(() => {
          this.playOrganPipe(f, 5.0, 0.18, 0.6, 1.8);
        }, idx * 600);
      });
      sIdx++;
    };
    playStay();
    this.phaseLoopInterval = setInterval(playStay, 4800);
  }

  startStealthTension() {
    this.playOrganPipe(55, 20.0, 0.24, 1.0, 2.5);
    this.playOrganPipe(110, 20.0, 0.14, 1.0, 2.5);

    this.tickInterval = setInterval(() => {
      this.playClockTick();
    }, 1000);
  }

  playChordSequence(freqs, dur = 3.5, gain = 0.18) {
    freqs.forEach((f, i) => {
      setTimeout(() => {
        if (!this.isMuted) {
          this.playOrganPipe(f, dur, gain, 0.3, 0.8);
        }
      }, i * 140);
    });
  }

  // --- EFECTOS DE SONIDO PROCEDURALES (SFX) ---

  playClockTick() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(350, t + 0.018);

    gain.gain.setValueAtTime(0.09, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.022);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.025);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  playAlarm() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, t);
    osc.frequency.linearRampToValueAtTime(450, t + 0.18);
    osc.frequency.linearRampToValueAtTime(900, t + 0.36);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.40);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  playThruster() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.14);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, t);
    filter.Q.setValueAtTime(2.2, t);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.16);
    osc.onended = () => { osc.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  playShieldBurst() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(520, t);
    osc.frequency.exponentialRampToValueAtTime(70, t + 0.45);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, t);
    filter.Q.setValueAtTime(3.5, t);

    gain.gain.setValueAtTime(0.24, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.48);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.50);
    osc.onended = () => { osc.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  playPDCBolt() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(1600, t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.06);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.08);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  playAsteroidHit() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.32);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.36);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.38);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  playWallKnock() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.09);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, t);

    gain.gain.setValueAtTime(0.20, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.14);
    osc.onended = () => { osc.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  playWormholeTurbulence() {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(95, t);
    osc.frequency.linearRampToValueAtTime(280, t + 0.25);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, t);
    filter.Q.setValueAtTime(4.0, t);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.30);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.32);
    osc.onended = () => { osc.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

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
    gain.gain.linearRampToValueAtTime(0.22, t + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + duration + 0.1);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  // --- SONDA CUÁNTICA MULTI-PARÁMETRO ---
  startQuantumProbeAudio() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;
    try {
      this.stopQuantumProbeAudio();
      const t = this.ctx.currentTime;
      this.probeOsc = this.ctx.createOscillator();
      this.probeOsc.type = 'sine';
      this.probeOsc.frequency.setValueAtTime(40.0, t);

      this.probeGain = this.ctx.createGain();
      this.probeGain.gain.setValueAtTime(0.0001, t);
      this.probeGain.gain.linearRampToValueAtTime(0.14, t + 0.1);

      this.probeOsc.connect(this.probeGain);
      this.probeGain.connect(this.sfxGain);
      this.probeOsc.start(t);
    } catch (e) {
      console.warn('Probe audio error:', e);
    }
  }

  updateQuantumProbeAudio(resonance, freqVal) {
    if (this.isMuted || !this.ctx || !this.probeOsc || !this.probeGain) return;
    try {
      const t = this.ctx.currentTime;
      this.probeOsc.frequency.setTargetAtTime(Math.max(20, freqVal * 2), t, 0.05);
      const targetGain = 0.06 + (resonance * 0.18);
      this.probeGain.gain.setTargetAtTime(targetGain, t, 0.05);
    } catch (e) {
      console.warn('Probe audio update error:', e);
    }
  }

  stopQuantumProbeAudio() {
    if (!this.probeOsc) return;
    try {
      const t = this.ctx ? this.ctx.currentTime : 0;
      if (this.probeGain && this.ctx) {
        this.probeGain.gain.linearRampToValueAtTime(0.0001, t + 0.08);
      }
      const oscToStop = this.probeOsc;
      const gainToStop = this.probeGain;
      this.probeOsc = null;
      this.probeGain = null;
      setTimeout(() => {
        try { if (oscToStop) { oscToStop.stop(); oscToStop.disconnect(); } } catch (e) {}
        try { if (gainToStop) gainToStop.disconnect(); } catch (e) {}
      }, 100);
    } catch (e) {
      this.probeOsc = null;
      this.probeGain = null;
    }
  }

  playProbeCalibration(freqVal, phaseVal = 90.0, targetFreq = 45.0, targetPhase = 90.0) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const diffFreq = Math.abs(freqVal - targetFreq);
    const diffPhase = Math.abs(phaseVal - targetPhase);
    const totalDiff = diffFreq + (diffPhase * 0.1);
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (totalDiff < 0.8) {
      // Sintonía exacta: Doble tono armónico puro 45 Hz + 90 Hz
      osc.type = 'sine';
      osc.frequency.setValueAtTime(45.0, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.20, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);

      const hOsc = this.ctx.createOscillator();
      const hGain = this.ctx.createGain();
      hOsc.type = 'sine';
      hOsc.frequency.setValueAtTime(90.0, t);
      hGain.gain.setValueAtTime(0.12, t);
      hGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
      hOsc.connect(hGain);
      hGain.connect(this.sfxGain);
      hOsc.start(t);
      hOsc.stop(t + 0.40);
      hOsc.onended = () => { hOsc.disconnect(); hGain.disconnect(); };
    } else {
      // Desafinación: Onda triangular con modulación armónica
      osc.type = 'triangle';
      const actualPitch = 45.0 + (freqVal - targetFreq) * 5 + (phaseVal - targetPhase) * 0.4;
      osc.frequency.setValueAtTime(Math.max(25, actualPitch), t);
      gain.gain.setValueAtTime(0.09, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
    }

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.40);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  playProbeTransmitted() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const freqs = [45.0, 90.0, 180.0, 540.0, 1080.0];
    const t = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      const st = t + (idx * 0.09);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, st);

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.16, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + 1.1);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(st);
      osc.stop(st + 1.2);
      osc.onended = () => { osc.disconnect(); gain.disconnect(); };
    });
  }

  playClick() {
    this.playClockTick();
  }
}

// Instancia global
window.interstellarAudio = new InterstellarAudioEngine();
