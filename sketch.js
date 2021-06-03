var fixrect , movrect;



function setup() {
  createCanvas(1000,800);

  
  fixrect=createSprite(400, 100, 50,80);
  fixrect.shapeColor="yellow";
  fixrect.velocityY=5;


  movrect=createSprite(400,800,80,30);
  movrect.shapeColor="yellow";
  movrect.velocityY=-5;




}

function draw() {
  background(0);  

  /*movrect.x=World.mouseX;
  movrect.y=World.mouseY;
 //console.log(movrect.x-fixrect.x);

  /*if(movrect.x-fixrect.x<fixrect.width/2+fixrect.width/2 && fixrect.x-movrect.x<fixrect.width/2+movrect.width/2 && movrect.y-fixrect.y<fixrect.height/2+fixrect.height/2 && fixrect.y-movrect.y<fixrect.height/2+movrect.height/2){
  movrect.shapeColor="green";
  fixrect.shapeColor="green";
  }

  else{
    movrect.shapeColor="yellow";
    fixrect.shapeColor="yellow";
  }
*/


//algorithm for bouncing off 
if(movrect.x-fixrect.x<fixrect.width/2+fixrect.width/2 && fixrect.x-movrect.x<fixrect.width/2+movrect.width/2){
  movrect.velocityX=movrect.velocityX*(-1);
  fixrect.velocityX=fixrect.velocityX*(-1);

}

if(movrect.y-fixrect.y<fixrect.height/2+fixrect.height/2 && fixrect.y-movrect.y<fixrect.height/2+movrect.height/2){
  movrect.velocityY=movrect.velocityY*(-1);
  fixrect.velocityY=fixrect.velocityY*(-1);

}



drawSprites();
}