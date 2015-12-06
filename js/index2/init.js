'use strict';
seajs.config({
	alias:{
		's':'index'	
	}	
});
seajs.use('s',function(mod){
	mod.index2();
});