const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
usuario: {type : String, required : true, max: 100},
pass: {type : String, required : true, max: 130},
});

module.exports = mongoose.model("usuarios", UsuariosSchema);