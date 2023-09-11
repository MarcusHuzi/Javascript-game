var blockSize = 25;
var total_row = 17;
var total_col = 17;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var speedX = 0;
var speedY = 0;

var snakebody = [];

var foodX;
var foodY;

var gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 10);
}

function update(){
    if(gameOver){
        return;
    }

    context.fillStyle = "green";
    context.filRect(0,0,board.width,board.height);
}