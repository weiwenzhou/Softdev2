// DOM Variables
var pic = document.getElementById("vimage");
var button = document.getElementById("but_clear");

// Coordinates
var x = null;
var y = null;

// Event Listeners
pic.addEventListener('click', function(e) {
    e.preventDefault()
    // console.log(e)
    if (e.target == pic) {
        if (x != null) {
            line(pic, x, y, e.offsetX, e.offsetY, "black");
        }
        x = e.offsetX;
        y = e.offsetY;
        circle(pic, x, y, "10", "red", "black");
    }
});

button.addEventListener('click', function(e){
    clear()
});

// Functions
var circle = function(canvas, x, y, r, fill, stroke) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute( "cx", x);
    c.setAttribute( "cy", y);
    c.setAttribute( "r", r);
    c.setAttribute( "fill", fill);
    c.setAttribute( "stroke", stroke);

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

var clear = function() {
    pic.innerHTML = '';
    x = null;
    y = null;
}
