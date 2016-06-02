// So this does strnage stuff on IOS

// It almost solves the problem of resizing with the IOS thing that comes up,

// BUT it create a whole bunch of problems where the sketches weren't big enough

// much easier would be to say, if the orientation has changed then change the inner window width

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

	p.orientationchange = function() {
		p.resizeCanvas(p.windowHeight, p.windowWidth)
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



window.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation.angle);

    for(var i = 0; i < 20; i++)
	{
		sketches[i].x = sketches[i].width/2
		sketches[i].y = sketches[i].height/2
		sketches[i].r = sketches[i].random(255)
		sketches[i].g = sketches[i].random(255)
		sketches[i].bgColor = sketches[i].random(100)
		sketches[i].background(sketches[i].bgColor)
	}
});





