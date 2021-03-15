const { response } = require("express");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

const auth = (req , res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "1234")            
        //request.usuario = decoded              
        next()        
    } catch (error) {
     res.status(401)   
     res.json({code: 401, msg:"No puede acceder"})
     
    }
   
}

module.exports = auth