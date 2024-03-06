const Eventemitter = require('events'); //class
const emitter = new Eventemitter(); //instance

//register a listener
emitter.on('connection', function(){
    console.log('Connected 1');
});

emitter.on('connection', function(){
    console.log('Connected 2');
});

emitter.emit('connection')

