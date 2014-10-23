var t = 0
var curveNumber = 0

function setup() {
	createCanvas(displayWidth, displayHeight)
	background(0)
	// setFrameRate(8)
}

function draw() {
	// background(0) // Take this off if want to take a serious of pictures of the events

	outRadiusCode = 400
	inRadiusCode = 480

	if(curveNumber > 10) {

	} else {
		drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode, outRadiusCode)
		drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode/2+inRadiusCode/5, outRadiusCode/2+inRadiusCode/5)
		drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode/2, outRadiusCode/2)
		drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode/4, outRadiusCode/4)
			drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode/8, outRadiusCode/8)
				drawCrazyCircle(width/2, height/2, curveNumber, inRadiusCode/16, outRadiusCode/16)
		curveNumber+=1
	}



	t+=0.01
}

function drawCrazyCircle(translateX, translateY, curve, inRadiusCode, outRadius) {

	// radiusIncrease = 0

	// push()
	// translate(translateX, translateY)
	// strokeWeight(2)
	// stroke(random(200), random(200), random(255), 20)
	// noFill()
	// beginShape()
	// for(i = 0; i < TWO_PI; i+=1) {

	// 	u = map(noise(t), 0, 1, 0, mouseX/2) // Does Perlin Noise nicely

	// 	r = map(sin(i*12), -1, 1, 200, 300)	 // now we map the value of each point (which is -1 to 1 from the sin function and then map 50 100) The value won't be going up fast enough so multiply by 5
	// 	// Change the amount of the circle


	// 	// if(i < PI) {
	// 	// 	r = map(sin(i*curve), -1, 1, inRadiusCode, outRadius)
	// 	// }
	// 	// else {
	// 	// 	r = radiusIncrease
	// 	// }
	// 	radiusIncrease+=200

	// 	x = r*cos(i)
	// 	y = r*sin(i)
	// 	vertex(x, y, 16, 16)
	// }
	// endShape() // Closes any gaps
	// pop()


		push()
	translate(translateX, translateY)
	strokeWeight(2)
	stroke(random(200), random(200), random(255), 20)
	noFill()
	beginShape()
	for(i = 0; i < PI; i+=0.01) {

		u = map(noise(t), 0, 1, 0, mouseX/2) // Does Perlin Noise nicely

		// r = map(sin(i*12), -1, 1, 200, 300)	 // now we map the value of each point (which is -1 to 1 from the sin function and then map 50 100) The value won't be going up fast enough so multiply by 5
		// Change the amount of the circle

		r = map(sin(i*curve), -1, 1, inRadiusCode, outRadius)

		// radiusIncrease+=200

		x = r*cos(i)
		y = r*sin(i)
		vertex(x, y, 16, 16)
	}
	endShape() // Closes any gaps
	pop()


	


	// Second shape (rotate 180 because its easy to copy over and do the math)

	push()

	translate(translateX, translateY)

	rotate(radians(180))	
	strokeWeight(2)
	stroke(random(200), random(200), random(255), 20)
	noFill()
	beginShape()
	for(i = 0; i < PI; i+=0.01) {

		u = map(noise(t), 0, 1, 0, mouseX/2) // Does Perlin Noise nicely

		// r = map(sin(i*12), -1, 1, 200, 300)	 // now we map the value of each point (which is -1 to 1 from the sin function and then map 50 100) The value won't be going up fast enough so multiply by 5
		// Change the amount of the circle


		r = map(sin(i*curve), -1, 1, inRadiusCode, outRadius)


		// radiusIncrease+=200

		x = r*cos(i)
		y = r*sin(i)
		vertex(x, y, 16, 16)
	}
	endShape() // Closes any gaps
	pop()

}

function mousePressed() {
	background(0)
	curveNumber = 0
}

// With a normal circle the radius is always the same.

// With a squigly sine moving wave the raidus changes as we go through the points