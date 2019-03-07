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
    background( 'blue' );

    noStroke();

    //set a dummy value for x and y
    Let x = 1;
    Let y = 1;
    while ( x != 0 ){
      x = floor(random() * rows);
      y = floor(random() * cols);

        for (Let y_space > 40;) {

          fill( random(50,100), random(175,255), random(125,80));
          triangle(288, 18, 351, 360, 288, 360);

        }
    }
}
