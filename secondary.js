// console.log('GLOBAL', global.bus);
global.bus.on('myevent', (e) => {
    console.log('ON: myevent', e);
});

bus.fireEvent('myevent', __filename);
