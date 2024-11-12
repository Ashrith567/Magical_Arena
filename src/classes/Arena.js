const Player = require('./Player').default;

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
        this.gameWinner = null;
    }

    fight() {
        let attacker, defender;
        if (this.playerA.health <= this.playerB.health) {
            attacker = this.playerA;
            defender = this.playerB;
        } else {
            attacker = this.playerB;
            defender = this.playerA;
        }

        while (attacker.isAlive() && defender.isAlive()) {

            console.log(`\n${attacker.name} attacks ${defender.name}`);

            const attack = attacker.attack();
            const defence = defender.defend();
            let netDamage = parseInt( Math.floor(Math.max(attack.attackingDamage - defence.defencePower, 0)));

            if (attacker.attackPower) {
                console.log(`${attacker.name} rolled a dice value of ${attack.diceValue}. Total Attack Damage: ${attack.attackingDamage}.`);
            }
            if (defender.strength) {
                console.log(`${defender.name} rolled a dice value of ${defence.diceValue}. Total Defense Power: ${defence.defencePower}.`);
            }

            console.log(`${defender.name} takes ${netDamage} damage.`);
            defender.receiveDamage(netDamage);
            console.log(`${defender.name}'s health: ${defender.health}`);

            [attacker, defender] = [defender, attacker];
        }

        this.gameWinner = attacker.isAlive() ? attacker : defender;

        console.log(`\n${this.gameWinner.name} wins the fight with ${this.gameWinner.health} health remaining.`);


    }
}

module.exports = Arena;
