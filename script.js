var userPoint = 0;
var faceUp = [];
var divIds = [];
var matches = 0;

function fillBoard() {
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  
var ray = ["cat", "dog","mice"]
var ray = ["cat", "dog","mice"]
  for (var i = 0; i<3; i++) {
    for (var i = 0; i<3; i++) {
    addTileToBoard(ray[i])
  }
  }
};

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
  }

  return newArray;
};

function addTileToBoard(element) {
  //TODO: randomly assign ids to the divs
  var div =  "<div id=\"\" class=\""+ element + " token\"></div>";
  $(".game").append(div);
};

function clearBoard() {
  $(".game").empty();
};

function checkTilesMatch(array) {
  //TODO: check to see if the value of the 2 face up tile match

};

function setPoint() {
    $('#userPoint').text(userPoint);
};

function evaluate( evt ) {
    var tileType = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    //TODO: If this is first tile clicked store the card if it is the second tile
    // clicked check to see if it is the same as the first.
};


$(document).ready(function() {
  function bop(elm) {
      $(elm).fadeOut('fast').delay(1).fadeIn('fast');
  };

  fillBoard();

  $('.token').click( function(e) {
      var element = e.toElement.classList[0]
      var id = e.toElement.getAttribute("id")
      assignText(id, element)
      bop(this);
      evaluate(e);
  });


});
