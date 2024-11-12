class Dice {
    constructor(sides) {
        this.sides = 6;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

module.exports = Dice;