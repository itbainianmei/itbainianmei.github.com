'use strict';
define(function(require,exports,module){
	var left=86;
	var iSpeed=0;
	var timer=null;
	module.exports={
		flexmove:function(obj,iTarget){
			clearInterval(timer);
			timer=setInterval(function(){
				iSpeed+=(iTarget-left)/5;
				iSpeed*=0.7;
				left+=iSpeed;
				obj.style.left=left+'px';
				if(Math.floor(iSpeed)==0&&Math.floor(left)==iTarget){
					clearInterval(timer);
				}
			},30);	
		},
		move:function(obj,json,options){
			options=options||{};
			options.duration = options.duration||700;
			options.easing = options.easing||'ease-out';
			var start = {};
			var dis = {};
			for(var name in json){
				start[name] = parseFloat(module.exports.getStyle(obj,name));
				if(isNaN(start[name])){
					switch(name){
						case 'top':
							start[name] = obj.offsetTop;
							break;
						case 'left':
							start[name] = obj.offsetLeft;
							break;
						case 'width':
							start[name] = obj.offsetWidth;
							break;
						case 'height':
							start[name] = obj.offsetHeight;
							break;
						case 'opacity':
							start[name] = 1;
							break;
						case 'borderWidth':
							start[name] = 0;
							break;
					}
				}
				dis[name] = json[name]-start[name];
			}
			var count = Math.floor(options.duration/30);
			var n = 0;
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				n++;
				for(var name in json){
					switch(options.easing){
						case 'linear':
							var cur = start[name]+dis[name]*n/count;
							break;
						case 'ease-in':
							var a = n/count;
							var cur = start[name]+dis[name]*Math.pow(a,3);
							break;
						case 'ease-out':
							var a = 1-n/count;
							var cur = start[name]+dis[name]*(1-Math.pow(a,3));
							break;
					}
					if(name=='opacity'){
						obj.style.opacity=cur;
						obj.style.filter='alpha(opacity:'+cur*100+')';
					}else{
						obj.style[name] = cur+'px';
					}
				}
				if(n==count){
					clearInterval(obj.timer);
					options.complete&&options.complete();
				}
			},30);
		},
		getStyle:function(obj,sName){
			return (obj.currentStyle||getComputedStyle(obj,false))[sName];
		}
	};	
});