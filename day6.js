"use strict";

const strings = require('fs').readFileSync('input/6', 'utf8');

const Action = {
	ON: 'on',
	OFF: 'off',
	TOGGLE: 'toggle'
};

class LightCommand {
	constructor(line) {
		this.coords = this._parseCoordinates(line);
		this.command = this._parseCommand(line);
	}

	_parseCoordinates(line) {
		return line.match(/\d+/g).map(function(coord) {
        	return Number(coord);
    	});
	}

	_parseCommand(line) {
		return line.includes(Action.ON) ? this._on :
			line.includes(Action.OFF) ? this._off : 
			this._toggle;
	}

	_on() {
		return 1;
	}

	_off() {
		return 0;
	}

	_toggle(value) {
		return 1 - value;
	}

	run() {
		for (let x = this.coords[0]; x <= this.coords[2]; x++) {
			for (let y = this.coords[1]; y <= this.coords[3]; y++) {
				lights[x][y] = this.command(lights[x][y]);
			}

		}
	}
}

function _createLights(size) {
    let lights = new Array(size);
    for (let i = 0; i < size; i++) {
        lights[i] = new Array(size).fill(0);
    }
    return lights;
}

let lights = _createLights(1000);

strings.split('\n').forEach(function(element) {
	new LightCommand(element).run();
});

// join + split converts 2d array to 1d array
console.log('part 1: ' + lights.join(',').split(',').reduce((agg, element) => Number(agg) + Number(element)));