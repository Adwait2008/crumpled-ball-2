
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  dustbin1, paper1, ground1,engine; 
var world;
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,40,20);
    ground = new Ground(600,400);
    dustbin1 = new Dustbin(1000,450);    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(100);
  
 
  ground.display();
  dustbin1.display();
  paper1.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85,y: -85})
    }
  }



