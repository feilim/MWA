angular.module('myModule', ['ngRoute']).

	config(function($routeProvider)  {

		$routeProvider.
			when("/", {
	            //templateUrl property tells which HTML template AngularJS should load and display inside the div with the data-ng-view directive in index.html
	    		templateUrl: "partials/basic-template.html",
	            //specify which controller to use with above template
	    		controller: BasicController
	    	}).

	    	when("/faq", {
				templateUrl: "partials/faq.html",
	    		controller: FAQController
	    	}).
	        // if no route paths match the given URL, redirect to home
        	otherwise({
	            redirectTo: "/",
	            templateUrl: "partials/basic-template.html"
	        })
	});
	
		function MainController($scope) {

			};

		function BasicController($scope) {

			$scope.title = 'this the title';
			$scope.body = 'Welcome';
		};

	 function FAQController($scope) {

		
	});

