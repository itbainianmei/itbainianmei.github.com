'use strict';
//headerdrag
define(function(require,exports,module){
	exports.drag=function(){
        var aLi=document.querySelectorAll('.girl li');
        var oB=document.querySelector('.btn');
        var iNow=2;
        var oNext = oB.getElementsByTagName('span')[1];
        var  oPre = oB.getElementsByTagName('span')[0];
        function fnClassName(iNow){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
            }
            aLi[(iNow-2)%12].className='l2';
            aLi[(iNow-1)%12].className='l';
            aLi[(iNow)%12].className='cur';
            aLi[(iNow+1)%12].className='r';
            aLi[(iNow+2)%12].className='r2';
        }
        oNext.onclick=function(){
            iNow++;
            fnClassName(iNow);
        };
        oPre.onclick=function(){
            iNow--;
            if(iNow<2){
                iNow=2;
            }
            fnClassName(iNow);
        };
    }});