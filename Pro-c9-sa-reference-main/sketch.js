var book

function setup() {
  createCanvas(400,400);
  book=createSprite(100, 75, 200, 300);
  
}

function draw() 
{
   background(30);
   if(keyIsDown(LEFT_ARROW)){
     book.x=book.x-2
   }
   if(keyIsDown(RIGHT_ARROW)){
    book.x=book.x+2
  }
  if(keyIsDown(UP_ARROW)){
    book.y-=2
  }
  if(keyIsDown(DOWN_ARROW)){
    book.y+=2
  }
drawSprites()
}




