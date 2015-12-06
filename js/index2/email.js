'use strict'
define(function(require,exports,module){
    exports.ema=function(){
        var oNum=document.getElementById('number');
        var oCheck=document.getElementById('check');
        var oRnd=document.getElementById('rnd');
        var oChange=document.getElementById('change');
        var oButton=document.getElementById('button');
        var oCol=document.getElementById('col');
        oRnd.innerHTML=parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10);
        oButton.onclick=function(){
             var reg1=/^1[34578]\d{9}$/;
             var res1=reg1.test(oNum.value);

             var res2=(oCheck.value==oRnd.innerHTML)?1:0;
             //console.log(oCheck.value+','+oRnd.innerHTML);
             if(!res1||!res2) 
                oCol.style.display='block';
             else
                oCol.style.display='none';
        };
        oChange.onclick=function(){
           
            oRnd.innerHTML=parseInt(Math.random()*10)+' '+parseInt(Math.random()*10)+' '+parseInt(Math.random()*10)+' '+parseInt(Math.random()*10);
        };
        function fnFocus(obj,con){
            obj.onfocus=function(){
                if(this.value==con){
                        this.value='';
                }
            };
            obj.onblur=function(){
                if( this.value==''){
                        this.value=con;
                }
            };
        }
        fnFocus(oNum,'请输入移动手机号');
        fnFocus(oCheck,'不区分大小写');
    };
});