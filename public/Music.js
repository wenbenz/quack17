async function runBeatLoop() {

}

function parseTempo(var sentences) {
  var avgSentenceLength = 0;
  for (i in sentences) {
    avgSentenceLength += sentences[i].length;
  }
  avgSentenceLength /= sentences.length;
  return avgSentenceLength;
}
