var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

canvas.addEventListener("click", function(e){
    console.log(e);
    ctx.fillRect(e.clientX, e.clientY, 100,100);
})