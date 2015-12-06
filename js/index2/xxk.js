'use strict';
define(function(require,exports,module){
    
    exports.xxk=function(){
        var oMenu=document.getElementById('menu');  
        var aP=oMenu.children;
        var oUl=document.getElementById('con_btn'); 
        var aBtn=oUl.children;
        var timer=null;
        for(var i=0;i<aBtn.length;i++){
            (function(index){
                aBtn[index].onclick=function(){
                    clearInterval(timer);
                    for(var i=0;i<aP.length;i++){
                        aP[i].className='';
                    }
                    aP[index].className='on';
                   /* var j=0;
                    (function(index2){
                        clearInterval(timer);
                        timer=setInterval(function(){
                            j+=1;
                            aP[index2].style.WebkitTransform='perspective(800px) rotateY('+j+'deg)';  
                        },30);
                    })(index);*/
               }    
            })(i);     
        }
    };
});