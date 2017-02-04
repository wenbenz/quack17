var sentences = [];

$(document).ready(function() {
  $("#submitButton").click(function() {
    console.log("Button is clicked");
    var textInput = $("#textBox").val();                  // Retrieve the input from the webpage
    textInput = "Hello world! This is a test? I don't like rain.";
    textInput = textInput.replace(".", "./~");
    textInput = textInput.replace("!", "!/~");
    textInput = textInput.replace("?", "?/~");
    var sentenceArray = textInput.split("/~");           // Split the input into an array of sentences
    sentenceArray.pop();
    for (var i = 0; i < sentenceArray.length; i++) {                            // Loop through every sentence
      while (sentenceArray[i].substring(0, 1) === " ") {  // While there is whitespace in front of the sentence, remove it
        sentenceArray[i] = sentenceArray[i].substring(1);
      }
      var words = [];
      var wordArray = sentenceArray[i].split(" ");        // Split the current sentence into an array of words
      for (var j = 0; j < wordArray.length; j++) {                              // Loop through every word
        //parse syllables somehow here
        // var syllables = wordArray[i];                   // Split the current word into an array of syllables
        //split syllables somehow
        var syllables = [];
        for (var k = 0; k < wordArray[j].length; k++){
          syllables = getSylArray(wordArray[j], [], "");
        }
        words.push(syllables);                         // Push the array of syllables into the current word
      }
      sentences.push(words);                           // Push the array of words into the current sentence
    }
    console.log(sentences);
  });
});

function getSylArray(word,arr,syl){
  var first = word.substring(0,1);
  var second = word.substring(1,2);
  if(second === ""){
    arr.push(syl+=first);
    return arr;
  } else if(second==="a"||second==="e"||second==="i"||second==="o"||second==="u"||second==="y"){
    if (syl !== "" && syl.length>1){
      arr.push(syl);
      syl = "";
    }
    return getSylArray(word.substring(1),arr,syl+=first);
  } else {
    return getSylArray(word.substring(1),arr,syl+=first);
  }
}

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
      tempSentence = tempSentence.substring(1);

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
