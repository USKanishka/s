

var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");


	engine = Engine.create();
	world = engine.world;
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	paper = new Paper(100, 100,26);

	box1 = createSprite(width/2-10, 610, 20, 100);
	box1.shapeColor = "red";
   
    box2 = createSprite(width/2+100,650, 200,20);
	box2.shapeColor = "red";

	box3=createSprite(width/2+200 , 610, 20,100);
	box3.shapeColor = "red";
	
	

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
   
 paper.display();
 
 

	drawSprites();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}



