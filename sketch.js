var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


var sketchOne = function(p) {


	// Check if mobile:
	p.widthSize = window.innerWidth
	p.heightSize = window.innerHeight

	p.x = window.innerWidth / 2
	p.y = window.innerHeight / 2

	p.bgColor = p.random(200)

	p.r = 255
	p.g = 0
	p.b = 0
	p.a = 25

	// p.widthSize = window.innerWidth
	// p.heightSize = window.innerHeight

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
		
		p.fill(p.r, p.g, p.b, p.a)
		p.noStroke()
		p.rect(p.x, p.y, p.random(50), p.random(50))
	}

	p.windowResized = function() {
  		if(!isMobile)
		{
			p.resizeCanvas(window.innerWidth, window.innerHeight)	
  			p.background(p.bgColor)
  			p.x = p.widthSize/2
			p.y = p.heightSize/2
		}
		// else if mobile, we will have our own function for orientation
		console.log(isMobile)


  		p.background(p.bgColor)
  		p.x = p.width/2
		p.y = p.height/2
	}

	p.orientationchange = function() {
		if(isMobile)
		{
			p.resizeCanvas(window.innerWidth, window.innerHeight)
			p.background(p.bgColor)
  			p.x = p.width/2
			p.y = p.height/2
		}
	}
}





var sketches = []

for(var i = 0; i < 5; i++)
{
	sketches[i] = new p5(sketchOne)
	if(i === 0)
	{
		sketches[i].bgColor = sketches[i].color(0)
		sketches[i].background(sketches[i].bgColor)
	}
	if(i === 4)
	{
		sketches[i].bgColor = sketches[i].color(0)
		sketches[i].background(sketches[i].bgColor)	
	}
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

// Uncomment this if we want an interval function to be called
// setInterval(resetBackground, 3000)




function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
      for(var i = 0; i < 20; i++)
	{
		sketches[i].orientationchange()
		sketches[i].x = sketches[i].width/2
		sketches[i].y = sketches[i].height/2
		sketches[i].r = sketches[i].random(255)
		sketches[i].g = sketches[i].random(255)
		sketches[i].bgColor = sketches[i].random(100)
		sketches[i].background(sketches[i].bgColor)
	}
        break; 
        case 0:
        for(var i = 0; i < 20; i++)
	{
		sketches[i].orientationchange()
		sketches[i].x = sketches[i].width/2
		sketches[i].y = sketches[i].height/2
		sketches[i].r = sketches[i].random(255)
		sketches[i].g = sketches[i].random(255)
		sketches[i].bgColor = sketches[i].random(100)
		sketches[i].background(sketches[i].bgColor)
	}
      default:
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);



