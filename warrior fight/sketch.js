const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var stage,stageimg;
var steve,steveimg;
var alex,aleximg;
var idle;
var stone,stonei;
var stonep,stonepi;
var boss,bossi;
var invi;
function preload()
{
  idle = loadAnimation("idle.png");
  stageimg = loadImage("bg.jpg");
  steveimg = loadAnimation("n1.png","n2.png","n3.png","n4.png","n5.png","n6.png");
  aleximg = loadImage("alex.png");
  stonei = loadImage("stone.png");
  stonepi = loadImage("stonep.png");
  bossi = loadImage("baby boss.png");
}

function setup() {
  createCanvas(1000,600);
  frameRate(80);
  stoneGroup = new Group()
  bossGroup = new Group()
  engine = Engine.create();
  world = engine.world;

  stage = createSprite(500,300,1000,600)
  stage.addImage("stageimg",stageimg)
  stage.scale = 1.7;

  steve = createSprite(975,475,10,100)
  steve.addAnimation("idle",idle)
  steve.addAnimation("steveimg",steveimg)
  steve.scale = 0.4;

 stonep = createSprite(600,670,10,100)
 stonep.addImage("stonepi",stonepi)
 stonep.scale = 1.2

 invi = createSprite(500,300,10,600)
 invi.visible = false;
  //alex = createSprite(900,475,10,100)
 //alex.addImage(aleximg)
  //alex.scale = 0.3;

  rectMode(CENTER);
  ellipseMode(RADIUS);

 
  
    
 
  
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  stones()
  Boss()
  if (keyWentDown("LEFT_ARROW")){
    steve.changeAnimation("steveimg",steveimg)
    stage.velocityX = -5
    
    stonep.velocityX = 5
    
  }
  if (keyWentUp("LEFT_ARROW")){
    steve.changeAnimation("idle",idle)
    stage.velocityX = 0
    stonep.velocityX = 0
    stoneGroup.setVelocityXEach(0)
    bossGroup.setVelocityXEach(0)
  }
  if(stonep.x>700){
    stonep.x = width/2
  }
  
  if(stage.x>0){
    stage.x = 500
  }
if (keyDown("LEFT_ARROW")){
  stoneGroup.setVelocityXEach(5)
  bossGroup.setVelocityXEach(5)
}

if(bossGroup.isTouching(invi)){
  bossGroup.setLifetimeEach(-1)
}
   drawSprites();
}

function stones(){
  if(frameCount%1000===0){
    stone = createSprite(0,570,10,100)
    stone.addImage("stonei",stonei)
 stone.scale = 0.2
    
   //stone.velocityX=5;
   stoneGroup.add(stone);
  }
  }
  function Boss(){
    if(frameCount%1000===0){
      boss = createSprite(30,475,10,100)
      boss.addImage("bossi",bossi)
      boss.scale = 0.4
      
     //stone.velocityX=5;
     bossGroup.add(boss);
    }
    }
