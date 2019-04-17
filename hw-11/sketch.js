//create a variable for the triangles
let tri;

function setup() {
  //create canvas
  createCanvas(windowWidth, 800);

  //create a new triangle "object" with the class type "tri"
  tri = new Tri(width / 2, height / 2, 50, 'green');
}

function draw() {
  background(0);

  //call tri methods
  tri.display
  tri.spin
}

//TRIANGLE CLASS DEFINITION
class Tri {
  constructor(x, y, size, color) {
    this.color = color;
    this.pointOneX = 10;
    this.pointOneY = y-10;
    this.pointTwoX = x+10;
    this.pointTwoY = y+10;
    this.pointThreeX = x-10;
    this.pointThreeY = y+10;
    this.posX = x;
    this.posY = y;
  }

  display() {
    push();
    //remove outer stroke
    noStroke();
    //set fill color
    fill(this.color);
    //set the position of the triangles
    translate(this.posX, this.posY);
    triangle(this.pointOneX, this.pointOneY, this.pointTwoX, this.pointTwoY, this.pointThreeX, this.pointThreeY);
    pop();
  }

  spin() {
    push();
    noStroke();
    fill(this.color);
    translate(this.posX, this.posY);
    //set the rotated points to oposite sides to create the illusion of "spinning"
    triangle(this.pointThreeX, this.pointThreeY, this.pointOneX, this.pointOneY, this.pointTwoX, this.pointTwoY);
  }
}
