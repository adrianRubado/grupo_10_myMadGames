const express = require("express")
const app = express()

<<<<<<< HEAD
=======

app.use(express.static('public'))

app.listen(3002,()=>{
    console.log("Listening on port 3002")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})
>>>>>>> adrian-dev
