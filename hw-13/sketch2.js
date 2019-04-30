//draw the bubbles
fill('lightblue');
noStroke();
//create the for loop to draw multiple bubbles
for (let i = 0; i < 10; i++) {
  //find the x positions
  pos_x = width * i / 10 + r;
  //draw the ellipse
  ellipse(pos_x, pos_y, d);
}
