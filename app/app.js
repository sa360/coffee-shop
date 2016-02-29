'use strict';

var app = angular.module('shopApp',[
		'ui.router',
	]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('shop',{
		url:'/',
		templateUrl:'partials/shop-main.html',
		controller:'ShopCtrl as ctrl',
	})

	.state('newCoffeeShop',{
		url:'/newCoffeeShop',
		controller:'ShopCtrl as ctrl',
		templateUrl:'partials/newCoffeeShop.html'
	})

	.state('editCoffeeShop',{
		url:'/editCoffeeShop/:shopId',
		controller:'ShopCtrl as ctrl',
		templateUrl:'partials/editCoffeeShop.html',
	});

});