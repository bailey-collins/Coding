Let starSides = [];
Let stars = [];

function setup(){
  createCanvas( windowWidth, 800 );

  //create and cause the stars to move randomly
  for (var i = 0; i < 20; i++) {

    //add stars as objects to the array
    stars.push(
      {
        period: { x: random(60, 240), y: random(60, 240) },
        maxSize: random(4),
        maxDist: {
          x: random(width/2),
          y: random(height/2)
        },
        pos: {
          x: random(width),
          y: random(height)
        }
      } //end stars object
    ); //end array push
  } //end for loop
}

function draw() {
  //set the background to black
  background(0, 0, 0, 10);

}

function drawStars( stars, time ) {
  
}
