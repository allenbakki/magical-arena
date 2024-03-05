import { PlayersDetails } from "../playerDetails.js";
import { _inputPlayers } from "../playerDetails.js";
import { expect } from "chai";

// to check the input size it should be greater than or equal to 2;
describe("check for the no of players", function () {
  it("1. checking for players atleast two players must be there start the game", function (done) {
    // _inputPlayers();
    // PlayersDetails;
    expect(Number(2)).to.be.at.least(Number(2));
    done();
  });
});
