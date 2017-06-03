let a, foodList;

function setup() {
  createCanvas(600, 400);
  background(255);
  angleMode(DEGREES);
  foodList = [];
  for (let i=0; i<4; i++) {
    foodList.push(new Foodpile());
  }
  a = new ForagerAnt(foodList);
  
}

function draw() {
  background(255);
  a.update();
  a.show();
  foodList.forEach( food => {
    food.show();
  });
}

