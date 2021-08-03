const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1 , bob2 , bob3 , bob4 , bob5 ;
var rope1 , rope2 ,rope3 ,rope4 , rope5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
   
	rope1=new rope(bob1,roof,-80,0);
	

	var roof_options={
		isStatic:true			
	}
    var bob_options={
		isStatic:true,
		restitution:0.8
	}
	bob1 = Bodies.circle(300,300,30,bob_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(350,300,30,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,300,30,bob_options);
	World.add(world,bob3);
    bob4 = Bodies.circle(450,300,30,bob_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(500,300,30,bob_options);
	World.add(world,bob5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,30);
  ellipse(bob2.position.x,bob2.position.y,30);
  ellipse(bob3.position.x,bob3.position.y,30);
  ellipse(bob4.position.x,bob4.position.y,30);
  ellipse(bob5.position.x,bob5.position.y,30);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
