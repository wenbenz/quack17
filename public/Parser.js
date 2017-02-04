

$(document).ready(function() {
  $("#submitButton").click(function() {
    spaceParser();
    avgSentenceLen();
  });
});


function spaceParser() {
  var string = $("#textBox").val();
  var wordsArray = string.split(" ");

  for (var i=0; i < wordsArray.length; i++) {
    console.log(wordsArray[i]);
  }
}

function avgSentenceLen() {
  var string = $("#textBox").val();
  var sentenceArray = string.split(".");
  console.log(sentenceArray);
  var sentenceLenArr = [];
  var sum = 0;
  console.log(sum);

  for (var i=0; i<sentenceArray.length; i++) {
    var tempSentence = sentenceArray[i].split(" ");

    if (tempSentence[0] == " ")
      tempSentence = tempSentence.subtring(1);

    sentenceLenArr[i] = tempSentence.length;
    sum += sentenceLenArr[i];
    console.log(sum);
  }

  console.log("***");
  console.log(sum);
  console.log(sentenceArray.length);
  var avgLen = sum / sentenceArray.length;
  console.log(avgLen);
}
