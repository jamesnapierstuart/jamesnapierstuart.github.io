/*
24/09/2015 
Jamie Stuart
p5 Experiments
Drop down box 02
*/

var heightBox = 0
var clicked = false
var firstClick = false
var menuRate = 100
var menuLimit
var menuImg

function preload() {  // preload() runs once
	menuImg = loadImage('menuIcon.png')
}


function setup() {
 	createCanvas(windowWidth, windowHeight) // Create canvas
 	// menuLimit = windowHeight/3.3
 	menuLimit = 288
 	background(0)
 	// Create buttons
 	menuButton()

  // Mobile device window size
  if (windowWidth < 1000) {
    // Create Menu bar
    imageMode(CENTER)
    image(menuImg, width-50, 50)
    // Hide menu pages
    // hideMenuPages()
    // show menu icon button
    showMenuIcon()
}
}



function animate(r, g, b) {
	if (heightBox <= menuLimit) {
		noStroke()
		fill(r, g, b)
		rect(0, 0, width, heightBox)
		background(0)
		noStroke()
		fill(r, g, b)
		rect(0, 0, width, heightBox)
		heightBox = heightBox+menuRate
		// Draw menu icon 
		imageMode(CENTER)
    	image(menuImg, width-50, 50)
	}
 	// Catch, so since menurate is not always modulous to the height/2
 	// We say as soon as you go over it, go to height/2 
 	else if (heightBox >= menuLimit) {
 		noStroke()
 		fill(r, g, b)
 		rect(0, 0, width, menuLimit)
 		// Draw menu icon
		imageMode(CENTER)
    	image(menuImg, width-50, 50)
 	}

      // Mobile device window size
  if (windowWidth > 1000) {
    background(0)
    hideMenuIcon()
}
 }

 function animateBack(r, g, b) {
 	if(heightBox != 0) {
 		noStroke()
 		fill(r, g, b)
 		rect(0, 0, width, heightBox)
 		background(0)
 		noStroke()
 		fill(r, g, b)
 		rect(0, 0, width, heightBox)
 		heightBox = heightBox-menuRate
 		// Draw menu icon 
		imageMode(CENTER)
    	image(menuImg, width-50, 50)
 	}
 	else if (heightBox <= 0) {
 		background(0)
 		// Draw menu icon 
		imageMode(CENTER)
    	image(menuImg, width-50, 50)
 	}
          // Mobile device window size
  if (windowWidth > 1000) {
    background(0)
    hideMenuIcon()
}
 }

 function draw()  {
 	// First click bool will be replaced by menu icon click
 	if(firstClick) {
 		if(clicked) {
 			animate(100, 100, 100)
 		} 
 		else {	
 			animateBack(100, 100, 100)
 		}
 	}
 }

 function windowResized() {
 	resizeCanvas(windowWidth, windowHeight)
 	if (windowWidth < 1000) {
    // Create Menu bar
    imageMode(CENTER)
    image(menuImg, width-50, 50)
    // hide menu pages
    // hideMenuPages()
    // show the menu icon button
    showMenuIcon()
    updateMenuIconPosition()
}
}


