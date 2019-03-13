var colors = generateRandomColors(6);
  
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add colors
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click", function(){
      //grab color
      var clickedColor = this.style.backgroundColor;
      console.log(clickedColor);
      
      //compare color
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
}
  
function changeColors(color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors to arr
    for (var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick red 0-255
    //pick green 0-255
    //pick blue 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}