'use strict';

class Ant {

  constructor() {
    this.position = createVector(width/2, height/2);
  }

  show() {
    push();
    stroke(0);
    fill(0);
    translate(this.position.x, this.position.y);
    ellipse(0, 0, 10, 10);
    pop();
  }
}

class ForagerAnt extends Ant {

  constructor() {
    super();
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.motionOffset = 20; // Offset to noise function
    this.maxForce = 1;
    this.maxSpeed = 2;
  }

  search () {
    let newHeading = noise(this.motionOffset + frameCount) * 360;
    this.applyForce(p5.Vector.fromAngle(newHeading));
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.search();
    this.acceleration.limit(this.maxForce);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.setMag(0);
  }
}