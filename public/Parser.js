$(document).ready(function() {


  var arr = spaceParser("Oh hey my name is Max");                    //Start a new game
  for (int i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }



  /*Creates new empty board */
  /*input: data, output: new game board (not directly returned)*/
  function spaceParser(data) {
    var wordsArray = data.split(" ");
    return wordsArray;
  }
}
