const conexion = require("../DB/conexionDB");

//const libroSchema = conexion.Schema(array_estruct_tablaDB,array_config)
const libroSchema = conexion.Schema({
    titulo: String,
    autor: String,
    genero: String,
    referencias: [{
        autor: String,
        anio: String,
        editorial: String
    }]
}, {
    collection: "Libros",
    versionKey: false
});

//const personaDAO = conexion.model(nombre_coleccion,esquema);
const libroDAO = conexion.model("Libros", libroSchema);

module.exports = libroDAO;