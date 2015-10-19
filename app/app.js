'use strict';

// Declare app level module which depends on views, and components
angular.module('cGalleryApp', [
  'ngRoute',
  'cGalleryApp.controllers',
  'cGalleryApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/gallery", {templateUrl: "components/gallery/gallery.html", controller: "GalleryController"}).
	otherwise({redirectTo: '/gallery'});
}]);
