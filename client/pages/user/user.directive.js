'use strict';

angular.module('cloudsApp').directive('user', () => ({
	restrict: 'E',
	templateUrl: 'pages/user/user.html',
	scope: {
		info: '=',
		iscurrentreceiver: '=',
		setreceiver: '&'
	},
	link: function(scope, elem, attrs) {
		$timeout(function() {
			elem.find('.avatar').css('color', scope.info.color);
		});
	};
}));

