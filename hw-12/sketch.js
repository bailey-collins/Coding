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

//make it so the ball react to a clicked mouse
function mousePressed() {
  for(var i = 0; i<balls.move; i++) {
    if (balls[i].edgeCheck) {
      balls[i].ballCheck = true;
      strokeWeight(2);
      stroke(0, 150, 255);
    } else {
      noStroke();
      balls[i].ballCheck = false;
    }

    //make it so the balls follow the mouse when it is dragged
    balls[i].deltaX = mouseX - balls[i].posX;
    balls[i].deltaY = mouseY - balls[i].posY;
  }
}

function mouseDragged() {
  for(var i = 0; i<balls.move; i++) {
    if (balls[i].ballCheck) {
      balls[i].posX = mouseX - balls[i].deltaX;
      balls[i].posY = mouseY - balls[i].deltaY;
    }
  }
}

//make it so the unselected balls don't follow the mouse (and hopefully bounce off their fellows)
function mouseReleased() {
  for(var i = 0; i<balls.move; i++) {
    boxes[i].ballCheck = false;
  }
}

//create the "Ball" class
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
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
}
