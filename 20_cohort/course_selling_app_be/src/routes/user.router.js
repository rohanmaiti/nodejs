const router = require('express').Router();

router.post('/user/signup',(req,res)=>{
    res.json({
        message:"signup route"
    })
})

router.post('/user/singin',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
router.get('/user/purchases',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
router.post('/course/purchases',(req,res)=>{
    res.json({
        message:"signup route"
    })
})
router.post('/courses ',(req,res)=>{
    res.json({
        message:"signup route"
    })
})


return router;