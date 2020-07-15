var numberOfSquares = 6;
var colors = [];
var goal;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
    
        resetting();
     });
  }
    for (let i = 0; i < squares.length ; i++) {

        squares[i].style.backgroundColor = colors[i]
    
        squares[i].addEventListener("click", function (){
    
            var clickedColor = this.style.backgroundColor;
    
            if (clickedColor ===  goal) {
                message.textContent = "Correct!"; 
                ChangeColors(clickedColor);
                header.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
           }
        )};

    resetting();
}



function resetting(){
    colors = generateRandomColors(numberOfSquares);
    goal = pickColor();
    message.textContent = "";
    colorDisplay.textContent = goal;
    for (let i = 0; i < squares.length ; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    reset.textContent = "New Colors";
    header.style.backgroundColor = "steelblue"; 
}



reset.addEventListener("click", function() {
  resetting();
})


function ChangeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand]; //Gets random number and then returns it out the function
}

function generateRandomColors(num){
    arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push(RandomColor());
    }
    return arr;
}

function RandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

