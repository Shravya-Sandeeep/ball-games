
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var short1;
var short2;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
    engine = Engine.create();
	  world = engine.world;


	//Create the Bodies Here.
  ground = new Ground(400, 590, 1600, 20);
  short1 = new Ground(1100, 513, 20, 130);
  short2 = new Ground(800, 513, 20, 130);

  var ball_options = {
    restitution: 1.00
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);

  ground.show();
  short1.show();
  short2.show();

 

  ellipse(ball.position.x, ball.position.y, 20);

  hforce();
  drawSprites();
  
 
}

function hforce(){
  if (keyIsDown(RIGHT_ARROW)){
     Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
  }
}




