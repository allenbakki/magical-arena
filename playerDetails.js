import Player from "./model/player.js";
import { getUserInput } from "./index.js";
import { _selectPlayers } from "./gameLogic.js";

//map to store player details to identify details of player with key as name of player
var PlayersDetails = new Map();

function initializePlayersDetails() {
  PlayersDetails = new Map();
}

// Enter or Input details of players to play game Magical-Arena
function _inputPlayers() {
  let flag = true;
  initializePlayersDetails();

  while (flag) {
    let name = getUserInput("Enter Player Name: ");

    if (PlayersDetails != null && PlayersDetails.has(name)) {
      name = getUserInput(
        "Player Name already exists please enter unique player name: "
      );
    }
    var strength = Number(getUserInput(`Enter the strength of ${name}: `));
    while (isNaN(strength) || strength < 0) {
      console.log("The strength value should be a postive number");
      strength = getUserInput(`Enter the strength value of ${name}: `);
    }
    var attack = Number(getUserInput(`Enter the attack value of ${name}: `));
    while (isNaN(attack) || attack < 0) {
      console.log("The attack value should be a postive number");
      attack = getUserInput(`Enter the attack value of ${name}: `);
    }
    var health = Number(getUserInput(`Enter the health value of ${name}: `));
    while (isNaN(health) || health < 0) {
      console.log("The health value should be a postive number");
      health = getUserInput(`Enter the health value of ${name}: `);
    }

    var arenaPlayer = new Player(name, strength, attack, health);

    PlayersDetails.set(name, arenaPlayer);

    const flagValue = getUserInput(
      "Enter 1 if you want add another player.Enter 0 to exit or not to add the players: "
    );
    if (flagValue == "1");
    else {
      if (PlayersDetails.size >= 2) {
        flag = false;
      } else {
        console.log(
          "Atleast require two players for magical arena, Add another player"
        );
      }
    }
  }
}



export function getPlayersDetails() {
  return PlayersDetails;
}

export { _inputPlayers, PlayersDetails };
