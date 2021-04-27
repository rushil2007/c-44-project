var table,tableImage;
var racket,racketImage;
var racket2,racket2Image

function preload(){
  tableImage = loadImage("images/table.png");
  racketImage  = loadImage("images/racket.png");
  racket2Image = loadImage("images/racket2.png")
}


function setup() {
  createCanvas(1530,690);
  table = createSprite(790, 330, 50, 50);
  table.addImage(tableImage);
  table.scale = 1.5;
  racket = createSprite(447,290,50,50);
  racket.addImage(racketImage);
  racket.scale = 0.25;
  racket2 = createSprite(1093,317,50,50);
  racket2.addImage(racket2Image);
  racket2.scale = 0.25;
}

function draw() {
  background("salmon");  
text(mouseX+","+mouseY,200,20)
  drawSprites();
}