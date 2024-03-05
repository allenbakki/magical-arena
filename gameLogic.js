import { PlayersDetails } from "./playerDetails.js";
import { getUserInput } from "./index.js";

//select players to start the game
function _selectPlayers() {
  console.log(
    "Select two players from the list below to start the Magical Arena\n"
  );
  PlayersDetails.forEach((key, value) => {
    console.log(`${value}\n`);
  });
  let player1 = getUserInput("Enter the Player1 Name: ");
  var player2 = getUserInput("Enter the Player2 Name: ");
  while (!PlayersDetails.has(player1)) {
    console.log("Player1 does not exist");
    if (!PlayersDetails.has(player1))
      player1 = getUserInput("Enter the Player1 Name present int above list: ");
  }

  while (!PlayersDetails.has(player2)) {
    console.log("Player2 does not exist");

    player2 = getUserInput("Enter the Player2 Name present int above list: ");
  }

  var flag = true;

  while (flag) {
    if (player1 === player2) {
      console.log("Both players have the same name.");
      console.log("Enter 1 to change Player 1");
      console.log("Enter 2 to change Player 2");

      var playerChange = getUserInput("Enter your choice: ");

      if (playerChange == 1) {
        let newPlayer1 = getUserInput("Enter the new Player 1 Name: ");
        if (newPlayer1 !== player2 && PlayersDetails.has(newPlayer1)) {
          player1 = newPlayer1;
          flag = false; // Exit the loop after updating player1
        } else {
          console.log(
            "Invalid name or player1 and player2 cannot be equal. Try again."
          );
        }
      } else if (playerChange == 2) {
        let newPlayer2 = getUserInput("Enter the new Player 2 Name: ");
        if (newPlayer2 !== player1 && PlayersDetails.has(newPlayer2)) {
          player2 = newPlayer2;
          flag = false; // Exit the loop after updating player2
        } else {
          console.log(
            "Invalid name or player1 and player2 cannot be equal. Try again."
          );
        }
      } else {
        console.log("Invalid choice. Enter 1 or 2.");
      }
    } else {
      flag = false; // Exit the loop if player1 and player2 are not the same
    }
  }

  _gameDesign(player1, player2);
}

//game design
function _gameDesign(player1, player2) {
  console.log(`welcome to game ${player1} & ${player2}`);
  const player1Details = PlayersDetails.get(player1);
  const player2Details = PlayersDetails.get(player2);
  var _player1_health = player1Details.health;
  var _player2_health = player2Details.health;
  var attackDice;
  var defendDice;
  var attackStrength;
  var defendStrength;
  while (
    Number(_player1_health) > Number(0) &&
    Number(_player2_health) > Number(0)
  ) {
    if (Number(_player1_health) > Number(_player2_health)) {
      attackDice = Math.floor(Math.random() * 6) + 1;
      defendDice = Math.floor(Math.random() * 6) + 1;
      attackStrength = Number(attackDice * player1Details.attack);
      defendStrength = Number(defendDice * player2Details.strength);
      if (Number(attackStrength) > Number(defendStrength)) {
        _player2_health = Math.abs(
          Number(attackStrength) - Number(defendStrength)
        );
      } else {
        _player1_health = Math.abs(
          Number(attackStrength) - Number(defendStrength)
        );
      }
    }

    else{
         attackDice = Math.floor(Math.random() * 6) + 1;
         defendDice = Math.floor(Math.random() * 6) + 1;
         attackStrength = Number(attackDice * player2Details.attack);
         defendStrength = Number(defendDice * player1Details.strength);
         if (Number(attackStrength) > Number(defendStrength)) {
           _player1_health = Math.abs(
             Number(attackStrength) - Number(defendStrength)
           );
         } else {
           _player2_health = Math.abs(
             Number(attackStrength) - Number(defendStrength)
           );
         }
    }
  }
}

export { _selectPlayers, _gameDesign };
