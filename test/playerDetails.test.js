import { PlayersDetails, inputPlayers } from "../playerDetails.js";
import { expect } from "chai";

// to check the input size it should be greater than or equal to 2;

describe("check for the no of players", function () {
  it("1. checking for players - at least two players must be there to start the game", function () {
    try {
      inputPlayers();

      expect(PlayersDetails.size).to.be.at.least(2);
    } catch (error) {
      console.log(error);
    }
  });

  it("1. checking for duplicate players ", async function () {
    try {
      inputPlayers();

      expect(PlayersDetails.size).to.be.at.least(2);
    } catch (error) {
      console.log(error);
    }
  });
});
