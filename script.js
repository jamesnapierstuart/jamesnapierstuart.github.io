// Get the canvas element
var canvas = document.getElementById("canvas");
// Get the 2D rendering context
var ctx = canvas.getContext("2d");

// Set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array of colors to cycle through
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var i = 0;

// Function to draw the circle
function drawCircle() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get the center of the canvas
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Set the circle's radius
    var radius = 50;

    // Set the current color
    ctx.fillStyle = colors[i++ % colors.length];

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
}

// Draw the circle initially
drawCircle();

// Change the circle color every second
setInterval(drawCircle, 1000);

// handle resizing of the window
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircle();
});
