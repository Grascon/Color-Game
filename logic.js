var colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)", 
    "rgb(0, 255, 0)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 0, 255)",
  ]
  
  var squares = document.querySelectorAll(".square");
  var pickedColor = colors[3];
  var colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.textContent = pickedColor;
  
  for (var i = 0; i < squares.length; i++){
    //add colors
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click", function(){
      //grab color
      //compare color
      var clickedColor = this.style.backgroundColor;
      console.log(clickedColor);
      
      if (clickedColor === pickedColor){
        console.log("Correct");
      }
      else {
        console.log("Incorrect");
      }
    })
  };
  
  