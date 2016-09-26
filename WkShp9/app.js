var albumsApp = angular.module("albumsApp",[]);

albumsApp.factory('albumFactory', function() {
	return {
		getAlbums: function() {
			return [{"artist": "Kid Loco", "title": "happiness"}, {"artist": "Kid Gorgeous", "title": "unhappiness"}];
		},
	};

});

albumsApp.controller('albumController', function($scope, albumFactory) {
	$scope.albums = albumFactory.getAlbums();
});

