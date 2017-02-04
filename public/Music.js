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
  scale = getScale(0, 4, "majorPentatonic");
  console.log(scale);
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
    console.log(scale[2]);
    console.log(scale[1]);
    getMonosynth().triggerAttackRelease(scale[2], "1n");
    getSynth().triggerAttackRelease(scale[1], "4n");
  }
  else {
    //Do a small thunk
    //getMonosynth().triggerAttackRelease("C5", "8n");
    getSynth().triggerAttackRelease(scale[0], "4n");
  }
  music.beatCounter++;
  music.beatCounter %= music.timeSignature;
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
