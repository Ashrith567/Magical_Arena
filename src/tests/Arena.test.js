const { addTest, runTests, assert } = require('./TestUtil.test');
const Arena = require('../classes/Arena');
const Player = require('../classes/Player');

addTest('Arena should allow Player with lower health to attack first', () => {
    let playerA = new Player('PlayerA', 50, 5, 10);
    let playerB = new Player('PlayerB', 100, 10, 5);
    let arena = new Arena(playerA, playerB);
    assert(arena.currentAttacker === playerA, 'Player A should attack first');
});

addTest('Defender health should reduce by net damage', () => {
    let playerA = new Player('PlayerA', 100, 5, 10);
    let playerB = new Player('PlayerB', 100, 5, 5);
    let arena = new Arena(playerA, playerB);

    const initialHealth = playerB.health;
    const attackRoll = 5;
    const defenseRoll = 2;
    const attackDamage = playerA.attackPower * attackRoll;
    const defensePower = playerB.strength * defenseRoll;
    const expectedHealth = initialHealth - (attackDamage - defensePower);

    playerB.receiveDamage(attackDamage - defensePower);
    assert(playerB.health === expectedHealth, `Player B's health should be ${expectedHealth}`);
});

addTest('Defender should take no damage if defense power is greater than or equal to attack damage', () => {
    let playerA = new Player('PlayerA', 100, 5, 10);
    let playerB = new Player('PlayerB', 100, 20, 5);
    let arena = new Arena(playerA, playerB);

    const initialHealth = playerB.health;
    const attackRoll = 2;
    const defenseRoll = 2;
    const attackDamage = playerA.attackPower * attackRoll;
    const defensePower = playerB.strength * defenseRoll;
    const netDamage = Math.max(attackDamage - defensePower, 0);

    playerB.receiveDamage(netDamage);
    assert(playerB.health === initialHealth, 'Player B should take no damage');
});

runTests();
