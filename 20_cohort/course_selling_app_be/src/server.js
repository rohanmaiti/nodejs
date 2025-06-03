const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

app.listen(4000,(err)=>{
    err ? console.log(err.message) : console.log('server started at'+'PORT');
})

app.post('/user/signup',(req,res)=>{
    res.json({
        message:"signup route"
    })
})

app.post('/user/singin',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
app.get('/user/purchases',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
app.post('/course/purchases',(req,res)=>{
    res.json({
        message:"signup route"
    })
})

app.post('/courses ',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
