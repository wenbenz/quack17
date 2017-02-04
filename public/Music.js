var synth = new Tone.Synth();
var vol = new Tone.Volume(-10);
synth.chain(vol, Tone.Master); //chain events

function prepareBeat(input) {
  synth.triggerAttackRelease("C4", "4n");
  var tempo = parseTempo(input);
  console.log("Avg Length: " + tempo);
  loopBeat(tempo);
}

function loopBeat(bpm) {

}

function parseTempo(input) {
  var avgLength = 0;
  for (i in input) {
    avgLength += input[i].length;
  }
  avgLength /= input.length;
  return avgLength;
}

function adjustVolume(data) {
  if (data.value === 0) {
    vol.volume.value = -100;
  }
  else {
    vol.volume.value = data.value*40 - 40;
  }
}
