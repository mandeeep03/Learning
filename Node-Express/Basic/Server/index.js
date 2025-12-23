const http  = require('http')
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    log = `${Date.now()} ${req.url} New request Added !\n`
    fs.appendFile('./logs.txt',log,(err,result)=>{
        switch(req.url){
            case '/': res.end("Hello from Home !!!")
            break;
            case '/about':res.end("Hello from About !!!")
            break;
            default:res.end("404 Not Found")
        }
    })
});

myServer.listen(8000,()=>console.log("Server Started !!!"))
