var synth = new Tone.Synth();
var vol = new Tone.Volume(-10);
var beatLoop;
var barCounter;
var timeSignature = 4;
synth.chain(vol, Tone.Master); //chain events

function prepareBeat(input) {
  var bpm;
  $.getScript("Tempo.js", function() {
    bpm = parseTempo(input);
    console.log("BPM: " + bpm);
    barCounter = 0;
    loopBeat(bpm);
  });
}

function loopBeat(bpm) {
  beatLoop = setInterval(beat, 60000 / bpm);
}

function beat() {
  if (barCounter == 0) {
    synth.triggerAttackRelease("D4", "4n");
  }
  else {
    //Do a small thunk
    synth.triggerAttackRelease("C4", "4n");
  }
  barCounter++;
  barCounter %= timeSignature;
}

function stop() {
  clearInterval(beatLoop);
}

function adjustVolume(data) {
  if (data.value === 0) {
    vol.volume.value = -100;
  }
  else {
    vol.volume.value = data.value*40 - 40;
  }
}
