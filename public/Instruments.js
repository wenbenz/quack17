var synth = new Tone.Synth();

var monosynth = new Tone.MonoSynth({
  "oscillator" : {
    "type" : "sine"
  },
  "envelope" : {
    "attack" : 0.1
  }
});

var Tomsynth = new Tone.MembraneSynth();

var Kicksynth = new Tone.MembraneSynth();

var Noisesynth = new Tone.NoiseSynth();

function getTomsynth() {
  return Tomsynth;
}

function getKicksynth() {
  return Kicksynth;
}

function getNoisesynth() {
  return Noisesynth;
}

function getSynth() {
  return synth;
}

function getMonosynth() {
  return monosynth;
}
