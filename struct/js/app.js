/*
===================
@author: Nam Phan. Nick-name: o0most0o
@company: Reliable{coders} Inc.
@date: 2014
===================
*/

/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define(['angular', 'uiRouter', 'handle2', 'niceScroll', './controllers/index', './directives/index', './filters/index', './services/index'], function(ng) {
	'use strict';
	    return ng.module('app', ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ui.router']);
});
// var Helper_Ctrl = {
	// conf : {
		// cookie_login : "isLogin",
	// },
	// init : function() {
		// var self = Helper_Ctrl;
		// self.nice_scroll();
	// },
	// get_sstoken_from_cookie : function() {
		// return $.parseJSON($.cookie(Helper_Ctrl.conf.cookie_login)).sstoken;
	// },
	// nice_scroll : function() {
		// // setTimeout(function() {
		// $("body").niceScroll({
			// horizrailenabled : false
		// });
		// // }, 1000);
		// $("*").on("click", function() {
			// setTimeout(function() {
				// $("body").getNiceScroll().resize();
			// }, 100);
		// });
	// },
	// c_progress : function() {
		// $("body").css("cursor", "progress");
	// },
	// c_default : function() {
		// $("body").css("cursor", "default");
	// },
	// JsonFormatter : {
		// stringify : function(cipherParams) {
			// // create json object with ciphertext
			// var jsonObj = {
				// ct : cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
			// };
// 
			// // optionally add iv and salt
			// if (cipherParams.iv) {
				// jsonObj.iv = cipherParams.iv.toString();
			// }
			// if (cipherParams.salt) {
				// jsonObj.s = cipherParams.salt.toString();
			// }
// 
			// // stringify json object
			// return JSON.stringify(jsonObj);
		// },
// 
		// parse : function(jsonStr) {
			// // parse json string
			// var jsonObj = JSON.parse(jsonStr);
// 
			// // extract ciphertext from json object, and create cipher params object
			// var cipherParams = CryptoJS.lib.CipherParams.create({
				// ciphertext : CryptoJS.enc.Base64.parse(jsonObj.ct)
			// });
// 
			// // optionally extract iv and salt
			// if (jsonObj.iv) {
				// cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
			// }
			// if (jsonObj.s) {
				// cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
			// }
// 
			// return cipherParams;
		// }
	// }
// };
