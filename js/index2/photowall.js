'use strict';
define(function(require,exports,module){
	var oCom=require('common.js');
	exports.pho=function(){
		var oUl=document.getElementById('con_btn');	
		var aBtn=oUl.children;
		var oCond=document.getElementById('con_div');	
		var aDiv=oCond.children;
		var oMenu=document.getElementById('menu');  
        var aP=oMenu.children;
		var aS=oCond.getElementsByTagName('span');
		var aPos=[];
		var bOk=true;
		var timer=null;
		var zIndex=1;
		for(var i=0;i<aDiv.length;i++){
			aPos.push({left:aDiv[i].offsetLeft,top:aDiv[i].offsetTop});		/////为啥换成left就好使了，l就不行？？？
		}
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.left=aPos[i].left+'px';
			aDiv[i].style.top=aPos[i].top+'px';
			aDiv[i].style.position='absolute';
			aDiv[i].style.margin=0;
		}
		
		aBtn[1].onclick=function(){
			aPos.sort(function(){
				return Math.random()-0.5;	
			});
			for(var i=0;i<aDiv.length;i++){
				aS[i].style.display='none';
				oCom.move(aDiv[i],aPos[i]);
				aDiv[i].index=i;
			}
			for(var i=0;i<aDiv.length;i++){
				drag(aDiv[i]);
				aDiv[i].index=i;
			}
			for(var i=0;i<aP.length;i++){
                aP[i].className='';
            }
            aP[1].className='on';
			
		};
		
		function drag(obj){
			obj.onmousedown=function(ev){
				zIndex++;
				obj.style.zIndex=zIndex;
				var oEvent=ev||event;
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				//document.title=obj.offsetTop;
				document.onmousemove=function(ev){
					var oEvent=ev||event;
					obj.style.left=oEvent.clientX-disX+'px';	
					obj.style.top=oEvent.clientY-disY+'px';
					for(var i=0;i<aDiv.length;i++){
						aDiv[i].className='';
					}
					var oNear=findNearest(obj);
					if(oNear){
						oNear.className='on';
					}
				};	
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;	
					var oNear=findNearest(obj);
					if(oNear){
						oNear.className='';
						oCom.move(obj,aPos[oNear.index]);
						oCom.move(oNear,aPos[obj.index]);
						var car;
						car=oNear.index;
						oNear.index=obj.index;
						obj.index=car;
					}else{
						obj.style.left=aPos[obj.index].left+'px';
						obj.style.top=aPos[obj.index].top+'px';	
					}
					obj.releaseCapture&&obj.releaseCapture();
				};
				obj.setCapture&&obj.setCapture();
				return false;
			};
		}
		function findNearest(obj){
			//假设一个最近的值
			var iMin=new Date().getTime();
			//假设一个最近的值的索引
			var iMinIndex=-1;
			for(var i=0;i<aDiv.length;i++){
				if(obj==aDiv[i])continue;//如果是他自己就继续找
				if(callTest(obj,aDiv[i])){//如果碰撞到了，接下就进行对比哪个最近
					if(iMin>getDis(obj,aDiv[i])){
						iMin=getDis(obj,aDiv[i]);
						iMinIndex=i;
					}	
				}
			}
			if(iMinIndex==-1){
				return null;
			}else{
				return aDiv[iMinIndex];	
			}
		}
		//求两个元素之间的距离
		function getDis(obj1,obj2){
			var l1=obj1.offsetLeft+obj1.offsetWidth/2;
			var t1=obj1.offsetTop+obj1.offsetHeight/2;
			var l2=obj2.offsetLeft+obj2.offsetWidth/2;
			var t2=obj2.offsetTop+obj2.offsetHeight/2;
			var a=l2-l1;
			var b=t2-t1;
			return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
		}
		//碰撞检测
		function callTest(obj1,obj2){
			var l1=obj1.offsetLeft;
			var t1=obj1.offsetTop;
			var r1=obj1.offsetWidth+obj1.offsetLeft;
			var b1=obj1.offsetHeight+obj1.offsetTop;
			var l2=obj2.offsetLeft;
			var r2=obj2.offsetLeft+obj2.offsetWidth;
			var t2=obj2.offsetTop;
			var b2=obj2.offsetTop+obj2.offsetHeight;
			if(l1>r2||r1<l2||t1>b2||b1<t2){
				return false;
			}else{
				return true;
			}
		}
	};
});