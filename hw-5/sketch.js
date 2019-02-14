function setup() {
  //create a canvas for my animation to exist on
  createCanvas(600, 600);
}

//set variables for later use
// make it easier to make the square sized relatively to each other
Let sideOne = 500;
// set the rotation rate for the squares
Let squareRotations = 0
// make it so that the squares follow the cursor slightly while still rotating
Let followingSquare = 0

//creating an animation
function draw() {
  background( 'rgb( 0, 128, 255)');
  //turn the cursor off
  noCursor();
  //update values

//creating a sandbox for squares- I'm looking to make some squares which rotate into diamonds in progressively lighter shades of blue
push();

  //first large square
  push();
    fill('rgb( 51, 153, 255)');
    square(0, 0, sideOne);
    squareRotations = (mouseY * 0.1) - 20;
  pop();

  //second medium square
  push();
    fill('rgb( 102, 178, 255)');
    square(0, 0, sideOne*0.5);
    squareRotations = (mouseY * 0.2) - 20;
  pop();

  //final small square
  push();
    fill('rgb( 153, 204, 255)');
    square(0, 0, sideOne*0.25);
    squareRotations = (mouseY * 0.3) - 20;
  pop();

//end of square sandbox
pop();
}
