function setup() {
  //create a canvas for my animation to exist on
  createCanvas(600, 600);
}

//set variables for later use
Let centerSquare = 0;
Let sideOne = 500;
Let squareRotations = 0

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
  pop();

  //second medium square
  push();
    fill('rgb( 102, 178, 255)');
    square(0, 0, sideOne*0.5);
  pop();

  //final small square
  push();
    fill('rgb( 153, 204, 255)');
    square(0, 0, sideOne*0.25)
  pop();

//end of square sandbox
pop();
}
