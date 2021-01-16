var hr, min, sec;
var hourAngle, minAngle, secAngle;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hourAngle=map(hr,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();

  point(0,0);
  noFill();
  strokeWeight(15);
  stroke(0,0,255);
  arc(0,0,300,300,0,hourAngle);
  
  point(0,0);
  noFill();
  strokeWeight(15);
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);

  point(0,0);
  noFill();
  strokeWeight(15);
  stroke(0,255,0);
  arc(0,0,300,300,0,minAngle);

}