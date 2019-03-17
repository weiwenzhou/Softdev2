// DOM Variables
var pic = document.getElementById("vimage");
var button = document.getElementById("but_clear");
var move_button = document.getElementById("move");

// Coordinates
var x = null;
var y = null;

// Animation Variables
var xspeed = 1;
var yspeed = 1;
var state;

// Functions
var circle = function(canvas, x, y, r, fill, stroke) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    c.setAttribute( "cx", x);
    c.setAttribute( "cy", y);
    c.setAttribute( "r", r);
    c.setAttribute( "fill", fill);
    c.setAttribute( "stroke", stroke);

    c.setAttribute( "xSpeed", xspeed);
    c.setAttribute( "ySpeed", yspeed);

    c.addEventListener('click', function(e) {
        // console.log(e)
        circleAction(canvas, e.target);
    });

    canvas.appendChild(c);
}

var line = function(canvas, x1, y1, x2, y2, stroke) {
    var c = canvas.lastChild
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute( "x1", x1);
    l.setAttribute( "y1", y1);
    l.setAttribute( "x2", x2);
    l.setAttribute( "y2", y2);
    l.setAttribute( "stroke", stroke);

    canvas.appendChild(l);
    canvas.appendChild(c);
}

var circleAction = function(canvas, target) {
    if (target.getAttribute("fill") == "purple") {
        target.setAttribute( "fill", "green");
    } else {
        canvas.removeChild(target);
        circle(canvas, Math.random()*500, Math.random()*500, "10", "purple", "black");
    }
}

var clear = function() {
    // Stop Animation
    window.cancelAnimationFrame(state);
    // state = undefined;

    // Reset svg
    pic.innerHTML = '';
    x = null;
    y = null;
}


// Animate
var animate = function() {
    // Cancel existing animation
    window.cancelAnimationFrame(state);

    circles = pic.childNodes;

    for (i = 0; i < circles.length; i++) {
        target = circles[i]

        // Circles
        x = parseInt(target.getAttribute("cx"));
        y = parseInt(target.getAttribute("cy"));
        r = parseInt(target.getAttribute("r"));
        x_trans = parseInt(target.getAttribute("xSpeed"));
        y_trans = parseInt(target.getAttribute("ySpeed"));

        // Touches the horizontal edge
        if (x - r<= 0 || x + r >= 500) {
            x_trans = -1*x_trans;
            target.setAttribute("xSpeed", x_trans);
        }

        // Touches the vertical edge
        if (y - r <= 0 || y + r >= 500) {
            y_trans = -1*y_trans;
            target.setAttribute("ySpeed", y_trans);
        }

        // Add translations
        x += x_trans;
        y += y_trans;

        // Apply translations
        target.setAttribute("cx", x);
        target.setAttribute("cy", y);
    }

    state = window.requestAnimationFrame(animate);
}

// Remove weird text in the svg
pic.innerHTML = "";

// Event Listeners
pic.addEventListener('click', function(e) {
    // Svg object
    e.preventDefault()
    if (e.target == pic) {
        // console.log(e)
        // if (x != null) {
        //     line(pic, x, y, e.offsetX, e.offsetY, "black");
        // }
        x = e.offsetX;
        y = e.offsetY;
        circle(pic, x, y, "10", "purple", "black");
    }
});

// Clear
button.addEventListener('click', clear);
// Move
move_button.addEventListener('click', animate);
