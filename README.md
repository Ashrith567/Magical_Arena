# Magical Arena Game

## Overview

The **Magical Arena Game** is a battle between two players, where one attacks and the other defends, then they swap turns. This continues until one of them runs out of health. Each player has health, strength, and attack power, which impact their actions and the outcome of each turn. The player with the lower health starts the first attack. During each turn, both players roll a die to determine their attack and defense values based on the result of the roll.

## Project Structure

- **dice.js**: Defines the `Dice` class, which rolls a die with a specified number of sides(6).
- **player.js**: Defines the `Player` class, which represents a player with `health`, `strength`, and `attackPower`. Includes methods for attacking, defending, and receiving damage.
- **arena.js**: Defines the `Arena` class, In which the fight held between two players and swaping roles(attacker as defender and defender as attacker) until any player's health reaches zero.
- **index.js**: The entry point for the game. Here we Creates two players and an arena, then starts the fight.

## How It Works

1. Each player rolls dice to attack or defend.
2. `Attack damage` is calculated as the player’s attack power multiplied by the result of the attack dice roll.
3. `Defense value` is calculated as the player’s strength multiplied by the result of the defense dice roll.
4. The difference between the attack damage and defense value reduces the defender's health by differnce value (There is no reduce in defender's health if attack value is lesser than the defend value).
5. The game continues until one player health reaches to zero and other wins.

## How to run

Make sure you have Node.js installed
To check Node.js installed, run

node -v (This shows node version, if installed)

Run `index.js` file using:

npm run start


Run tests  using:

npm run test