const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/') {
        res.write('Testing now');
        res.end();
    }
});


//port
server.listen(4000);

console.log('Listening on port 4000');
