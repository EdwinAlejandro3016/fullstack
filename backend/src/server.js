const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//cors
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//Middlewares
app.use(express.json());

// Database setup 
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.yzk7a.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(console.log("database connected"))
.catch(e=> console.error(e))

// Routes setup
app.get('/',(req,res)=>{
    res.send('HELLO FULLSTACK')
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})