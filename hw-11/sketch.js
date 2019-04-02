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
    this.size = size;
    this.posX = x;
    this.posY = y;
  }
  display() {
    push();
    //remove outer stroke
    noStroke();
    //set fill color
    fill(this.color)
    //set the position of the triangles

    pop();
  }
}
