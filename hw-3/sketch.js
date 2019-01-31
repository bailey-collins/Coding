//Declare the setup function
function setup() {

  //Create a canvas, 600px by 400px
  createCanvas(600, 400);

  //color the background- hopefully it didn't have to be pink, like in the example, because I want a color that's a little easier to look at on a screen
  background('violet');
}

//Declare the draw function
function draw() {

  //tell p5 to print the text string "Hello World"
  //tell p5 to position the text at x: 20 and y: 30
  text("Hello World!", 20, 30 );
}
