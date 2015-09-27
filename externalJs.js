var menuDown = false;

// Load document then process js below
$(document).ready(function(){
	// Hello World Test
	console.log('hello world!');
	// Hide menu on load up
	$("#dropDownMenu").hide();
	// Call dropMenu() function to display menu
	$("#menuImg").click(function(){
		dropMenu();
	});
});

function dropMenu() {
	if (menuDown) {
		$('#dropDownMenu').slideUp(100);
		menuDown = false;
	} else {
		$('#dropDownMenu').slideDown(100);
		menuDown = true;
	}
};