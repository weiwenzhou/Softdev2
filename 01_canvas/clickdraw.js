// winWhen - Wei Wen Zhou, Thomas Zhao
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-02-01

/*
Methods and values explained
e.preventDefault()
    -Prevents the default action of the eventListener from executing
    -Use when you want to prevent an action from occur when the user clicks somewhere

ctx.beginPath()
    -Resets the list of previous click areas (use for creating line)
    -Starts a new line.

e.offsetX/e.offsetY
    -The location of x or y coordinate of the mouse pointer relative to the target node
        in this case the canvas
*/

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

// Canvas Attributes
var width = canvas.width; // width
var height = canvas.height; // height

// State var
var state = true; // true = rectangle, false = dot

var clear_canvas = function() {
    // Clears the canvas
    ctx.clearRect(0,0, width, height);
}

var toggle = function() {
    // Change the shape between rectangle and dot
    state = !state;
    /*
    if (state) {
        document.getElementById("state").innerHTML = "Rectangle";
    } else {
        document.getElementById("state").innerHTML = "Dot";
    }
    */
}

// when click in canvas draw either a rectangle or ellipse
canvas.addEventListener("click", function(e){
    console.log(e);
    if (state) {
        ctx.fillRect(e.offsetX, e.offsetY, 100, 100);
    } else {
        ctx.beginPath();
        ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 360);
        ctx.fill();
    }
})
