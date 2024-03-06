//Loading built-in modules
const path = require('path');
const os = require('os');
const fs = require('fs')

//Using the path built in module

let pathObj = path.parse('C:\\Users\\DeviceParticle\\Saved Games\\Practice Node\\Application 1\\CreateModule.js');
console.log(pathObj); //It's returns the object of the path,(root, name, ext, base, etc..)

//Using the OS built-in module
let test1 = os.hostname();
let test2 = os.freemem();
let test = os.machine();
console.log(test);

//filesystem built-in (always use async methods)
fs.readdir('./', function(err, files){
 if (err) console.log('Error', err)
 else console.log('Output:', files)
})

