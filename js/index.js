let a;

function setup() {
  createCanvas(600, 400);
  background(255);
  angleMode(DEGREES);
  a = new ForagerAnt();
}

function draw() {
  background(255);
  a.update();
  a.show();
}

