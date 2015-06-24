angular.module("todo")
	.factory("GameService", function($http){
		return {
			pseudo:"pauline",
			getAll : function(){
				return $http.get("http://localhost:3000/games")
					.then(function (result) {
                    return result.data;
                })
                .then(function (games) {
                    return games.filter(function (game) {
                        return !game.user2 ||
                        ( game.user1.pseudo === this.pseudo
                            || game.user2.pseudo === this.pseudo )
                    }.bind(this))
                }.bind(this))
					
			},

			get : function(id){
				return $http.get("http://localhost:3000/games"+"/"+ id).then(function (result) {
                    console.log(result.data)
                    return result.data;
                })
			},

			join : function(game){
				game.user2 = {
					pseudo: this.pseudo
				};
					return $http.put("http://localhost:3000/games"+"/"+game.id,game)
			},

			save : function(game){
					if (!game.user1) game.user1 = {};
					game.user1.pseudo = this.pseudo;
					return $http.post("http://localhost:3000/games",game)
			},

			fleetSizeValues : [
			{value:1, label :"1 bateau"},
			{value:2, label :"2 bateaux"},
			{value:3, label :"3 bateaux"},
			{value:4, label :"4 bateaux"},
			{value:5, label :"5 bateaux"}
			]
		}



})