const express = require("express");
const methodOverride = require ('method-override');
const createError = require('http-errors');
const app = express() //Requerimos modulo de express para levantar nuestro servidor
const path = require ('path');
const morgan = require ('morgan');
const indexRouter = require('./src/routes/indexRouter')
const productRouter = require('./src/routes/productsRouter')
const pcRouter = require('./src/routes/productCartRouter')
const signUpRouter = require('./src/routes/signUpRouter')
const signInRouter = require ('./src/routes/sigInRouter')


app.set ("view engine", "ejs") ; //Establecimos como template engine ejs
app.set('views', path.join(__dirname, '/src/views'));

app.use(methodOverride('_method'));// Requerimos el overRide para manipular los metodos PUT-DELETE
app.use(express.urlencoded({ extended: false })); //Sirve como parseo de peticiones HTTP y facilita la forma en la que accedemos a una peticion de la misma
app.use (express.json()); //para capturar informacion
app.use(express.static('public'))//Establecemos como carpeta estatica
app.use (morgan('dev')) ;




app.listen(3002,()=>{
    console.log("Listening on port 3002")
})



/*

<<<<<<< HEAD
app.use('/',(req,res)=>{
    res.render ('index', {titulo:'My Mad'})
})
=======
>>>>>>> main

app.use('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/product-cart.html')
})
app.get('/sign-in',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-in.html');
})

app.get('/sign-up',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-up.html');
})

app.get('/detail',(req,res)=>{
    res.sendFile(__dirname + '/src/views/detail.ejs');
}) */


app.use('/',indexRouter)
app.use('/products',productRouter)
app.use('/product-cart',pcRouter)
app.use('/sign-up',signUpRouter)
app.use('/sign-in',signInRouter)

app.use((req, res, next) => next(createError(404)));