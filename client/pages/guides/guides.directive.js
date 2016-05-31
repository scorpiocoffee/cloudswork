'use strict';

angular.module('cloudsApp').directive('guides', () => ({
	restrict: 'E',
	templateUrl: 'pages/guides/guides.html',
	controller: function($scope, $location, $route) {
		this.$location = $location;
		this.isCollapsed = false;
	},
	controllerAs: 'guides'
}));