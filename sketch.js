var sketchOne = function(p) {
	p.x = p.windowWidth / 2
	p.y = p.windowHeight / 2

	p.bgColor = p.random(200)

	p.r = 255
	p.g = 0
	p.b = 0
	p.a = 25

	p.widthSize = p.windowWidth
	p.heightSize = p.windowHeight

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
  		p.resizeCanvas(p.windowWidth, p.windowHeight)
  		p.background(p.bgColor)
  		p.x = p.width/2
		p.y = p.height/2
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









