const http = require("node:http");

const server = http.createServer(function (require, res){
    res.end("Hello World");
});
server.listen(7777);