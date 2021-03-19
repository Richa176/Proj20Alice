var catImg,mosImg;
var carA,Ma,catp,mp,gr;
var tom,jerry;
var btoa;
var  gameState="play";
//var  gameState=END;
function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png");
    carA=loadAnimation("images/cat3.png","images/cat2.png");
    catp=loadImage("images/cat4.png");

    Ma=loadAnimation("images/mouse1.png","images/mouse4.png");
    mp=loadAnimation("images/mouse2.png","images/mouse3.png");

    gr=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1600,900);

    
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addImage("sit",catImg);
    tom.scale = 0.2;

    jerry=createSprite(50,700,20,20);
    jerry.addAnimation("ST",Ma);
    jerry.scale = 0.15;

    stroke("black");
    textSize(30);
    text("press space to make tom move",350,100);

}

function draw() {

    background(gr);
    //btoa=createSprite(1000,800);
    //btoa.addImage(gr);

    if(keyDown("space")){
        gameState="play"
    }
    if((gameState==="play")){
        tom.velocityX=-4;
        tom.addAnimation("tom",carA);
        
        if(tom.isTouching(jerry)){
            gameState="end"
        }

    }
    if((gameState==="end")){

        tom.velocityX=0;
        tom.addImage("t",catp);

        jerry.addAnimation("sp",mp);


    }
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}