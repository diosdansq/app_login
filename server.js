//-1 Invocamos a express
const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')


const server = express();


//-2 Seteamos urlencoded para procesar los datos desde formulario
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

//-3 Invocamos a dotenv y seteamos la variables del entorno
dotenv.config({ path: './env/.env' })

//-4 Seteamos la carpeta public para archivos estaticos.
server.use(express.static('public'))
server.use(express.static(__dirname + 'public'))

//5- seteamos en Motor de plantillas
server.set('view engine', 'ejs')

//-6 para poder trabajar con las cookies
server.use(cookieParser())

//-7 Llamar al router
server.use('/', require('./routes/router'))

//8- Para eliminar el cache y que no se pueda volver con el boton de back luego de que hacemos un logout
server.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
})

server.listen(3000, (req, res) => {
    console.log('Servidor corriendo en el Puerto >>> 3000');
})