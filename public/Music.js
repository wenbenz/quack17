var volSynth = new Tone.Volume(-10);
var volMonosynth = new Tone.Volume(volSynth.volume.value - 25);
var music = { };
var scale;

getMonosynth().chain(volMonosynth, Tone.Master);
getSynth().chain(volSynth, Tone.Master); //chain events

$(document).ready(function() {
  music.timeSignature = 4;
});

function prepareBeat(input) {
  music.scales = [getScale(0, 4, "majorPentatonic"), getScale(7, 4, "majorPentatonic"), getScale(9, 4, "minorPentatonic"), getScale(5, 4, "majorPentatonic")];
  music.currentScale = 0;
  console.log(music.scales[music.currentScale]);
  $.getScript("Tempo.js", function() {
    music.bpm = parseTempo(input);
    console.log("BPM: " + music.bpm);
    music.beatCounter = 0;
    loopBeat();
  });
}

function loopBeat() {
  music.loop = setInterval(beat, 60000 / music.bpm);
}

function beat() {
  if (music.beatCounter == 0) {
    //Do a big thunk
    getMonosynth().triggerAttackRelease(music.scales[music.currentScale][2], "1n");
    getSynth().triggerAttackRelease(music.scales[music.currentScale][1], "4n");
  }
  else {
    //Do a small thunk
    //getMonosynth().triggerAttackRelease("C5", "8n");
    getSynth().triggerAttackRelease(music.scales[music.currentScale][0], "4n");
  }
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
