// Datapen - Wei Wen Zhou, Rubin Peci
// SoftDev2 pd8
// K03 --
// 2019-02-06

// Canvas Attributes
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var width = canvas.width; // width
var height = canvas.height; // height
ctx.fillStyle = "#ff0000"; // set the fillstyle to red

// State var
var state; // animation id

// Circle var
var radius = 2;
var speed = 2;

// Animate
document.getElementById("circle").addEventListener("click", function(e){
    state = window.requestAnimationFrame(animate);
})

var animate = function() {
    // Increase/Decrease Radius
    radius = radius + speed;
    console.log(radius);
    if (radius >= width/2) {
        speed = speed*-1; // Contract
    }
    if (radius <= 0) {
        speed = speed*-1; // Expand
    }
    clear_canvas();
    drawEllipse(250, 250, radius);

    state = window.requestAnimationFrame(animate);
}

// Stop

var drawEllipse = function(mouseX, mouseY, radius){
    // Draws the ellipse
    ctx.ellipse(mouseX, mouseY, radius, radius, 0, 0, 360);
    ctx.stroke();
    ctx.fill();
}

var clear_canvas = function() {
    // Clears the canvas
    ctx.clearRect(0,0, width, height);
}
