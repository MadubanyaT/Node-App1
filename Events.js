// const Eventemitter = require('events'); //class
// const emitter = new Eventemitter(); //instance

// //register a listener
// emitter.on('connection', function(args){
//     console.log('Connected 1', args.test);
// });

// //without arguments
// //emitter.emit('connection')

// //Adding an event with args
// emitter.emit('connection', {id: 1, test: '123'});


//Activity
// const eventEmitter = require('events');
// const Emitter = new eventEmitter();

// Emitter.on('messageLogged', (args) =>{
//     console.log(args.message);
// });

// Emitter.emit('messageLogged', {message: 'The massage has been logged'});


//Extended Class
const Logger = require('./ExtendedEvents');
const logger = new Logger();

logger.on('messageLogged', (args) =>{
    console.log(args.message);
})

logger.log('This is the log method');


