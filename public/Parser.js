var sentences = [];

$(document).ready(function() {
  $("#submitButton").click(function() {
    console.log("Button is clicked");
    var textInput = $("#textBox").val();                  // Retrieve the input from the webpage
    textInput = "Hello my name is Avery. Am I developing a web application? It seems like it will be very cool! Enjoy our work.";
    console.log(textInput);
    textInput = textInput.replace(".", "./~");
    textInput = textInput.replace("!", "!/~");
    textInput = textInput.replace("?", "?/~");
    var sentenceArray = textInput.split("/~");           // Split the input into an array of sentences
    for (var i = 0; i < sentenceArray.length; i++) {                            // Loop through every sentence
      while (sentenceArray[i].substring(1, 1) === " ") {  // While there is whitespace in front of the sentence, remove it
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
          var syllableArray = getSylArray(wordArray[j], [], "");
          syllables.push(syllableArray);
        }
        words.push(syllables);                         // Push the array of syllables into the current word
      }
      sentences.push(words);                           // Push the array of words into the current sentence
    }
    console.log("Reached the end");
    console.log(sentences);
  });
});

function getSylArray(word,arr,syl){
  console.log("Reached sylArray");
  var first = word.substring(0,1);
  if(word.length===0){
    return arr;
  }else if(first==="a"||first==="e"||first==="i"||first==="o"||first==="u"||first==="y"){
    getSylArray(word.substring(1),arr[arr.length].push(syl),"");
  } else {
    getSylArray(word.substring(1),arr,syl+=first);
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
