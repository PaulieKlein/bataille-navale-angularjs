angular.module("todo").controller("HomeController",function (GameService,$location) {
	var homectrl =this;
function fetchGames() {
        GameService.getAll()
            .then(function (games) {
                homectrl.games = games
            })
    }
    fetchGames()

    homectrl.join = function (game) {
        GameService.join(game)
            .then(function () {
                fetchGames()
            })
    }

    homectrl.prepare = function(game){
        $location.path("/prepare/" +game.id)
    }
})
