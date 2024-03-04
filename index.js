import Player from "./model/player";

console.log("Welcome to Magical Arena");

import createPromptSync from "prompt-sync";

const prompt = createPromptSync({ sigint: true });

function getUserInput(promptMessage) {
  return prompt(promptMessage);
}
const userInput = getUserInput("Enter something: ");
var strength = Number(getUserInput(`enter the strength of ${userInput}`));
console.log(typeof strength, strength);
while (isNaN(strength) || strength < 0) {
  console.log("the strength should be a postive number");
  strength = getUserInput(`enter the strength of ${userInput}`);
}
console.log("User input:", userInput, strength);
