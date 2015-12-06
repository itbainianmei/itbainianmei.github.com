'use strict';
define(function(require,exports,module){
	var oCom=require('common.js');
	exports.blo=function(){
		var oUl=document.getElementById('con_btn');	
		var aBtn=oUl.children;
		var oCond=document.getElementById('con_div');	
		var aS=oCond.getElementsByTagName('span');
		var aDiv=oCond.children;
		var oMenu=document.getElementById('menu');  
        var aP=oMenu.children;
		var aPos=[];
		var timer=null;
		
		var clientW=document.documentElement.clientWidth;
		var bOk=true;
		function getPos(obj){
			var l=0;
			var t=0;
			while(obj){
				l+=obj.offsetLeft;
				t+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return {left:l,top:t};
		}
		var tmp=getPos(oCond);
		for(var i=0;i<aDiv.length;i++){
			aPos.push({l:aDiv[i].offsetLeft,t:aDiv[i].offsetTop});		
		}
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.left=aPos[i].l+'px';
			aDiv[i].style.top=aPos[i].t+'px';
			aDiv[i].style.position='absolute';
			aDiv[i].style.margin=0;
		}
		aBtn[0].onclick=function(){
			for(var i=0;i<aDiv.length;i++){
				aDiv[i].onmousedown=null;
				aDiv[i].onmousemove=null;
				aDiv[i].onmouseup=null;
				aS[i].style.display='block';
				
			}
			for(var i=0;i<aP.length;i++){
                aP[i].className='';
            }
            aP[0].className='on';
			if(!bOk)return;
			bOk=false;
			var i=0;
			timer=setInterval(function(){
				(function(index){
					if(i%2){
						oCom.move(aDiv[i],{left:0,top:tmp,opacity:0,width:0,height:0},{complete:function(){
							if(index==aDiv.length-1){
								i=aDiv.length-1;
								timer=setInterval(function(){
									(function(index){
										oCom.move(aDiv[i],{left:aPos[i].l,top:aPos[i].t,opacity:1,width:200,height:200},{complete:function(){
											if(index==0){
												bOk=true;
											}	
										}});	
									})(i);
									i--;
									if(i==-1){
										clearInterval(timer);
									}	
								},100);
							}
						}});	
					}else{
						oCom.move(aDiv[i],{left:clientW,top:tmp,opacity:0,width:0,height:0});	
					}	
				})(i);
				i++;	
				if(i==aDiv.length){
					clearInterval(timer);
				}
			},100);
		};
	};
});