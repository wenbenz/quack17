function parseTempo(input) {
  var avgLength = 0, bpm = 60;
  for (i in input) {
    avgLength += input[i].length;
  }
  avgLength /= input.length;
  if (avgLength > 10) avgLength = 10;
  bpm = 220 - (20 * avgLength);
  return bpm;
}
