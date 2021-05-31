var bg,bgImg
var MTF,MTFImg;
var SCP, SCPImg;
var gameState=1;
var invisibleG;

function preload(){
    bgImg=loadImage("background.jpg");
    MTFImg=loadImage("Mobile Task Forces Image.png");
    SCPImg=loadImage("SCP-939IMage.png");
    restartImg=loadImage("restart.png");
    bulletImg=loadImage("Bullet.png");
}

function setup(){

createCanvas(1000,600);
bg=createSprite(100,250,40,20);
bg.addImage("background", bgImg);
bg.scale=5;
bg.velocityX=-5;


MTF=createSprite(100,400,40,20);
MTF.addImage("MTFImage", MTFImg);
MTF.scale=1.5;

SCP=createSprite(800,400,40,20);
SCP.addImage("SCPImg", SCPImg);
SCP.scale= 0.4
SCP.velocityX=-4;

restart = createSprite(500, 200);
restart.addImage(restartImg);


 invisibleG= createSprite(500,540,1000,10);
 
 edges=createEdgeSprites();
 bullet=createSprite(210,360,40,20);
 bullet.addImage("bullet", bulletImg);
 bullet.scale=0.5;
 //bullet.visible =false;
 
}

function draw(){

    background("white");
   // console.log(bg.x);

   bullet.x = mouseX;
   bullet.y = mouseY;

    drawSprites();

    
    invisibleG.visible=false;
    console.log(MTF.y);


    if(gameState===1){
MTF.visible=true;
restart.visible=false;
bg.velocityX=-3;
SCP.velocityX=-4;
SCP.visible=true;
MTF.collide(invisibleG);


if(keyDown("SPACE") && MTF.y>=412.75){

    MTF.velocityY=-10;

}
MTF.velocityY= MTF.velocityY + 0.2;

        if(bg.x<-280){
            bg.x=width/2;
        }

if (SCP.isTouching(MTF)){

   gameState=0
}

    }
    else if(gameState===0){

       // console.log("I am in gameState 0");
        MTF.destroy();
        bg.velocityX=0;
        SCP.velocityX=0;

 restart.visible=true;

textSize(80);
fill("black");
text("Game over!",300,100) 

if (mousePressedOver(restart)){

reset();
}
    }

}

function reset(){

    
//console.log("I am in reset.");


SCP.destroy();


gameState=1;
MTF=createSprite(100,400,40,20);
MTF.addImage("MTFImage", MTFImg);
MTF.scale=1.5;

SCP=createSprite(800,400,40,20);
SCP.addImage("SCPImg", SCPImg);
SCP.scale= 0.4
SCP.velocityX=-4;


}