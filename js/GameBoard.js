(function(){

	angular
			.module('tictactoeApp')
			.factory('Gameboard', GameBoardFunc);

b
	function GameBoardFunc(){
		var TILE_CHANGE = ['notselected-tile', 'x-player','o-player'];

		var Gameboard = function(numTiles){
			// Define self

			var self = this;

			self.playerTurn = 0;
			self.numTiles = numTiles;
			self.tiles = new Array(numTiles);
			self.toggleTile = toggleTile;


			// if I get this to firebase - For Player count
			function pleaseLetThisWork(){

				self.playerNumber = -1;

				self.lobby = getLobby();
			}

		}


	}


});