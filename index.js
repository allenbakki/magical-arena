import createPromptSync from "prompt-sync";
import { _inputPlayers } from "./playerDetails.js";

console.log("Welcome to Magical Arena");

const prompt = createPromptSync({ sigint: true });

function getUserInput(promptMessage) {
  return prompt(promptMessage);
}

//To enter the details of players.

_inputPlayers();

export { getUserInput };
