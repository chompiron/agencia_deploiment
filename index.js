import express from 'express';
import router from './routs/index.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env'})
const app = express();


import db from './config/db.js';
db.sync().then(() => console.log('DB Conectada')).catch((error) => {console.log(error)});


// Iniciar ruta


//Habilitar pug
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req , res, next) => {

    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombresitio = 'Agencia Viajes'
    


    return next();
})


//Agregar bodyParser para leer datos del formulario
app.use(express.urlencoded({extended: true}));






//Definir la carpeta publica
app.use(express.static('public'));

//Agregar Router
app.use('/', router);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;
app.listen(port, host, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
})









