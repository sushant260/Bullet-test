var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=("blue");
  bullet.velocityX=speed;
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;
}

function draw() {
  background("black"); 
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=("red");
    }
    if (damage<10){
      wall.shapeColor=("green");
    }
  }
  drawSprites();
}