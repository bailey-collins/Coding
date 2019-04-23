//create a variable for the triangles
let tri = [];

function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);

    //create a new triangle "object" with the class type "tri"
    for (let i = 0; i < 20; i++) {
        tri.push(new Tri(random(width), random(height), 50, 'green'));
    }
}

function draw() {
    background(0);

    //call tri methods
    for (let i = 0; i < tri.length; i++) {
        tri[i].display();
        tri[i].spin();

    }
}

//TRIANGLE CLASS DEFINITION
class Tri {
    constructor(x, y, size, color) {
        this.color = color;
        this.posX = x;
        this.posY = y;
        this.pointOneX = 0;
        this.pointOneY = -10;
        this.pointTwoX = 10;
        this.pointTwoY = 10;
        this.pointThreeX = -10;
        this.pointThreeY = 10;
        this.angle = 0;
        this.delta = random(0.1);
    }

    display() {
        push();
        //remove outer stroke
        noStroke();
        //set fill color
        fill(this.color);
        //set the position of the triangles
        translate(this.posX, this.posY);
        rotate(this.angle);
        triangle(this.pointOneX, this.pointOneY, this.pointTwoX, this.pointTwoY, this.pointThreeX, this.pointThreeY);
        pop();
    }

    spin() {
        this.angle += this.delta;
    }
}
