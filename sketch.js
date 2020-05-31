//var movingrect,fixedrect,runningrect;
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";
  bullet= createSprite(50,200,30,20);
  bullet.velocityX = 10;
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

 //fixedrect= createSprite(200, 100, 50, 50);
 //movingrect= createSprite(400,200,50,50);
 //runningrect = createSprite(200,300,50,40);
 //fixedrect.velocityY= 5;
 //runningrect.velocityY= -5;
 //fixedrect.shapeColor = "red";
 
}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
//bounceOff(fixedrect,runningrect)
  
  


 
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness  *thickness  
    *thickness  );

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    } 
}
  
   
  
    
      
    
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+ lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}

