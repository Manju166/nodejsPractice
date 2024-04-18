const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("Started node js")
})

app.listen(3000,()=>{
    console.log("Server has started at 3000")
})
