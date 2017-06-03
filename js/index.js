let a, foodList;

function setup() {
  createCanvas(600, 400);
  background(255);
  angleMode(DEGREES);
  rectMode(CENTER)
  foodList = [];
  for (let i=0; i<4; i++) {
    foodList.push(new Foodpile());
  }
  a = new ForagerAnt(foodList);
  
}

function draw() {
  background(255);
  push();
  fill("brown");
  rect(width/2, height/2, 20, 20);
  pop();
  a.update();
  a.show();
  foodList.forEach( food => {
    food.show();
  });
}

