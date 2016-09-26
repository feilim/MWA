// JavaScript Document
// Author: David Hurl
// Assignment: WE4 Mobile Web Applications, Digital Skills Academy
// Date : 2016/09/12
// Ref: w3schools.com

$(document).ready(function(){
	$("#menu-bar").click(function()
	{
		$("li[ng-repeat]").slideToggle("slow");
	});
});

var app=angular.module('app',[]);
app.controller('defaultCtrl',function($scope){
	$scope.show=false;
	$scope.products=["Finish WebElevate 4.1","Complete Industry Project","Complete SQL Assessment"];
	$scope.addItem=function(){
		$scope.error="";
		if(!$scope.addMe)
			{
				$scope.error="Empty Product!";
				$scope.show=true;
			return;
			}
		if($scope.products.indexOf($scope.addMe)===-1)
		{
			$scope.products.push($scope.addMe);
			$scope.show=false;
		}
		else
			{
				$scope.show=true;
				$scope.error="The item is already on your list.";
			}		
			};
	$scope.removeItem=function(x)
	{
		$scope.show=false;
		$scope.error="";
		$scope.products.splice(x,1);
	};	
	$scope.sort=function(){$scope.products.sort();};
	$scope.revsort=function()
	{
		$scope.products.sort();
		$scope.products.reverse();
	};
});