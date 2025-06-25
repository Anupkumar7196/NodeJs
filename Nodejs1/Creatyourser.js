const http = require('http');
// console.log(http);


const server = http.createServer((req,res)=>{
    // console.log("Started");
    // res.setHeader("Hello", "response");
    // res.end("Hello I am response");
    if(req.url === '/'){
        res.end("Home Page");
    }
    if(req.url === '/about'){
        res.end("About Page");
    }
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})