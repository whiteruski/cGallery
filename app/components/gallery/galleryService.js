
angular.module('cGalleryApp.services', []).factory('GalleryService', function($http) {
    var cGalleryAPI = {};

    var token = 'production token here';
    var spaceId = 'space id here';

    var getFromUrl = function(detail) {
        return $http({
            method: 'GET', 
            url: 'https://cdn.contentful.com/spaces/' + spaceId + '/' + detail,
            params: { 'access_token': token }
        });
    }

    cGalleryAPI.getSpace = function() {
        return getFromUrl('');
    };

    cGalleryAPI.getContentTypes = function() {
        return getFromUrl('content_types');
    };

    cGalleryAPI.getEntries = function() {
        return getFromUrl('entries');
    };

    cGalleryAPI.getImage = function(id) {
        return getFromUrl('assets/' + id);
    };

    return cGalleryAPI;
});