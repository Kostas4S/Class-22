const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world, ground, ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions = {
    isStatic:true
  }
 

  ground = Bodies.rectangle(200,390,400,10, groundOptions);
  World.add(world, ground)
  var ballOptions = {
    restitution:2.0
  }
  ball = Bodies.circle(200,200,30, ballOptions);
  World.add(world, ball)
}


function draw() {
  background("red");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);
  ellipse(ball.position.x, ball.position.y, 30);
}