var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copyButton = document.getElementById("copyButton");
var randomButton = document.getElementById("randomButton");
var wrapper = document.getElementById("wrapper");


function setGradient() {
	body.style.background ="linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")";
	wrapper.textContent = body.style.background + ";" 
}

function copyText() {
	navigator.clipboard.writeText
	(wrapper.textContent);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function randomGradient() {
	var rannumber1=Math.floor(Math.random() * 256 );
	var rannumber2=Math.floor(Math.random() * 256 );
	var rannumber3=Math.floor(Math.random() * 256 );
	var rannumber4=Math.floor(Math.random() * 256 );
	var rannumber5=Math.floor(Math.random() * 256 );
	var rannumber6=Math.floor(Math.random() * 256 );
	var ranrgb="("+rannumber1+","+rannumber2+","+rannumber3+")";
	var ranrgb2="("+rannumber4+","+rannumber5+","+rannumber6+")";
	color1.value = rgbToHex(rannumber1, rannumber2, rannumber3);
	color2.value = rgbToHex(rannumber4, rannumber5, rannumber6);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
copyButton.addEventListener("click", copyText);
randomButton.addEventListener("click", randomGradient);
randomButton.addEventListener("click", setGradient);




