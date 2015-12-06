'use strict'
function Bullet(img,type){
    Sprite.call(this,img); 
    var size=[
        null,
        {w:23, h:26, sx:86, sy:0},
        {w:25, h:29, sx:61, sy:0},
        {w:27, h:31, sx:32, sy:35},
        {w:29, h:33, sx:30, sy:82},
        {w: 30, h: 34, sx: 0, sy: 82},   
        {w: 32, h: 38, sx: 0, sy: 44},  
        {w: 31, h: 35, sx: 30, sy: 0} 
    ]  
    this.type=type;
    this.sx=size[type].sx;
    this.sy=size[type].sy;
    this.w=size[type].w;
    this.h=size[type].h;

    this.speed=9;
}
Bullet.prototype=new Sprite();
Bullet.prototype.constructor=Bullet;
