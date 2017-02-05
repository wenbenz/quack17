var synth = new Tone.Synth();

var monosynth = new Tone.DuoSynth()

// var monosynth = new Tone.MonoSynth({
//   "oscillator" : {
//     "type" : "sine"
//   },
//   "envelope" : {
//     "attack" : 0.1
//   }
// });

var Tomsynth = new Tone.MembraneSynth({
  "pitchDecay":0.05,
  "octaves":0,
  "oscillator":{
    "type":"sine"
  },
  "envelope":{
    "attack":0.001,
    "decay":0.4,
    "sustain":0.01,
    "release":1.4,
    "attackCurve":"exponential"
  }
});

var kickSample = new Tone.Sampler("./audio/kick.wav", function(){
	//repitch the sample down a half step
});

var Kicksynth = new Tone.MembraneSynth({
  "pitchDecay":0.05,
  "octaves":10,
  "oscillator":{
    "type":"sine"
  },
  "envelope":{
    "attack":0.001,
    "decay":0.4,
    "sustain":0.01,
    "release":1.4,
    "attackCurve":"exponential"
  }
});

var Noisesynth = new Tone.NoiseSynth();

function getKickSample() {
  return kickSample;
}

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
