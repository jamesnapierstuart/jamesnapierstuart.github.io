var song;
var d = new Date();

function preload() {
  // Load a sound file
  song = loadSound('snare.wav');
}

function setup() {
  createCanvas( displayWidth, displayHeight )
  
  background(255);
  // song.loop()


}

function draw() {

var speed = map(mouseY, 0.1, height, -20, 20)
var size = 12000/speed


  // speed = constrain(speed, 0.01, 4);
  song.rate(speed)
  song.play()


  // Inverse variation


  b = color(0, 0, 200, 40)
  p = color(200, 0, 100, 40)
  g = color(0, 200, 0, 40)
  f = new Array(3)
  f[0] = b
  f[1] = p
  f[2] = g
  l = f[int(random(3))]
  fill(l)
  noStroke()
  ellipse(displayWidth/2, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2+displayWidth/2.5, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2-displayWidth/2.5, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2+displayWidth/4, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2-displayWidth/4, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2+displayWidth/8, random(displayHeight), random(size*0.01), random(size*0.01))
  ellipse(displayWidth/2-displayWidth/8, random(displayHeight), random(size*0.01), random(size*0.01))


}