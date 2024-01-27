'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config()

const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());
app.use(express.json()); // parses stringified objects (?)

app.get('/', (req, res)=>{
    console.log(process.env.ENVIRONMENT)
    res.send("hello express");
});

const db = []
app.post('/comments',(req,res)=>{
    db.push(req.body)
    res.send(db)
})

app.post('/four', (req, res)=>{
    res.status(404).send({info:"not found :( "}) // send an object (in client need to parse (?))
})

app.get('/five', (req, res)=>{
    res.send("string, not object")  // sends an object, (in client doesnt need to do JSON.parse)
})

app.listen(PORT, HOST, ()=>{
    console.log(`running on http://${HOST}:${PORT}`);
});
