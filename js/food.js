'use strict';

class Foodpile {

    constructor() {
        this.size = 20;
        this.position = createVector(random(width), random(height));
    }

    take(amount) {
        if (this.size - amount < 0) {
            amount = this.size;
        }
        this.size -= amount;
        return amount;
    }

    show() {
        push();
        stroke("black");
        fill("yellow");
        translate(this.position.x, this.position.y);
        ellipse(0, 0, this.size, this.size);
        pop();
    }


}