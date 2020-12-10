
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 //create Obstacle and banana Groups
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  var survivalTime=0;
}


function draw() {
background("white")
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("space")){
     monkey.velocityY=-12;
     }
    monkey.velocityY=monkey.velocityY+0.8;
  if(obstacleGroup.isTouching(monkey)){
    foodGroup.velocityx = 0;
    obstacleGroup.velocityX = 0;
    ground.velocity=0;
    foodGroup.lifeTime=-1;
    obstacleGroup.lifeTime=-1;
  }
  
  
  food();
  obstacles();
  drawSprites();
}

function food(){
if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120, 200));
    banana.scale=0.1;
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  
        foodGroup.add(banana);
  }
}



function obstacles(){
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}

