// Databend - Wei Wen Zhou, Rubin Peci
// SoftDev2 pd8
// K03 -- They lock us in the tower whenever we get caught ...which is often
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
var radius = 2; // Initial radius
var speed = 1; // Speed at which the radius is expanding/contracting

// Animate
var animateCircle = function() {
    // Draw a circle expanding from the center of the canvas and upon
    // reaching the edge of the canvas contracts

    // Cancel existing animation
    window.cancelAnimationFrame(state);
    
    // Increase/Decrease Radius
    radius = radius + speed;

    if (radius >= width/2) {
        speed = speed*-1; // Contract
    }
    if (radius <= 0) {
        speed = speed*-1; // Expand
    }

    clear_canvas();
    drawEllipse(width/2, height/2, radius);

    state = window.requestAnimationFrame(animateCircle);
}

// Stop
var stopAnimate = function() {
    window.cancelAnimationFrame(state);
}

var drawEllipse = function(mouseX, mouseY, radius){
    // Draws the ellipse
    ctx.beginPath();
    ctx.ellipse(mouseX, mouseY, radius, radius, 0, 0, 360);
    ctx.stroke();
    ctx.fill();
}

var clear_canvas = function() {
    // Clears the canvas
    ctx.clearRect(0,0, width, height);
}

// Event Listeners

// Animate
document.getElementById("circle").addEventListener("click", animateCircle);
// Stop
document.getElementById("stop").addEventListener("click", stopAnimate);
