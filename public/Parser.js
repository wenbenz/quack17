function parseInput() {
  var sentences = [];
  var textInput = $("#textBox").val();                  // Retrieve the input from the webpage
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
      var syllables = [];
      for (var k = 0; k < wordArray[j].length; k++){
        syllables = getSylArray(wordArray[j], [], "");
      }
      words.push(syllables);                         // Push the array of syllables into the current word
    }
    sentences.push(words);                           // Push the array of words into the current sentence
  }
  return sentences;
}

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
