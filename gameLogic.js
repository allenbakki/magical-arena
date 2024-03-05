import { PlayersDetails } from "./playerDetails.js";
import { getUserInput } from "./index.js";

//select players to start the game
function _selectPlayers() {
  console.log(
    "Select two players from the List below to start the Magical Arena\n"
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
  console.log(
    `Welcome to the game Player 1: ${player1} & Player 2: ${player2}`
  );

  const player1Details = PlayersDetails.get(player1);
  const player2Details = PlayersDetails.get(player2);

  // Check who starts the game based on initial health
  if (player1Details.health > player2Details.health) {
    var currentPlayer = player1;
    var otherPlayer = player2;
  } else if (player1Details.health == player2Details.health) {
    const tossCoin = (attackDice = Math.floor(Math.random() * 2) + 1);
    console.log(
      `Toss coin to select who get to start the game as both healths are equal if result is 1 then Player 1 get to start the game otherwise the Player 2, so the result after tossing is ${tossCoin}`
    );
    if (tossCoin == 1) {
      var currentPlayer = player1;
      var otherPlayer = player2;
    } else {
      var currentPlayer = player2;
      var otherPlayer = player1;
    }
  } else {
    var currentPlayer = player2;
    var otherPlayer = player1;
  }

  console.log(`${currentPlayer} will start the game.`);

  var currentPlayerDetails = PlayersDetails.get(currentPlayer);
  var otherPlayerDetails = PlayersDetails.get(otherPlayer);

  var _currentPlayer_health = currentPlayerDetails.health;
  var _otherPlayer_health = otherPlayerDetails.health;

  var attackDice;
  var defendDice;
  var attackStrength;
  var defendStrength;

  while (
    Number(_currentPlayer_health) > Number(0) &&
    Number(_otherPlayer_health) > Number(0)
  ) {
    attackDice = Math.floor(Math.random() * 6) + 1;
    defendDice = Math.floor(Math.random() * 6) + 1;
    attackStrength = Number(attackDice * currentPlayerDetails.attack);
    defendStrength = Number(defendDice * otherPlayerDetails.strength);
    console.log(
      `attack ${attackDice}  defend ${defendDice}  current_player: ${currentPlayer} other_player: ${otherPlayer}`
    );

    console.log(
      `attackStrength ${attackStrength}  defendStrength ${defendStrength}`
    );

    if (Number(attackStrength) > Number(defendStrength)) {
      _otherPlayer_health = Math.max(
        Number(_otherPlayer_health) -
          Math.abs(Number(attackStrength) - Number(defendStrength)),
        0
      );
    } else {
      _currentPlayer_health = Math.max(
        Number(_currentPlayer_health) -
          Math.abs(Number(attackStrength) - Number(defendStrength)),
        0
      );
    }

    console.log(
      `current_player(${currentPlayer}) health : ${_currentPlayer_health} and other_player(${otherPlayer}) health : ${_otherPlayer_health}`
    );

    //swaping the below details as the turn of the player changes
    //swap the players
    [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
    //swap the player details
    [currentPlayerDetails, otherPlayerDetails] = [
      otherPlayerDetails,
      currentPlayerDetails,
    ];
    //swap the players health details
    [_currentPlayer_health, _otherPlayer_health] = [
      _otherPlayer_health,
      _currentPlayer_health,
    ];
  }

  // Determine the winner
  if (Number(_currentPlayer_health) > 0) {
    console.log(`${currentPlayer} wins the game!`);
  } else {
    console.log(`${otherPlayer} wins the game!`);
  }
}

export { _selectPlayers, _gameDesign };
