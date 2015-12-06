'use strict'
function Fish(img,type){
    Sprite.call(this,img['fish'+type]);

    var size=[null,{w: 37, h: 55}, {w: 64, h: 78}, {w: 56, h: 72}, {w: 59, h: 77}, {w: 122, h: 107}];

    this.type=type;
    this.w=size[type].w;
    this.h=size[type].h;

    this.speed=2;
    this.count=0;
}
Fish.prototype=new Sprite();
Fish.prototype.constructor=Fish;
var oldMove=Fish.prototype.move;

Fish.prototype.move=function(){
    oldMove.call(this);
    this.count++;
    if(this.count%4==0){
        this.sx+=this.w;
        if(this.sx==4*this.w){
            this.sx=0;
        }
    }
};
