const express = require("express");
const methodOverride = require ('method-override');
const createError = require('http-errors');
const app = express() //Requerimos modulo de express para levantar nuestro servidor
const path = require ('path');
const morgan = require ('morgan');
const cookieParser = require('cookie-parser')
const indexRouter = require('./src/routes/indexRouter')
const productRouter = require('./src/routes/productsRouter')
const pcRouter = require('./src/routes/productCartRouter')
const userRouter = require('./src/routes/userRouter')




app.set ("view engine", "ejs") ; //Establecimos como template engine ejs
app.set('views', path.join(__dirname, '/src/views'));

app.use(cookieParser())
app.use(methodOverride('_method'));// Requerimos el overRide para manipular los metodos PUT-DELETE
app.use(express.urlencoded({ extended: false })); //Sirve como parseo de peticiones HTTP y facilita la forma en la que accedemos a una peticion de la misma
app.use (express.json()); //para capturar informacion
app.use(express.static('public'))//Establecemos como carpeta estatica
app.use (morgan('dev')) ;




app.listen(3002,()=>{
    console.log("Listening on port 3002")
})


app.use('/',indexRouter)
app.use('/products',productRouter)
app.use('/product-cart',pcRouter)
app.use('/user',userRouter)


app.use((req, res, next) => next(createError(404)));