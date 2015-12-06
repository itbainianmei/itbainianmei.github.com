'use strict';
define(function(require,exports,module){
	var oCom=require('common.js');
	exports.flex=function(){
		var oSubnav=document.getElementById('subnav');	
		var oI=oSubnav.children[0];
		var aA=oSubnav.getElementsByTagName('a');
		var iNow=0;
		for(var i=0;i<aA.length;i++){
			aA[i].onmouseover=function(){
				oCom.flexmove(oI,this.offsetLeft);	
			};
			aA[i].onmouseout=function(){
				oCom.flexmove(oI,aA[iNow].offsetLeft);	
			};	
			
		}
		
	};	
});