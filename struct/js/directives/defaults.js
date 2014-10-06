/*
===================
@author: Nam Phan. Nick-name: o0most0o
@company: Reliable{coders} Inc.
@date: 2014
===================
*/
define(['./module'], function(directives) {
	'use strict';
	directives.directive('renderTopbar', function() {
		return {
			templateUrl : 'templates/topbar.html'
		};
	});
	directives.directive('renderFooter', function() {
		return {
			templateUrl : 'templates/footer.html'
		};
	});
});
