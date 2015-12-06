'use strict'
function Sprite(img){

    if(!img)return;
    this.img=img;

    this.x=0;
    this.y=0;

    this.sy=0;
    this.sx=0;

    this.speed=0;
    this.rotate=0;

}
Sprite.prototype.draw=function(gc){
    gc.save();
    gc.translate(this.x,this.y);
    gc.rotate(d2a(this.rotate));
    gc.drawImage(this.img,this.sx,this.sy,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
    gc.beginPath();
    gc.restore();
};
Sprite.prototype.move=function(){
    var speedX=Math.cos(d2a(this.rotate-90))*this.speed;
    var speedY=Math.sin(d2a(this.rotate-90))*this.speed;
    
    this.x+=speedX;
    this.y+=speedY;
};
Sprite.prototype.collTest=function(sprite2){
    var r1=Math.min(this.w,this.h)/2;
    var r2=Math.min(sprite2.w,sprite2.h)/2;

    var a=this.x-sprite2.x;
    var b=this.y-sprite2.y;
    var dis=Math.sqrt(a*a+b*b);

    return dis<=(r1+r2);


};
