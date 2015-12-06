'use strict';
define(function(require,exports,module){
	var flex=require('flexible.js');
	var drag=require('drag.js');
	var wear=require('wearwall.js');
	var block=require('block.js');
	var photo=require('photowall.js');	
	var clo=require('clock.js');	
	var back=require('back_to_top.js');	
	var email=require('email.js');	
	//var xx=require('xxk.js');	
	exports.index2=function(){
		drag.drag();
		flex.flex();
		wear.c();
		block.blo();
		photo.pho();
		clo.c();
		back.b();
		email.ema();
		//xx.xxk();
	};
});
