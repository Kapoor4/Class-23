const engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

var box1, box2;

var ground1;


function setup() {

  createCanvas(800,400);

  myEngine = engine.create();
  myWorld = myEngine.world;

  /*var ground_obj = {
    isStatic: true
  }


  ground = Bodies.rectangle(400,390,600,40, ground_obj);
  world.add(myWorld, ground);*/

  box1 = new Box(400,100,40,40);
  box2 = new Box(390,200,50,50);

  ground1 = new Ground(400,height-10,600,40);


  /*var ball_obj = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,30,10, ball_obj);
  world.add(myWorld, ball);*/

  console.log(box1);

}

function draw() {

  background(0); 
  
  engine.update(myEngine);

 
  

  /*rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);*/

  box1.display();
  box2.display();
  ground1.display();
  
}