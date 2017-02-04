var sentences = [];

$(document).ready(function() {
  $("#submitButton").click(function() {
    var textInput = $("#textBox").val();                  // Retrieve the input from the webpage
    var sentenceArray = textInput.split(".!?");           // Split the input into an array of sentences
    for (i in sentenceArray) {                            // Loop through every sentence
      while (sentenceArray[i].substring(1, 1) === " ") {  // While there is whitespace in front of the sentence, remove it
        sentenceArray[i] = sentenceArray[i].substring(1);
      }
      var words = [];
      var wordArray = sentenceArray[i].split(" ");        // Split the current sentence into an array of words
      for (j in wordArray) {                              // Loop through every word
        //parse syllables somehow here
        //var syllables = wordArray[i];                   // Split the current word into an array of syllables
        //split syllables somehow
        words[j].push(syllables);                         // Push the array of syllables into the current word
      }
      sentences[i].push(words);                           // Push the array of words into the current sentence
    }
  });
});

/*----------------------------------
EVERYTHING BELOW THIS POINT IS UNCERTAIN (and most likely will be removed and/or modified)
----------------------------------*/


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
