/*
 *  This code is adapted from the work of Michael Nachbaur 
 *  by Simon Madine of The Angry Robot Zombie Factory
 *   - Converted to Cordova 1.6.1 by Joseph Stuhr.
 *  2012-04-19
 *  MIT licensed
 *
 */

/*
 * Temporary Scope to contain the plugin.
 *  - More information here:
 *     https://github.com/apache/incubator-cordova-ios/blob/master/guides/Cordova%20Plugin%20Upgrade%20Guide.md
 */

 (function(cordova) {
	
 	/*
  	 * This class exposes the iPhone 'icon badge' functionality to JavaScript
  	 * to add a number (with a red background) to each icon.
  	*/
	function Badge() { }
 
	/**
 	 * Positive integer sets the badge amount, 0 or negative removes it.
	 */
	Badge.prototype.set = function(options) {
	    cordova.exec("Badge.setBadge", options);
	};

	/**
	 * Shorthand to set the badge to 0 and remove it.
	 */
	Badge.prototype.clear = function() {
	    cordova.exec("Badge.setBadge", 0);
	};

	cordova.addConstructor(function() {
		if(!window.plugins) {
			window.plugins = {};
		}
		if(!window.plugins.badge) {
    		window.plugins.badge = new Badge();
		}
	});
	
})(window.cordova || window.Cordova);


/* DEBUG */ window.console.log('badge.js loaded...');