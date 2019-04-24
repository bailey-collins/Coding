//set up the background as an image
let img;
//set up the sprite as an image
let fairy = [];
let fairySprite;


function preload() {
  //code to load background
  img = loadImage('images/forestBackground.jpg');
  //code to load sprite
  fairy = loadImage("./images/fairySprite.png");
}

function setup() {
  //setup code
  createCanvas( windowWidth, windowHeight );
  background( img );
  fairy[0] = new Fairy(100, 100, fairySprite, 0);
  fairy[1] = new Fairy(1000, 1050, fairySprite, 1);
}

function draw() {
  //set background as the forest picture
  background( img );
  for (let i = 0; i< cats.length; i++) {
    fairy[1].frame();
  }
}

/////////////////
/* Fairy Class */

class Fairy {
  constructor(init_x, init_y, img, orientation) {
    this.pos = {
      x: init_x,
      y: init_y
    };

    this.orientation = orientation;

    //referencing a pre-loaded image in memory
    this.image = img;
    // the speed at which to work through the subrectangles
    this.speed = 4;
    //the size of the subrectangles as they correspond to sprite size
    this.size = {
      w: 1000,
      h: 1050
    };
    // the number of the sprite image displaying
    this.sprite_num = 0
    // the top left corner of each subrectangle
    this.subRect = [

    ];
  }
}
