function setup() {
  createCanvas(600, 600 );
}

Let centerSquare = 0;
Let sideOne = 400;

function draw() {
  background( 'rgb( 0, 128, 255)');

push();
  fill('rgb( 51, 153, 255)');
  square(30, 20, sideOne);
pop();
}
