const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: 3307,
    multipleStatements: true
})

conexion.connect((error) => {
    if (error) {
        console.error('Error de conexion: ' + error);
        return
    }
    console.log('Conexion exitosa a DB crud')
})

module.exports = conexion;