// winWhen - Wei Wen Zhou, Thomas Zhao
// SoftDev2 pd8
// K02 -- Connecting the Dots
// 2019-02-04

// Canvas Attributes
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var width = canvas.width; // width
var height = canvas.height; // height
ctx.fillStyle = "#ff0000"; // set the fillstyle to red


var clear_canvas = function() {
    // Clears the canvas
    ctx.clearRect(0,0, width, height);
    ctx.beginPath();
}

// when click in canvas draw either a rectangle or ellipse
canvas.addEventListener("click", function(e){
    drawEllipse(e.offsetX, e.offsetY, 10);
    ctx.stroke();
    ctx.fill();
})

var drawEllipse = function(mouseX, mouseY, radius){
    // Connects the center of one circle to the next one
    ctx.lineTo(mouseX, mouseY);

    // Shifts the path to the start position of drawing the circle
    ctx.moveTo(mouseX+radius, mouseY);

    // Draws the ellipse
    ctx.ellipse(mouseX, mouseY, radius, radius, 0, 0, 360);

    // Moves to the center of circle
    ctx.moveTo(mouseX, mouseY);
}
