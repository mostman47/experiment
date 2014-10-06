/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

	paths : {
		// 'jquery' : '../plugins/jquery.min',
		'domReady' : '../lib/requirejs-domready/domReady',
		'angular' : '../../assets/plugins/angular/angular.min',
		'uiRouter' : "../lib/angular/angular-ui-router",
		'niceScroll' : '../../assets/plugins/jquery.nicescroll.min',
		// 'jq-cookie' : '../plugins/jquery.cookie',
		// 'validate' : '../plugins/jquery.validate.min',
		// 'crypt_aes' : '../plugins/aes',
		// 'toggles' : '../plugins/toggles.min',
		'handle2' : '../../assets/plugins/handlebars2',
		// 'c_mirror' : '../plugins/codemirror/lib/codemirror',
		// 'c_mirror_format' : '../plugins/codemirror/lib/formatting',
		// 'c_mirror_js' : '../plugins/codemirror/mode/javascript/javascript',
		// 'd1' : '../plugins/docs/lib/jquery.slideto.min',
		// 'd3' : '../plugins/docs/lib/jquery.wiggle.min',
		// 'd4' : '../plugins/docs/lib/jquery.ba-bbq.min',
		// 'd5' : '../plugins/docs/lib/handlebars-1.0.0',
		// 'd6' : '../plugins/docs/lib/underscore-min',
		// 'd7' : '../plugins/docs/lib/backbone-min',
		// 'd8' : '../plugins/docs/lib/swagger',
		// 'd9' : '../plugins/docs/lib/swagger-client',
		// 'd10' : '../plugins/docs/swagger-ui.min',
		// 'd11' : '../plugins/docs/lib/highlight.7.3.pack',
		// 'd12' : '../plugins/docs/lib/swagger-oauth',
		// 'd13' : '../plugins/docs/lib/shred.bundle',
	},

	/**
	 * for libs that either do not support AMD out of the box, or
	 * require some fine tuning to dependency mgt'
	 */
	shim : {
		'angular' : {
			exports : 'angular'
		},
		'uiRouter' : {
			deps : ['angular']
		}
	},

	deps : [
	// kick start application... see bootstrap.js
	'./bootstrap']
});
