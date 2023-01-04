document.addEventListener
('DOMContentLoaded', function() {

var username=prompt("What is your name?");

document.getElementById("name").innerHTML = 'Hi ' + [username];
});