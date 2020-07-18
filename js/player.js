class player {
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
this.w=w;
this.h=h;
this.sprite=createSprite(x,y,w,h);
  this.image = loadImage("/images/captin.png");
   this.image.scale=2;   
      }
      display(){
       
       //imageMode(CENTER);
       //image(this.image,this.x,this.y,this.w,this.h);
       this.sprite.addImage(this.image);
      }
    movement(){
        if(keyDown(UP_ARROW)){
            this.sprite.y=this.sprite.y-3;
          }
          if(keyDown(DOWN_ARROW)){
            this.sprite.y=this.sprite.y+3;
          } 
          if(keyDown(LEFT_ARROW)){
            this.sprite.x=this.sprite.x-3;
          }
          if(keyDown(RIGHT_ARROW)){
            this.sprite.x=this.sprite.x+3;
          }     
    }
    };
    