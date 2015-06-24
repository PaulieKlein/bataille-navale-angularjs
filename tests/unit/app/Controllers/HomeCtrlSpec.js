describe("HomeController tests",function(){

	beforeEach(function(){
		module('todo');
	});

	it("HomeController .prepare redirige vers /prepare/idGame", inject(function($controller,$location){
		var homeCtrl = $controller('HomeController');
		var game ={id : 123};

		homeCtrl.prepare(game);
		expect($location.path()).toEqual('/prepare/' + game.id);
	}));
})