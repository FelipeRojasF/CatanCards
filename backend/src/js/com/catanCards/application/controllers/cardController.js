const express = require('express')
const cardRouter = express.Router()

cardRouter.post('/create',(req,res)=>{
    res.send("create")
})

cardRouter.get('/read',(req,res)=>{
    res.send("read")
})

cardRouter.put('/update',(req,res)=>{
    res.send("update")
})

cardRouter.delete('/delete',(req,res)=>{
    res.send("delete")
})

module.exports = cardController;