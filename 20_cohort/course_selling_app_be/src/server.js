const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

app.listen(4000,(err)=>{
    err ? console.log(err.message) : console.log('server started at'+'PORT');
})

