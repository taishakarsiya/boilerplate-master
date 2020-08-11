function draw() {
  background(255,255,255);  
  }
var wall,thickness
var speed,bullet,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83)
bullet = createSprite(50,200,50,50);
wall = createSprite(1250,200,thickness,height/2)
wall.shapecolor = color(80,80,80);
bullet.velocityX = speed;
if(wall.x-bullet.x<(bullet.width + wall.width)/2)
{
 bullet.velocityX = 0
  var deformation =0.5 * weight * speed* speed/(thickness *thickness *thickness);
if(deformation>180);
{
   bullet.shapecolor = color(255,0,0);
}
if (deformation<180 && deformation>180)
{
  bullet.shapecolor= color(230,230,0);
}
if (deformation<100)
{
  bullet.shapecolor = color(0,255,0);
}
}


}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
   return true 
  }
  return false;
}

drawSprites();