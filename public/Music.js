var synth = new Tone.Synth();
var vol = new Tone.Volume(-10);
var music = {};
synth.chain(vol, Tone.Master); //chain events

$(document).ready(function() {
  music.timeSignature = 4;
});

function prepareBeat(input) {
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
    synth.triggerAttackRelease("D4", "4n");
  }
  else {
    //Do a small thunk
    synth.triggerAttackRelease("C4", "4n");
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
