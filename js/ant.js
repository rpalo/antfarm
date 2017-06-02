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