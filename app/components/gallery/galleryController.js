angular.module('cGalleryApp.controllers', [])
    .controller('GalleryController', function($scope, GalleryService) {

    GalleryService.getEntries().then(function(data) {
        $scope.entries = data.data.items;
        console.log("Entries:");
        console.log(data.data.items);
    });

    $scope.showFile = function(id) {
        GalleryService.getImage(id).then(function(rsp) {
            $scope.currentFileUrl = rsp.data.fields.file.url + '?w=300&h=500';
        });
    };

});