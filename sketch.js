
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, roof;

function preload()
{
	
}

function setup() {
	createCanvas(1260, 600);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  drawSprites();
 
}



