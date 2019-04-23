let stars = [];

function setup() {
    createCanvas(windowWidth, 800);
    frameRate(2);

    //create and cause the stars to move randomly
    for (var i = 0; i < 20; i++) {

        //add stars as objects to the array
        stars.push({
            maxSize: random(4),
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

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        drawStars(star);

    }

}

//set star locations in an array
let starPoints = [
    [0, -9],
    [7, 9],
    [-9, -2],
    [9, -2],
    [-7, 9]
];

function drawStars(star) {



    push();
    translate(star.pos.x, star.pos.y);

    for (let idx = 0; idx < starPoints.length; idx++) {
        let idxPlus = (idx + 1) % starPoints.length;
        let x1 = starPoints[idx][0] * star.maxSize;
        let y1 = starPoints[idx][1] * star.maxSize;
        let x2 = starPoints[idxPlus][0] * star.maxSize;
        let y2 = starPoints[idxPlus][1] * star.maxSize;

        //draw the sides of the stars
        strokeWeight(4);
        stroke(random(255), random(255), random(255), 150);
        line(x1, y1, x2, y2);

    }


    pop();
}
