var bgImg;
var star,starImg,starBody;
var fairy,fairyAni,fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyAni=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice=loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 573);

	//write code to play fairyVoice sound

	fairy=createSprite(130,400);
	fairy.addAnimation("fairyMoving",fairyAni);
	fairy.scale=0.23
	//world.add(world,fairy);
	//fairy.debug=true
	fairy.setCollider("rectangle",520,100,100,370);


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairyVoice.play();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  /*if(star.isTouching(fairy)){
	  Matter.Body.setStatic(starBody,true);
	  console.log(star.y);
  }*/


  drawSprites();
  keyPressed();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(star.isTouching(fairy)){
		Matter.Body.setStatic(starBody,true);
		console.log(star.y);
	}

	if(keyDown("right")){
		fairy.x=fairy.x+10
	}

	if(keyDown("left")){
		fairy.x=fairy.x-10
	}
	
}
