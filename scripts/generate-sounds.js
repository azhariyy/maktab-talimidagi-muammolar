// Simple Node script to synthesize a few small WAV sound effects locally.
const fs = require('fs');

function writeWav(filename, samples, sampleRate = 44100) {
  const channels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * channels * bitsPerSample / 8;
  const blockAlign = channels * bitsPerSample / 8;
  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);
  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  // write samples
  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.floor(s * 32767), offset);
    offset += 2;
  }
  fs.writeFileSync(filename, buffer);
}

function sine(lengthSeconds, freq, volume = 0.4, sampleRate = 44100) {
  const samples = new Float32Array(Math.floor(lengthSeconds * sampleRate));
  for (let i = 0; i < samples.length; i++) {
    samples[i] = Math.sin(2 * Math.PI * freq * i / sampleRate) * volume;
  }
  return samples;
}

function whiteNoise(lengthSeconds, volume = 0.2, sampleRate = 44100) {
  const samples = new Float32Array(Math.floor(lengthSeconds * sampleRate));
  for (let i = 0; i < samples.length; i++) samples[i] = (Math.random() * 2 - 1) * volume;
  return samples;
}

function mix(a, b) {
  const out = new Float32Array(Math.max(a.length, b.length));
  for (let i = 0; i < out.length; i++) out[i] = (a[i] || 0) + (b[i] || 0);
  return out;
}

if (!fs.existsSync('assets/sounds')) fs.mkdirSync('assets/sounds', {recursive: true});

// typing: short click pulses
{
  const sampleRate = 44100;
  const len = 1.6;
  const samples = new Float32Array(Math.floor(len * sampleRate));
  let cursor = 0;
  for (let k = 0; k < 12; k++) {
    const tone = sine(0.06, 150 + Math.random() * 300, 0.25);
    for (let i = 0; i < tone.length; i++) samples[cursor + i] = (samples[cursor + i] || 0) + tone[i];
    cursor += Math.floor(0.12 * sampleRate);
  }
  writeWav('assets/sounds/typing.wav', samples);
}

// pencil: soft scribble
{
  const noise = whiteNoise(1.4, 0.08);
  const tone = sine(1.4, 800, 0.02);
  const s = mix(noise, tone);
  writeWav('assets/sounds/pencil.wav', s);
}

// glass: chime
{
  const a = sine(0.8, 880, 0.3);
  const b = sine(0.9, 1320, 0.2);
  const s = mix(a, b);
  writeWav('assets/sounds/glass.wav', s);
}

// transition: soft whoosh
{
  const sr = 44100;
  const len = 0.9;
  const samples = new Float32Array(Math.floor(len * sr));
  for (let i = 0; i < samples.length; i++) {
    const t = i / samples.length;
    samples[i] = (Math.random() * 2 - 1) * (1 - t) * 0.12;
  }
  writeWav('assets/sounds/transition.wav', samples);
}

console.log('Generated sounds in assets/sounds');
