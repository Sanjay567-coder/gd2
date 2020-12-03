const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var billfrontImage,billbackImage,billleftImage,billrightImage;
var default_bill;
var bill;
var bgimage;
var edges;
var watchtower,watchtowerImage;
var life = 100;
var wave = 0;
var list1,list1image;
var list2,list2image;
//var bgsound;

function preload()
{
	bgimage = loadImage("images/bg.jpg");
	default_bill = loadAnimation("images/defaultbill.png");
	watchtowerImage= loadImage("images/watchtower.png");
	billback_Image = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png");
	billleft_Image = loadAnimation("images/10.png","images/11.png","images/12.png","images/13.png","images/14.png","images/15.png","images/16.png","images/17.png","images/18.png");
	billfront_Image = loadAnimation("images/19.png","images/20.png","images/21.png","images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png");
	billright_Image = loadAnimation("images/28.png","images/29.png","images/30.png","images/31.png","images/32.png","images/33.png","images/34.png","images/35.png","images/36.png");
	list1image = loadImage("list1.jpg");
	list2image = loadImage("list2.jpg");
	//bgsound = loadSound("sounds/bgMusic.mp3");
}

function setup() {
	createCanvas(900,500); 

	edges = createEdgeSprites();

	bill = createSprite(300,180);
	bill.scale = 1.25;
	
	bill.addAnimation("default",default_bill);
	bill.addAnimation("default1",billback_Image);
	bill.addAnimation("default2",billleft_Image);
	bill.addAnimation("default3",billfront_Image);
	bill.addAnimation("default4",billright_Image);

	treecollider1 = createSprite(10,310,80,620);
	treecollider1.visible = false;
	treecollider2 = createSprite(845,310,25,620);
	treecollider2.visible = false;

	firstcollider = createSprite(180,350,20,20);
	firstcollider.visible = false;

	secondcollider = createSprite(180,464,20,20);
	secondcollider.visible = false;

	thirdcollider = createSprite(330,464,20,20);
	thirdcollider.visible = false;

	fourthcollider = createSprite(330,240,20,20);
	fourthcollider.visible = false;

	fifthcollider = createSprite(215,240,20,20);
	fifthcollider.visible = false;

	sixthcollider = createSprite(215,75,20,20);
	sixthcollider.visible = false;

	seventhcollider = createSprite(690,75,20,20);
	seventhcollider.visible = false;

	eighthcollider = createSprite(690,265,20,20);
	eighthcollider.visible = false;

	ninethcollider = createSprite(770,265,20,20);
	ninethcollider.visible = false;

	tenthcollider = createSprite(770,370,20,20);
	tenthcollider.visible = false;

	eleventhcollider = createSprite(545,375,20,20);
	eleventhcollider.visible = false;

	watchtower = createSprite(545,465,20,20);
	watchtower.addImage(watchtowerImage);
	watchtower.scale = 0.425;
	watchtower.setCollider("rectangle",watchtower.length, watchtower.heigth);

	list1 = createSprite(850,100);
	list1.addImage(list1image);

	list2 = createSprite(840,200);
	list2.addImage(list2image);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(bgimage);

  //bgsound.play(true);

  if(keyDown("UP")){
	  bill.changeAnimation("default1",billback_Image);
	  bill.y = bill.y-6;
  }

  if(keyDown("DOWN")){
	bill.changeAnimation("default3",billfront_Image);
	bill.y = bill.y+6;
}

if(keyDown("LEFT")){
	bill.changeAnimation("default2",billleft_Image);
	bill.x = bill.x-6;
}

if(keyDown("RIGHT")){
	bill.changeAnimation("default4",billright_Image);
	bill.x = bill.x+6;
}

textFont("MineCrafter");
textSize(25);
fill("white");
strokeWeight(2);
stroke("black");
text("Life : " + life,20,25);

textFont("MineCrafter");
textSize(25);
fill("white");
strokeWeight(2);
stroke("black");
text("Wave : " + wave,20,70);

bill.collide(edges);
bill.collide(treecollider1);
bill.collide(treecollider2);
bill.collide(watchtower);
  
  drawSprites();
}
