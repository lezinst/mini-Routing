angular.module('miniRouting', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

$stateProvider

	.state('home', {
		templateUrl: 'scripts/home/homeTmpl.html',
		controller:'homeCtrl',
		url:'/'

		
	})

	.state('settings', {
		templateUrl:'scripts/settings/settingsTmpl.html',
		controller:'settingsCtrl',
		url:'/'
	})

	.state('products', {

		templateUrl:'scripts/products/productTmps.html',
		controller:'productsCtrl',
		url:'/products/:id'
	})

$urlRouterProvider
	.otherwise('/');


})