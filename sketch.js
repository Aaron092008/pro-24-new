
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var box1,box2,box3
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	myworld = engine.world;

	ground = new Ground()
    box1 = new Box(600,730,10,100)
    box2 = new Box(400,730,10,100)
    box3 = new Box(500,780,200,10)
    ball = new Ball(100,780,20)
	Engine.run(engine);
  
}
function keyPressed(){
if (keyCode==UP_ARROW) {
Matter.Body.applyForce(ball.ball,ball.ball.position,{x:0.1,y:-0.05})
}

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  drawSprites();
 
}



