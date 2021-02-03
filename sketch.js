
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,480,1000,20)
	binBase = new Ground (800,460,200,20)
	binLeft = new Ground (690,370,20,200)
	binRight = new Ground (910,370,20,200)
	ball = new Ball (100,460,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display()
  binBase.display()
  binLeft.display()
  binRight.display()
  ball.display()

  image(dustbinImg,650,270,300,200)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-85});
	}
}


