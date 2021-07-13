var canvas = document.getElementById('snake');
var  context = canvas.getContext('2d');
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16*box);
}

criarBG();

// function teste(){
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//     console.log(ctx); // CanvasRenderingContext2D { ... }
// }

// teste();