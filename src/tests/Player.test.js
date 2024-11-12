const { addTest, runTests, assert } = require('./TestUtil.test');
const Player = require('../classes/Player');

addTest('Player should be created with correct attributes', () => {
  let player = new Player('PlayerA', 100, 10, 15);
  assert(player.name === 'PlayerA', 'Name should be PlayerA');
  assert(player.health === 100, 'Health should be 100');
  assert(player.strength === 10, 'Strength should be 10');
  assert(player.attackPower === 15, 'Attack power should be 15');
});

addTest('Player should be alive when health is greater than 0', () => {
  let player = new Player('PlayerA', 100, 10, 15);
  assert(player.isAlive() === true, 'Player should be alive');
});

addTest('Player should take damage correctly', () => {
  let player = new Player('PlayerA', 100, 10, 15);
  player.receiveDamage(20);
  assert(player.health === 80, 'Player health should be 80 after taking 20 damage');
});

addTest('Player should be dead when health reaches 0', () => {
  let player = new Player('PlayerA', 100, 10, 15);
  player.receiveDamage(100);
  assert(player.isAlive() === false, 'Player should be dead after receiving 100 damage');
  assert(player.health === 0, 'Player health should be 0 after death');
});

runTests();
