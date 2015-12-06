'use strict';
define(function(require,exports,module){
	var oCom=require('common.js');
	exports.c=function(){
		var oDiv=document.getElementById('con_div');
		var aDiv=oDiv.children;
		for(var i=0;i<aDiv.length;i++){
			hoverGo(aDiv[i]);
		}	
		function a2d(a){
			return a*180/Math.PI;	
		}
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
		function hoverDir(obj,oEvent){
			var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
			var scrollL=document.documentElement.scrollLeft||document.body.scrollLeft;
			var x=getPos(obj).left+obj.offsetWidth/2-(oEvent.clientX+scrollL);

			var y=getPos(obj).top+obj.offsetHeight/2-(oEvent.clientY+scrollT);
			//alert(scrollT)
			return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
		}
		function hoverGo(obj){
			var oS = obj.children[0];
			obj.onmouseover=function(ev){
				var oEvent=ev||event;
				var oFrom=oEvent.fromElement||oEvent.relatedTarget;
				
				if(obj.contains(oFrom))return;
				var dir = hoverDir(obj,oEvent);
				
				switch(dir){
					case 0:
						oS.style.left='200px';
						oS.style.top=0;
					break;
					case 1:
						oS.style.left=0;
						oS.style.top='200px';
					break;
					case 2:
						oS.style.left='-200px';
						oS.style.top=0;
					break;
					case 3:
						oS.style.left=0;
						oS.style.top='-200px';
					break;	
				}
				oCom.move(oS,{left:0,top:0});
			};
			obj.onmouseout=function(ev){
				var oEvent=ev||event;
				var oTo=oEvent.toElement||oEvent.relatedTarget;
				if(obj.contains(oTo))return;	
				var dir=hoverDir(obj,oEvent);
				switch(dir){
					case 0:
						oCom.move(oS,{left:200,top:0});
					break;
					case 1:
						oCom.move(oS,{left:0,top:200});
					break;
					case 2:
						oCom.move(oS,{left:-200,top:0});
					break;
					case 3:
						oCom.move(oS,{left:0,top:-200});
					break;	
				}
			};
		}
	};	
});