var menuIconButton  
var menuPageButton1

function menuButton() {
  // button (do in CSS)s
  menuIconButton = createButton('')
  menuIconButton.class('menuButton')
  menuIconButton.position(windowWidth-68, 30)
  menuIconButton.size(35, 35)
  // Style the button
  button1Style()
  // Mouse Events
  menuIconButton.mouseClicked(menuIconEvents)
}

// Menu Icon Methods
function showMenuIcon() {
  menuIconButton.style("visibility", "visible")
}

function hideMenuIcon() {
  menuIconButton.style("visibility", "hidden")
}

function updateMenuIconPosition() {
  menuIconButton.position(windowWidth-68, 30)
}