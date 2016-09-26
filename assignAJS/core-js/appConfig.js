    /*
      Author: Feilim Lawless
      Assignment: WE4 Mobile Web Applications, DSA, AngularJS Single Page App 
      Date: 12/09/2016
    */
    //configure the  AngularJS $routeProvider object (which controls the routes the app can take) via the toDoListApp module's config function
    toDoListApp.config(function ($routeProvider) {
    	
    	$routeProvider.

    	when("/", {
            //templateUrl property tells which HTML template AngularJS should load and display inside the div with the data-ng-view directive in index.html
    		templateUrl: "todo-list/list.html",
            //specify which controller to use with above template
    		controller: "listController"
    	}).

    	when("/form", {
			templateUrl: "form/form.html",
    		controller: "formController"
    	}).
        // if no route paths match the given URL, redirect to start up page of app
        otherwise({

            redirectTo: "/",
            templateUrl: "todo-list/list.html"
         })
    });