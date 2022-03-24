const { EventEmitter } = require('events');

class Bus extends EventEmitter {
    constructor() {
        super(...arguments);
    }
    fireEvent(event, ...args) {
        console.log('FIRE',event, ...args);
        this.emit(event, ...args);
    }
}

global.bus = new Bus();