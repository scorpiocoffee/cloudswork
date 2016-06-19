'use strict';

angular.module('cloudsApp').directive('message', () => ({
	restrict: 'E',
	templateUrl: 'pages/message/message.html',
	scope: {
		info: '=',
		self: '=',
		scrolltothis: '&'
	},
	link: function(scope, elem, attrs) {
		scope.time = new Date();
		$timeout(scope.scrolltothis);
		$timeout(function(){
            elem.find('.avatar').css('color',scope.info.color);
        });
	}
}));

