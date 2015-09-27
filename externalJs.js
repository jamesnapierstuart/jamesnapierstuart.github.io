var menuDown = false;

// Load document then process js below
$(document).ready(function(){
	console.log('hello world!');
	// Call a sketch function when click a DOM object
	$("#foo").hide();
	$("#b1").click(function(){
		changeMe();
	});
});

function changeMe() {
	if (menuDown) {
		$('#foo').slideUp(200);
		menuDown = false;
	} else {
		$('#foo').slideDown(200);
		menuDown = true;
	}
};

// Copy the code so it slides up and down but just bigger

// want to overlay it