function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
}

function draw() {
	background(0,0,0,40)
	noStroke()
	fill(random(100),random(100),random(100))
	ellipse(random(width), random(height), random(200), random(200))
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight)
//   background(0)
// }
