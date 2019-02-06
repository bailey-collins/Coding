function setup() {
    // create a canvas to draw my monster on
    createCanvas(600, 600);
}

function draw() {
    // set the background color
    background( 'rgb(78, 40, 125)' );

    // *****************************************************
    // create a sandbox for the entire monster
    push();

    // move the entire grid for this monster to the center of the canvas
    translate(300, 300);


    // ** LEGS **********************************
    push();
    // leg code goes here

    pop();
    // **END LEGS**


    // ** ARMS **********************************
    push();
    // arms code goes here

    pop();
    // **END ARMS**


    // ** HEAD **********************************
    push();

    // head code goes here
    // make skull first
      translate(0, 100)
      fill('rgb(85, 208, 76)')
      ellipse(0, -150, 300, 370)

    // **MOUTH**
    push();
    // mouth code goes here

    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here
    // left
      translate()
      fill('rgb(235, 250, 235)')
      ellipse()
      translate()
      fill('rgb(21, 146, 96)')
      ellipse()
      translate()
      fill('rgb(7, 7, 7)')
      ellipse()
    pop();

    push();
    // eye code goes here
    // right
      fill('rgb(235, 250, 235)')
      ellipse()
    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END MONSTER SANDBOX *******************
    pop();

}
