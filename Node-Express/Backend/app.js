//Vearsion-1 : basic node

// -------Task 1 print on console----------------
// import dotenv from 'dotenv'
// dotenv.config()
// console.log(`Your URI is : ${process.env.MONGODB_URI}`)


//----------Task 2 print on console using export import from other files-----------
// import greet from './greet.js'
// let name = "mandy"
// let Name = "Mandy";
// greet(Name);
// greet(name);

//-------------Task 3 use of setTimeout and setInterval----------
// import greet from './greet.js'
// let Name = "Mandy"
// setTimeout(()=>{greet(Name)},2000)
// setInterval(()=>{
//     greet(Name);
// },1000)

//Version-2 :Node FS module

// Path module

// import path from 'path';
// import { fileURLToPath } from 'url';

// Recreate __filename and __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log("__dirname:", __dirname);
// console.log("__filename:", __filename);

// const filePath = path.join(__dirname, "someThing.txt");
// console.log("Joined path:", filePath);

// console.log(`Absolute Path : ${path.resolve('someThing.txt')}`)
// let fullPath = path.join('Node-Express','Frontend','something.txt')
// console.log(fullPath)
// let resolvedPath = path.resolve('folder', 'file.txt');
// console.log(resolvedPath);



// import fs from 'fs/promises'

// fs.writeFile('someThing.txt', "Hello World !" , (err)=>{
//     if (err) throw err
//     console.log("File Written")
// })
// fs.readFile("someThing.txt", 'utf8',(err,data)=>{
//         if(err){
//             console.error(err)
//             return;
//         }
//         console.log(data)
// })
// fs.appendFile('someThing.txt','\nEntered New Line !',(err)=>{
//     if (err) throw err;
//     console.log("Appended In file")
// })
// fs.appendFile('someThing.txt','\nEntered New Line !',(err)=>{
//     if (err) throw err;
//     console.log("Appended In file")
// })


//For do that in order 


// fs.writeFile('someThing.txt', "Hello World !" , (err)=>{
//     if (err) throw err;
//     console.log("File Written");

//     fs.readFile("someThing.txt", 'utf8',(err,data)=>{
//         if(err) throw err;
//         console.log(data);

//         fs.appendFile('someThing.txt','\nEntered New Line !',(err)=>{
//             if (err) throw err;
//             console.log("Appended 1");

//             fs.appendFile('someThing.txt','\nEntered New Line !',(err)=>{
//                 if (err) throw err;
//                 console.log("Appended 2");
//             });
//         });
//     });
// });


// Async vs sync functions Promises and async/await



// async function run() {
//     await fs.writeFile('someThing.txt', "Hello World !");
//     console.log("File Written");

//     let data = await fs.readFile("someThing.txt", "utf8");
//     console.log(data);

//     await fs.appendFile('someThing.txt', '\nEntered New Line !');
//     console.log("Appended 1");

//     await fs.appendFile('someThing.txt', '\nEntered New Line !');
//     console.log("Appended 2");
// }

// run();
// console.log('I m Superior')





// System-level Node usage

// import os from 'os';

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.platform());
// console.log(os.homedir());


// Version 3 
//Express Server
// import express from 'express'
// const app = express();

// //Middle Ware
// app.use(express.json());

// app.get("/hello",(req,res)=>{
//     const Name = req.query.name
//     res.send(`Hello !  ${Name}`);
// });
// app.get("/home",(req,res)=>{
//     res.send("Welcome to home");
// });
// app.get("/client",(req,res)=>{
//     res.send("Welcome  to  Client Route")
// })
// app.post("/data",(req,res)=>{
//     res.json({received: req.body});
// });

// app.use((req,res,next)=>{
//     console.log(req.method,req.path)
//     next();
// });


// app.listen(5000,()=>{
//     console.log("Your sever is running on http://localhost:5000")
// });

import express from 'express';
const app = express();
const PORT = 5000;

// Middleware to read JSON
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Route 1 — GET /
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// Route 2 — GET /about
// app.get("/about", (req, res) => {
//   res.json({ message: "This is the about route" });
// });

// Route 3 — POST /data
// app.post("/data", (req, res) => {
//   res.status(200).json({ received: req.body });
// });

// Query Parameter Route
// app.get("/hello", (req, res) => {
//   const name = req.query.name || "Guest";
//   res.send(`Hello, ${name}`);
// });


//params
// app.get('/:id',(req,res)=>{
//     const usrId = req.params.id;
//     res.send(`User Id is ${usrId}`)
// })
// app.get("/test/:id", (req, res) => {
//     res.send("ID is " + req.params.id);
//   });
  

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import usersRoutes from './routes/usersRoutes.js'

app.use('/',usersRoutes);


