let stars = [];

function setup(){
  createCanvas( windowWidth, 800 );
  frameRate(2);

  //create and cause the stars to move randomly
  for (var i = 0; i < 20; i++) {

    //add stars as objects to the array
    stars.push(
      {
        period: { x: random(60, 240), y: random(60, 240) },
        maxSize: random(4),
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

//set star locations in an array
Let starArr = [
  [0, -9],
  [7, 9],
  [-9, -2],
  [9, -2],
  [-7, 9]
];
let idx = 0;

function drawStars( stars, time ) {
  translate( width/2, height/2 );

  Let idxPlus = (idx + 1) % starArr.length;

  Let x1 = starArr[idx][0] * 10;
  Let y1 = starArr[idx][1] * 10;
  Let x2 = starArr[idxPlus][0] * 10;
  Let y2 = starArr[idxPlus][1] * 10;

  //draw the sides of the stars
  strokeWeight(18);
  stroke(random(255), random(255), random(255), 150);
  line(x1, y1, x2, y2);

  //increment the idx
  idx = (idx + 1) % starArr.length;
}
