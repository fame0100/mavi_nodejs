const conexion = require('../database/db');

exports.save = (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const mlastname = req.body.mlastname;
    const address = req.body.address;
    const email = req.body.email
    //console.log(`${name} - ${email}`);

    conexion.query('INSERT INTO nodejs SET ?', {
        name: name,
        lastname: lastname,
        mlastname: mlastname,
        address: address,
        email: email
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/crud');
        }
    })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const mlastname = req.body.mlastname;
    const address = req.body.address;
    const email = req.body.email

    conexion.query('UPDATE nodejs SET ? WHERE id = ?', [{        
        name: name,
        lastname: lastname,
        mlastname: mlastname,
        address: address,
        email: email,
    }, id ], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/crud');
        }
    })
}