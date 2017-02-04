var synth = new Tone.Synth();

var monosynth = new Tone.MonoSynth({
  "oscillator" : {
    "type" : "square"
  },
  "envelope" : {
    "attack" : 0.1
  }
});

function getSynth() {
  return synth;
}

function getMonosynth() {
  return monosynth;
}
