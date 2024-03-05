import { PlayersDetails } from "./playerDetails.js";
import { getUserInput } from "./index.js";

function _selectPlayers() {
  console.log(
    "Select two players from the list below to start the Magical Arena\n"
  );
  PlayersDetails.forEach((key, value) => {
    console.log(`${value}\n`);
  });
  var player1 = getUserInput("Enter the Player1 Name: ");
  var player2 = getUserInput("Enter the Player2 Name: ");
  
  _gameDesign(player1, player2);
}

function _gameDesign(player1, player2) {}

export { _selectPlayers, _gameDesign };
