/**********************************************************
* Author: colum.jones@webelevate.ie
* Assignment: WE4.1 Mobile Angular App Assignment, Digital Skills Academy DT7003
* Student ID: D15128630
* Date : 10/Sept/2016
* Ref: website link to code referenced or the book, authors name and page number
* angulat code from https://github.com/curran/screencasts/introToAngular/examples/snapshots/snapshot17/index.html  
***********************************************************/


  var nameApp = angular.module('nameApp', []);

  nameApp.controller('NameCtrl', function ($scope){
      	
    $scope.names = ['Be good', 'Eat more', 'Party on'];

    /* function to add an array entry */
    $scope.addName = function() {
      $scope.names.push($scope.enteredName);
      $scope.enteredName = '';
      };

    /* function to remove an array entry */
    $scope.removeName = function(name) {
      var i = $scope.names.indexOf(name);
          $scope.names.splice(i, 1);
          };
    });