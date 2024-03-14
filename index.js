// import {sum,dif} from './lib.js'
// console.log(sum(2,3),dif(4,5));

// const lib=require('./lib.js');
// const express=require('express');

// console.log('hello world express');

// const server=express();
// server.listen(8080);

// const fs=require('fs');
// // const txt=fs.readFileSync('demo.txt','utf-8')

// fs.readFile('demo.txt','utf-8',(err,txt)=>{
//     console.log(txt);
// })
// // console.log(txt);

// console.log(lib.sum(2,3),lib.dif(4,5));

// const http=require('http');
// const fs=require('fs');
// const { log } = require('console');

// const index=fs.readFileSync('index.html','utf-8');
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products=data.products;

// // const data={age:22};
// const server=http.createServer((req,res)=>{

//     if(req.url.startsWith('/product')){
//         const id=req.url.split('/')[2];
//         const product=products.find(p=>p.id===+id);
//         // console.log(prd);
//         res.setHeader('Content-type','text/html');
//             let updateIndex=index.replace('**TITLE**',product.title).replace('**IMG**',product.thumbnail).replace('**DESC**',product.description);
//             res.end(updateIndex);
//             return;
//     }

//     // '/product':
//     //         res.setHeader('Content-type','text/html');
//     //         let updateIndex=index.replace('**TITLE**',product.title).replace('**IMG**',product.thumbnail).replace('**DESC**',product.description);
//     //         res.end(updateIndex);
//     //         break;
//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-type','text/html');
//             res.end(index);
//             break;

//         case '/json':
//             res.setHeader('Content-type','application/json');
//             res.end(JSON.stringify(data));
//             break;

//         default:
//             res.writeHead(404);
//             res.end();

//     }
//     // console.log("server started");
//     // res.setHeader('Content-type','application/json');

//     // res.end(JSON.stringify(data));
//     // res.end(index);
//     // res.end(data);
// })
// server.listen(8080);

const express = require("express");
const path=require("path");
const cors=require('cors');

const Router = require("./Routers/productRouter");
const Router2 = require("./Routers/userRouter");

const server = express();
// server.use(cors());
server.use(express.static(path.resolve(__dirname,'build')));
server.use(express.json());
server.use("/products", Router.productRouter);
server.use("/users", Router2.UserRouter);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

//Db Connection
// getting-started.js
const mongoose = require("mongoose");


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://dipeshd9732:pNlvr59yof8mq7NP@cluster0.5zn5agm.mongodb.net/ecommerce?retryWrites=true&w=majority");
  console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}






// const auth=(req,res,next)=>{
//     console.log(req.query);

//     if(req.query.password==='123'){
//         next();
//     }
//     else{
//         res.sendStatus(401);
//     }

// }
// server.use(auth);

//Model view Controller Architechture

//Create

// server.get('/get',auth,(req,res)=>{
//     // res.status(200).send("<h1>Hello</h1>")
//     // res.sendFile('/Users/HP/OneDrive/Desktop/Full Stack/Node-Js/index.html');
//     // res.json(products);
//     res.send({"type":"GET"});
//     // res.sendStatus(404)
// })

// server.post('/post',(req,res)=>{
//     // res.status(200).send("<h1>Hello</h1>")
//     // res.sendFile('/Users/HP/OneDrive/Desktop/Full Stack/Node-Js/index.html');
//     // res.json(products);
//     res.json({type:"post"});
//     // res.sendStatus(404)
// })

server.listen(8080, () => {
  console.log("Server started");
});
