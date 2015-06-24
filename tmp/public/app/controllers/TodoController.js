angular.module("todo").controller("TodoController",function (GameService,$location) {
															/*$http*/
/*$http({
	method:"GET",
	url :"http://192.168.229.21:3000/games"
}).then(
	function(result){
		todoCtrl.games = result.data;
	},
	function(error){
		console.log("error",error)
	}
)
*/ 
	function fetchGames(){
	GameService.getAll()
		.then(function (games){
			todoCtrl.games = games
		})
	}

		 fetchGames()


			var todoCtrl = this;
			todoCtrl.games = [];
			

			todoCtrl.game = { 
				fleetSize : GameService.fleetSizeValues[0].value
							}

			this.Create= function(form){
				if (form.$invalid) return
					var clone = angular.copy(todoCtrl.game)
					todoCtrl.games.push(clone)
					GameService.save(clone)
					.then(function(){
						$location.path("/")
						}
						)


					/*$http({
						method:"POST",
						url :"http://192.168.229.21:3000/games",
						data : clone
					})*/

			}
			})

			