
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground; 
var trashbin,trashbin2,trashbin3;
var dustbinimage;
var dustbin1;
function preload()
{
	dustbinimage = loadImage("dustbin.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100,599,40);
 
  ground = new Ground(405,620,780,10);
trashbin = new Dustbin(400,560,20,100);
trashbin2 = new Dustbin(515,600,210,20);
trashbin3 = new Dustbin(610,560,20,100);


	Engine.run(engine);
  
}


function draw() {
  
  background(230,230,230);
  Engine.update(engine); 
  ground.display();
  trashbin.display();
  trashbin2.display();
  trashbin3.display();
  imageMode(CENTER);
  image(dustbinimage,505,565,200,115);
  
paper.display();

  drawSprites();
 
}

function keyPressed(){

  if(keyDown(UP_ARROW)){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:0.19,y: -0.19});
  
  }
  }


