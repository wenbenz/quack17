var volSynth = new Tone.Volume(-10);
var volMonosynth = new Tone.Volume(volSynth.volume.value - 18);
var volTomsynth = new Tone.Volume(volSynth.volume.value - 12);
var volKicksynth = new Tone.Volume(volSynth.volume.value - 8);
var volNoisesynth = new Tone.Volume(volSynth.volume.value - 11);

var music = {};
var scale;

//reverb effect on high hats
//var freeverb = new Tone.JCReverb(0.001);

getMonosynth().chain(volMonosynth, Tone.Master);
getSynth().chain(volSynth, Tone.Master); //chain events
getTomsynth().chain(volTomsynth, Tone.Master); //chain events
getKicksynth().chain(volKicksynth, Tone.Master); //chain events
getNoisesynth().chain( volNoisesynth, Tone.Master); //chain events

$(document).ready(function() {
  music.timeSignature = 4;
});

function prepareBeat(input) {
  music.scales = [getScale(0, 4, "majorPentatonic"), getScale(7, 4, "majorPentatonic"), getScale(9, 4, "minorPentatonic"), getScale(5, 4, "majorPentatonic")];
  music.currentScale = 0;
  console.log(music.scales[music.currentScale]);

  music.bpm = parseTempo(input);
  console.log("BPM: " + music.bpm);
  music.beatCounter = 0;

  music.rhythmQueue = parseRhythms(input);
  console.log("Rhythms: " + music.rhythmQueue);

  loopBeat();
}

function loopBeat() {
  music.loop = setInterval(beat, 60000 / music.bpm);
}

function beat() {
  if (music.beatCounter === 3) {
    getTomsynth().triggerAttackRelease("A3", "4n");
  }
  // if (music.beatCounter % 2 === 1) {
  // }
  if (music.beatCounter == 0) {
    //Do a big thunk
    getMonosynth().triggerAttackRelease(music.scales[music.currentScale[2]], "1n");
    getKicksynth().triggerAttackRelease("F1", "8n");
  }
  getNoisesynth().triggerAttackRelease("8n");
  music.beatCounter = (music.beatCounter + 1) % music.timeSignature;
  if (music.beatCounter === 0)
    music.currentScale = (music.currentScale + 1) % music.scales.length;
}

function stop() {
  clearInterval(music.loop);
}

function adjustVolume(data) {
  if (data.value === 0) {
    vol.volume.value = -100;
  }
  else {
    vol.volume.value = data.value*40 - 40;
  }
}

function getMusic() {
  return music;
}
