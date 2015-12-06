'use strict'
define(function(require,exports,module){
    exports.b=function(){
        var oBack=document.getElementById('back_t');
        var oBack_ico=document.getElementById('back_t_ico');
        var oBack_text=document.getElementById('back_t_text');
        var bOk=false;
        var timer=null;
        window.onscroll=function(){
            if(bOk){
                clearInterval(timer);
            }
            bOk=true;
            var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollT>0){
                oBack.style.display='block'; 
            }else if(scrollT==0){
                oBack.style.display='none'; 
            }
            oBack.onclick=function(){
                var start=document.documentElement.scrollTop=document.body.scrollTop;
                var dis=0-start;
                var count=Math.floor(2000/30);
                var n=0;
                clearInterval(timer);
                timer=setInterval(function(){
                    bOk=false;
                    n++;
                    var a=1-n/count;
                    var cur=start+dis*(1-Math.pow(a,3));
                    document.documentElement.scrollTop=document.body.scrollTop=cur;
                    if(n==count){
                        clearInterval(timer);
                    }
                },30);


            };
            oBack.onmouseover=function(){
                oBack_ico.style.display='block';
                oBack_text.style.display='none';
            };
            oBack.onmouseout=function(){
                oBack_ico.style.display='none';
                oBack_text.style.display='block';
            };
        };
    };
});
