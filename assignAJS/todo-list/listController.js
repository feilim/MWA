  /*
  Author: Feilim Lawless
  Assignment: WE4 Mobile Web Applications, DSA, AngularJS Single Page App 
  Date: 12/09/2016
  */

/*declare a controller named "listController" for the app module "toDoListApp" to control data on the app's to-do list page. 
  The  AngularJS "$scope" object passed to the controller defines how the controller will update the data in the view. 
  Inject a dependency on the service, "SharedDataService", into the controller. */
toDoListApp.controller("listController", function ($scope, SharedDataService) {

  /* bring the content of the array held by the service "SharedDataService" into the scope of the contoller "listController" */
  $scope.listItems = SharedDataService.getList();

  /* Add a function, "callToDeleteItem", to the list controller's scope that utilises the function "deleteItem" provided by "SharedDataService" to delete an item (specified by the "index" paramenter) from the to-do list array which is stored by "SharedDataService") */
    $scope.callToDeleteItem = function (index) {
    SharedDataService.deleteItem(index);
  };

});


