var volSynth = new Tone.Volume(-10);
var volMonosynth = new Tone.Volume(volSynth.volume.value);
var volTomsynth = new Tone.Volume(volSynth.volume.value - 12);
var volKicksynth = new Tone.Volume(volSynth.volume.value + 10);
var volNoisesynth = new Tone.Volume(volSynth.volume.value - 11);
var volKickdrum = new Tone.Volume(volSynth.volume.value + 6);

var music = {};
var scale;
let DIVISION_CONST = 240;

//reverb effect on high hats
//var freeverb = new Tone.JCReverb(0.001);

getMonosynth().chain(volMonosynth, Tone.Master);
getSynth().chain(volSynth, Tone.Master); //chain events
getTomsynth().chain(volTomsynth, Tone.Master); //chain events
getKicksynth().chain(volKicksynth, Tone.Master); //chain events
getNoisesynth().chain( volNoisesynth, Tone.Master); //chain events
getKickSample().chain(volKickdrum, Tone.Master);

$(document).ready(function() {
  music.timeSignature = 4;
  music.playing = false;
});

function prepareBeat(input) {
  music.scales = [getScale(0, 4, "majorPentatonic"), getScale(7, 4, "majorPentatonic"), getScale(9, 4, "minorPentatonic"), getScale(5, 4, "majorPentatonic")];
  music.currentScale = 0;

  music.bpm = parseTempo(input);
  music.beatCounter = 0;

  music.rhythmQueue = parseRhythms(input);
  music.nextNoteTimer = 0;

  music.noteQueue = getNotes(input);

  loopBeat();
}

function loopBeat() {
  music.loop = setInterval(beat, 1000 / music.bpm);
}

function beat() {
  if (music.beatCounter === 0) {
    getKickSample().triggerAttack(0);
    getMonosynth().triggerAttackRelease(music.scales[music.currentScale][0].substring(0, music.scales[music.currentScale][0].length - 1) + "3", "1n");
  }
  else if (music.beatCounter % (DIVISION_CONST / (music.timeSignature * 2)) === 0) {
    getNoisesynth().triggerAttackRelease("8n");
    if (music.beatCounter % (DIVISION_CONST / music.timeSignature) === 0) {
      getTomsynth().triggerAttackRelease("A3", "4n");
    }
  }

  if (music.rhythmQueue[0] === "0n") {
    music.nextNoteTimer = 0;
  }
  if (music.beatCounter === music.nextNoteTimer) {
    if (music.rhythmQueue[0] === "0n") {
      music.rhythmQueue.shift();
    }
    getSynth().triggerAttackRelease(music.scales[music.currentScale][music.noteQueue[0]], music.rhythmQueue[0]);
    music.nextNoteTimer = (music.beatCounter + (DIVISION_CONST / parseInt(music.rhythmQueue[0].substring(0, music.rhythmQueue.length - 1)))) % DIVISION_CONST;
    music.noteQueue.shift();
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
  music.playing = false;
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
