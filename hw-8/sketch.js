// set the variables for later use
let rows, x_space;
let cols, y_space;

function setup() {
    // create a canvas to draw my animation
    createCanvas( windowWidth, 600 );
    frameRate( 5 );

    //set values for the variables
    x_space = 100;
    rows = floor( width / x_space );
    y_space = 40;
    cols = floor( height / y_space);
}

function draw() {
    // set the background color
    background( 'blue' );

    noStroke();

    //set a dummy value for x and y
    let x = 1;
    let y = 1;
    //set a while loop so that triangles appear in random locations on the canvas
    while ( x != 0 ){
      x = floor(random() * rows);
      y = floor(random() * cols);

          translate(x, y);
          fill( random(50,100), random(175,255), random(125,80));
          triangle(288, 18, 351, 360, 288, 360);

        
    }
}
