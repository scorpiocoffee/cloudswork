'use strict';

angular.module('cloudsApp').controller('HelpController', function($scope, $location) {
  this.$location = $location
	$scope.isCollapsed = false;

	$scope.tinymceOptions = {
		height: 230,
        width: 600,
        selector: 'textarea',
        plugins: [
        'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern'
        ],
        toolbar1: 'undo redo | fontselect fontsizeselect | forecolor backcolor | bold italic underline strikethrough | table',
        toolbar2: 'alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | subscript superscript | link unlink image | charmap emoticons | removeformat',
        menubar: false,
        toolbar_items_size: 'small',
        keep_styles: true,
        statusbar:false,
        allow_html_in_named_anchor: false
	};

        $scope.questions = [
                {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-05-07' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-05-27' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-03-27' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-04-17' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-03-07' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-06-07' },
                 {topic: 'ANNOUNCEMENT',
                 details : 'This is a simple forum to demonstrate the text edit.' +
                           'Everyone can post anything, such as questions, experience, articles and so on.' +
                           'We hope you can have fun here!',
                 poster : 'Sherry',
                 post_date : '2016-04-07' },
        ];

	// $scope.postBtnClick = function(postForm) {
 //      $scope.postForm.details = $scope.postForm.details.split("p>")[1].split("<")[0];
 //        $scope.Question.addQuestion($scope.postForm)
 //          .then( response => {
 //            alert('Your Question has been submitted successfully! \^O^/');
 //            $scope.$location.path('/help');
 //            $scope.$route.reload();
 //        });
 //    }
});