var background1,bullet,bulletGroup;
var bg,laser,spaceship2;
var gameState = "play";
var health=100
var healthbar;
var score=0
var bulletGrp;
var bullet1
 var player,playerCount,allPlayers;
 var bgImg,laserImgImg,spaceship2Img,laserImg2;
 var form,game,player;
 var comet,cometImg,cometGrp;

function preload(){
bgImg = loadImage("images/bg.png")
laserImg = loadImage("images/laser.jpg")
spaceship2Img = loadImage("images/spaceship2.png") 
cometImg = loadImage("images/meteor.png")
}

function setup() {
 createCanvas(displayWidth,displayHeight-111.5);
 background1 = createSprite(displayWidth-200,displayHeight)
 background1.addImage(bgImg)
 background1.scale = 2.3

 spaceship2 = createSprite(displayWidth/2-500,displayHeight/2)
 spaceship2.addImage(spaceship2Img)
 spaceship2.scale = 0.3;
 spaceship2.setCollider("rectangle",0,0,spaceship2.width,spaceship2.height)
 bulletGrp = new Group();
 healthbar = createSprite(windowWidth/2 + 100, 40, 150, 20);
 healthbar.shapeColor = "green";
spaceship2.debug=false
laser1 = createSprite(displayWidth/2+50,displayHeight)
laser1.addImage(laserImg)
laser1.scale = 0.1
laser1.visible = false
laser1.debug = true
cometGrp = new Group() 



}

function draw() {
 background(0)
 console.log(healthbar.width)
 if(gameState==="play"){
if(spaceship2.x >= displayWidth){
  health = health-10
}
  

           if(keyDown("D")){
             spaceship2.x = spaceship2.x+3;
             }
            
               if(keyDown("A")){
                 spaceship2.x = spaceship2.x-3;
                 }
                 if(keyDown("W")){
                   spaceship2.y = spaceship2.y-4;
                   }
                   if(keyDown("S")){
                     spaceship2.y= spaceship2.y+4;
                     }
 background1.velocityX = -4
                  
 if(background1.x<200){
background1.x =  width/2
 }    

  


 if(keyWentDown("space")){
  for(var i = 0 ; i<1 ; i++){
   bullet =createSprite(i,spaceship2.y, 5, 10);
   bullet.x = spaceship2.x
bullet.velocityX=5
   //bullet.setSpeedAndDirection(8,.rotation - 90);
//bullet.rotation =.rotation - 90;
   bullet.lifeTime = 100;
   bullet.addImage(laserImg);
   bullet.scale = 0.2;
bulletGrp.add(bullet);
//bulletGrp.add(bullet1);
   //shootingSound.play();
 }
}
for(var k=0;k<cometGrp.length;k++){


if(cometGrp.get(k).isTouching(spaceship2)){
  health=health-5;
 healthbar.width=health
 healthbar.x=windowWidth/2+25+health/2
 cometGrp.get(k).remove()
}
}
for(var i=0;i<bulletGrp.length;i++)
if(bulletGrp.get(i).isTouching(cometGrp)){

 cometGrp.get(i).remove()
 bulletGrp.destroyEach()
 score+=5
 
}

if(health<=0){
 health=0
 
  
}
//if(healthbar = 0){
 
 }
//}
else if(gameState==="end"){
  textSize(72)
  text("GAME OVER",displayWidth/2,displayHeight/2)
}
 drawSprites()
 textSize(12)
 text("SCORE="+score,50,50)
 textSize(25)
 fill("black")
 text (" Health =  "+health,700,50)
 
meteor()


}
function meteor(){
  if(frameCount % 50===0){
    comet = createSprite(displayWidth,displayHeight/2)
    comet.addImage(cometImg)
    comet.velocityX = -4
    comet.scale = 0.2
    comet.y = Math.round(random(10,500))
    cometGrp.add(comet)
    comet.debug = true
    comet.setCollider("rectangle",0,0,1200,450)
}
}
