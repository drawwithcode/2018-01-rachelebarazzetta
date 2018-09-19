function setup() {
	// define artboard size
	createCanvas(1000,600);
	// Set here the values that are not changing all over the sketch

}

function draw() {
	background(160, 245, 255);
	fill(250, 0, 0);

	//floor
	fill(215, 255, 164);
	noStroke();
	rect(0, height-150, width, 150);

	//Neck
	fill(140, 140, 140);
	stroke(140, 140, 140);
	strokeWeight(3);
	line(250, 285, 250, 365);
	line(240, 275, 240, 365);
	line(260, 275, 260, 365);

	//antenna
	line(250, 240, 210, 275);
	line(250, 240, 290, 195);
	line(250, 240, 240, 165);


	//Wheel
	fill(140, 140, 140);
	noStroke();
	ellipse(205, 465, 50, 50);
	ellipse(265, 465, 50, 50);

	fill(200, 200, 200);
	ellipse(205, 465, 30, 30);
	ellipse(265, 465, 30, 30);

	//Body
	fill(0, 0, 0);
	rect(170, 365, 130, 100);
	fill(140, 140, 140);
	rect(170, 385, 130, 10);

	//buttons
	fill(255, 0, 0);
	ellipse(280, 405, 10);
	fill(0, 255, 0);
	ellipse(280, 425, 10);
	fill(0, 0, 255);
	ellipse(280, 445, 10);



	//Head
	fill(0, 0, 0);
	ellipse(250, 240, 90, 90);

	fill(140, 140, 140);
	ellipse(265, 220, 10, 10);
	ellipse(250, 230, 5, 5);
	ellipse(250, 275, 7, 7);

	//eye
	fill(255, 255, 255);
	ellipse(270, 250, 40, 40);
	fill(0, 0, 0);
	ellipse(275, 255, 15, 15);



}
