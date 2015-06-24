angular.module("todo")
	.config(function ($routeProvider){
		$routeProvider
		.when("/",{
			templateUrl :"views/home.html",
			controller : "Ctrl",
			controllerAs : "Ctrl"
		})

		.when("/toto",{
			template :"je suis sur la vue de toto"
		})

	}

	)