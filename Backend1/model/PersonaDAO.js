const conexion = require("../DB/conexionDB");

//const personaSchema = conexion.Schema(array_estruct_tablaDB,array_config)
const personaSchema = conexion.Schema({
    nombres: String,
    apellidos: String,
    documento: String,
    genero: String,
    correo: String
}, {
    collection: "Personas",
    versionKey: false
});

//const personaDAO = conexion.model(nombre_coleccion,esquema);
const personaDAO = conexion.model("Personas", personaSchema);

module.exports = personaDAO;