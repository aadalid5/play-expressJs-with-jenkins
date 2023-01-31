'use strict'

const express = require('express');

const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res)=>{
    res.send("hello express");
});

app.listen(PORT, HOST, ()=>{
    console.log(`running on http://${HOST}:${PORT}`);
});
