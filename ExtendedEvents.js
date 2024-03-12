const Eventemitter = require('events');

//Extended Class with the event (makes the Logger Class to have all methods and properties of events)
class Logger extends Eventemitter {
    log(message) {
        console.log(message);

        //raise an event
        this.emit('messageLogged', { message: 'This message is from the Extended class' })
    };
};

module.exports = Logger;