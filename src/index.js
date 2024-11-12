const Player = require("./classes/Player");
const Arena = require("./classes/Arena");

let playerA = new Player("PlayerA", 50, 5, 10);
let playerB = new Player("PlayerB", 100, 10, 5);
let value = 3;

console.log("Arena about to start in:");

let intervalReference = setInterval(() => {
    console.log(value, " ");
    value--;
}, 1000);

setTimeout(() => {
    clearInterval(intervalReference);
    console.log("Arena starts now!");
    let arena = new Arena(playerA, playerB);
    arena.fight();
}, 3000); 
