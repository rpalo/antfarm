let a, f1, f2;

function setup() {
  createCanvas(600, 400);
  background(255);
  angleMode(DEGREES);
  a = new ForagerAnt();
  f1 = new Foodpile();
  f2 = new Foodpile();
}

function draw() {
  background(255);
  a.update();
  a.show();
  f1.show();
  f2.show();
}

