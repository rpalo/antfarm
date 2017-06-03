'use strict';

class Ant {

  constructor() {
    this.home = createVector(width/2, height/2);
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxForce = 1;
    this.maxSpeed = 2;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  show() {
    push();
    stroke(0);
    fill(0);
    translate(this.position.x, this.position.y);
    ellipse(0, 0, 10, 10);
    pop();
  }

  update() {
    this.acceleration.limit(this.maxForce);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.setMag(0);
  }
}

class ForagerAnt extends Ant {

  constructor(foodList) {
    super();
    this.foodList = foodList;
    this.motionOffset = 20; // Offset to noise function
    this.senseRadius = 50;
    this.target = undefined;
    this.food = 0;
  }

  search() {
    let newHeading = noise(this.motionOffset + frameCount) * 360;
    this.applyForce(p5.Vector.fromAngle(newHeading));
    let d;
    let sensedFoods = [];
    this.foodList.forEach( food => {
      d = dist(food.position.x, food.position.y, this.position.x, this.position.y);
      if (d < this.senseRadius) {
        this.target = food;
      }
    });
  }

  hunt(location) {
    const adjustment = p5.Vector.sub(location, this.position);
    this.applyForce(adjustment);
  }

  goHome() {
    this.hunt(this.home);
  }

  isCloseTo(location) {
    const d = dist(location.x,
                    location.y,
                    this.position.x,
                    this.position.y);
    return d < 5;
  }

  collectFood(food) {
    this.food = food.take(5);
    this.target = undefined;
  }
  storeFood() {
    this.food = 0;
  }

  update() {
    if (this.food > 0) {
      if (this.isCloseTo(this.home)) {
        this.storeFood();
      } else {
        this.goHome();
      }
    } else if (this.target) {
      if (this.isCloseTo(this.target.position)) {
      this.collectFood(this.target);
      } else {
      this.hunt(this.target.position);
      }
    } else {
      this.search();
    }
    super.update();
  }

  show() {
    super.show();
    push();
    noStroke();
    if (this.food > 0) {
      fill('rgba(0, 255, 0, .2)');
    } else {
      fill('rgba(255, 0, 0, .2)');
    }
    ellipse(this.position.x, this.position.y, this.senseRadius, this.senseRadius);
    pop();
  }
}