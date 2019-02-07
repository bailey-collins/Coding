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
    //left
    fill('rgb(85, 208, 76)');
    ellipse(-50, 200, 50, 200);
    //right
    fill('rgb(85, 208, 76)');
    ellipse(50, 200, 50, 200);
    pop();
    // **END LEGS**


    // ** ARMS **********************************
    push();
    // arms code goes here
    //left
    fill('rgb(85, 208, 76)');
    ellipse(-150, 30, 50, 300);
    //right
    fill('rgb(85, 208, 76)');
    ellipse(150, 30, 50, 300);
    pop();
    // **END ARMS**


    // ** HORNS **********************************
    push();
      //horn code goes here
      //left
      fill('rgb(195, 222, 122)');
      triangle(-50, -300, -50, -150, -40, -200);
      //right
      fill('rgb(195, 222, 122)');
      triangle()
    pop();
    // **END HORNS**


    // ** HEAD **********************************
    push();

    // head code goes here
    // make skull first
      translate(0, 100);
      fill('rgb(85, 208, 76)');
      ellipse(0, -150, 330, 370);

    // **MOUTH**
    push();
    // mouth code goes here
      noStroke();
      fill('rgb(33, 82, 29)');
      ellipse(0, -50, 200, 90);
    pop();
    // **END MOUTH**

    // **EYE**
    push();
    // eye code goes here
      fill('rgb(235, 250, 235)');
      ellipse(0, -200, 130, 160);
      noStroke();
      fill('rgb(21, 146, 96)');
      ellipse(0, -200, 80, 90);
      noStroke();
      fill('rgb(7, 7, 7)');
      ellipse(0, -200, 50, 60);
    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END MONSTER SANDBOX *******************
    pop();

}
