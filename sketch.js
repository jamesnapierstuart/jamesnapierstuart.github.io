var sketchOne = function(p) {
	p.x = window.innerWidth / 2
	p.y = window.innerHeight / 2

	p.bgColor = p.random(200)

	p.r = 255
	p.g = 0
	p.b = 0
	p.a = 25

	p.widthSize = window.innerWidth
	p.heightSize = window.innerHeight

	p.setup = function() {
		p.createCanvas(p.widthSize, p.heightSize)
		p.background(p.bgColor)
	}

	p.draw = function() {
		p.fill(p.r, p.g, p.b, p.a)
		p.noStroke()
		p.ellipse(p.x, p.y, 20, 20)

		p.x = p.x + p.random(-10, 10)
		p.y = p.y + p.random(-10, 10)
	}

	p.windowResized = function() {
  p.resizeCanvas(window.innerWidth, window.innerHeight)
  p.background(p.bgColor)
  		p.x = p.width/2
		p.y = p.height/2
}
}




var sketchTwo = function(p) {
	p.x = 100
	p.y = 100

	p.setup = function() {
		p.createCanvas(200, 200)
		p.background(51)
	}

	p.draw = function() {
		p.fill(p.r, p.g, p.b, p.a)
		p.noStroke()
		p.ellipse(p.x, p.y, 20, 20)

		p.x = p.x + p.random(-10, 10)
		p.y = p.y + p.random(-10, 10)
	}
}

var sketches = []

for(var i = 0; i < 5; i++)
{
	sketches[i] = new p5(sketchOne)
}

function resetBackground() {
	for(var i = 0; i < 20; i++)
	{
		sketches[i].x = sketches[i].width/2
		sketches[i].y = sketches[i].height/2
		sketches[i].r = sketches[i].random(255)
		sketches[i].g = sketches[i].random(255)
		sketches[i].bgColor = sketches[i].random(100)
		sketches[i].background(sketches[i].bgColor)
	}
}

setInterval(resetBackground, 3000)

// var myp5 = new p5(sketchOne)
// var myp2 = new p5(sketchTwo)
// var myp3 = new p5(sketchTwo)
// var myp4 = new p5(sketchOne)

// function resetBackground() {
// 	myp5.x = myp5.width/2
// 	myp5.y = myp5.height/2
// 	myp5.background(51)
// }

// function changeSomething() {
// 	myp4.x = myp4.width/2
// 	myp4.y = myp4.height/2
// 	myp4.background(myp4.random(51))
// }

// setInterval(changeSomething, 3000)
// setInterval(resetBackground, 3000)













