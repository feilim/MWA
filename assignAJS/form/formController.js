  /*
  Author: Feilim Lawless
  Assignment: WE4 Mobile Web Applications, DSA, AngularJS Single Page App 
  Date: 12/09/2016
  */

/*declare a controller for the app module "toDoListApp" to control data on the app's form page. 
 Inject the service "SharedDataService" into the controller. 
 The  AngularJS "$scope" object passed to the controller defines how the controller will update the data in the view. */

toDoListApp.controller("formController", function ($scope, SharedDataService) {
  /* Add a function, "callToAddItem", to the form controller's scope that utilises the function "addItem" provided by "SharedDataService". ("addItem" adds an item to the to-do list array stored by "SharedDataService") */
  $scope.callToAddItem = function (Item) {
    SharedDataService.addItem(Item);
  };

});
