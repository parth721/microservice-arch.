const express = require("express"); //import express
const app = express(); // create an instance of express
// load mongoose ODM
const mongoose = require('mongoose');

//connect with DB 
mongoose.connect('mongodb+srv://ghoshparth630:test1234@cluster0.sa0slqr.mongodb.net/?retryWrites=true&w=majority');


app.listen(4545, () => {   //open express server
    console.log(" Our server is running books service..")
})

//lets add CURD operations
app.get('/', (req, res) => {
    res.send("This is our main end point...");
})