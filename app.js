const express = require("express")
const app = express()


app.use(express.static('public'))

app.listen(3002,()=>{
    console.log("Listening on port 3002")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/product-cart.html')
})
app.get('/sign-in',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-in.html');
})

app.get('/sign-up',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-up.html');
})

app.get('/detail',(req,res)=>{
    res.sendFile(__dirname + '/views/detail.html');
})