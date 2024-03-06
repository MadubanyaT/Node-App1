//Creating a module
let url = 'http://test.com'; //private

function log(message){
    //the message that will be logged
    console.log(message)
}

//making the function accessable from this module(public)
//module.exports.logs = log; //for multiple objects
module.exports = log; //used for single object


//making the variable accessable from this module
//module.exports.TestUrl = url;
