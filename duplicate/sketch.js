let squareColor;

function setup() {
 // put setup code here
  createCanvas(800, 800);

  squareColor = color(100, 150, 255);
}

function draw() {
  // put drawing code here
  background('red');
  rectMode(CENTER);
  fill(squareColor);
  rect(100,100,100,100);
}
function mousePressed() {
  squareColor = color(random(255), random(255), random(255));

}