function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(220);
	fill(250, 0, 0);
	stroke(200, 0, 0);
	//Neck
	line(250, 285, 250, 345);

	//Wheel
	ellipse(250, 465, 70, 70);

	//Body
	rect(200, 325, 100, 140);

	//Head
	ellipse(250, 240, 90, 90);
}
