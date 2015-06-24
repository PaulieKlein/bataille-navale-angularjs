angular.module("todo").controller("NewController",function (GameService,$location) {
	var newctrl =this;
	newctrl.ships = GameService.fleetSizeValues;
	newctrl.save = function (form) {
        if (form.$invalid) return;
        GameService.save(newctrl.game)
            .then(function () {
                $location.path("/")
            })
    }
})