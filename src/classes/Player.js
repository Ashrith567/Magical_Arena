const Dice = require('./Dice');

class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attackPower = attack;
        this.attackDice = new Dice(6);
        this.defenceDice = new Dice(6);
    }

    isAlive() {
        return this.health > 0;
    }

    attack() {
        const diceValue = this.attackDice.roll();
        const attackingDamage = this.attackPower * diceValue;
        return { diceValue, attackingDamage };
    }

    defend() {
        const diceValue = this.defenceDice.roll();
        const defencePower = this.strength * diceValue;
        return { diceValue, defencePower };
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Player;
