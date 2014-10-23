var t = 0
var rate = 0

function setup() {
	createCanvas(window.innerWidth, displayHeight)
	background(0)
	setFrameRate(8)
}

function draw() {
	// background(0) // Take this off if want to take a serious of pictures of the events

		rate++
	
	if(rate > mouseY) {
		background(0)
		rate = 0
	}


	translate(width/2, height/2)

	// stroke(255)	
	strokeWeight(2)
	stroke(255, 0, 255, 100)
	noFill()
	beginShape()
	for(i = 0; i < TWO_PI; i+=0.01) {
		// r = random(100, 105) // This makes a random movement 
		// j = i+20
		u = map(noise(t), 0, 1, 0, mouseX)

		r = map(sin(i*u), 0, 1, 200, 206)	 // now we map the value of each point (which is -1 to 1 from the sin function and then map 50 100) The value won't be going up fast enough so multiply by 5



		x = r*cos(i)
		y = r*sin(i)
		vertex(x, y, 16, 16)
	}
	endShape(CLOSE) // Closes any gaps

	t+=0.01
}


function mousePressed() {
	background(0)
}

// With a normal circle the radius is always the same.

// With a squigly sine moving wave the raidus changes as we go through the points
