var canvas = document.getElementById('snake');
var  context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x:8*box,
    y:8*box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16*box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();

// function teste(){
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//     console.log(ctx); // CanvasRenderingContext2D { ... }
// }

// teste();