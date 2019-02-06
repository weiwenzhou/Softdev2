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
var animated; // whether the circle is being animate or not

// Circle var
var radius = 2; // Initial radius
var speed = 2; // Speed at which the radius is expanding/contracting

// Animate
document.getElementById("circle").addEventListener("click", function(e){
    // Check whether the circle is being animated yet. If not animate it
    if (animated) {
        e.preventDefault();
    } else {
        state = window.requestAnimationFrame(animate);
    }
})

var animate = function() {
    // Draw a circle expanding from the center of the canvas and upon
    // reaching the edge of the canvas contracts

    // Increase/Decrease Radius
    radius = radius + speed;

    if (radius >= width/2) {
        speed = speed*-1; // Contract
    }
    if (radius <= 0) {
        speed = speed*-1; // Expand
    }

    clear_canvas();
    drawEllipse(250, 250, radius);

    // Set animated to true
    animated = true;

    state = window.requestAnimationFrame(animate);
}

// Stop
document.getElementById("stop").addEventListener("click", function(e){
    // Check whether the circle is being animated or not
    // If animated stop the animation else do nothing
    if (animate) {
        stopAnimate();
    } else {
        e.preventDefault();
    }
})

var stopAnimate = function() {
    // Set animated to false;
    animated = false;
    
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
