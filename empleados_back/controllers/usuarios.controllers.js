const Usuario = require('../models/usuarios.models');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

 exports.login = function(req, res, next) {

    let hashedPass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne( { usuario: req.body.usuario, pass: hashedPass  }, function(error, usuario) {
     let response = {
         token: null 
     }
     if(usuario !== null){
         response.token = jwt.sign({
            id: usuario._id,
            usuario: usuario.usuario
         }, "1234", { expiresIn: "12h"} )
     }

     res.json(response);


    })
}