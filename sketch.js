var wall;
var bullet;
var speed;
var weight;
var thikness;


function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
 
  bullet = createSprite(100,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
 
  wall =createSprite(1000, 200, thikness, height/2);
  wall.shapeColor = "grey";
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.veloctiyX = 0;
  
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage >10)
    {
      wall.shapeColor = "green";
    }
    if(damage <10)
    {
      wall.shapeColor = "red";
    }
  }
  
  
  
  
  
  drawSprites();
}
 
function hasCollided(lbullet,lwall)
{
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}