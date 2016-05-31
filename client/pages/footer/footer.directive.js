'use strict';

angular.module('cloudsApp').directive('footer', () => ({
	restrict: 'E',
	templateUrl: 'pages/footer/footer.html',
	controller: function($scope, $location, $route) {
		this.$location = $location;
	},
	controllerAs: 'footer'
}));