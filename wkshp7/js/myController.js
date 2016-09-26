     //create and register the controller with this module

    myApp.controller("myFirstController", function ($scope) {

      //set up our data
      var toDoList = [];
      
      //add it to the scope
      $scope.toDoList = toDoList;

      //add some logic to the controller
      $scope.addItem = function () {
        $scope.toDoList.push(

            {
              name: $scope.newItem.name,
              description: $scope.newItem.descr
            }

          );
        //clear text boxes after adding new list item
        $scope.newItem.name='';
        $scope.newItem.descr='';
        }

      $scope.deleteItem = function (index) {
        $scope.toDoList.splice(index, 1);
       }


    });