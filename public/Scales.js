var scaleNotes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var majorIndices = [0, 2, 4, 5, 7, 9, 11];
var minorIndices = [0, 2, 3, 5, 7, 8, 10];
var pentatonicIndices = [0, 2, 4, 7, 9];

function getScale(root, octave, scale) { //root note in numbers, octave in number,
  var indices, returnedScale = [];
  if (scale === "minor") {
    indices = minorIndices;
  }
  else if (scale === "major") {
    indices = majorIndices;
  }
  else {
    indices = pentatonicIndices;
  }

  for (note in indices) {
    returnedScale.push(scaleNotes[(root + note)%12] + "" + octave);
  }

  return returnedScale;
}
