const fs = require("fs");


//sync..
// fs.writeFileSync('./text.txt','hey! there')

//Async
// fs.writeFile('./text.txt',"hello world",(err)=>(console.log(err)))

// const result = fs.readFileSync('./text.txt', "utf-8")
// console.log(result)

// fs.readFile('./text.txt','utf-8',(err,result)=>{
//     err?console.log(err):console.log(result);
// })

fs.appendFileSync('./text.txt', `${new Date().getDate().toLocaleString()} \n`);


