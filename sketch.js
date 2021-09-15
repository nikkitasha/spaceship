var Astronaut, Astronaut_eating , Astronaut_gyming , Astronaut_moving , Astronaut_drinking
var Astronaut_bath , Astronaut_sleep , Astronaut_brushing , bg

var PLAY =1;
var gameState = PLAY;



function preload() {

   bg = loadImage("iss.png");
  Astronaut_sleep = loadAnimation("sleep.png");
  Astronaut_brushing = loadAnimation("brush.png");
  Astronaut_gyming = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  Astronaut_eating = loadAnimation("eat1.png", "eat2.png");
  Astronaut_drinking = loadAnimation("drink1.png", "drink2.png");
  Astronaut_moving = loadAnimation("move.png", "move1.png");
  Astronaut_bath = loadAnimation("bath1.png", "bath2.png")
  
}


function setup() {
  createCanvas(800,400);

  Astronaut = createSprite(300,230);
  Astronaut.addAnimation("sleep", Astronaut_sleep);
  Astronaut.scale = 0.05
  
}

function draw() {
  background(bg); 
  
  textSize(20);
  fill("yellow");
  text("WELCOME TO MY SPACESHIP",500,60);

  edges= createEdgeSprites();
   Astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    Astronaut.addAnimation("brushing", Astronaut_brushing);
    Astronaut.changeAnimation("brushing");
    Astronaut.y = 340
    Astronaut.x = 800
    Astronaut.velocityX = -3;
    Astronaut.velocityY = 0 
  }
  
  if(keyDown("DOWN_ARROW")){

    Astronaut.addAnimation("gym", Astronaut_gyming);
    Astronaut.changeAnimation("gym");
    Astronaut.y = 300
    Astronaut.x= 630
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0 
  }
  if(keyDown("LEFT_ARROW")){

    Astronaut.addAnimation("eat", Astronaut_eating);
    Astronaut.changeAnimation("eat");
    Astronaut.y = 250
    Astronaut.x = 200
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0 
  }
  
  if(keyDown("RIGHT_ARROW")){

    Astronaut.addAnimation("bath", Astronaut_bath);
    Astronaut.changeAnimation("bath");
    Astronaut.y = 340
    Astronaut.x = 800
    Astronaut.velocityX = -2;
    Astronaut.velocityY = 0 
  }
  if(keyDown("M_KEY")){

    Astronaut.addAnimation("move", Astronaut_moving);
    Astronaut.changeAnimation("move");
    Astronaut.y = 250
    Astronaut.velocityX = 4;
    Astronaut.velocityY = 5; 
  }
  if(gameState===PLAY){
    text(20)
    fill("yellow")
  text("PRESS_ANY_ARROW_KEY!",30,60);


  }




  drawSprites();
}