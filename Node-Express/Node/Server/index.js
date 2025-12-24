const http  = require('http')
const fs = require('fs');
const url = require('url')

const myServer = http.createServer((req,res)=>{
    log = `${Date.now()} ${req.method} ${req.url} New request Added !\n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile('./logs.txt',log,(err,result)=>{
        switch(myUrl.pathname){
            case '/': res.end("Hello from Home !!!")
            break;
            case '/about':res.end("Hello from About !!!")
            break;
            default:res.end("404 Not Found")
        }
    })
});

myServer.listen(3000,()=>console.log("Server Started !!!"))
