var sun,planetA,planetB;

function setup() {
 createCanvas(1200,600);
 sun = createSprite(600,300,60,60);
 planetA = createSprite(350,200,20,20);
 planetB = createSprite(500,450,20,20);
}

function draw() {
  background("black");
  
  
  textSize(30);
  text("frames: " + frameCount,1000,30);

  sun.shapeColor = "yellow";
  sun.scale = frameCount/30;


  planetA.shapeColor = "blue";
  planetB.shapeColor = "green";

  sun.setCollider("circle",0,0,35);
  planetA.setCollider("circle",0,0,15);
  planetB.setCollider("circle",0,0,15);
  
  sun.debug = true;
  planetA.debug = true;
  planetB.debug = true;

  destroy(sun,planetA);
  destroy(sun,planetB);

  drawSprites();
  
}