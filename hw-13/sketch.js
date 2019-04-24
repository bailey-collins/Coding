//set up the sprite as an image
let img;

function preload() {
  //code to load sprite
  img = loadImage('images/fairySprite.jpg');
}

function setup() {
  //setup code
  createCanvas( windowWidth, 600 );
}

function draw() {
  background( 'black' );

  image(img, 10, 10);
}
