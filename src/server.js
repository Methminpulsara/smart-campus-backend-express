const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')

connectDB()

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("Hello World");
});


//Routse


//Server Start 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));
