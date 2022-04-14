const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

var ground;

var backgroundImg;

var tower,towerImg;

function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);

}

function draw() {
  background(190);

  
  

  rect(ground.position.x,ground.position.y,width*2,1);

  image(backgroundImg,0,0,1200,600);

  push()
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop()
 
  Engine.update(engine);
}
