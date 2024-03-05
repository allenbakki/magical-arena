import { PlayersDetails } from "./playerDetails.js";
import { getUserInput } from "./index.js";

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

function _gameDesign(player1, player2) {
  console.log("welcome to game");
}

export { _selectPlayers, _gameDesign };
