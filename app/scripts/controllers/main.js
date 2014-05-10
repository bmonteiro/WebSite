'use strict';

var webSiteApp = angular.module('webSiteApp');

webSiteApp.controller('MainCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('phones.json').success(function(data) {
			$scope.phones = data;
		});
		$scope.orderProp = 'age';
	}]
);
