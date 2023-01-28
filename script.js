var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var i = 0;

setInterval(function() {
  document.body.style.backgroundColor = colors[i++ % colors.length];
}, 1000);
