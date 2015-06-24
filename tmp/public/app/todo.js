angular.module("todo",["ngRoute"])	.config(function ($routeProvider){
		$routeProvider
		.when("/",{
			templateUrl :"views/home.html",
			controller : "HomeController",
			controllerAs : "homectrl"
		})

		.when("/new",{
			templateUrl :"views/new.html",
			controller : "NewController",
			controllerAs : "newctrl"
		})

		.when("/prepare/:id",{
			templateUrl :"views/prepare.html",
			controller : "PrepareController",
			controllerAs : "preparectrl"
		})
			.otherwise({
				redirectTo:"/"
			});
	})

	
		



		
		