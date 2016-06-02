'use strict';

angular.module('cloudsApp').controller('ChatController', function($scope, $location, socket) {
	this.$location = $location;
	$scope.guides_status = false;
});