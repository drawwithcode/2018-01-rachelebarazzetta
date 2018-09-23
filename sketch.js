function setup() {
	// define artboard size
	createCanvas(1000,600);
	// Set here the values that are not changing all over the sketch
	background(160, 245, 255);

	//cloud
	noStroke();
	fill(255, 255, 255);
	ellipse(620, 205, 10);
	ellipse(635, 187, 15);
	ellipse(660, 165, 25);
	ellipse(800, 105, 300, 150);

	strokeWeight(1);
	stroke(190, 190, 190);
	line(700, 140, 900, 140);
}

function draw() {
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

	//second robot
	//neck2fill(0, 0, 0);
	fill(255, 150, 70);
	rect(545, 290, 20, 60);

	// right legs
	fill(200, 200, 200);
	rect(570, 350, 30, 130);
	stroke(140, 140, 140);
	strokeWeight(3);
	line(570, 455, 600, 455);
	line(570, 445, 600, 445);
	line(570, 435, 600, 435);
	line(570, 425, 600, 425);
	line(570, 415, 600, 415);
	line(570, 405, 600, 405);
	line(570, 395, 600, 395);
	line(570, 385, 600, 385);
	line(570, 375, 600, 375);
	line(570, 465, 600, 465);



//left legs
	noStroke();
	fill(200, 200, 200);
	rect(510, 350, 30, 130);
	stroke(140, 140, 140);
	strokeWeight(3);
	line(510, 455, 540, 455);
	line(510, 445, 540, 445);
	line(510, 435, 540, 435);
	line(510, 425, 540, 425);
	line(510, 415, 540, 415);
	line(510, 405, 540, 405);
	line(510, 395, 540, 395);
	line(510, 385, 540, 385);
	line(510, 375, 540, 375);
	line(510, 465, 540, 465);


	//bacino
	noStroke();

	fill(105, 105, 105);
	arc(555, 370, 110, 110, TWO_PI, PI);
	fill(245, 135, 30);
	triangle(500, 370, 610, 370, 555, 425);




	//head2
	fill(255, 255, 255);
	ellipse(555, 255, 80);
	fill(0, 200, 200);
	ellipse(555, 255, 40);
	fill(0, 0, 0);
	ellipse(555, 255, 30);
	fill(255, 255, 255);
	ellipse(565, 245, 7);

	//body2
	fill(105, 105, 105);
	rect(500, 350, 110, 20);

	fill(200, 200, 200);
	ellipse(515, 360, 7);
	ellipse(525, 360, 7);
	ellipse(535, 360, 7);
	ellipse(545, 360, 7);
	ellipse(555, 360, 7);
	ellipse(565, 360, 7);
	ellipse(575, 360, 7);
	ellipse(585, 360, 7);
	ellipse(595, 360, 7);
	ellipse(605, 360, 7);
	ellipse(505, 360, 7);

//mouth
fill(180, 0, 25);
strokeWeight(3);
stroke(180, 0, 25)
rect(530, 310, 50, 30);

//teeth
noStroke();
fill(255, 255, 255);
triangle(530, 310, 540, 310, 535, 320);
triangle(540, 310, 550, 310, 545, 320);
triangle(550, 310, 560, 310, 555, 320);
triangle(560, 310, 570, 310, 565, 320);
triangle(570, 310, 580, 310, 575, 320);

triangle(535, 340, 545, 340, 540, 330);
triangle(545, 340, 555, 340, 550, 330);
triangle(555, 340, 565, 340, 560, 330);
triangle(565, 340, 575, 340, 570, 330);


	//foot
	fill(140, 140, 140);
	rect(500, 475, 50, 20);
	rect(560, 475, 50, 20);

	//arms
	stroke(140, 140, 140);
	strokeWeight(10);
	line(490, 310, 440, 310);
	line(440, 360, 440, 310);

	line(620, 310, 670, 310);
	line(670, 360, 670, 310);

		//hands
		noFill();
   	arc(670, 380, 30, 30, PI, TWO_PI);

		arc(440, 380, 30, 30, PI, TWO_PI);

		//Shoulder
noStroke();
	fill(245, 135, 30);
	triangle(500, 290, 480, 310, 500, 330);
	triangle(610, 290, 630, 310, 610, 330);

	//write
	strokeWeight(1);
	stroke(190, 190, 190);
	line(pmouseX, pmouseY, mouseX, mouseY);

	//mirror
	noStroke();
	fill(150, 224, 245, 40);
	rect(500, 200, 110, 170);

	arc(555, 200, 110, 110, PI, TWO_PI);


	//questionmark
	stroke(255, 0, 0);
	strokeWeight(8);
	noFill();
	arc(165, 190, 40, 40, PI+1, PI/2);
	line(165, 230, 165, 210);
	line(135, 230, 135, 170);

	fill(255, 0, 0);
	noStroke();
	ellipse(135, 250, 10);
	ellipse(165, 250, 10);

//riflesso
translate(710, -25);
	rotate(46);
	fill(255, 255, 255, 40);
	ellipse(240, 30, 15, 50);









}
