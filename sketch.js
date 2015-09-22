var t = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	setFrameRate(8)
	print("Window Width and Height")
	print(windowWidth, windowHeight)
}

function draw() {
	background(0, 0, 0, 40)
	// drawFont()
	drawSineCircle()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  print("The window is being resized")
  background(0)
  drawSineCircle()
  // drawFont()
}

function drawSineCircle() {
	strokeWeight(2)
	stroke(0, 0, 255, 100)
	noFill()
	push();
	translate(width/2, height/2)
	beginShape()
	for(i = 0; i < TWO_PI; i+=0.01) {
		u = map(noise(t), 0, 1, 0, 20)
		r = map(sin(i*u), 0, 1, windowWidth/8.4, windowWidth/8.15)	 // now we map the value of each point (which is -1 to 1 from the sin function and then map 50 100) The value won't be going up fast enough so multiply by 5
		x = r*cos(i)
		y = r*sin(i)
		vertex(x, y)

		// original values
		// windowWidth/8.4, windowWidth/8.15

		// now change mouseX to something sensible
	}
	endShape(CLOSE) // Closes any gaps
	pop();
	t+=0.01
}

function drawFont(){
	s = "Yanaphauna"
	noStroke()
	fill(100)
	textSize(24)
	textAlign(CENTER)
	textStyle(NORMAL)
	textFont("Helvetica")
	text(s, windowWidth/2, windowHeight-windowHeight/8, 100, 100) // Text wraps within text box
}
