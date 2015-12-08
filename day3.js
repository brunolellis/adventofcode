"use strict";

const input = require('fs').readFileSync('input/3', 'utf8');

function _createPositions(suppliers) {
	let positions = [];
    for (let i = 0; i < suppliers; i++) {
        positions[i] = {
            x: 0,
            y: 0
        };
    }
    return positions;
}

function calcHouses(moves, suppliers) {
	let santaTurn = true;
    let positions = _createPositions(suppliers);
    let houses = {
        '0:0': 1
    };
    
    for (let move of moves) {
		let whoToMove = santaTurn ? 0 : 1;
		moveSupplier(positions[whoToMove], move, houses);
    	if (suppliers > 1) santaTurn = !santaTurn;
    }
    return Object.keys(houses).length;
}

function moveSupplier(position, move, houses) {
    if (move == '^') {
    	position.y++;
    } else if (move == '>') {
    	position.x++;
    } else if (move == 'v') {
    	position.y--;
    } else {
    	position.x--;
    }
    _deliverToHouse(position, houses);
}

function _deliverToHouse(position, houses) {
	let index = position.x + ':' + position.y;
    houses[index] ? houses[index]++ : houses[index] = 1;
}

console.log("alone santa: " + calcHouses(input, 1));
console.log("robo&&santa: " + calcHouses(input, 2));