import Player from "./model/player.js";
import { getUserInput } from "./index.js";
import { _selectPlayers } from "./gameLogic.js";

var PlayersDetails = new Map();

function _inputPlayers() {
  let flag = true;

  while (flag) {
    let name = getUserInput("Enter Player Name: ");

    if (PlayersDetails.has(name)) {
      name = getUserInput(
        " Player Name already exists please enter unique player name: "
      );
    }
    var strength = Number(getUserInput(`Enter the strength of ${name}: `));
    console.log(typeof strength, strength);
    while (isNaN(strength) || strength < 0) {
      console.log("The strength value should be a postive number");
      strength = getUserInput(`Enter the strength value of ${name}: `);
    }
    var attack = Number(getUserInput(`Enter the attack value of ${name}: `));
    console.log(typeof attack, attack);
    while (isNaN(attack) || attack < 0) {
      console.log("The attack value should be a postive number");
      attack = getUserInput(`Enter the attack value of ${name}: `);
    }
    var health = Number(getUserInput(`Enter the health value of ${name}: `));
    console.log(typeof health, health);
    while (isNaN(health) || health < 0) {
      console.log("The health value should be a postive number");
      health = getUserInput(`Enter the health value of ${name}: `);
    }

    var arenaPlayer = new Player(name, strength, attack, health);

    // console.log("User input:", name, strength, attack, health);

    PlayersDetails.set(name, arenaPlayer);

    const flagValue = getUserInput(
      "Enter 1 if you want add another player.Enter 0 to exit or not to add the players: "
    );
    if (flagValue == "1");
    else {
      if (PlayersDetails.size >= Number(2)) {
        flag = false;
      } else {
        console.log(
          "Atleast require two players for magical arena, Add another player"
        );
      }
    }
  }

  //   PlayersDetails.forEach((value, key) => {
  //     console.log(`key: ${key} and value ${value.name}`);
  //   });

  //flag to make sure how many times the user want to play game

  let gameFlag = true;
  while (gameFlag) {
    //choose players to start the game
    _selectPlayers();

    const playgame = getUserInput(
      "Enter yes to play another game or no to exit: "
    );

    if (playgame == "yes");
    else {
      gameFlag = false;
    }
  }
}

export { PlayersDetails, _inputPlayers };
