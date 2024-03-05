import createPromptSync from "prompt-sync";
import { _inputPlayers } from "./playerDetails.js";
import { _selectPlayers, _gameDesign } from "./gameLogic.js";

console.log("Welcome to Magical Arena");

//prompt to take input from the terminal
const prompt = createPromptSync({ sigint: true });
function getUserInput(promptMessage) {
  return prompt(promptMessage);
}

//To enter the details of players.
_inputPlayers();

// flag to make sure how many times the user want to play game

let gameFlag = true;
while (gameFlag) {
  //choose players to start the game
  const { player1, player2 } = _selectPlayers();

  _gameDesign(player1, player2);

  const playgame = getUserInput(
    "Enter 'yes' or 'y' or 'YES' OR 'Y' to play another game or Press 'ENTER' to exit: "
  );

  if (
    playgame == "yes" ||
    playgame == "YES" ||
    playgame == "Y" ||
    playgame == "y"
  );
  else {
    gameFlag = false;
  }
}

export { getUserInput };
