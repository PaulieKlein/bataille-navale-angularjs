describe("GameService tests", function(){
	beforeEach(function(){
		module('todo');
	});
	it("la version doit être de 1.0",inject(function(GameService){
		expect(GameService.version).toEqual('1.0');
	}));

	it("Le service factory.get(1) renvoie un objet Game", inject(function(GameService,$httpBackend){
		var idGame = 1;
		var gameSimule = {id :109, name :'Game 1'};

		$httpBackend.when('GET','http://localhost:3000/games/' + idGame).respond(gameSimule);

		var gamePromesse = GameService.get(idGame);

		gamePromesse.then(function(game){
			expect(game.id).toEqual(109);
			expect(game.name).toEqual('Game 1');
		})

		$httpBackend.flush(); 
	}));
})