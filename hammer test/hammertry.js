var myElement = document.querySelector('#myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
	console.log('triggered');
    myElement.textContent = ev.type +" gesture detected.";
});