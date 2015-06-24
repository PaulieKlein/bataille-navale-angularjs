angular.module("todo").controller("PrepareController",function (GameService,$routeParams) {
	var preparectrl = this;
	  preparectrl.battlefield = [];
    var currentBoat = {
        id: 1,
        positions: []
    };

	GameService.get($routeParams.id).then(function(game){
		preparectrl.game = game

		preparectrl.rows = new Array(game.battlefieldSize.width)
		preparectrl.cols = new Array(game.battlefieldSize.height)

console.log(game.battlefieldSize)
		for(var i=0;i<game.battlefieldSize.height;i++){
			preparectrl.battlefield[i]=[];
			for(var j=0;j<game.battlefieldSize.width;j++){
				preparectrl.battlefield[i][j]=0
				console.log(i,j)
			}
		}

//console.log(preparectrl.battlefield, preparectrl.rows.length, preparectrl.cols.length)
	})

	preparectrl.add = function(i,j){
		if (preparectrl.game.fleetSize<currentBoat.id) return;		
		if(currentBoat.positions.length===0){
			preparectrl.battlefield[i][j]=currentBoat.id
			currentBoat.positions.push([i,j])
			return}
		if(currentBoat.positions.length===2){
			return
		}
		if(currentBoat.positions.length===1){
			if((currentBoat.positions[0][0] ===i&&
				(currentBoat.positions[0][1]===j-1||
					currentBoat.positions[0][1]===j+1))
					||
				(currentBoat.positions[0][1]===j&&
				(currentBoat.positions[0][0]==i-1 ||
					currentBoat.positions[0][0]===i+1))){
				preparectrl.battlefield[i][j] =currentBoat.id
				currentBoat.positions.push([i,j])
				currentBoat.id++;
				currentBoat.positions =[];
				return
			}
				
		}

		}

		preparectrl.checkReady = function(){
			if(!preparectrl.game) return false
				return currentBoat.id>preparectrl.game.fleetSize;
		}
	
})