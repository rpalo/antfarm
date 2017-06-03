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

