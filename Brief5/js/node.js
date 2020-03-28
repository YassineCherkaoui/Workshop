//node js
var http=require('http');
var fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile('../index.html', (err, data) => {
        if (err) {
            resp.write(err.message)
        } else {
            resp.write(data);
        }
        resp.end();
    });
}).listen(1230);