//create a variable
let balls = [];
const numOfBalls = 20;

function setup() {
  //create a workspace
  createCanvas(windowWidth, 800);

  //create a new ball object of the class type "Ball"
  let init_x = 60;
  let init_y = 60;
  for (let i = 0; i < numOfBalls; i++) {
    balls.push(new Ball(init_x, init_y));
    //move the starting position over so that the balls don't start on top of each other
    init_x += 100;
    if (init_x > width) {
      init_x = 60;
      init_y += 100;
    }
  }
}

function draw() {
  background('rgb(66, 57, 66)');

  for (let i = 0; i < balls.length; i++) {
    //call the ball's methods
    balls[i].ballCheck(balls, i);
    balls[i].edgeCheck();
    balls[i].move();
    balls[i].display();
  }
}

class Ball {
  constructor(x, y, size) {
    this.color = 'blue'
    this.size = random(40, 100);
    this.rad = this.size / 2;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-5, 5);
    this.deltaY = random(-5, 5);
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    translate(this.posX, this.posY);
    ellipse(0, 0, this.size);
    pop();
  }

  move() {
    
  }
}
