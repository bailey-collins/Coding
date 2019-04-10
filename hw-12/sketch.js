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
