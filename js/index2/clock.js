'use strict'
define(function(require,exports,module){
    exports.c=function(){
        var oHour=document.querySelector('.hour');
        var oMin=document.querySelector('.min');
        var oSec=document.querySelector('.sec');
        var oHour2=document.querySelector('.hour2');
        var oMin2=document.querySelector('.min2');
        var oSec2=document.querySelector('.sec2');
        var oClock=document.querySelector('.clock');
        function toDou(iNum){
            return iNum<10?'0'+iNum:''+iNum;
        }
        function tick(){
            var oDate=new Date();
            oHour2.innerHTML=toDou(oDate.getHours());
            oMin2.innerHTML=toDou(oDate.getMinutes());
            oSec2.innerHTML=toDou(oDate.getSeconds());
            oHour.style.WebkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
            oHour.style.MozTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
            oHour.style.MsTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
            oHour.style.OTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
            oHour.style.transform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';

            oMin.style.WebkitTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
            oMin.style.MozTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
            oMin.style.MsTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
            oMin.style.OTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
            oMin.style.transform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
            
            oSec.style.WebkitTransform='rotate('+oDate.getSeconds()*6+'deg)';   
            oSec.style.MozTransform='rotate('+oDate.getSeconds()*6+'deg)';   
            oSec.style.MsTransform='rotate('+oDate.getSeconds()*6+'deg)';   
            oSec.style.OTransform='rotate('+oDate.getSeconds()*6+'deg)';   
            oSec.style.transform='rotate('+oDate.getSeconds()*6+'deg)';   
        }
        tick();
        setInterval(tick,1000);
        for(var i=0;i<60; i++){
            var oS=document.createElement('span');
            
            if(i%5==0){
                oS.className='big_scaler';
                if(i==0)
                    oS.innerHTML='<em>'+12+'</em>';
                else
                    oS.innerHTML='<em>'+i/5+'<\/em>';
                var oEm = oS.children[0];
                oEm.style.WebkitTransform='rotate('+-i*6+'deg)';
                oEm.style.MozTransform='rotate('+-i*6+'deg)';
                oEm.style.MsTransform='rotate('+-i*6+'deg)';
                oEm.style.OTransform='rotate('+-i*6+'deg)';
                oEm.style.transform='rotate('+-i*6+'deg)';
            }else{
                oS.className='scaler';
            }
            oS.style.WebkitTransform='rotate('+i*6+'deg)';
            oS.style.MozTransform='rotate('+i*6+'deg)';
            oS.style.MsTransform='rotate('+i*6+'deg)';
            oS.style.OTransform='rotate('+i*6+'deg)';
            oS.style.transform='rotate('+i*6+'deg)';
            oClock.appendChild(oS);
        }
    };
});