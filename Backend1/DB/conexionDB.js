const mongoose = require("mongoose");

//const uri = "direccion_de_la_db"
const uri = "mongodb+srv://luisglDB:The.yankee.480@clusterprueba1.ctixc.mongodb.net/pruebaDB?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => console.log("Conectado a Mongo"))
    .catch((e) => console.log("Fallo en la conexión: " + e));

module.exports = mongoose;