'use strict';

angular.module('cloudsApp').controller('MainController', function($scope, $location) {
	this.$location = $location;
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.currentIndex = 0;
    $scope.slides = 
    [
      	{image: '/assets/images/1.jpg',
       		id: 0
      	},
	    {image: '/assets/images/2.jpg',
	       	id: 1
	    },
	    {image: '/assets/images/3.jpg',
	       	id: 2
	    },
	    {image: '/assets/images/4.jpg',
	       	id: 3
	    }
    ];
    function generateIndexesArray() {
      	var indexes = [];
      	for(var i = 0; i < currentIndex; ++i) {
        	indexes[i] = i;
      	}
      	return shuffle(indexes);
    }
    function shuffle(array) {
      	var tmp, current, top = array.length;
      	if (top) {
        	while (--top) {
          		current = Math.floor(Math.random() * (top + 1));
          		tmp = array[current];
          		array[current] = array[top];
          		array[top] = tmp;
        	}
      	}
      	return array;
    }
});