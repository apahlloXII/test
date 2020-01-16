int framesEllapsed = 0;
int red;
PImage myPic;
int myNumber = 5;

void setup(){
  size(500,500);
    myPic = loadImage("cowboy.png");
}

  void draw(){
    red = framesEllapsed % 255;
    background(red, 0, 0);
    imageMode (CENTER);
    image(myPic, mouseX, mouseY);
    myNumber = myAddingThing(mouseX, 10);
    println(framesEllapsed % 100);
    textSize(32);
  
    if(red > 125){
      fill(255, 255, 255);
    }else{
      fill(255, 255, 255);
    }
    text(mouseY, 200, 200);
    text(mouseX, 300, 200);
    text(framesEllapsed, framesEllapsed % 500, framesEllapsed % 500);
    fill(, framesEllapsed % 255, 255);
   
    
    framesEllapsed++;
  }
  

  
  
  fucntion myAddingThing(int a, int b){
    return a + b;
  }