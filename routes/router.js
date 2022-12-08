const express = require('express');
const router = express.Router();


//DB users/ clients
const conexion = require('../database/db');

router.get('/', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/crud', (req, res) => {
    
    conexion.query('SELECT * FROM nodejs', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index',{results: results});
        }
    })
});

//Crear Registros
router.get('/create', (req, res) => {
    res.render('create');
})

//Editar Registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM nodejs WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

//Eliminar Registros
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM nodejs WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/crud');
        }
    })
})

//Guardar Registros
const crud = require('../controllers/crud');
router.post('/save', crud.save);

//Actualizar Registros
router.post('/update', crud.update);


module.exports = router;