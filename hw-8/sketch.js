Let rows, x_space;
Let cols, y_space;

function setup() {
    // create a canvas to draw my animation
    createCanvas( windowWidth, 600 );
    frameRate( 5 );

    x_space = 100;
    rows = floor( width / x_space );
    y_space = 40;
    cols = floor( height / y_space);
}

function draw() {
    // set the background color
    background( 'rgb(78, 40, 125)' );
  }
}
