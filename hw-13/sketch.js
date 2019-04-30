//set up the background as an image
let img;
//set up the sprite as an image
let fairy;
let fairySprite;

function preload() {
  //code to load background
  img = loadImage('images/forestBackground.jpg');
  //code to load sprite
  fairySprite = loadImage("./images/fairySprite.png");
}

function setup() {
  //setup code
  createCanvas( windowWidth, windowHeight );
  background( img );
  fairy = new Fairy(100, 100, fairySprite, 0);
}

function draw() {
  //set background as the forest picture
  background( img );
  //draw the fairy sprite
  noCursor();
  fairy.setPosition(mouseX, mouseY);
  fairy.frame();
}

/////////////////
/* Fairy Class */

class Fairy {
  constructor(init_x, init_y, img, orientation) {
    this.pos = {
      x: init_x,
      y: init_y
    };
    this.prev_pos = {
      x: init_x,
      y: init_y
    };


    this.orientation = orientation;

    //referencing a pre-loaded image in memory
    this.image = img;
    // the speed at which to work through the subrectangles
    this.speed = 20;
    //the size of the subrectangles as they correspond to sprite size
    this.sub_size = {
      w: 1000,
      h: 1050
    };
    this.display_size = {
      w: 1000/10,
      h: 1050/10
    };
    // the number of the sprite image displaying
    this.sprite_num = 0
    // the top left corner of each subrectangle
    this.subRect = [
      [0, 0], // still
      [1250, 0], // right
      [0, 1050], // down
      [1250, 1050], // up
      [0, 2250], // left
      [1250, 2250], // still
    ];

  }

  frame() {
    this.display();
    this.animate();
  }

  display() {
    push();

    translate(this.pos.x, this.pos.y);

    if (this.orientation === 0) {
      scale(1,1);
    } else if (this.orientation === 1) {
      scale(-1, 1);
    }

    image(
      //reference to sprite in memory
      this.image,
      //placement of sprite on canvas
      // (handled by translate())
      0, 0,
      // the display size of the sprite
      this.display_size.w, this.display_size.h,
      // top left corner of the subrectangle
      this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
      // size of the subrectangle
      this.sub_size.w, this.sub_size.h
    );

    pop();
  }

  animate() {
    // update the sprite num to adjust the subrectangle positions
    // if (frameCount % this.speed === 0) {
    //   this.sprite_num++;
    //   this.sprite_num %= 6;
    //   // console.log(this.sprite_num);
    // }

    if(this.dir == 'still'){
      if( floor(frameCount / this.speed) % 2 == 0 ){
        this.sprite_num = 0;
      } else {
        this.sprite_num = 5;
      }
    } else if(this.dir == 'up'){
      this.sprite_num = 3;
    } else if(this.dir == 'down'){
      this.sprite_num = 2;
    } else if(this.dir == 'left'){
      this.sprite_num = 4;
    } else if(this.dir == 'right'){
      this.sprite_num = 1;
    }

  }

  setPosition(posX, posY){
    this.prev_pos.x = this.pos.x;
    this.prev_pos.y = this.pos.y;
    this.pos.x = posX;
    this.pos.y = posY;

    let xDelta = this.pos.x - this.prev_pos.x;
    let yDelta = this.pos.y - this.prev_pos.y;

    if( xDelta == 0 && yDelta == 0){
      this.dir = 'still';
    } else if(abs(xDelta) >= abs(yDelta)){
      if(xDelta < 0){
        this.dir = 'left';
      } else {
        this.dir = 'right';
      }
    } else {
      if(yDelta < 0){
        this.dir = 'up';
      } else {
        this.dir = 'down';
      }
    }

    // console.log(this.dir);

  }

}
