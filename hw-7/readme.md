Bailey Collins, Section 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

```let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
```
This is setting values to reference in the code later.

```function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}
```
This sets the size and background color of the canvas, or area of screen where the animation occurs.

```function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}
if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}
```
This is setting the movement pattern of the ellipses so that they *bounce* on the edges of the canvas and move back and forth.

```fill(255);
ellipse(ball.x, ball.y, ball.width, ball.width);
}
```
This sets the color of the ellipses to white and also sets their size.

```function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```
This makes it so that the ellipses speed up and slightly change trajectory when the mouse is clicked. 


<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->


## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
