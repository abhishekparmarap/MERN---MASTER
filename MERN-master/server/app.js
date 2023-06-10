
const mongoose = require(`mongoose`);
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
// now link the router files
app.use(require('./router/auth'));

const User = require('./model/user_schema');

const PORT = process.env.PORT;


//app.get('/aboutme',middleware,(req,res)=>{
 //   res.send(`Hello world from about page`);
//});
//app.get('/contact',(req,res)=>{
  //  res.send(`Hello world from contact page`);
//});
app.get('/login',(req,res)=>{
    res.send(`Hello world from the signin page`);
});
app.get('/signup',(req,res)=>{
    res.send(`Hello world from the signup page`);
});
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})