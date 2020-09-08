"use strict";
var doc = window.document;
(function (root, factory) {
	root.app = factory();
})(this,function() {
	var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
	window.oRequestAnimationFrame;
	
	var gamePage;
	
	function loop() {
		if (gamePage == 'index')
			game.loop();
		
		raf(loop);
	}
	
	return {
		init: function (page) {
			// set the current page
			gamePage = page;
			
			loop();
		}
	}
} );