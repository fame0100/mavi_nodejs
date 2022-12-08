const { json } = require('express');
const express = require('express');
const app = express();

//Var de entorno
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

//Motor de plantillas
app.set('view engine', 'ejs');

//Public para Archivos estaticos
app.use(express.static('public'))

//Variables de entorno
dotenv.config({ path: './env/.env' })

//Set de cookies
// app.use(cookieParser)

//Set para para envio de datos del form
app.use(express.urlencoded({ extended: false }));
app.use(express(json));

//Uso router./routes/router
app.use('/', require('./routes/router'));

app.listen(3000, function () {
    console.log('Listen port 3000')
});

/*
app.get('/', (req, res) => {
    res.send('Testing server')
})*/