var volSynth = new Tone.Volume(-10);
var volMonosynth = new Tone.Volume(volSynth.volume.value - 18);
var volTomsynth = new Tone.Volume(volSynth.volume.value - 12);
var volKicksynth = new Tone.Volume(volSynth.volume.value + 10);
var volNoisesynth = new Tone.Volume(volSynth.volume.value - 11);

var music = {};
var scale;
let DIVISION_CONST = 24;

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
  music.nextNoteTimer = 0;

  music.noteQueue = getNotes(input);
  console.log("Notes: " + music.noteQueue);

  loopBeat();
}

function getNotes() {
  var arr = [];
  arr.push("C4");
  return arr;
}

function loopBeat() {
  music.loop = setInterval(beat, 10000 / music.bpm);
}

function beat() {
  if (music.beatCounter === 0) {
    getKicksynth().triggerAttackRelease("8n");
  }
  else if (music.beatCounter % (DIVISION_CONST / (music.timeSignature * 2)) === 0) {
    getNoisesynth().triggerAttackRelease("8n");
    if (music.beatCounter % (DIVISION_CONST / music.timeSignature) === 0) {
      getTomsynth().triggerAttackRelease("A3", "4n");
    }
  }
  if (music.beatCounter === music.nextNoteTimer) {
    console.log("Note: " + music.noteQueue[0] + ", " + music.rhythmQueue[0]);
    getSynth().triggerAttackRelease(music.noteQueue[0], music.rhythmQueue[0]);
    music.nextNoteTimer = (music.beatCounter + parseInt(music.rhythmQueue[0].substring(0, music.rhythmQueue[0].length - 1))) % DIVISION_CONST;
    //music.noteQueue.shift();
    music.rhythmQueue.shift();
    if (music.noteQueue.length === 0 || music.rhythmQueue.length === 0)
      stop();
  }
  music.beatCounter = (music.beatCounter + 1) % DIVISION_CONST;
  if (music.beatCounter === 0)
    music.currentScale = (music.currentScale + 1) % music.scales.length;
}

function stop() {
  clearInterval(music.loop);
}

function adjustVolume(data) {
  if (data.value === 0) {
    volSynth.volume.value = -100;
  }
  else {
    volSynth.volume.value = data.value*40 - 40;
  }
}

function getMusic() {
  return music;
}
