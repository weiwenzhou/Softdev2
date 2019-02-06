// Databend - Wei Wen Zhou, Rubin Peci
// SoftDev2 pd8
// K03 -- What is it saving the screen from?
// 2019-02-07

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

// Image var
var logo = new Image();
logo.src = "logo_dvd.jpg"

// Dvd var
var dvd_width = 100; // Width of image
var dvd_height = 50; // Height of image
var dvdX; // The x coordinate of the center of the dvd
var dvdY; // The y coordinate of the center of the dvd
var xspeed = 1; // Speed in the x direction
var yspeed = 1; // Speed in the y direction

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

// Dvd
var dvdsetup = function() {
    // Random center (x,y)
    // ex. if width = 500, dvd_width = 100 -> the dvdX is between [0,400)
    dvdX = Math.floor(Math.random() * (width - dvd_width));
    dvdY = Math.floor(Math.random() * (height - dvd_height));

    var dvd = function() {
        // Cancel existing animation
        window.cancelAnimationFrame(state);

        // Image is centered on the top right corner...hmm interesting

        // Touches the horizontal edge
        if (dvdX <= 0 || dvdX + dvd_width >= width) {
            xspeed = -1*xspeed;
        }

        // Touches the vertical edge
        if (dvdY <= 0 || dvdY + dvd_height >= height) {
            yspeed = -1*yspeed;
        }

        // Apply translations
        dvdX = dvdX + xspeed;
        dvdY = dvdY + yspeed;

        // Draw Image
        clear_canvas();
        ctx.drawImage(logo, dvdX, dvdY, dvd_width, dvd_height);

        state = window.requestAnimationFrame(dvd);
    }
    dvd();
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
// Dvd
document.getElementById("dvd").addEventListener("click", dvdsetup);
