var menuDown = false;

// Load document then process js below
$(document).ready(function(){
	console.log('hello world!');
	// Call a sketch function when click a DOM object
	$("#foo").hide();
	$("#b1").click(function(){
		changeMe();
	});
	$("#menuImg").click(function(){
		changeMe();
	});
});

function changeMe() {
	if (menuDown) {
		$('#foo').slideUp(100);
		menuDown = false;
	} else {
		$('#foo').slideDown(100);
		menuDown = true;
	}
};